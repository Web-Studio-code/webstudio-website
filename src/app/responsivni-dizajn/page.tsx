// src/app/responsivni-dizajn/page.tsx
import Image from 'next/image'

import {
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  AdjustmentsHorizontalIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

export default function ResponsivniDizajnPage() {
  const steps = [
    {
      Icon: DevicePhoneMobileIcon,
      title: 'Mobile-First Pristup',
      desc: 'Projektujemo najpre za mobilne uređaje, pa skaliramo na veće ekrane, kako bi performanse i UX bili optimalni.',
    },
    {
      Icon: ArrowsRightLeftIcon,
      title: 'Fluidne mreže',
      desc: 'Grid sistemi i fleksibilni elementi se prilagođavaju visini i širini ekrana bez horizontalnog skrolovanja.',
    },
    {
      Icon: AdjustmentsHorizontalIcon,
      title: 'Precizni breakpoints',
      desc: 'Definišemo tačke prekida za desktop, tablet i mobilni, kako bi sadržaj uvek izgledao usklađeno.',
    },
    {
      Icon: CodeBracketIcon,
      title: 'Testiranje uživo',
      desc: 'Sajt testiramo na stvarnim uređajima i emulatorima (iOS, Android, tablet), uz debug i optimizaciju.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero sekcija */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/responsive-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Responsivni dizajn
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Besprekorno iskustvo na svim uređajima — od telefona do desktopa.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Šta je responsivni dizajn?</h2>
          <p className="text-gray-700 mb-6">
            Responsivni dizajn je pristup web razvoju koji omogućava da se sadržaj prilagodi različitim veličinama ekrana
            i rezolucijama. Korišćenjem fluidnih mreža, fleksibilnih slika i media queries, gradimo sajtove koji pružaju
            optimalan UX na svim uređajima.
          </p>
       
        </div>
        <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/responsive-overview.jpg"
            alt="Prikaz responsivnog dizajna"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naš proces u 4 koraka
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Česta pitanja</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Kako testirate responsivnost?
            </summary>
            <p className="mt-2 text-gray-700">
              Koristimo Chrome DevTools, realne uređaje i servis poput BrowserStack-a za sve glavne rezolucije.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Da li morate raditi poseban dizajn za svaki uređaj?
            </summary>
            <p className="mt-2 text-gray-700">
              Ne — dizajniramo fluidne komponente koje se prilagođavaju, a media queries dodajemo samo tamo gde je potrebno.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  )
}
