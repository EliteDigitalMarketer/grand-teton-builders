import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Grand Teton Builders',
  description: 'Contact Grand Teton Builders to inquire about 1230 Wind River Trail in Driggs, Idaho, custom builds in Teton Valley, or upcoming spec homes. Call (208) 262-3669.',
  alternates: { canonical: 'https://grand-teton-builders.vercel.app/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116 }}>
        <section className="contact" style={{ padding: '96px 5vw' }}>
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="section-title">Contact Grand Teton Builders</h1>
          <p className="section-sub">
            Interested in 1230 Wind River Trail in Driggs, a custom build, or a future
            project in Teton Valley? We&rsquo;d love to hear from you.
          </p>
          <div style={{ marginTop: 48 }}>
            <Link href="/new-construction-home-for-sale-driggs-idaho#inquiry" className="btn-primary">
              Inquire About the Driggs Home
            </Link>
          </div>
          <div className="contact-inner" style={{ marginTop: 56 }}>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4CD;</div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-val">Driggs, Teton Valley, Idaho</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4DE;</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-val">
                    <a href="tel:+12082623669" style={{ color: '#fff', textDecoration: 'none' }}>
                      (208) 262-3669
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x2709;</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-val">
                    <a href="mailto:Hello@grandtetonbuilders.com" style={{ color: '#fff', textDecoration: 'none' }}>
                      Hello@grandtetonbuilders.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact form removed — placeholder reserves grid space until custom form is added */}
            <div className="contact-form" aria-hidden="true" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
