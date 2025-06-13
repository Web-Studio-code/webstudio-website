// src/components/CookieBanner.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent !== 'true' && consent !== 'false') {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('cookieConsent', 'false')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="
        fixed top-[64px] left-0 right-0 
        bg-blue-900 text-white 
        px-6 py-4 
        flex justify-between items-center 
        z-50 shadow-lg
      "
    >
      <div>
        Ovaj sajt koristi kolačiće za poboljšanje iskustva.{' '}
        {/* Ovde više ne koristimo <a> unutar Link */}
        <Link
          href="/cookie-policy"
          className="underline hover:text-gray-300"
        >
          Više informacija
        </Link>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={decline}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
        >
          Odbijam
        </button>
        <button
          onClick={accept}
          className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded"
        >
          Prihvatam
        </button>
      </div>
    </div>
  )
}
