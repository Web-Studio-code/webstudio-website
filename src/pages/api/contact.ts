// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Sva polja su obavezna.' })
  }

  // Učitaj env varijable i loguj ih (samo za debug, posle ukloni)
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  console.log({ host, port, user }) // ne loguj pass u produkciji!

  // Napravi transporter
  const transporter = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  })

  try {
    // Provjeri povezivost na SMTP
    await transporter.verify()
    console.log('✔️ SMTP server je dostupan')
  } catch (err) {
    console.error('❌ SMTP verify failed:', err)
    return res.status(500).json({ error: 'Problem sa SMTP konekcijom' })
  }

  try {
    // Pošalji mail
    await transporter.sendMail({
      from: `"WebStudio Kontakt" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL, 
      subject: `Nova poruka od ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\n${message}`,
    })
    console.log('✉️ Mejl poslat uspešno')
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('❌ Greška pri slanju mejla:', err)
    return res.status(500).json({ error: 'Slanje mejla nije uspjelo' })
  }
}
