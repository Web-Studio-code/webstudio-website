// src/app/seo-optimizacija/page.tsx
import Image from 'next/image'

import {
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

export default function SEOOptimizacijaPage() {
  const steps = [
    {
      Icon: DocumentTextIcon,
      title: 'Analiza ključnih reči',
      desc: 'Istražujemo relevantne termine i fraze koje vaša publika pretražuje, rangiramo po konkurenciji i obimu pretrage.',
    },
    {
      Icon: ArrowPathIcon,
      title: 'On-page optimizacija',
      desc: 'Podešavamo naslove, meta opise, alt tekstove, strukturu URL-ova i sadržaj kako bi pretraživači bolje razumeli vaše stranice.',
    },
    {
      Icon: Cog6ToothIcon,
      title: 'Tehnički SEO',
      desc: 'Brzina sajta, sitemap, robots.txt, schema markup i prilagođavanje za mobilne uređaje – sve radi na vaš rang.',
    },
    {
      Icon: ChartBarIcon,
      title: 'Praćenje & izveštaji',
      desc: 'Postavljamo Google Analytics i Search Console, redovno šaljemo izveštaje o pozicijama, saobraćaju i predlozima za dalji rast.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/seo-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/75" />
        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            SEO Optimizacija
          </h1>
          <p className="mt-2 text-lg text-blue-100">
            Pretvorite posetioce u klijente pomoću vrhunske optimizacije za pretraživače.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Šta obuhvata naša usluga?</h2>
          <p className="text-gray-700 mb-6">
            Naš proces SEO optimizacije je sveobuhvatan: od dubinske analize ključnih reči i konkurencije,
            preko tehničkih i sadržajnih poboljšanja, do praćenja rezultata u realnom vremenu. Rezultat
            je bolji organski rang, povećan saobraćaj i veća prodaja.
          </p>
         
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/seo-overview.jpg"
            alt="Prikaz SEO optimizacije"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Naš proces u 4 koraka</h2>
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
              Koliko vremena je potrebno za prve rezultate?
            </summary>
            <p className="mt-2 text-gray-700">
              Obično vidimo poboljšanja u roku od 3-6 meseci, u zavisnosti od konkurentnosti ključnih reči
              i trenutnog stanja sajta.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Da li pružate kontinuiranu podršku?
            </summary>
            <p className="mt-2 text-gray-700">
              Da – nudimo mesečne pakete održavanja i praćenja, sa izveštajima i predlozima za dalje optimizacije.
            </p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">
              Koja je cena SEO usluge?
            </summary>
            <p className="mt-2 text-gray-700">
              Cena zavisi od obima posla i izabranog paketa. Kontaktirajte nas da dogovorimo detalje i
              prilagodimo ponudu vašim potrebama.
            </p>
          </details>
        </div>
      </section>

  
    </div>
  )
}
