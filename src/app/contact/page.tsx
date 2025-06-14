// src/app/contact/page.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'


function generateCaptcha(length = 5) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [inputCaptcha, setInputCaptcha] = useState('')

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputCaptcha !== captcha) {
      alert('Uneseni kod nije ispravan. Pokušajte ponovo.')
      setCaptcha(generateCaptcha())
      setInputCaptcha('')
      return
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
      const data = await res.json()
      console.log('Odgovor sa servera:', data)
      alert('Hvala! Vaša poruka je uspešno poslata.')
    } catch (error) {
      console.error('Greška pri slanju:', error)
      alert('Došlo je do greške. Pokušajte ponovo.')
    }
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setInputCaptcha('')
    setCaptcha(generateCaptcha())
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left panel: contact info */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-900 text-white text-center font-semibold py-4">
              Get In Touch With Us Now!
            </div>
            <div className="p-8 space-y-6 text-gray-800">
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p>+387 63 649 687</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>team@web-studio.info</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Sarajevo, BiH</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p>Mon–Sat: 08:00–17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: contact form */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-900 text-white text-center font-semibold py-4">
              Contact Us
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-8 space-y-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name 
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile 
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email 
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Please type the characters below to verify you are human
                </label>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 px-4 py-2 font-mono tracking-widest rounded">
                    {captcha}
                  </div>
                  <input
                    type="text"
                    value={inputCaptcha}
                    onChange={(e) => setInputCaptcha(e.target.value)}
                    required
                    className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition flex items-center justify-center"
              >
                Submit&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
