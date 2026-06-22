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
            <form className="contact-form" aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-first">First Name</label>
                  <input type="text" id="c-first" name="first_name" className="form-input" placeholder="John" autoComplete="given-name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-last">Last Name</label>
                  <input type="text" id="c-last" name="last_name" className="form-input" placeholder="Smith" autoComplete="family-name" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-email">Email</label>
                <input type="email" id="c-email" name="email" className="form-input" placeholder="john@example.com" autoComplete="email" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-phone">Phone</label>
                <input type="tel" id="c-phone" name="phone" className="form-input" placeholder="(208) 555-0000" autoComplete="tel" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-interest">I&rsquo;m interested in</label>
                <select id="c-interest" name="interest" className="form-select">
                  <option>1230 Wind River Trail in Driggs, Idaho</option>
                  <option>Building a custom home in Teton Valley</option>
                  <option>A future project or spec home</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" className="form-input" placeholder="Tell us about your project or questions..." rows={4} />
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
