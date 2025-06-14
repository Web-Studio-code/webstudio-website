// src/app/api/tawk-webhook/route.ts
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'edge'  // or 'nodejs' if you need traditional Fetch

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function POST(request: Request) {
  // parse JSON body
  const { event, data } = await request.json()
  if (event !== 'visitor.message') {
    return NextResponse.json({ ok: true })
  }

  const visitorMsg = data.text
  const chatId     = data.chat.id
  const widgetId   = process.env.TAWK_WIDGET_ID!
  const token      = process.env.TAWK_API_TOKEN!

  // ask OpenAI
  const chat = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful support assistant.' },
      { role: 'user',   content: visitorMsg },
    ],
  })
  const aiReply = chat.choices[0].message?.content ?? 'Izvini, nisam razumeo pitanje.'

  // send back to Tawk.to
  await fetch(
    `https://api.tawk.to/v1/widgets/${widgetId}/chats/${chatId}/messages`,
    {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${token}`,
      },
      body: JSON.stringify({
        type: 'agent',
        text: aiReply,
      }),
    }
  )

  return NextResponse.json({ ok: true })
}
