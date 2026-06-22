import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — Mountain Home Building & Buying in Teton Valley',
  description: 'Expert insights on building and buying mountain homes in Driggs, Idaho and Teton Valley from Grand Teton Builders.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/blog' },
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section style={{ padding: '96px 5vw', background: 'var(--snowfield)' }}>
          <p className="section-eyebrow">Resources &amp; Insights</p>
          <h1 className="section-title">Mountain Home Building &amp; Buying in Teton Valley</h1>
          <p className="section-sub">
            Expert guidance on new construction, luxury homes, custom builds, and mountain living
            in Driggs, Idaho and throughout Teton Valley.
          </p>
          <p style={{ marginTop: 64, fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic' }}>
            [Blog posts coming soon. Articles will cover new construction homes in Driggs Idaho,
            buying a luxury mountain home, spec homes vs. custom homes, why buyers choose Driggs,
            and more.]
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
