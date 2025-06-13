// src/components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-white">
          WebStudio
        </Link>
        <nav className="space-x-6">
          <Link
            href="/"
            className="text-white hover:text-gray-200 transition"
          >
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
