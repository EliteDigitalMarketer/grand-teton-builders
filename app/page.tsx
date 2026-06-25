import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Grand Teton Builders | Quality Mountain Homes Built to Last',
  description:
    'Grand Teton Builders develops quality mountain homes with thoughtful design, durable materials, craftsmanship, and attention to detail.',
  alternates: {
    canonical: 'https://grand-teton-builders.vercel.app',
  },
  openGraph: {
    title: 'Grand Teton Builders | Quality Mountain Homes Built to Last',
    description:
      'Grand Teton Builders develops quality mountain homes with thoughtful design, durable materials, craftsmanship, and attention to detail.',
    url: 'https://grand-teton-builders.vercel.app',
    images: [
      {
        url: '/powder-chalet-front-sunset.png',
        width: 1240,
        height: 1245,
        alt: 'The Powder Chalet — refined mountain home in Driggs, Idaho by Grand Teton Builders',
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
    'Grand Teton Builders develops quality mountain homes with thoughtful design, durable materials, craftsmanship, and attention to detail. Based in Driggs, Idaho and serving Teton Valley.',
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
    'Quality mountain home development in Driggs, Idaho and Teton Valley — refined design, durable construction, and attention to detail.',
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
            <p className="hero-eyebrow">Luxury Mountain Home Development</p>
            <h1>
              Quality Mountain Homes,<br />
              <em>Built to Last</em>
            </h1>
            <p>
              Grand Teton Builders develops refined mountain homes shaped by
              thoughtful design, durable materials, and a disciplined attention to
              detail. Every home is built with purpose, crafted to last, and
              designed for the way people live in the mountains.
            </p>
            <div className="hero-actions">
              <Link href="/new-construction-home-for-sale-driggs-idaho" className="btn-primary">
                View Current Homes
              </Link>
              <Link href="/projects" className="btn-outline">
                Explore Our Projects
              </Link>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">Scroll</div>
        </section>

        {/* TRUST BAR */}
        <div className="trust-bar" role="complementary" aria-label="Builder highlights">
          <div className="trust-item">
            <div>
              <div className="trust-num">Built</div>
              <div className="trust-label">To last</div>
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
              <div className="trust-num">Refined</div>
              <div className="trust-label">Mountain modern</div>
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

        {/* FEATURED HOME / CURRENT OFFERING */}
        <section className="featured-home" aria-labelledby="featured-home-heading">
          <p className="section-eyebrow">Featured Home</p>
          <h2 className="section-title" id="featured-home-heading">
            A Home Built with Intention
          </h2>
          <p className="section-sub">
            The Powder Chalet is a new mountain-modern home currently in
            development at 1230 Wind River Trail in Shoshoni Plains. Designed with
            single-level living, warm natural materials, and a refined mountain
            aesthetic, this home reflects the Grand Teton Builders standard:
            thoughtful design, quality craftsmanship, and durable construction for
            four-season mountain living.
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
                A 4-bedroom mountain modern home with 2,258 sq ft of single-level
                living, an open-concept main living area, primary suite with
                walk-in closet, office/flex bedroom, attached 2-car garage, and
                882 sq ft of patio space &mdash; designed for the way people live
                in Teton Valley.
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
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link
                  href="/new-construction-home-for-sale-driggs-idaho"
                  className="btn-primary"
                >
                  View The Powder Chalet
                </Link>
                <Link
                  href="/new-construction-home-for-sale-driggs-idaho#inquiry"
                  className="btn-outline"
                >
                  Request Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY STANDARD */}
        <section className="about" id="standard" aria-labelledby="standard-heading">
          <div className="about-inner">
            <div>
              <p className="section-eyebrow">Our Standard</p>
              <h2 className="section-title" id="standard-heading">
                Built to Last.<br />Detailed with Care.
              </h2>
              <p className="section-sub">
                Every Grand Teton Builders home is guided by a simple standard:
                build it right, make it thoughtful, and pay attention to the
                details that matter. From the way a home sits on the land to the
                materials selected for mountain conditions, each decision is made
                with long-term durability, livability, and craftsmanship in mind.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--brass)',
                  marginBottom: 16,
                }}
              >
                Our Standards Include
              </p>
              <ul className="about-list" aria-label="Our quality standard" style={{ marginTop: 0 }}>
                <li>Durable, mountain-ready materials</li>
                <li>Thoughtful floor plans</li>
                <li>Clean architectural details</li>
                <li>Careful finish selections</li>
                <li>Strong construction standards</li>
                <li>Long-term value</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PHILOSOPHY */}
        <section
          style={{ background: 'var(--charcoal)', padding: '96px 5vw' }}
          aria-labelledby="philosophy-heading"
        >
          <div style={{ maxWidth: 820 }}>
            <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Our Philosophy</p>
            <h2
              className="section-title"
              id="philosophy-heading"
              style={{ color: 'var(--limestone)' }}
            >
              Homes Developed with Purpose
            </h2>
            <p
              className="section-sub"
              style={{
                color: 'rgba(231,224,210,0.65)',
                maxWidth: '100%',
                fontSize: 15,
                lineHeight: 1.9,
              }}
            >
              We approach each home as more than a project. Site planning,
              architecture, material selection, livability, and long-term
              performance all shape the homes we develop. The result is a
              collection of refined mountain homes that feel considered, durable,
              and connected to their surroundings.
            </p>
          </div>
        </section>

        {/* CRAFTSMANSHIP IN THE DETAILS */}
        <section className="gallery-section" id="craftsmanship" aria-labelledby="craftsmanship-heading">
          <p className="section-eyebrow">Craftsmanship</p>
          <h2 className="section-title" id="craftsmanship-heading">
            Craftsmanship in the Details
          </h2>
          <p className="section-sub">
            The quality of a home is often found in the details most people do
            not notice at first glance: the alignment of materials, the proportion
            of the rooflines, the durability of the exterior envelope, the flow of
            the floor plan, and the way finishes come together. Grand Teton
            Builders focuses on these details because they shape how a home looks,
            lives, and lasts.
          </p>
          <div className="gallery-grid" role="list" aria-label="Detail showcase">
            <div className="gallery-item gallery-large" role="listitem">
              <Image
                src="/powder-chalet-front-sunset.png"
                alt="The Powder Chalet — front view at sunset with Teton mountain backdrop in Driggs, Idaho"
                width={900}
                height={600}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Sited for the mountains it sits beneath</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=700&q=85"
                alt="Exposed wood beam interior with refined craftsmanship"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Material alignment &amp; warm interiors</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/powder-chalet-side-elevation.png"
                alt="The Powder Chalet — side elevation with floor-to-ceiling windows and covered patio"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Roofline proportion &amp; envelope detail</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=700&q=85"
                alt="Mountain-ready exterior detail with pine and stone"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Durable, mountain-ready exteriors</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/powder-chalet-front-elevation.png"
                alt="The Powder Chalet — front elevation showing wood siding, stone accents, and dark modern finishes"
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
                alt="Panoramic mountain views from a refined Teton Valley home"
                width={900}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Designed for the way mountain homes live</div>
            </div>
          </div>
        </section>

        {/* PROJECTS / PORTFOLIO PREVIEW */}
        <section
          style={{ background: 'var(--snowfield)', padding: '96px 5vw' }}
          id="projects"
          aria-labelledby="projects-heading"
        >
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title" id="projects-heading">
            Current and Future Homes
          </h2>
          <p className="section-sub">
            A growing portfolio of refined mountain homes developed by Grand Teton
            Builders &mdash; thoughtfully designed, carefully built, and rooted in
            Teton Valley.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
              marginTop: 48,
            }}
            role="list"
            aria-label="Project portfolio"
          >
            {/* Current home card */}
            <article
              role="listitem"
              style={{
                background: 'var(--charcoal)',
                border: '1px solid rgba(176,138,74,0.2)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Image
                src="/powder-chalet-front-elevation-square.png"
                alt="The Powder Chalet — refined 4-bedroom mountain modern home in development at 1230 Wind River Trail in Driggs, Idaho"
                width={1240}
                height={1240}
                style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div
                style={{
                  padding: '28px 28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <div className="featured-home-status" style={{ marginBottom: 16 }}>
                  <span className="status-dot" aria-hidden="true" />
                  In Development
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-gfs-didot)',
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--limestone)',
                    letterSpacing: '0.02em',
                    marginBottom: 8,
                  }}
                >
                  The Powder Chalet
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    color: 'rgba(231,224,210,0.5)',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                  }}
                >
                  Shoshoni Plains &middot; Driggs, Idaho
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'rgba(231,224,210,0.65)',
                    lineHeight: 1.75,
                    letterSpacing: '0.02em',
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  A mountain-modern home designed around single-level living,
                  natural materials, and a durable exterior built for the
                  mountain environment.
                </p>
                <Link
                  href="/new-construction-home-for-sale-driggs-idaho"
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  View Home
                </Link>
              </div>
            </article>

            {/* Future homes placeholder card */}
            <article
              role="listitem"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px dashed rgba(31,36,33,0.25)',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: 360,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--brass)',
                  marginBottom: 16,
                  fontWeight: 600,
                }}
              >
                Future Homes
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-gfs-didot)',
                  fontSize: 24,
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  letterSpacing: '0.02em',
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                More Homes in Development
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  letterSpacing: '0.02em',
                  marginBottom: 24,
                }}
              >
                Additional refined mountain homes are in early planning. Contact
                Grand Teton Builders to be notified about upcoming releases.
              </p>
              <Link
                href="#contact"
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--brass)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--brass)',
                  paddingBottom: 4,
                }}
              >
                Notify Me &rarr;
              </Link>
            </article>
          </div>
        </section>

        {/* CUSTOM BUILDS SECONDARY */}
        <section
          style={{ background: 'var(--limestone)', padding: '72px 5vw' }}
          aria-labelledby="custom-heading"
        >
          <div style={{ maxWidth: 760 }}>
            <p className="section-eyebrow">Also Available</p>
            <h2
              className="section-title"
              id="custom-heading"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
            >
              Custom Builds by Request
            </h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              While our primary focus is developing select mountain homes and
              residential projects, we may consider custom build opportunities
              that align with our standards for quality, thoughtful design,
              craftsmanship, and project scope.
            </p>
            <Link
              href="/custom-home-builders-driggs-idaho"
              className="btn-primary"
              style={{ background: 'var(--charcoal)', color: 'var(--limestone)' }}
            >
              Learn About Custom Builds
            </Link>
          </div>
        </section>

        {/* CONTACT / FINAL CTA */}
        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title" id="contact-heading">
            Inquire About Current and Future Homes
          </h2>
          <p className="section-sub">
            Connect with Grand Teton Builders to request details about current
            homes, future releases, or select build opportunities.
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
                  development. Reach out to inquire about availability, finishes,
                  or to schedule a private conversation about the home.
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
