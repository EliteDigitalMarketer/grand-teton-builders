import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Mountain Home Building Process',
  description: 'Learn about Grand Teton Builders\' step-by-step mountain home building process in Driggs, Idaho and Teton Valley — from discovery to delivery.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/build-process' },
}

export default function BuildProcessPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">How We Build</p>
          <h1 className="section-title">Our Mountain Home Building Process</h1>
          <p className="section-sub">
            Building a mountain home in Teton Valley requires experience, local knowledge, and
            meticulous planning. Our process is designed to be transparent, fixed-price, and
            stress-free from the first call to final walkthrough.
          </p>
          <div style={{ marginTop: 48 }}>
            <Link href="/#contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
          <p style={{ marginTop: 64, fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic' }}>
            [Full build process page coming soon.]
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
