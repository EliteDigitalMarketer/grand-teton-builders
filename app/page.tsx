import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Grand Teton Builders | Luxury Homes in Driggs, Idaho',
  description:
    'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
  alternates: {
    canonical: 'https://grand-teton-builders.vercel.app',
  },
  openGraph: {
    title: 'Grand Teton Builders | Luxury Homes in Driggs, Idaho',
    description:
      'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
    url: 'https://grand-teton-builders.vercel.app',
    images: [
      {
        url: '/powder-chalet-front-sunset.png',
        width: 1240,
        height: 1245,
        alt: 'The Powder Chalet — new mountain modern home by Grand Teton Builders in Driggs, Idaho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/powder-chalet-front-sunset.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Grand Teton Builders',
  description:
    'Grand Teton Builders creates refined mountain homes, custom builds, and spec homes in Driggs, Idaho and throughout Teton Valley.',
  url: 'https://grand-teton-builders.vercel.app',
  logo: 'https://grand-teton-builders.vercel.app/gtb-logo-light.png',
  image: 'https://grand-teton-builders.vercel.app/powder-chalet-front-sunset.png',
  telephone: '+1-208-262-3669',
  email: 'Hello@grandtetonbuilders.com',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Driggs',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Driggs' },
    { '@type': 'City', name: 'Victor' },
    { '@type': 'City', name: 'Tetonia' },
    { '@type': 'City', name: 'Alta' },
    { '@type': 'AdministrativeArea', name: 'Teton Valley' },
    { '@type': 'AdministrativeArea', name: 'Teton County, Idaho' },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Grand Teton Builders',
  url: 'https://grand-teton-builders.vercel.app',
  description:
    'Luxury mountain homes, custom home building, and spec homes in Driggs, Idaho and Teton Valley.',
}

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={websiteSchema} />

      <Nav />

      <main>
        {/* HERO */}
        <section
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(31,36,33,0.4) 0%, rgba(31,36,33,0.6) 50%, rgba(31,36,33,0.97) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85')",
            paddingTop: 116,
          }}
          aria-label="Hero section"
        >
          <div className="hero-content">
            <p className="hero-eyebrow">Custom Home Builder &mdash; Driggs, Idaho</p>
            <h1>
              Luxury Mountain Homes<br />
              in <em>Driggs, Idaho</em>
            </h1>
            <p>
              Grand Teton Builders creates exceptional mountain homes designed for
              the way people live, gather, and explore in Teton Valley. Refined
              architecture. Enduring craftsmanship. Built for generations.
            </p>
            <div className="hero-actions">
              <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
                View The Powder Chalet
              </Link>
              <Link href="#about" className="btn-outline">
                About Grand Teton Builders
              </Link>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">Scroll</div>
        </section>

        {/* TRUST BAR */}
        <div className="trust-bar" role="complementary" aria-label="Builder highlights">
          <div className="trust-item">
            <div>
              <div className="trust-num">100%</div>
              <div className="trust-label">Custom builds</div>
            </div>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <div>
              <div className="trust-num">ID</div>
              <div className="trust-label">Licensed &amp; insured</div>
            </div>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <div>
              <div className="trust-num">Fixed</div>
              <div className="trust-label">Price contracts</div>
            </div>
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <div>
              <div className="trust-num">Teton</div>
              <div className="trust-label">Valley, Idaho</div>
            </div>
          </div>
        </div>

        {/* FEATURED HOME */}
        <section className="featured-home" aria-labelledby="featured-home-heading">
          <p className="section-eyebrow">Coming Soon &mdash; New Construction</p>
          <h2 className="section-title" id="featured-home-heading">
            The Powder Chalet &mdash; New 4-Bedroom Mountain Modern Home in Driggs, Idaho
          </h2>
          <p className="section-sub">
            The Powder Chalet at 1230 Wind River Trail is a new mountain modern
            home in Shoshoni Plains, Driggs, Idaho &mdash; 2,258 sq ft, 4 bedrooms,
            2.5 baths, single-level living with an attached 2-car garage. Inquire
            now about availability and finish selections.
          </p>
          <div className="featured-home-card">
            <Image
              src="/powder-chalet-front-elevation.png"
              alt="The Powder Chalet — front elevation of the new 4-bedroom mountain modern home at 1230 Wind River Trail in Driggs, Idaho by Grand Teton Builders"
              width={1664}
              height={934}
              className="featured-home-img"
              loading="lazy"
            />
            <div className="featured-home-info">
              <div className="featured-home-status">
                <span className="status-dot" aria-hidden="true" />
                Coming Soon &mdash; Inquiries Welcome
              </div>
              <h3 className="featured-home-name">The Powder Chalet</h3>
              <p className="featured-home-loc">&#x1F4CD; 1230 Wind River Trail &middot; Shoshoni Plains, Driggs, Idaho</p>
              <p className="featured-home-desc">
                A new 4-bedroom mountain modern home with 2,258 sq ft of finished
                single-level living, open-concept main living area, primary suite
                with walk-in closet, office/flex bedroom, attached 2-car garage,
                and 882 sq ft of patio space. Designed for the way people live in
                Teton Valley.
              </p>
              <div className="featured-home-specs">
                <div>
                  <div className="spec-val">2,258</div>
                  <div className="spec-key">Sq Ft</div>
                </div>
                <div>
                  <div className="spec-val">4 / 2.5</div>
                  <div className="spec-key">Bed / Bath</div>
                </div>
                <div>
                  <div className="spec-val">Driggs, ID</div>
                  <div className="spec-key">Location</div>
                </div>
              </div>
              <Link
                href="/new-construction-home-for-sale-driggs-idaho"
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                View Home Details &amp; Inquire
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about" aria-labelledby="about-heading">
          <div className="about-inner">
            <div className="about-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85"
                alt="Mountain modern home in Teton Valley, Idaho built by Grand Teton Builders"
                width={600}
                height={750}
                className="about-img"
                loading="lazy"
              />
              <div className="about-badge">
                <strong>2024</strong>
                <span>Established in Driggs, Idaho</span>
              </div>
            </div>
            <div>
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="section-title" id="about-heading">
                Rooted in Idaho,<br />Built with Purpose
              </h2>
              <p className="section-sub">
                Grand Teton Builders was founded on a simple belief: every home
                should be as enduring as the mountains it sits beneath. We bring a
                builder&rsquo;s discipline and a craftsman&rsquo;s eye to every
                project in Driggs, Idaho and throughout Teton Valley.
              </p>
              <ul className="about-list" aria-label="Our commitments">
                <li>Fully licensed and insured in the state of Idaho</li>
                <li>Every subcontractor vetted and held to our standards</li>
                <li>Fixed-price contracts &mdash; no surprise overruns</li>
                <li>Transparent build progress tracking from day one</li>
                <li>Personally managed from foundation to final walkthrough</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery-section" id="gallery" aria-labelledby="gallery-heading">
          <p className="section-eyebrow">Craftsmanship &amp; Vision</p>
          <h2 className="section-title" id="gallery-heading">
            The Mountain Modern Standard
          </h2>
          <p className="section-sub">
            Every Grand Teton home is designed to live in harmony with its
            surroundings &mdash; refined materials, architectural precision, and
            views that never get old.
          </p>
          <div className="gallery-grid" role="list" aria-label="Project gallery">
            <div className="gallery-item gallery-large" role="listitem">
              <Image
                src="/powder-chalet-front-sunset.png"
                alt="The Powder Chalet — front view at sunset with Teton mountain backdrop, new mountain modern home in Driggs, Idaho by Grand Teton Builders"
                width={900}
                height={600}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">The Powder Chalet &mdash; built to belong on the mountain</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=700&q=85"
                alt="Exposed wood beam interior in a Grand Teton Builders custom mountain home"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Exposed beams &amp; warm interiors</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/powder-chalet-side-elevation.png"
                alt="The Powder Chalet — side elevation with floor-to-ceiling windows and covered patio in Driggs, Idaho"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Floor-to-ceiling windows &amp; covered patio</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=85"
                alt="Rustic mountain cabin with pine trees in Eastern Idaho"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Where pine meets craftsmanship</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/powder-chalet-front-elevation.png"
                alt="The Powder Chalet — front elevation showing wood siding, stone accents, and dark modern exterior finishes in Driggs Idaho"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Wood, stone &amp; dark modern finishes</div>
            </div>
            <div className="gallery-item gallery-wide" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=1200&q=85"
                alt="Panoramic views from a luxury mountain home in Teton Valley built by Grand Teton Builders"
                width={900}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Floor-to-ceiling views &mdash; every room, every season</div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services" aria-labelledby="services-heading">
          <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>What We Build</p>
          <h2 className="section-title" id="services-heading">Our Services</h2>
          <p className="section-sub">
            From raw land to finished home in Driggs, Idaho and throughout Teton
            Valley, we manage every phase with the same uncompromising attention to
            detail.
          </p>
          <div className="services-grid" role="list">
            <article className="service-card" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80"
                alt="Custom mountain home build in Driggs Idaho by Grand Teton Builders"
                width={600}
                height={200}
                className="service-img"
                loading="lazy"
              />
              <div className="service-card-body">
                <h3 className="service-name">
                  <Link href="/custom-home-builders-driggs-idaho" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Custom Home Builders in Driggs, Idaho
                  </Link>
                </h3>
                <p className="service-desc">
                  Ground-up construction designed around your vision, your lot, and
                  your life in Teton Valley. No templates, no shortcuts.
                </p>
              </div>
            </article>
            <article className="service-card" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Design-build luxury mountain home in Teton Valley Idaho"
                width={600}
                height={200}
                className="service-img"
                loading="lazy"
              />
              <div className="service-card-body">
                <h3 className="service-name">
                  <Link href="/luxury-homes-teton-valley" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Luxury Homes in Teton Valley
                  </Link>
                </h3>
                <p className="service-desc">
                  Premium mountain homes built with refined finishes, durable
                  materials, and architectural integrity that endures.
                </p>
              </div>
            </article>
            <article className="service-card" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=600&q=80"
                alt="Spec home for sale in Driggs Idaho by Grand Teton Builders"
                width={600}
                height={200}
                className="service-img"
                loading="lazy"
              />
              <div className="service-card-body">
                <h3 className="service-name">
                  <Link href="/spec-homes-driggs-idaho" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Spec Homes in Driggs, Idaho
                  </Link>
                </h3>
                <p className="service-desc">
                  Investment-grade homes built to the highest mountain
                  specifications in Driggs, Idaho &mdash; available when the
                  time is right.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process" aria-labelledby="process-heading">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-title" id="process-heading">Our Build Process</h2>
          <p className="section-sub">
            Simple, honest, and on your side from the first call to the final key.
          </p>
          <div className="process-steps" role="list">
            <div className="step" role="listitem">
              <div className="step-num" aria-hidden="true">01</div>
              <h3 className="step-title">Discovery Call</h3>
              <p className="step-desc">
                We learn your goals, timeline, and budget. No pressure, no pitch
                &mdash; just a straight conversation.
              </p>
            </div>
            <div className="step" role="listitem">
              <div className="step-num" aria-hidden="true">02</div>
              <h3 className="step-title">Site &amp; Plan Review</h3>
              <p className="step-desc">
                We assess your land and plans, flag any concerns upfront, and
                deliver a fixed-price proposal.
              </p>
            </div>
            <div className="step" role="listitem">
              <div className="step-num" aria-hidden="true">03</div>
              <h3 className="step-title">Build Phase</h3>
              <p className="step-desc">
                Construction begins with weekly updates, photo progress, and direct
                access to your project lead.
              </p>
            </div>
            <div className="step" role="listitem">
              <div className="step-num" aria-hidden="true">04</div>
              <h3 className="step-title">Delivery</h3>
              <p className="step-desc">
                Final walkthrough, punch list, and keys in hand &mdash; ready for
                mountain living.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Link href="/build-process" className="btn-primary" style={{ background: 'var(--charcoal)', color: 'var(--limestone)' }}>
              Learn About Our Full Build Process
            </Link>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <p className="section-eyebrow">Let&rsquo;s Talk</p>
          <h2 className="section-title" id="contact-heading">Start Your Project</h2>
          <p className="section-sub">
            Whether you&rsquo;re interested in The Powder Chalet or ready to build
            your own mountain home in Teton Valley &mdash; we&rsquo;d love to hear
            from you.
          </p>
          <div className="contact-inner">
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
              <div className="contact-highlight">
                <p className="contact-highlight-title">Interested in The Powder Chalet?</p>
                <p className="contact-highlight-body">
                  The Powder Chalet at 1230 Wind River Trail is currently in
                  pre-construction. Reach out now to inquire about availability,
                  finishes, or to schedule a private conversation about the home.
                </p>
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
