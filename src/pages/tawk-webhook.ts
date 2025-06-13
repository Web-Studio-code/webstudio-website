// src/pages/api/tawk-webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { event, data } = req.body

  // Obradjujemo samo poseteoca koji piše poruku
  if (event !== 'visitor.message') {
    return res.status(200).json({ ok: true })
  }

  const visitorMsg = data.text
  const chatId     = data.chat.id
  const widgetId   = process.env.TAWK_WIDGET_ID!

  // Pošalji posetioca OpenAI-ju
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a helpful support assistant.' },
      { role: 'user',   content: visitorMsg },
    ],
  })

  let aiReply = response.choices[0].message?.content ?? 'Izvinite, mogu li pomoći s nečim drugim?'

  // Pošalji AI odgovor nazad u Tawk.to
  await fetch(
    `https://api.tawk.to/v1/widgets/${widgetId}/chats/${chatId}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        Authorization:   `Bearer ${process.env.TAWK_API_TOKEN}`,
      },
      body: JSON.stringify({
        type: 'agent',
        text: aiReply,
      }),
    }
  )

  return res.status(200).json({ ok: true })
}
