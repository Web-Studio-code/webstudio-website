// src/app/services/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const pageTypes = [
  {
    title: 'Korporativne stranice',
    desc: 'Profesionalni sajtovi za predstavljanje vaše firme, timski sekcije, blog i kontakt formular.',
    img: '/services/corporate.jpg',
  },
  {
    title: 'E-commerce platforme',
    desc: 'Online prodavnice sa korpom, plaćanjem i upravljanjem proizvodima.',
    img: '/services/ecommerce.jpg',
  },
  {
    title: 'Landing stranice',
    desc: 'Jednostavne, konverzijske stranice za promociju proizvoda ili kampanja.',
    img: '/services/landing.jpg',
  },
  {
    title: 'Blogovi i magazini',
    desc: 'Modularni sistemi za objavljivanje članaka, novosti i tutorijala.',
    img: '/services/blog.jpg',
  },
  {
    title: 'Portfolia',
    desc: 'Atraktivne galerije za demonstraciju radova, projekata i referenci.',
    img: '/services/portfolio.jpg',
  },
  {
    title: 'Web aplikacije',
    desc: 'Interaktivne SPA ili SSR aplikacije sa autentifikacijom i bazom podataka.',
    img: '/services/webapp.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Services Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Šta sve nudimo
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pageTypes.map(({ title, desc, img }) => (
            <div
              key={title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{desc}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Zatražite ponudu
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for other services */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg text-gray-700">
            Potrebna vam je drugačija usluga?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 font-medium px-6 py-3 rounded-full border border-blue-900 hover:bg-blue-50 transition"
          >
            Kontaktirajte nas za prilagođeno rešenje
          </Link>
        </div>
      </main>
    </div>
  )
}
