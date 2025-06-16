// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ne eksplicitiramo `runtime = 'edge'` → koristi Node.js runtime

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
  process.env

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

    await transporter.verify()

    await transporter.sendMail({
      from: `"Sajtko Kontakt" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL!,
      subject: `Nova poruka od ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    console.error('Contact API error:', err)
    const errorMessage =
      err instanceof Error ? err.message : 'Nezvēzdan interno greška'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
