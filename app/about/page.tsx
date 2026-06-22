import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Grand Teton Builders',
  description: 'Grand Teton Builders is a luxury mountain home builder in Driggs, Idaho and Teton Valley. Learn about our story, philosophy, and commitment to craftsmanship.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/about' },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">Our Story</p>
          <h1 className="section-title">About Grand Teton Builders</h1>
          <p className="section-sub">
            Grand Teton Builders was founded on a simple belief: every home should be as enduring
            as the mountains it sits beneath. We build in Driggs, Idaho and throughout Teton Valley.
          </p>
          <div style={{ marginTop: 48 }}>
            <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
              View Our Current Project
            </Link>
          </div>
          <p style={{ marginTop: 64, fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic' }}>
            [Full about page coming soon.]
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
