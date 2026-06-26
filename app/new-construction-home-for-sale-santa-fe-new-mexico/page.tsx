import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

const PHOTOS_DIR = '/6-high-desert-vista'
const PHOTOS_DIR_ABS = 'https://grand-teton-builders.vercel.app/6-high-desert-vista'

const HERO_IMAGE = `${PHOTOS_DIR}/06-front-exterior-aerial-modern-desert-home-sunset-light.jpg`
const HERO_IMAGE_ABS = `${PHOTOS_DIR_ABS}/06-front-exterior-aerial-modern-desert-home-sunset-light.jpg`
const SIDEBAR_IMAGE = `${PHOTOS_DIR}/04-front-exterior-aerial-desert-modern-home-mountain-backdrop.jpg`

export const metadata: Metadata = {
  title: '6 High Desert Vista | New Contemporary Santa Fe Home for Sale',
  description:
    '6 High Desert Vista — a new 3-bedroom Contemporary Pueblo home for sale in the gated Longview community, Santa Fe. 2,495 sq ft on 2.7 acres with panoramic high desert views. Listed at $1,400,000.',
  alternates: {
    canonical:
      'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
  },
  openGraph: {
    title: '6 High Desert Vista | Contemporary Santa Fe Home for Sale',
    description:
      'New 3-bedroom Contemporary Pueblo home at 6 High Desert Vista — 2,495 sq ft on 2.7 acres in the gated Longview community with panoramic high desert views. Listed at $1,400,000.',
    url: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
    images: [
      {
        url: HERO_IMAGE_ABS,
        width: 1600,
        height: 1067,
        alt: '6 High Desert Vista — sunset aerial of the new Contemporary Pueblo home in Santa Fe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [HERO_IMAGE_ABS],
  },
}

const propertySchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  name: '6 High Desert Vista, Santa Fe, New Mexico',
  description:
    '6 High Desert Vista is a new Contemporary Pueblo home developed by Grand Teton Builders in partnership with HiLow Builders. The home features 2,495 sq ft of single-level finished living on a 2.7-acre lot in the gated Longview community, with 3 bedrooms, 3 bathrooms (2 full, 1 half), an open-concept floor plan, chef-grade kitchen with ENERGY STAR appliances, gas fireplace, concrete flooring, exposed beams, spa-inspired primary suite, attached 3-car garage, and panoramic high desert views.',
  image: [
    `${PHOTOS_DIR_ABS}/06-front-exterior-aerial-modern-desert-home-sunset-light.jpg`,
    `${PHOTOS_DIR_ABS}/04-front-exterior-aerial-desert-modern-home-mountain-backdrop.jpg`,
    `${PHOTOS_DIR_ABS}/02-rear-exterior-aerial-desert-modern-home-mountain-views.jpg`,
    `${PHOTOS_DIR_ABS}/15-open-concept-great-room-with-beams-and-fireplace.jpg`,
    `${PHOTOS_DIR_ABS}/16-great-room-facing-covered-patio-and-mountain-views.jpg`,
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
  numberOfFullBathrooms: 2,
  numberOfPartialBathrooms: 1,
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
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Architectural Style',
      value: 'Contemporary Pueblo',
    },
    {
      '@type': 'PropertyValue',
      name: 'Build Partner',
      value: 'HiLow Builders',
    },
    {
      '@type': 'PropertyValue',
      name: 'Subdivision',
      value: 'Longview (Gated Community)',
    },
    {
      '@type': 'PropertyValue',
      name: 'Parcel Number',
      value: '099305643',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Contemporary Pueblo architectural style' },
    { '@type': 'LocationFeatureSpecification', name: 'Single-level living with no interior steps' },
    { '@type': 'LocationFeatureSpecification', name: 'Open-concept great room, dining, and kitchen' },
    { '@type': 'LocationFeatureSpecification', name: 'Chef-grade kitchen with large island and walk-in pantry' },
    { '@type': 'LocationFeatureSpecification', name: 'ENERGY STAR appliances: dishwasher, disposal, oven, range, refrigerator' },
    { '@type': 'LocationFeatureSpecification', name: 'Gas fireplace with insert in great room' },
    { '@type': 'LocationFeatureSpecification', name: 'Concrete flooring throughout' },
    { '@type': 'LocationFeatureSpecification', name: 'High ceilings with exposed beams' },
    { '@type': 'LocationFeatureSpecification', name: 'Insulated windows' },
    { '@type': 'LocationFeatureSpecification', name: 'Primary suite with spa-inspired bathroom, dual vanities, and walk-in shower' },
    { '@type': 'LocationFeatureSpecification', name: 'Large walk-in primary closet' },
    { '@type': 'LocationFeatureSpecification', name: 'Forced air heating (propane)' },
    { '@type': 'LocationFeatureSpecification', name: 'Central refrigerated cooling' },
    { '@type': 'LocationFeatureSpecification', name: 'Tankless water heater (ENERGY STAR)' },
    { '@type': 'LocationFeatureSpecification', name: 'Frame construction with slab foundation and flat membrane roof' },
    { '@type': 'LocationFeatureSpecification', name: 'Shared well water and septic system' },
    { '@type': 'LocationFeatureSpecification', name: 'Low-flow plumbing fixtures and water-smart landscaping' },
    { '@type': 'LocationFeatureSpecification', name: 'High-speed internet available' },
    { '@type': 'LocationFeatureSpecification', name: '220V electrical service' },
    { '@type': 'LocationFeatureSpecification', name: 'Attached 3-car garage (6 total parking spaces)' },
    { '@type': 'LocationFeatureSpecification', name: 'Covered portals and patio for indoor-outdoor living' },
    { '@type': 'LocationFeatureSpecification', name: 'Panoramic high desert views on 2.7-acre lot' },
    { '@type': 'LocationFeatureSpecification', name: 'Gated Longview community with security' },
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
      name: '6 High Desert Vista — Contemporary Santa Fe Home for Sale',
      item: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-santa-fe-new-mexico',
    },
  ],
}

const faqs = [
  {
    q: 'Is 6 High Desert Vista currently for sale?',
    a: 'Yes. 6 High Desert Vista is currently listed for sale at $1,400,000. The home is substantially complete, with staging scheduled for early July. Contact Grand Teton Builders to schedule a private showing or request additional information.',
  },
  {
    q: 'Who built 6 High Desert Vista?',
    a: '6 High Desert Vista was developed by Grand Teton Builders in partnership with HiLow Builders, a Santa Fe-based builder with deep familiarity with the regional design vernacular and local construction practices. The collaboration brought together Grand Teton Builders\u2019 standards for thoughtful design, durable construction, and refined craftsmanship with HiLow Builders\u2019 Santa Fe expertise.',
  },
  {
    q: 'How big is the home and what is the floor plan?',
    a: 'The home offers 2,495 sq ft of single-level finished living with 3 bedrooms, 3 bathrooms (2 full, 1 half), and an attached 3-car garage with 6 total parking spaces on a 2.7-acre lot. The open-concept floor plan features a chef-grade kitchen with ENERGY STAR appliances, custom cabinetry, a large island, and a walk-in pantry. The great room is anchored by a gas fireplace and large insulated windows framing the surrounding landscape. The private primary suite includes outdoor access, a spa-inspired bathroom with dual vanities and a walk-in shower, and a large walk-in closet. Two additional guest bedrooms are thoughtfully separated for privacy, and a flexible space can be used as a home office, studio, or media room.',
  },
  {
    q: 'What architectural style is the home?',
    a: '6 High Desert Vista is designed in a Contemporary Pueblo style, combining clean modern architecture with the heritage of Southwestern design. The home features a flat membrane roof, exposed beams, concrete flooring throughout, and high ceilings \u2014 finishes that align with both the Santa Fe vernacular and contemporary luxury construction.',
  },
  {
    q: 'What are the heating, cooling, and utility systems?',
    a: 'The home uses forced air heating (propane) with central refrigerated cooling. Water is supplied via a shared well with a septic system on the property. An ENERGY STAR tankless water heater serves the home, and low-flow plumbing fixtures plus water-smart landscaping support water conservation. Electrical service is 220 volts, and high-speed internet is available.',
  },
  {
    q: 'Where is the home located?',
    a: 'The home is located at 6 High Desert Vista in the gated Longview community in Santa Fe, New Mexico (87505), on a private 2.7-acre lot with expansive high desert views. The property offers privacy, open skies, and gated security while remaining within an easy drive of central Santa Fe.',
  },
  {
    q: 'What does the HOA cover and what is the listing price?',
    a: 'The listing price is $1,400,000. HOA dues are $450 per quarter (approximately $150 per month) and cover common areas, insurance, road maintenance, and security in the gated Longview community. Contact Grand Teton Builders for current availability and complete property details.',
  },
  {
    q: 'Can I schedule a private showing?',
    a: 'Yes. Qualified buyers can schedule a private showing by calling (208) 262-3669 or emailing Hello@grandtetonbuilders.com.',
  },
  {
    q: 'Does Grand Teton Builders build outside of Idaho?',
    a: 'Yes. Grand Teton Builders develops the majority of our homes in Driggs and the Teton Valley in Idaho. 6 High Desert Vista in Santa Fe was developed in partnership with Santa Fe-based HiLow Builders \u2014 a collaboration that brought Grand Teton Builders\u2019 standards for thoughtful design, durable construction, and refined craftsmanship to a new market and a new architectural style.',
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
  { label: 'Address', value: '6 High Desert Vista' },
  { label: 'Location', value: 'Santa Fe, New Mexico' },
  { label: 'Subdivision', value: 'Longview (Gated)' },
  { label: 'Lot Size', value: '2.7 acres' },
  { label: 'Architectural Style', value: 'Contemporary Pueblo' },
  { label: 'Finished Living Area', value: '2,495 sq ft' },
  { label: 'Bedrooms', value: '3' },
  { label: 'Bathrooms', value: '3 (2 full, 1 half)' },
  { label: 'Stories', value: '1' },
  { label: 'Garage', value: '3-car attached (6 total spaces)' },
  { label: 'Year Built', value: '2026' },
  { label: 'Builders', value: 'Grand Teton Builders & HiLow Builders' },
  { label: 'Status', value: 'For Sale — Substantially Complete' },
  { label: 'Price', value: '$1,400,000' },
  { label: 'HOA', value: '$450 / quarter (~$150 / mo)' },
  { label: 'Parcel Number', value: '099305643' },
]

const features = [
  '2,495 sq ft of single-level finished living with no interior steps',
  '3 bedrooms and 3 bathrooms (2 full, 1 half)',
  'Open-concept great room, dining, and kitchen',
  'Chef-grade kitchen with custom cabinetry, large island, and walk-in pantry',
  'ENERGY STAR appliances included: dishwasher, disposal, oven, range, refrigerator',
  'Gas fireplace with insert in the great room',
  'Concrete flooring throughout',
  'High ceilings with exposed beams',
  'Insulated windows',
  'Private primary suite with outdoor access',
  'Spa-inspired primary bath with dual vanities and walk-in shower',
  'Large walk-in primary closet',
  'Guest bedrooms thoughtfully separated for privacy',
  'Flexible space — ideal for a home office, studio, or media room',
  'Covered portals and patio for indoor-outdoor living',
  '2.7-acre lot with panoramic high desert views',
  'Attached 3-car garage (6 total parking spaces)',
  'Located in the gated Longview community',
]

const constructionSystems = [
  {
    title: 'Construction & Materials',
    items: [
      'Contemporary Pueblo architectural style',
      'Frame construction',
      'Slab foundation',
      'Flat membrane roof',
      'New construction, completed 2026',
    ],
  },
  {
    title: 'Heating, Cooling & Water',
    items: [
      'Forced air heating (propane)',
      'Central refrigerated cooling',
      'Tankless water heater (ENERGY STAR)',
      'Shared well water supply',
      'Septic system',
    ],
  },
  {
    title: 'Site, Utilities & Community',
    items: [
      '2.7-acre lot in gated Longview community',
      '220V electrical service',
      'High-speed internet available',
      'Low-flow plumbing fixtures',
      'Water-smart landscaping',
      'HOA: $450 / quarter (common areas, insurance, road maintenance, security)',
    ],
  },
]

// 16 photos — full aerial sequence + interiors, ordered as a visual property tour
const photos = [
  {
    src: `${PHOTOS_DIR}/04-front-exterior-aerial-desert-modern-home-mountain-backdrop.jpg`,
    alt: '6 High Desert Vista — front exterior aerial with mountain backdrop in Santa Fe',
    caption: 'Front with mountain backdrop',
  },
  {
    src: `${PHOTOS_DIR}/06-front-exterior-aerial-modern-desert-home-sunset-light.jpg`,
    alt: '6 High Desert Vista — front exterior aerial in golden sunset light',
    caption: 'Golden hour',
  },
  {
    src: `${PHOTOS_DIR}/08-front-exterior-straight-on-aerial-modern-desert-home.jpg`,
    alt: '6 High Desert Vista — straight-on aerial of the front exterior',
    caption: 'Straight-on aerial',
  },
  {
    src: `${PHOTOS_DIR}/07-front-exterior-oblique-aerial-modern-desert-home.jpg`,
    alt: '6 High Desert Vista — oblique aerial view of the front exterior',
    caption: 'Oblique aerial',
  },
  {
    src: `${PHOTOS_DIR}/09-front-exterior-right-angle-aerial-modern-desert-home.jpg`,
    alt: '6 High Desert Vista — right-angle aerial showing the garage and entry',
    caption: 'Right-angle aerial',
  },
  {
    src: `${PHOTOS_DIR}/12-front-exterior-overhead-aerial-modern-desert-home.jpg`,
    alt: '6 High Desert Vista — overhead aerial showing the home and site plan',
    caption: 'Overhead aerial',
  },
  {
    src: `${PHOTOS_DIR}/10-side-exterior-aerial-modern-desert-home-views.jpg`,
    alt: '6 High Desert Vista — side exterior aerial showing the mountain landscape',
    caption: 'Side elevation',
  },
  {
    src: `${PHOTOS_DIR}/02-rear-exterior-aerial-desert-modern-home-mountain-views.jpg`,
    alt: '6 High Desert Vista — rear exterior aerial with mountain views',
    caption: 'Rear with mountain views',
  },
  {
    src: `${PHOTOS_DIR}/05-rear-exterior-aerial-desert-modern-home-wide-valley-views.jpg`,
    alt: '6 High Desert Vista — rear exterior aerial with wide valley views',
    caption: 'Wide valley panorama',
  },
  {
    src: `${PHOTOS_DIR}/03-elevated-aerial-rooftop-and-valley-mountain-views.jpg`,
    alt: '6 High Desert Vista — elevated aerial showing rooftop and valley mountain views at dusk',
    caption: 'Rooftop & valley views',
  },
  {
    src: `${PHOTOS_DIR}/11-covered-front-entry-modern-desert-home.jpg`,
    alt: '6 High Desert Vista — covered front entry detail at the Contemporary Pueblo home',
    caption: 'Covered front entry',
  },
  {
    src: `${PHOTOS_DIR}/14-entry-foyer-with-beamed-ceiling-and-tile-floors.jpg`,
    alt: '6 High Desert Vista — entry foyer with beamed ceiling and tile floors',
    caption: 'Entry foyer with beams',
  },
  {
    src: `${PHOTOS_DIR}/15-open-concept-great-room-with-beams-and-fireplace.jpg`,
    alt: '6 High Desert Vista — open-concept great room with exposed beams and gas fireplace',
    caption: 'Great room with beams & fireplace',
  },
  {
    src: `${PHOTOS_DIR}/16-great-room-facing-covered-patio-and-mountain-views.jpg`,
    alt: '6 High Desert Vista — great room facing covered patio and mountain views',
    caption: 'Great room to outdoor patio',
  },
  {
    src: `${PHOTOS_DIR}/17-open-living-and-kitchen-space-new-construction-home.jpg`,
    alt: '6 High Desert Vista — open living and kitchen space in the new construction home',
    caption: 'Open living & kitchen',
  },
  {
    src: `${PHOTOS_DIR}/13-bedroom-with-large-picture-windows-and-tile-floor.jpg`,
    alt: '6 High Desert Vista — bedroom with large picture windows framing high desert views',
    caption: 'Bedroom with picture windows',
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
        {/* HERO */}
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(31,36,33,0.4) 0%, rgba(31,36,33,0.6) 50%, rgba(31,36,33,0.97) 100%), url('${HERO_IMAGE}')`,
            paddingTop: 116,
          }}
          aria-label="6 High Desert Vista hero"
        >
          <div className="hero-content">
            <p className="hero-eyebrow">For Sale &mdash; Longview, Santa Fe</p>
            <h1>
              6 High Desert Vista<br />
              in <em>Santa Fe, New Mexico</em>
            </h1>
            <p>
              A new Contemporary Pueblo home set on 2.7 acres in the gated
              Longview community &mdash; designed and built for modern luxury,
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
                Inquire About 6 High Desert Vista
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
            6 High Desert Vista
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
                    lineHeight: 1.3,
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
              <p className="section-eyebrow">About 6 High Desert Vista</p>
              <h2 className="section-title" id="description-heading">
                A New Contemporary Pueblo Home Built for the High Desert
              </h2>
              <p className="section-sub" style={{ maxWidth: '100%', marginBottom: 24 }}>
                6 High Desert Vista is a thoughtfully designed Contemporary
                Pueblo home, developed by Grand Teton Builders in partnership
                with Santa Fe-based HiLow Builders. The home brings together
                clean modern architecture and the Southwestern design heritage
                of Santa Fe. Set on a 2.7-acre homesite in the gated Longview
                community, it is designed to capture natural light, dramatic
                sunsets, and panoramic high desert vistas from nearly every
                room.
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
                ENERGY STAR appliances, custom cabinetry, a large island, and a
                generous walk-in pantry. The great room is centered on a gas
                fireplace and framed by large insulated windows, creating a warm
                and inviting setting for both everyday living and entertaining.
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
                walk-in shower, and a large walk-in closet. Two guest bedrooms
                are thoughtfully separated for privacy and comfort, and a
                flexible room is suited to use as a home office, studio, or
                media room.
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
                advantage of the high desert views and the Santa Fe climate.
                Concrete flooring throughout, high ceilings with exposed beams,
                an ENERGY STAR tankless water heater, forced air propane heating
                with central refrigerated cooling, and high-quality finishes
                complete a home designed for comfort, durability, and
                indoor-outdoor living in a beautiful high desert setting.
              </p>
            </div>
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                src={SIDEBAR_IMAGE}
                alt="6 High Desert Vista — aerial view of the Contemporary Pueblo home with mountain backdrop in Santa Fe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* PHOTOS GALLERY — square cards */}
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
            6 High Desert Vista in Detail
          </h2>
          <p className="section-sub" style={{ color: 'rgba(231,224,210,0.6)' }}>
            Aerial and interior photography of the new Contemporary Pueblo home
            at 6 High Desert Vista. Final furnishings and styling to follow
            staging completion in early July.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
              marginTop: 48,
            }}
            role="list"
            aria-label="6 High Desert Vista photos"
          >
            {photos.map(({ src, alt, caption }) => (
              <figure
                key={src}
                role="listitem"
                style={{
                  margin: 0,
                  background: 'rgba(255,255,255,0.04)',
                  borderTop: '2px solid rgba(176,138,74,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
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
            What&rsquo;s Included at 6 High Desert Vista
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

        {/* CONSTRUCTION & SYSTEMS */}
        <section
          style={{ background: 'var(--snowfield)', padding: '96px 5vw' }}
          aria-labelledby="construction-heading"
        >
          <p className="section-eyebrow">Specifications</p>
          <h2 className="section-title" id="construction-heading">
            Construction &amp; Systems
          </h2>
          <p className="section-sub">
            The home is built to durable, energy-conscious specifications &mdash;
            grounded in Contemporary Pueblo architecture and outfitted with
            modern systems throughout.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              marginTop: 48,
            }}
            role="list"
            aria-label="Construction and systems specifications"
          >
            {constructionSystems.map(({ title, items }) => (
              <div
                key={title}
                role="listitem"
                style={{
                  background: '#fff',
                  padding: '32px 28px',
                  borderTop: '2px solid var(--brass)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-gfs-didot)',
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'var(--charcoal)',
                    marginBottom: 20,
                    letterSpacing: '0.02em',
                  }}
                >
                  {title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontSize: 13,
                        fontWeight: 400,
                        color: 'var(--slate)',
                        lineHeight: 1.6,
                        letterSpacing: '0.02em',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'block',
                          width: 5,
                          height: 5,
                          background: 'var(--brass)',
                          marginTop: 7,
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
            Inquire About 6 High Desert Vista
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
                <p className="contact-highlight-title">6 High Desert Vista &mdash; For Sale</p>
                <p className="contact-highlight-body">
                  Listed at $1,400,000. The home is substantially complete, with
                  staging in early July. Developed by Grand Teton Builders in
                  partnership with HiLow Builders. Qualified buyers are welcome
                  to request a private showing.
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
