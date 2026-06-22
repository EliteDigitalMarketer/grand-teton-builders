import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Home Builders in Driggs, Idaho',
  description: 'Grand Teton Builders offers custom home building services in Driggs, Idaho and throughout Teton Valley. Ground-up construction built to mountain standards.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/custom-home-builders-driggs-idaho' },
}

export default function CustomHomeBuildersPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">Driggs, Idaho &amp; Teton Valley</p>
          <h1 className="section-title">Custom Home Builders in Driggs, Idaho</h1>
          <p className="section-sub">
            Grand Teton Builders specializes in ground-up custom home construction in Driggs, Idaho
            and throughout Teton Valley. Every home is designed around your vision, your lot, and
            your life in the mountains.
          </p>
          <div style={{ marginTop: 48 }}>
            <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
              View Our Current Driggs Home
            </Link>
          </div>
          <p style={{ marginTop: 64, fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic' }}>
            [Full page content coming soon. Contact us to discuss your custom home project.]
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
