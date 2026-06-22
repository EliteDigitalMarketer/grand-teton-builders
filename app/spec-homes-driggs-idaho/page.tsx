import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spec Homes in Driggs, Idaho',
  description: 'Grand Teton Builders builds premium spec homes in Driggs, Idaho. Move-in ready or coming soon — custom-quality mountain homes in Teton Valley without the custom build timeline.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/spec-homes-driggs-idaho' },
}

export default function SpecHomesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">Driggs, Idaho</p>
          <h1 className="section-title">Spec Homes in Driggs, Idaho</h1>
          <p className="section-sub">
            Grand Teton Builders develops premium spec homes in Driggs, Idaho — designed and built
            to the same standards as our custom homes, without requiring a buyer to manage the full
            design and build process.
          </p>
          <div style={{ marginTop: 48 }}>
            <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
              View Our Current Spec Home in Driggs
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
