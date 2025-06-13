// src/app/brza-isporuka/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDaysIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline'

export default function BrzaIsporukaPage() {
  const steps = [
    {
      Icon: CalendarDaysIcon,
      title: 'Planiranje projekta',
      desc: 'Definišemo zahteve, funkcionalnosti i rokove kako bismo imali jasan plan isporuke.',
    },
    {
      Icon: CodeBracketIcon,
      title: 'Razvoj i testiranje',
      desc: 'Brzo implementiramo i rigorozno testiramo, osiguravajući stabilnost i funkcionalnost.',
    },
    {
      Icon: ArrowPathIcon,
      title: 'CI/CD & deploy',
      desc: 'Automatizujemo izgradnju, testove i deploy na staging/produkciju za trenutne isporuke.',
    },
    {
      Icon: ChatBubbleOvalLeftIcon,
      title: 'Monitoring & podrška',
      desc: 'Pratimo performanse, rešavamo eventualne probleme i pružamo podršku nakon lansiranja.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero sekcija */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/delivery-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Brza isporuka projekata
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Vaše zahteve pretvaramo u gotove sajtove u rekordnom roku.
          </p>
        </div>
      </section>

      {/* Uvodna sekcija */}
      <section className="max-w-6xl mx-auto px-10 py-16 grid gap-1 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Kako radimo brzo?</h2>
          <p className="text-gray-700 mb-6">
            Naš proces fokusiran je na agilnost: planiranje, paralelni razvoj,
            automatski deploy i stalna podrška. Zahvaljujući modernim alatima i
            agilnoj metodologiji, možemo isporučiti vaš sajt za nekoliko dana.
          </p>
          
        </div>
        
      </section>

      {/* Proces u koracima */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naš proces u 4 koraka
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sekcija */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Česta pitanja</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Koliko brzo možete isporučiti sajt?
            </summary>
            <p className="mt-2 text-gray-700">
              Uglavnom u roku od 3–5 radnih dana, zavisno od složenosti zahteva i sadržaja.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Da li je kvalitet pogođen brzinom?
            </summary>
            <p className="mt-2 text-gray-700">
              Ne – pratimo standarde dobrih praksi, automatski testiramo i koristimo CI/CD,
              tako da brzina ne umanjuje kvalitet.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Koje tehnologije koristite?
            </summary>
            <p className="mt-2 text-gray-700">
              Next.js, React, TailwindCSS, Node.js, CI/CD alati (GitHub Actions, Vercel).
            </p>
          </details>
        </div>
      </section>

      
    </div>
  )
}
