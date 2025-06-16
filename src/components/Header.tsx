// src/components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center">
          {/* Ubaci svoj logo u public/logo.svg */}
         
          {/* Promenjen font i spacing */}
          <span
            className="ml-3 text-3xl font-bold text-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Sajtko
          </span>
        </Link>

        {/* Navigacija */}
        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-gray-200 transition">
            Početna
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-200 transition"
          >
            Usluge
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-200 transition"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  )
}
