// src/config/seoConfig.ts
import { DefaultSeoProps } from 'next-seo'

export const seoConfig: DefaultSeoProps = {
  title: 'Sajtko',
  description: 'Profesionalna izrada web sajtova po meri',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://your-domain.com/',
    site_name: 'Sajtko',
    title: 'Sajtko',
    description: 'Profesionalna izrada web sajtova po meri',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}