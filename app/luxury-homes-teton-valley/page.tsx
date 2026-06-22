import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Homes in Teton Valley, Idaho',
  description: 'Grand Teton Builders creates luxury mountain homes in Teton Valley, Idaho. Refined architecture, premium finishes, and enduring craftsmanship in Driggs, Victor, and throughout Teton Valley.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/luxury-homes-teton-valley' },
}

export default function LuxuryHomesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">Teton Valley, Idaho</p>
          <h1 className="section-title">Luxury Homes in Teton Valley</h1>
          <p className="section-sub">
            Grand Teton Builders creates refined luxury mountain homes throughout Teton Valley.
            Premium finishes, architectural integrity, and enduring craftsmanship in one of the
            most spectacular mountain settings in the American West.
          </p>
          <div style={{ marginTop: 48 }}>
            <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
              View Our Current Luxury Home in Driggs
            </Link>
          </div>
          <p style={{ marginTop: 64, fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic' }}>
            [Full page content coming soon.]
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
