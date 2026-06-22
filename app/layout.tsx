import type { Metadata } from 'next'
import { GFS_Didot, Montserrat } from 'next/font/google'
import './globals.css'

const gfsDidot = GFS_Didot({
  weight: '400',
  subsets: ['greek', 'latin'],
  variable: '--font-gfs-didot',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://grand-teton-builders.vercel.app'),
  title: {
    default: 'Grand Teton Builders | Luxury Homes in Driggs, Idaho',
    template: '%s | Grand Teton Builders',
  },
  description:
    'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
  keywords: [
    'luxury home builder Driggs Idaho',
    'custom home builder Teton Valley',
    'new construction homes Driggs Idaho',
    'mountain home builder Idaho',
    'spec homes Driggs Idaho',
    'luxury mountain homes Teton Valley',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grand-teton-builders.vercel.app',
    siteName: 'Grand Teton Builders',
    title: 'Grand Teton Builders | Luxury Homes in Driggs, Idaho',
    description:
      'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grand Teton Builders — Luxury Mountain Homes in Driggs, Idaho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Teton Builders | Luxury Homes in Driggs, Idaho',
    description:
      'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://grand-teton-builders.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gfsDidot.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
