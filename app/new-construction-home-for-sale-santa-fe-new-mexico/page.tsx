import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'The High Desert | New Contemporary Santa Fe Home for Sale at 6 High Desert Vista',
  description:
    'The High Desert at 6 High Desert Vista — a new 3-bedroom contemporary Santa Fe home for sale by Grand Teton Builders. 2,495 sq ft on 2.7 acres with panoramic high desert views. Listed at $1,400,000.',
  alternates: {
    canonical:
      'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
  },
  openGraph: {
    title: 'The High Desert | Contemporary Santa Fe Home for Sale',
    description:
      'New 3-bedroom contemporary Santa Fe home at 6 High Desert Vista — 2,495 sq ft on 2.7 acres with panoramic high desert views. Listed at $1,400,000 by Grand Teton Builders.',
    url: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85',
        width: 1200,
        height: 800,
        alt: 'The High Desert — new contemporary Santa Fe home at 6 High Desert Vista (placeholder image)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85'],
  },
}

/*
  ============================================================================
  PLACEHOLDER IMAGES NOTE
  ============================================================================
  This page uses Unsplash photos as placeholders for The High Desert.
  The home is "substantially complete — staging in early July 2026" per the listing.

  WHEN REAL PHOTOS ARE READY, upload them to /public/ and swap these references:
    1. Hero background (search "PLACEHOLDER-HERO" below)
    2. Description sidebar image (search "PLACEHOLDER-SIDEBAR")
    3. Photo gallery — 3 items in the `photos` array (search "PLACEHOLDER-GALLERY")
    4. Open Graph share image (in `metadata` above)
    5. propertySchema.image[] array (below)
  ============================================================================
*/

const propertySchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  name: 'The High Desert — 6 High Desert Vista, Santa Fe, New Mexico',
  alternateName: 'The High Desert',
  description:
    'The High Desert at 6 High Desert Vista is a new contemporary Santa Fe home featuring 2,495 sq ft of finished living space on a 2.7-acre lot. Built by Grand Teton Builders, the home offers 3 bedrooms, 3 bathrooms, an open-concept floor plan, chef-grade kitchen, fireplace-anchored great room, spa-inspired primary suite, oversize 3-car garage, and panoramic high desert views.',
  image: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6 High Desert Vista',
    addressLocality: 'Santa Fe',
    addressRegion: 'NM',
    postalCode: '87505',
    addressCountry: 'US',
  },
  numberOfBedrooms: 3,
  numberOfBathroomsTotal: 3,
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 2495,
    unitCode: 'FTK',
  },
  lotSize: {
    '@type': 'QuantitativeValue',
    value: 2.7,
    unitCode: 'ACR',
  },
  yearBuilt: 2026,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Open-concept floor plan' },
    { '@type': 'LocationFeatureSpecification', name: 'Chef-grade kitchen with large island and walk-in pantry' },
    { '@type': 'LocationFeatureSpecification', name: 'Fireplace in living room' },
    { '@type': 'LocationFeatureSpecification', name: 'Primary suite with spa-inspired bathroom' },
    { '@type': 'LocationFeatureSpecification', name: 'Dual vanities and walk-in shower' },
    { '@type': 'LocationFeatureSpecification', name: 'Large walk-in primary closet' },
    { '@type': 'LocationFeatureSpecification', name: 'Attached oversize 3-car garage' },
    { '@type': 'LocationFeatureSpecification', name: 'Covered portals and patio for indoor-outdoor living' },
    { '@type': 'LocationFeatureSpecification', name: 'Panoramic high desert views' },
    { '@type': 'LocationFeatureSpecification', name: 'Large energy-efficient windows and doors' },
    { '@type': 'LocationFeatureSpecification', name: 'High ceilings with beams and contemporary finishes' },
    { '@type': 'LocationFeatureSpecification', name: 'Ducted forced air heating and refrigerated air' },
    { '@type': 'LocationFeatureSpecification', name: 'Contemporary Santa Fe architectural design' },
  ],
  offers: {
    '@type': 'Offer',
    price: 1400000,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
  },
  provider: {
    '@type': 'LocalBusiness',
    name: 'Grand Teton Builders',
    url: 'https://grand-teton-builders.vercel.app',
    telephone: '+1-208-262-3669',
    email: 'Hello@grandtetonbuilders.com',
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
      name: 'The High Desert — Contemporary Santa Fe Home for Sale',
      item: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
    },
  ],
}

const faqs = [
  {
    q: 'Is 6 High Desert Vista currently for sale?',
    a: 'Yes. The High Desert at 6 High Desert Vista is currently listed for sale at $1,400,000. The home is substantially complete, with staging scheduled for early July. Contact Grand Teton Builders to schedule a private showing or request additional information.',
  },
  {
    q: 'How big is the home and what is the floor plan?',
    a: 'The home offers 2,495 sq ft of finished living space with 3 bedrooms, 3 bathrooms, and an attached oversize 3-car garage on a 2.7-acre lot. The open-concept floor plan features a chef-grade kitchen with high-end appliances, custom cabinetry, a large island, and a walk-in pantry. The great room is anchored by a fireplace and large windows framing the surrounding landscape. The private primary suite includes outdoor access, a spa-inspired bathroom with dual vanities and a walk-in shower, and a large walk-in closet. Two additional guest bedrooms are thoughtfully separated for privacy, and a flexible space can be used as a home office, studio, or media room.',
  },
  {
    q: 'When was the home built?',
    a: 'The High Desert was built in 2026 by Grand Teton Builders. The home is substantially complete and ready for buyers, with final staging completing in early July.',
  },
  {
    q: 'Where is the home located?',
    a: 'The home is located at 6 High Desert Vista in Santa Fe, New Mexico (87505), on a private 2.7-acre lot with expansive high desert views. The property offers privacy and open skies while remaining within an easy drive of central Santa Fe.',
  },
  {
    q: 'What does the listing include?',
    a: 'The listing price is $1,400,000 with monthly HOA dues of $150. Contact Grand Teton Builders for current availability, complete property details, and to discuss the home.',
  },
  {
    q: 'Can I schedule a private showing?',
    a: 'Yes. Qualified buyers can schedule a private showing by calling (208) 262-3669 or emailing Hello@grandtetonbuilders.com.',
  },
  {
    q: 'Does Grand Teton Builders build outside of Idaho?',
    a: 'Yes. Grand Teton Builders develops the majority of our homes in Driggs and the Teton Valley in Idaho. The High Desert in Santa Fe represents a select project completed in another quality-driven mountain and high desert market that aligns with our standards for thoughtful design, durable construction, and refined craftsmanship.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

const specs = [
  { label: 'Home Name', value: 'The High Desert' },
  { label: 'Address', value: '6 High Desert Vista' },
  { label: 'Location', value: 'Santa Fe, New Mexico' },
  { label: 'Lot Size', value: '2.7 acres' },
  { label: 'Home Style', value: 'Contemporary Santa Fe' },
  { label: 'Finished Living Area', value: '2,495 sq ft' },
  { label: 'Bedrooms', value: '3' },
  { label: 'Bathrooms', value: '3' },
  { label: 'Garage', value: 'Oversize 3-car attached' },
  { label: 'Year Built', value: '2026' },
  { label: 'Status', value: 'For Sale — Substantially Complete' },
  { label: 'Price', value: '$1,400,000' },
  { label: 'HOA', value: '$150 / month' },
]

const features = [
  'New construction contemporary Santa Fe home, completed 2026',
  '2,495 sq ft of finished living space',
  '3 bedrooms and 3 bathrooms',
  '2.7-acre lot with expansive high desert views',
  'Open-concept great room, dining, and kitchen',
  'Chef-grade kitchen with high-end appliances, custom cabinetry, large island, and walk-in pantry',
  'Living area centered on a fireplace with large windows framing the landscape',
  'Private primary suite with outdoor access',
  'Spa-inspired primary bathroom with dual vanities and walk-in shower',
  'Large walk-in primary closet',
  'Guest bedrooms thoughtfully separated for privacy',
  'Flexible space — ideal for a home office, studio, or media room',
  'Covered portals and patio for indoor-outdoor living',
  'Large energy-efficient windows and doors',
  'High ceilings with beams and contemporary finishes',
  'Ducted forced air heating and refrigerated air',
  'Attached oversize 3-car garage',
  'High-quality finishes and materials throughout',
]

// PLACEHOLDER-GALLERY: swap these src URLs with real property photos when available
const photos = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
    alt: 'The High Desert — front elevation of the contemporary Santa Fe home at 6 High Desert Vista (placeholder image — replace with actual photo)',
    caption: 'Front elevation',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85',
    alt: 'The High Desert — exterior detail showing contemporary Santa Fe architecture (placeholder image — replace with actual photo)',
    caption: 'Architectural detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=85',
    alt: 'The High Desert — high desert landscape and views from the property (placeholder image — replace with actual photo)',
    caption: 'High desert setting',
  },
]

const whySantaFe = [
  {
    title: 'High Desert Setting',
    desc: 'Dramatic landscapes, open skies, and panoramic vistas in one of the most distinctive natural environments in the American Southwest.',
  },
  {
    title: 'Santa Fe Culture',
    desc: 'A renowned destination for art, cuisine, history, and design — consistently ranked among the most desirable cultural cities in the United States.',
  },
  {
    title: 'Four-Season Recreation',
    desc: 'Skiing at Ski Santa Fe in winter, hiking and cycling in summer, and access to hot springs, fly fishing, and mountain trails throughout the year.',
  },
  {
    title: 'Architectural Heritage',
    desc: 'A region defined by centuries of Pueblo and Spanish design traditions, reinterpreted today through refined contemporary architecture.',
  },
  {
    title: 'Climate & Light',
    desc: 'More than 300 days of sunshine annually, a dry climate, and the famously clear high-desert light that has drawn artists and residents for generations.',
  },
  {
    title: 'Established Luxury Market',
    desc: 'A mature second-home and lifestyle market with consistent long-term interest from buyers across the Southwest, West Coast, and Mountain regions.',
  },
]

export default function SantaFeHomePage() {
  return (
    <>
      <SchemaOrg schema={propertySchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      <Nav />

      <main>
        {/* HERO — PLACEHOLDER-HERO: replace Unsplash URL below with real hero photo */}
        <section
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(31,36,33,0.4) 0%, rgba(31,36,33,0.6) 50%, rgba(31,36,33,0.97) 100%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85')",
            paddingTop: 116,
          }}
          aria-label="The High Desert hero"
        >
          <div className="hero-content">
            <p className="hero-eyebrow">For Sale &mdash; 6 High Desert Vista</p>
            <h1>
              The High Desert<br />
              in <em>Santa Fe, New Mexico</em>
            </h1>
            <p>
              A new contemporary Santa Fe home set on 2.7 acres with panoramic
              high desert views &mdash; designed and built for modern luxury,
              indoor-outdoor living, and the dramatic beauty of the Southwest.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 24,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-gfs-didot)',
                  fontSize: 'clamp(28px, 3.5vw, 38px)',
                  color: 'var(--brass)',
                  letterSpacing: '0.02em',
                }}
              >
                $1,400,000
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: 14,
                  alignItems: 'center',
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.65)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  flexWrap: 'wrap',
                }}
              >
                <span>3 BD &middot; 3 BA</span>
                <span style={{ opacity: 0.4 }}>&middot;</span>
                <span>2,495 sq ft</span>
                <span style={{ opacity: 0.4 }}>&middot;</span>
                <span>2.7 Acres</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#inquiry" className="btn-primary">
                Inquire About The High Desert
              </a>
              <a href="#details" className="btn-outline">
                View Property Details
              </a>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">Scroll</div>
        </section>

        {/* PROPERTY OVERVIEW */}
        <section
          id="details"
          style={{ background: 'var(--charcoal)', padding: '80px 5vw' }}
          aria-labelledby="property-overview-heading"
        >
          <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Property Snapshot</p>
          <h2
            className="section-title"
            id="property-overview-heading"
            style={{ color: 'var(--limestone)' }}
          >
            The High Desert &mdash; 6 High Desert Vista
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
              <p className="section-eyebrow">About The High Desert</p>
              <h2 className="section-title" id="description-heading">
                A New Contemporary Santa Fe Home Built for the High Desert
              </h2>
              <p className="section-sub" style={{ maxWidth: '100%', marginBottom: 24 }}>
                The High Desert at 6 High Desert Vista is a thoughtfully designed
                contemporary Santa Fe home that brings together modern luxury and
                the tranquil beauty of the high desert landscape. Set on a
                2.7-acre homesite with expansive views, the home is designed to
                capture natural light, dramatic sunsets, and panoramic vistas
                from nearly every room.
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
                The open-concept floor plan brings together spacious living and
                dining areas that flow seamlessly into a chef-grade kitchen with
                high-end appliances, custom cabinetry, a large island, and
                generous walk-in pantry space. The great room is centered on a
                fireplace and framed by large windows, creating a warm and
                inviting setting for both everyday living and entertaining.
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
                The private primary suite is designed as a retreat, with direct
                outdoor access, a spa-inspired bathroom, dual vanities, a
                walk-in shower, and a large walk-in closet. Guest bedrooms are
                thoughtfully separated for privacy and comfort, and a flexible
                room is suited to use as a home office, studio, or media room.
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  letterSpacing: '0.03em',
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                }}
              >
                Outdoor living is central to the design. Covered portals and
                patio areas extend the living space outdoors and take full
                advantage of the views and the Santa Fe climate. High ceilings
                with beams, energy-efficient windows, ducted forced air heating
                with refrigerated air, and high-quality finishes complete a home
                designed for comfort, durability, and indoor-outdoor living in a
                beautiful high desert setting.
              </p>
            </div>
            <div>
              {/* PLACEHOLDER-SIDEBAR: swap with vertical/portrait property photo when ready */}
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85"
                alt="The High Desert — placeholder vertical image of contemporary Santa Fe home interior, to be replaced with actual property photo"
                width={1000}
                height={1400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* PHOTOS GALLERY */}
        <section
          style={{ background: 'var(--charcoal)', padding: '96px 5vw' }}
          aria-labelledby="photos-heading"
        >
          <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Photos</p>
          <h2
            className="section-title"
            id="photos-heading"
            style={{ color: 'var(--limestone)' }}
          >
            The High Desert in Detail
          </h2>
          <p className="section-sub" style={{ color: 'rgba(231,224,210,0.6)' }}>
            Photos of the new contemporary Santa Fe home at 6 High Desert Vista.
            Additional photography will follow staging completion in early July.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
              marginTop: 48,
            }}
            role="list"
            aria-label="The High Desert photos"
          >
            {photos.map(({ src, alt, caption }) => (
              <figure
                key={src}
                role="listitem"
                style={{
                  margin: 0,
                  background: 'rgba(255,255,255,0.04)',
                  borderTop: '2px solid rgba(176,138,74,0.3)',
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={1240}
                  height={1240}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
                <figcaption
                  style={{
                    padding: '18px 22px',
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(231,224,210,0.6)',
                  }}
                >
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section
          style={{ background: 'var(--limestone)', padding: '96px 5vw' }}
          aria-labelledby="features-heading"
        >
          <p className="section-eyebrow">Home Features</p>
          <h2 className="section-title" id="features-heading">
            What&rsquo;s Included at The High Desert
          </h2>
          <ul
            style={{
              listStyle: 'none',
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '14px 32px',
              maxWidth: 1100,
            }}
            aria-label="Home features list"
          >
            {features.map((feat) => (
              <li
                key={feat}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'var(--charcoal)',
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    width: 6,
                    height: 6,
                    background: 'var(--brass)',
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                {feat}
              </li>
            ))}
          </ul>
        </section>

        {/* WHY SANTA FE */}
        <section
          style={{ background: 'var(--charcoal)', padding: '96px 5vw' }}
          aria-labelledby="santa-fe-heading"
        >
          <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Location</p>
          <h2
            className="section-title"
            id="santa-fe-heading"
            style={{ color: 'var(--limestone)' }}
          >
            Why Buyers Choose Santa Fe, New Mexico
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
              marginTop: 48,
            }}
          >
            {whySantaFe.map(({ title, desc }) => (
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

        {/* FAQ */}
        <section
          style={{ background: 'var(--snowfield)', padding: '96px 5vw' }}
          aria-labelledby="faq-heading"
        >
          <p className="section-eyebrow">Common Questions</p>
          <h2 className="section-title" id="faq-heading">
            Frequently Asked Questions
          </h2>
          <div style={{ marginTop: 48, maxWidth: 820 }}>
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

        {/* INQUIRY */}
        <section
          id="inquiry"
          className="contact"
          style={{ padding: '96px 5vw' }}
          aria-labelledby="inquiry-heading"
        >
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title" id="inquiry-heading">
            Inquire About The High Desert
          </h2>
          <p className="section-sub">
            Request additional details, schedule a private showing, or discuss
            the listing with Grand Teton Builders.
          </p>
          <div className="contact-inner" style={{ marginTop: 56 }}>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4CD;</div>
                <div>
                  <div className="contact-item-label">Property Address</div>
                  <div className="contact-item-val">6 High Desert Vista, Santa Fe, NM 87505</div>
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
                <p className="contact-highlight-title">The High Desert &mdash; For Sale</p>
                <p className="contact-highlight-body">
                  Listed at $1,400,000. The home is substantially complete, with
                  staging in early July. Qualified buyers are welcome to request
                  a private showing.
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
                  Also Explore
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <li>
                    <Link
                      href="/new-construction-home-for-sale-driggs-idaho"
                      style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.03em' }}
                    >
                      The Powder Chalet &mdash; Driggs, Idaho
                    </Link>
                  </li>
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
                      Custom Builds by Grand Teton Builders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Inquiry form removed — placeholder reserves grid space until custom form is added */}
            <div className="contact-form" aria-hidden="true" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
