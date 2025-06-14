// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// no `export const runtime = 'edge'` here → uses Node.js runtime

// pull SMTP creds from env
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
  process.env

// create transporter once (Node runtime supports `stream`)
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  auth: { user: SMTP_USER, pass: SMTP_PASS },
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Sva polja su obavezna.' },
        { status: 400 }
      )
    }

    // verify connection (will throw if creds bad)
    await transporter.verify()

    // send email
    await transporter.sendMail({
      from: `"WebStudio Kontakt" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL!,
      subject: `Nova poruka od ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
