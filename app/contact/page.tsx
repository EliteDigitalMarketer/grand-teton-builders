import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Contact Grand Teton Builders | Driggs, Idaho',
  description:
    'Contact Grand Teton Builders to inquire about current homes, schedule a private showing, or discuss a custom mountain home in Driggs, Idaho and Teton Valley.',
  alternates: {
    canonical: 'https://grand-teton-builders.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Grand Teton Builders | Driggs, Idaho',
    description:
      'Connect with Grand Teton Builders — luxury mountain home development in Driggs, Idaho and throughout Teton Valley.',
    url: 'https://grand-teton-builders.vercel.app/contact',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Grand Teton Builders',
  description:
    'Contact Grand Teton Builders LLC — luxury mountain home development in Driggs, Idaho and Teton Valley.',
  url: 'https://grand-teton-builders.vercel.app/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Grand Teton Builders',
    telephone: '+1-208-262-3669',
    email: 'Hello@grandtetonbuilders.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Driggs',
      addressRegion: 'ID',
      addressCountry: 'US',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactPageSchema} />
      <Nav />
      <main style={{ background: '#000', paddingTop: 144 }}>
        <section
          className="contact"
          aria-labelledby="contact-page-heading"
          style={{ paddingTop: 72 }}
        >
          <p className="section-eyebrow">Get In Touch</p>
          <h1
            className="section-title"
            id="contact-page-heading"
            style={{ color: '#fff' }}
          >
            Let&rsquo;s Talk About Your Mountain Home
          </h1>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Whether you&rsquo;re interested in one of our current homes, want to
            discuss a custom build, or simply have a question about developing
            in Teton Valley &mdash; we&rsquo;d love to hear from you. Reach out
            and a member of the Grand Teton Builders team will be in touch.
          </p>

          <div className="contact-inner">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4CD;</div>
                <div>
                  <div className="contact-item-label">Based In</div>
                  <div className="contact-item-val">
                    Driggs, Teton Valley, Idaho
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4DE;</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-val">
                    <a
                      href="tel:+12082623669"
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
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
                    <a
                      href="mailto:Hello@grandtetonbuilders.com"
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      Hello@grandtetonbuilders.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F552;</div>
                <div>
                  <div className="contact-item-label">Business Hours</div>
                  <div className="contact-item-val">
                    Monday &ndash; Friday
                    <br />
                    9:00 AM &ndash; 5:00 PM Mountain Time
                  </div>
                </div>
              </div>

              <div className="contact-highlight">
                <p className="contact-highlight-title">Current Opportunities</p>
                <p className="contact-highlight-body">
                  The Powder Chalet in Driggs, Idaho is in pre-construction &mdash;
                  inquire for reservation details. 6 High Desert Vista in Santa
                  Fe is available for showings. We&rsquo;re also open to select
                  custom build conversations for the right project.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
