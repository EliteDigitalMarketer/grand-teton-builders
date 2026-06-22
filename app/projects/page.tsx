import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View current and upcoming Grand Teton Builders projects in Driggs, Idaho and throughout Teton Valley. New construction mountain homes, custom builds, and spec homes.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">Our Work</p>
          <h1 className="section-title">Grand Teton Builders Projects</h1>
          <p className="section-sub">
            Current and upcoming luxury mountain home projects in Driggs, Idaho and throughout Teton Valley.
          </p>

          {/* Featured current project */}
          <div style={{ marginTop: 56, padding: 32, background: 'var(--charcoal)', maxWidth: 600 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: 12 }}>
              Now Under Construction
            </div>
            <h2 style={{ fontFamily: 'var(--font-gfs-didot)', fontSize: 24, color: 'var(--limestone)', fontWeight: 400, marginBottom: 12, letterSpacing: '0.02em' }}>
              New Construction Mountain Home — Driggs, Idaho
            </h2>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(231,224,210,0.6)', lineHeight: 1.8, marginBottom: 24 }}>
              A refined mountain home currently under construction in the heart of Teton Valley.
            </p>
            <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
              View Home Details
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
