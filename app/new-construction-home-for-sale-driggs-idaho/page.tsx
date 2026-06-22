import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'New Construction Home for Sale in Driggs, Idaho',
  description:
    'Explore a new luxury mountain home being built in Driggs, Idaho by Grand Teton Builders, designed for refined Teton Valley living.',
  alternates: {
    canonical:
      'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-driggs-idaho',
  },
  openGraph: {
    title: 'New Construction Home for Sale in Driggs, Idaho | Grand Teton Builders',
    description:
      'Explore a new luxury mountain home being built in Driggs, Idaho by Grand Teton Builders, designed for refined Teton Valley living.',
    url: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-driggs-idaho',
  },
}

// NOTE: Update these details as the project progresses
const propertyDetails = {
  status: 'Under Construction',
  sqft: '[UPDATE: Square footage]',
  bedrooms: '[UPDATE: Bedrooms]',
  bathrooms: '[UPDATE: Bathrooms]',
  garage: '[UPDATE: Garage size]',
  lotSize: '[UPDATE: Lot size]',
  price: 'Price available upon request',
  completionDate: '[UPDATE: Estimated completion]',
}

const propertySchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  name: 'New Construction Mountain Home in Driggs, Idaho',
  description:
    'A new custom-quality mountain home being built in Driggs, Idaho by Grand Teton Builders.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Driggs',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  provider: {
    '@type': 'LocalBusiness',
    name: 'Grand Teton Builders',
    url: 'https://grand-teton-builders.vercel.app',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://grand-teton-builders.vercel.app',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'New Construction Home for Sale in Driggs, Idaho',
      item: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-driggs-idaho',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this home currently available for purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The home is currently under construction in Driggs, Idaho. We are accepting inquiries now.',
      },
    },
    {
      '@type': 'Question',
      name: 'When will the Driggs, Idaho home be completed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact us for the most current estimated completion timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I choose finishes while the home is under construction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on the build timeline, there may be opportunities to influence certain finish selections. Contact us early to discuss what is possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a custom home or a spec home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is a spec home built to the same quality standards as our custom homes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I schedule a private showing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We welcome private showings for qualified buyers. Use the inquiry form on this page to arrange a visit.',
      },
    },
  ],
}

const specs = [
  { label: 'Builder', value: 'Grand Teton Builders' },
  { label: 'Location', value: 'Driggs, Idaho' },
  { label: 'Status', value: propertyDetails.status },
  { label: 'Square Footage', value: propertyDetails.sqft },
  { label: 'Bedrooms', value: propertyDetails.bedrooms },
  { label: 'Bathrooms', value: propertyDetails.bathrooms },
  { label: 'Garage', value: propertyDetails.garage },
  { label: 'Lot Size', value: propertyDetails.lotSize },
  { label: 'Est. Completion', value: propertyDetails.completionDate },
  { label: 'Price', value: propertyDetails.price },
]

const whyDriggs = [
  {
    title: 'Teton Valley Setting',
    desc: 'Driggs sits in the heart of Teton Valley with views of the Teton Range, offering one of the most dramatic mountain backdrops in the American West.',
  },
  {
    title: 'Grand Targhee Access',
    desc: 'Minutes from Grand Targhee Resort, known for deep powder, lighter crowds, and year-round recreation.',
  },
  {
    title: 'Four-Season Living',
    desc: 'Skiing in winter, hiking and fly fishing in summer. Driggs offers genuine mountain living in every season.',
  },
  {
    title: 'Jackson-Adjacent Value',
    desc: 'Access to the Jackson Hole lifestyle at a fraction of the price, with more land and a stronger sense of community.',
  },
  {
    title: 'Small-Town Mountain Feel',
    desc: 'A real mountain town with local character, growing amenities, and a welcoming community of residents and outdoor enthusiasts.',
  },
  {
    title: 'Strong Investment Trajectory',
    desc: 'Teton Valley has seen consistent buyer interest from relocation buyers, second-home purchasers, and investors.',
  },
]

const faqs = [
  {
    q: 'Is this home currently available for purchase?',
    a: 'The home is currently under construction in Driggs, Idaho. We are accepting inquiries now. Contact Grand Teton Builders to learn about availability and to schedule a private showing.',
  },
  {
    q: 'When will the Driggs, Idaho home be completed?',
    a: '[UPDATE: Estimated completion date]. Contact us for the most current timeline.',
  },
  {
    q: 'Can I choose finishes while the home is under construction?',
    a: 'Depending on where we are in the build timeline, there may be opportunities to influence certain finish selections. Contact us early to discuss what is possible.',
  },
  {
    q: 'Is this a custom home or a spec home?',
    a: 'This is a spec home built by Grand Teton Builders to the same quality standards as our custom homes, designed for the mountain lifestyle of Teton Valley.',
  },
  {
    q: 'Can I schedule a private showing?',
    a: 'Yes. We welcome private showings at the construction site for qualified buyers. Use the inquiry form below or contact Grand Teton Builders directly.',
  },
  {
    q: 'Does Grand Teton Builders have other upcoming homes in Teton Valley?',
    a: 'We plan to continue building in Driggs and throughout Teton Valley. Join our interest list to be notified about future projects.',
  },
]

export default function DriggsHomePage() {
  return (
    <>
      <SchemaOrg schema={propertySchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      <Nav />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'New Construction Home for Sale in Driggs, Idaho' },
        ]}
      />

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(31,36,33,0.35) 0%, rgba(31,36,33,0.55) 50%, rgba(31,36,33,0.97) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85')",
          minHeight: '75vh',
        }}
        aria-label="Property hero"
      >
        <div className="hero-content">
          <p className="hero-eyebrow">Driggs, Idaho &mdash; Teton Valley</p>
          <h1>
            New Construction Home<br />
            <em>for Sale in Driggs, Idaho</em>
          </h1>
          <p>
            A refined mountain home currently under construction in the heart of
            Teton Valley, Idaho. Built to Grand Teton Builders exacting standards
            and designed for the way people actually live in the mountains.
          </p>
          <div className="hero-actions">
            <a href="#inquiry" className="btn-primary">
              Inquire About This Home
            </a>
            <a href="#details" className="btn-outline">
              View Build Details
            </a>
          </div>
        </div>
      </section>

      {/* PROPERTY OVERVIEW */}
      <section
        id="details"
        style={{ background: 'var(--charcoal)', padding: '80px 5vw' }}
        aria-labelledby="property-overview-heading"
      >
        <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Property Overview</p>
        <h2
          className="section-title"
          id="property-overview-heading"
          style={{ color: 'var(--limestone)' }}
        >
          New Mountain Home &mdash; Driggs, Idaho
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2px',
            marginTop: 48,
            border: '1px solid rgba(176,138,74,0.2)',
          }}
          role="list"
          aria-label="Property specifications"
        >
          {specs.map(({ label, value }) => (
            <div
              key={label}
              role="listitem"
              style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '28px 24px',
                borderBottom: '1px solid rgba(176,138,74,0.1)',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(231,224,210,0.4)',
                  marginBottom: 8,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-gfs-didot)',
                  fontSize: 18,
                  color: 'var(--limestone)',
                  letterSpacing: '0.02em',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPTION */}
      <section
        style={{ background: 'var(--snowfield)', padding: '96px 5vw' }}
        aria-labelledby="description-heading"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <p className="section-eyebrow">About This Home</p>
            <h2 className="section-title" id="description-heading">
              A Luxury Mountain Home Built for Teton Valley Living
            </h2>
            <p className="section-sub" style={{ maxWidth: '100%', marginBottom: 24 }}>
              This new construction home in Driggs, Idaho represents what Grand
              Teton Builders does best: mountain homes that are refined without
              being precious, durable without sacrificing beauty, and designed to
              feel like they belong on the landscape.
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                letterSpacing: '0.03em',
                color: 'var(--text-mid)',
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              Situated in Driggs, Idaho in the heart of Teton Valley, the home
              captures the essence of mountain living: expansive views, four-season
              durability, thoughtful flow between indoor and outdoor spaces, and the
              kind of craftsmanship that becomes more beautiful with every passing year.
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                letterSpacing: '0.03em',
                color: 'var(--text-mid)',
                lineHeight: 1.85,
                fontStyle: 'italic',
                opacity: 0.7,
              }}
            >
              [UPDATE: Add specific description of the home including architectural
              style, views, key features, floor plan highlights, exterior materials,
              and interior finishes.]
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=900&q=85"
              alt="New construction mountain home being built in Driggs Idaho by Grand Teton Builders"
              width={900}
              height={600}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHY DRIGGS */}
      <section
        style={{ background: 'var(--charcoal)', padding: '96px 5vw' }}
        aria-labelledby="driggs-heading"
      >
        <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Location</p>
        <h2
          className="section-title"
          id="driggs-heading"
          style={{ color: 'var(--limestone)' }}
        >
          Why Buyers Choose Driggs, Idaho
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
            marginTop: 48,
          }}
        >
          {whyDriggs.map(({ title, desc }) => (
            <div
              key={title}
              style={{
                padding: '32px 28px',
                background: 'rgba(255,255,255,0.04)',
                borderTop: '2px solid rgba(176,138,74,0.3)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-gfs-didot)',
                  fontSize: 18,
                  color: 'var(--limestone)',
                  marginBottom: 12,
                  letterSpacing: '0.02em',
                  fontWeight: 400,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 300,
                  color: 'rgba(231,224,210,0.55)',
                  lineHeight: 1.8,
                  letterSpacing: '0.03em',
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{ background: 'var(--snowfield)', padding: '96px 5vw' }}
        aria-labelledby="gallery-heading"
      >
        <p className="section-eyebrow">Project Gallery</p>
        <h2 className="section-title" id="gallery-heading">
          Renderings &amp; Progress
        </h2>
        <p className="section-sub" style={{ fontStyle: 'italic', opacity: 0.7 }}>
          [UPDATE: Add project renderings, elevation drawings, floor plan
          previews, and construction progress photos as they become available.]
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 6,
            marginTop: 48,
          }}
          role="list"
          aria-label="Project photo gallery"
        >
          {[
            {
              src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85',
              alt: 'New construction luxury mountain home Driggs Idaho exterior rendering',
            },
            {
              src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85',
              alt: 'Luxury kitchen interior in new construction mountain home Driggs Idaho',
            },
            {
              src: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=85',
              alt: 'Grand Teton Builders new construction home Driggs Idaho build progress',
            },
          ].map(({ src, alt }) => (
            <div
              key={src}
              role="listitem"
              style={{ overflow: 'hidden', position: 'relative' }}
            >
              <Image
                src={src}
                alt={alt}
                width={800}
                height={540}
                style={{
                  width: '100%',
                  height: 360,
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'sepia(6%) contrast(1.05)',
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ background: 'var(--limestone)', padding: '96px 5vw' }}
        aria-labelledby="faq-heading"
      >
        <p className="section-eyebrow">Common Questions</p>
        <h2 className="section-title" id="faq-heading">
          Frequently Asked Questions
        </h2>
        <div style={{ marginTop: 48, maxWidth: 800 }}>
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid rgba(31,36,33,0.12)',
                padding: '28px 0',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-gfs-didot)',
                  fontSize: 18,
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  marginBottom: 12,
                  letterSpacing: '0.02em',
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'var(--slate)',
                  lineHeight: 1.8,
                  letterSpacing: '0.03em',
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section
        id="inquiry"
        className="contact"
        style={{ padding: '96px 5vw' }}
        aria-labelledby="inquiry-heading"
      >
        <p className="section-eyebrow">Get in Touch</p>
        <h2 className="section-title" id="inquiry-heading">
          Inquire About This Home
        </h2>
        <p className="section-sub">
          Reach out to request details, ask about finish selections, or schedule
          a private showing of the Driggs, Idaho property.
        </p>
        <div className="contact-inner" style={{ marginTop: 56 }}>
          <div className="contact-info">
            <div className="contact-highlight">
              <p className="contact-highlight-title">New Construction Home &mdash; Driggs, Idaho</p>
              <p className="contact-highlight-body">
                This home is actively under construction and available for
                qualified buyer inquiries. Early inquiries may have the
                opportunity to participate in certain finish selections.
              </p>
            </div>
            <div style={{ marginTop: 24 }}>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--brass)',
                  marginBottom: 12,
                }}
              >
                Also explore
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li>
                  <Link
                    href="/projects"
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.03em' }}
                  >
                    View All Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/custom-home-builders-driggs-idaho"
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.03em' }}
                  >
                    Build a Custom Home in Driggs, Idaho
                  </Link>
                </li>
                <li>
                  <Link
                    href="/spec-homes-driggs-idaho"
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.03em' }}
                  >
                    Future Spec Homes in Driggs, Idaho
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <form className="contact-form" aria-label="Property inquiry form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="inq-first">First Name</label>
                <input type="text" id="inq-first" name="first_name" className="form-input" placeholder="John" autoComplete="given-name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="inq-last">Last Name</label>
                <input type="text" id="inq-last" name="last_name" className="form-input" placeholder="Smith" autoComplete="family-name" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-email">Email</label>
              <input type="email" id="inq-email" name="email" className="form-input" placeholder="john@example.com" autoComplete="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-phone">Phone</label>
              <input type="tel" id="inq-phone" name="phone" className="form-input" placeholder="(208) 555-0000" autoComplete="tel" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-agent">Are you represented by a real estate agent?</label>
              <select id="inq-agent" name="agent" className="form-select">
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="looking">Still deciding</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-timeline">Desired timeline</label>
              <select id="inq-timeline" name="timeline" className="form-select">
                <option>As soon as possible</option>
                <option>Within 6 months</option>
                <option>6-12 months</option>
                <option>Just exploring</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-interest">I am interested in</label>
              <select id="inq-interest" name="interest" className="form-select">
                <option>This Driggs, Idaho home</option>
                <option>A future Grand Teton Builders project</option>
                <option>Both</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inq-message">Message or Questions</label>
              <textarea
                id="inq-message"
                name="message"
                className="form-input"
                placeholder="Tell us what you are looking for, any questions about the home, or request a private showing..."
                rows={5}
              />
            </div>
            <button type="submit" className="form-submit">
              Submit Inquiry
            </button>
            <p
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.04em',
                marginTop: 12,
                lineHeight: 1.6,
              }}
            >
              We respond to all inquiries within one business day.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
