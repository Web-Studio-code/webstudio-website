// src/app/layout.tsx
import './globals.css'
import Script from 'next/script'
import Header from '../components/Header'
import CookieBanner from '../components/CookieBanner'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'WebStudio – Izrada web sajtova',
  description: 'Profesionalna izrada web sajtova po meri',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://web-studio.info',
    siteName: 'WebStudio',
    images: [
      {
        url: 'https://web-studio.info/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebStudio – Izrada web sajtova',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      {/* Analytics: Plausible samo u produkciji */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          src="https://plausible.io/js/plausible.js"
          data-domain="web-studio.info"
          strategy="afterInteractive"
        />
      )}

      <body className="font-sans antialiased text-gray-800 bg-gray-50">
        {/* Cookie Banner */}
        <CookieBanner />

        {/* Tawk.to live chat */}
        <Script
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/684ae19bb0dac5190a720594/1iti82iiu';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        {/* Globalni Header */}
        <Header />

        {/* Pomera sadržaj ispod fiksnog headera */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WebStudio. Sva prava zadržana.
          </div>
        </footer>
      </body>
    </html>
  )
}
