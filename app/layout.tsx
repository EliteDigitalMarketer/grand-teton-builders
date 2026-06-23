import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const BASE_URL = 'https://grand-teton-builders.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
  icons: {
    icon: '/gtb-favicon.png',
    apple: '/gtb-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Grand Teton Builders',
    title: 'Grand Teton Builders | Luxury Homes in Driggs, Idaho',
    description:
      'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
    images: [
      {
        url: '/gtb-og-image.jpg',
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
    images: ['/gtb-og-image.jpg'],
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
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
          {children}
        </div>

        {/* TEMPORARY: LeadConnector chat widget — remove when replacing with custom solution */}
        <Script
          id="leadconnector-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a38af776eb44d6f32d89c31"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
