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
        url: '/Front%20Elevation%20Left%20Angle%203d%20Rendering%20Square%20Mountains.png',
        width: 1240,
        height: 1240,
        alt: 'The Powder Chalet — refined mountain home in Driggs, Idaho by Grand Teton Builders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/Front%20Elevation%20Left%20Angle%203d%20Rendering%20Square%20Mountains.png'],
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
  image: 'https://grand-teton-builders.vercel.app/Front%20Elevation%20Left%20Angle%203d%20Rendering%20Square%20Mountains.png',
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
    { '@type': 'City', name: 'Santa Fe' },
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

// Offsets the scroll position when navigating to an anchor so the fixed nav doesn't overlap the section heading.
const anchorOffset = { scrollMarginTop: 96 }

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={websiteSchema} />

      <Nav />

      <main>
        {/* HERO — full-bleed photo, content bottom-left */}
        <section
          className="hero"
          style={{
            backgroundImage:
              "url('/6-high-desert-vista/04-front-exterior-aerial-desert-modern-home-mountain-backdrop.jpg')",
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
              src="/Front%20Elevation%203d%20Rendering%20Rectangle.png"
              alt="The Powder Chalet — front elevation rendering of the new 4-bedroom mountain modern home at 1230 Wind River Trail in Driggs, Idaho by Grand Teton Builders"
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

        {/* ABOUT / QUALITY STANDARD — anchor for nav "About" link */}
        <section
          className="about"
          id="about"
          aria-labelledby="about-heading"
          style={anchorOffset}
        >
          <div className="about-inner">
            <div>
              <p className="section-eyebrow">Our Standard</p>
              <h2 className="section-title" id="about-heading">
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

        {/* GALLERY — anchor for nav "Gallery" link (was id="craftsmanship") */}
        <section
          className="gallery-section"
          id="gallery"
          aria-labelledby="gallery-heading"
          style={anchorOffset}
        >
          <p className="section-eyebrow">Craftsmanship</p>
          <h2 className="section-title" id="gallery-heading">
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
                src="/Front%20Elevation%20Left%20Angle%203d%20Rendering%20Square%20Mountains.png"
                alt="The Powder Chalet — front view at sunset with mountain backdrop in Driggs, Idaho"
                width={900}
                height={600}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Sited for the mountains it sits beneath</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/Front%20Elevation%20Right%20Angle%203d%20Rendering%20Rectangle.png"
                alt="The Powder Chalet — right angle view showing material alignment of wood and stone"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Material alignment &amp; warm finishes</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/Left%20Elevation%203d%20Rendering%20Square.png"
                alt="The Powder Chalet — side elevation showing roofline proportion and envelope detail"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Roofline proportion &amp; envelope detail</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/Front%20Elevation%20Left%20Angle%203d%20Rendering%20Square.png"
                alt="The Powder Chalet — left angle daytime view showing mountain-ready exterior"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Durable, mountain-ready exteriors</div>
            </div>
            <div className="gallery-item" role="listitem">
              <Image
                src="/Front%20Elevation%203d%20Rendering%20Square.png"
                alt="The Powder Chalet — straight-on front elevation showing wood, stone, and dark modern finishes"
                width={600}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Wood, stone &amp; dark modern finishes</div>
            </div>
            <div className="gallery-item gallery-wide" role="listitem">
              <Image
                src="/Left%20Rear%20Elevation%203d%20Rendering%20Square.png"
                alt="The Powder Chalet — rear view showing covered patio, outdoor dining, and hot tub designed for four-season mountain use"
                width={900}
                height={400}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">Outdoor living, designed for four-season use</div>
            </div>
          </div>
        </section>

        {/* PROJECTS / PORTFOLIO PREVIEW */}
        <section
          style={{ background: 'var(--snowfield)', padding: '96px 5vw', ...anchorOffset }}
          id="projects"
          aria-labelledby="projects-heading"
        >
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title" id="projects-heading">
            Current Homes
          </h2>
          <p className="section-sub">
            A growing portfolio of refined homes developed by Grand Teton
            Builders &mdash; thoughtfully designed, carefully built, and shaped
            by the landscapes they sit within.
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
            {/* The Powder Chalet — Driggs, Idaho */}
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
                src="/Front%20Elevation%203d%20Rendering%20Square.png"
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
                  Coming Soon
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

            {/* 6 High Desert Vista — Santa Fe, New Mexico */}
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
                src="/6-high-desert-vista/04-front-exterior-aerial-desert-modern-home-mountain-backdrop.jpg"
                alt="6 High Desert Vista — aerial view of the new Contemporary Pueblo home in Santa Fe with mountain backdrop"
                width={1600}
                height={1067}
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
                  For Sale &mdash; $1,400,000
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
                  6 High Desert Vista
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
                  Longview Community &middot; Santa Fe, New Mexico
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
                  A new Contemporary Pueblo home on 2.7 acres in the gated
                  Longview community &mdash; designed for modern luxury,
                  indoor-outdoor living, and panoramic high desert views.
                </p>
                <Link
                  href="/new-construction-home-for-sale-santa-fe-new-mexico"
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  View Home
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* SERVICES / CUSTOM BUILDS — anchor for nav "Services" link */}
        <section
          style={{ background: 'var(--limestone)', padding: '72px 5vw', ...anchorOffset }}
          id="services"
          aria-labelledby="services-heading"
        >
          <div style={{ maxWidth: 760 }}>
            <p className="section-eyebrow">Also Available</p>
            <h2
              className="section-title"
              id="services-heading"
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
        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-heading"
          style={anchorOffset}
        >
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title" id="contact-heading">
            Inquire About Current Homes
          </h2>
          <p className="section-sub">
            Connect with Grand Teton Builders to request details about The
            Powder Chalet in Driggs, 6 High Desert Vista in Santa Fe, or
            select build opportunities.
          </p>
          <div className="contact-inner">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4CD;</div>
                <div>
                  <div className="contact-item-label">Based In</div>
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
                <p className="contact-highlight-title">Current Homes</p>
                <p className="contact-highlight-body">
                  The Powder Chalet (Driggs, ID) is in pre-construction.
                  6 High Desert Vista (Santa Fe, NM) is for sale at $1,400,000
                  with staging in early July. Reach out to inquire about either
                  home or to schedule a private conversation.
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
