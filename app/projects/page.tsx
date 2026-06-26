import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View current and upcoming Grand Teton Builders projects in Driggs, Idaho and Santa Fe, New Mexico. New construction mountain homes, custom builds, and spec homes.',
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
            Current and upcoming luxury homes developed by Grand Teton Builders in Driggs, Idaho and select markets including Santa Fe, New Mexico.
          </p>

          {/* Project cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: 24,
              marginTop: 56,
              maxWidth: 1240,
            }}
          >
            {/* The Powder Chalet — Driggs, Idaho */}
            <div style={{ padding: 32, background: 'var(--charcoal)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: 12 }}>
                Now Under Construction
              </div>
              <h2 style={{ fontFamily: 'var(--font-gfs-didot)', fontSize: 24, color: 'var(--limestone)', fontWeight: 400, marginBottom: 12, letterSpacing: '0.02em' }}>
                New Construction Mountain Home — Driggs, Idaho
              </h2>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(231,224,210,0.6)', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>
                A refined mountain home currently under construction in the heart of Teton Valley.
              </p>
              <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                View Home Details
              </Link>
            </div>

            {/* 6 High Desert Vista — Santa Fe, New Mexico */}
            <div style={{ padding: 32, background: 'var(--charcoal)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: 12 }}>
                For Sale &middot; Construction Completed
              </div>
              <h2 style={{ fontFamily: 'var(--font-gfs-didot)', fontSize: 24, color: 'var(--limestone)', fontWeight: 400, marginBottom: 12, letterSpacing: '0.02em' }}>
                6 High Desert Vista — Santa Fe, New Mexico
              </h2>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(231,224,210,0.6)', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>
                A new Contemporary Pueblo home in the gated Longview community &mdash; substantially complete and listed at $1,400,000, with panoramic high desert views on 2.7 acres.
              </p>
              <Link href="/new-construction-home-for-sale-santa-fe-new-mexico" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                View Home Details
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
