// src/config/seoConfig.ts
import { DefaultSeoProps } from 'next-seo'

export const seoConfig: DefaultSeoProps = {
  title: 'WebStudio',
  description: 'Profesionalna izrada web sajtova po meri',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://your-domain.com/',
    site_name: 'WebStudio',
    title: 'WebStudio',
    description: 'Profesionalna izrada web sajtova po meri',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}