// src/app/page.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const features = [
    {
      title: 'SEO optimizacija',
      Icon: GlobeAltIcon,
      desc: 'Vaš sajt će biti vidljiv na Google pretragama od prvog dana.',
      href: '/seo-optimizacija',
    },
    {
      title: 'Responsivni dizajn',
      Icon: DevicePhoneMobileIcon,
      desc: 'Odličan izgled na svim uređajima – desktop, tablet i mobilni.',
      href: '/responsivni-dizajn',
    },
    {
      title: 'Brza isporuka',
      Icon: BoltIcon,
      desc: 'Gotov i deployan sajt za nekoliko dana, uz podršku i održavanje.',
      href: '/brza-isporuka',
    },
  ]

  const testimonials = [
    {
      name: 'Marko Marković',
      role: 'CEO, Acme Corp',
      quote:
        'WebStudio je transformisao naš online nastup – konverzije su porasle za 80 %!',
      avatar: '/avatars/marko.jpg',
    },
    {
      name: 'Jelena Petrović',
      role: 'Marketing Manager, Beta d.o.o.',
      quote:
        'Odlična saradnja i vrhunski dizajn. Njihova podrška je za svaku pohvalu.',
      avatar: '/avatars/jelena.jpg',
    },
    {
      name: 'Ivan Ilić',
      role: 'Founder, StartUpX',
      quote:
        'Brzo, profesionalno i precizno – preporučujem svakome ko želi ozbiljan sajt.',
      avatar: '/avatars/ivan.jpg',
    },
  ]

  return (
    <>
      {/* HERO sekcija */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Moderni web sajtovi za vaše poslovanje
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Brzo, responzivno i SEO-optimizovano.
          </p>
          <Link
            href="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Pogledaj usluge
          </Link>
        </div>
      </section>

      {/* ZAŠTO IZABRATI NAS? */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-gray-800">
          <h2 className="text-4xl font-bold text-center mb-12">
            Zašto izabrati nas?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, Icon, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="block bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENZIJE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Šta kažu naši klijenti
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ name, role, quote, avatar }) => (
              <div
                key={name}
                className="flex flex-col justify-between bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <blockquote className="text-gray-800 italic mb-6">
                  <ChatBubbleLeftEllipsisIcon className="w-6 h-6 inline-block text-blue-600 mr-2 align-top" />
                  {quote}
                </blockquote>
                <div className="flex items-center mt-4">
                  <Image
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-600">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Spremni za novi sajt?
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Kontaktirajte nas danas
          </Link>
        </div>
      </section>
    </>
  )
}
