import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'The Powder Chalet | New 4-Bedroom Mountain Modern Home for Sale in Driggs, Idaho',
  description:
    'The Powder Chalet at 1230 Wind River Trail — a new 4-bedroom mountain modern home in Driggs, Idaho with 2,258 sq ft, 2.5 baths, office/flex bedroom, attached 2-car garage, and large patio.',
  alternates: {
    canonical:
      'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-driggs-idaho',
  },
  openGraph: {
    title: 'The Powder Chalet | New 4-Bedroom Mountain Modern Home for Sale in Driggs, Idaho',
    description:
      'The Powder Chalet at 1230 Wind River Trail — a new 4-bedroom mountain modern home in Driggs, Idaho with 2,258 sq ft, 2.5 baths, office/flex bedroom, attached 2-car garage, and large patio.',
    url: 'https://grand-teton-builders.vercel.app/new-construction-home-for-sale-driggs-idaho',
    images: [
      {
        url: '/powder-chalet-front-sunset.png',
        width: 1240,
        height: 1245,
        alt: 'The Powder Chalet — new 4-bedroom mountain modern home at 1230 Wind River Trail in Driggs, Idaho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/powder-chalet-front-sunset.png'],
  },
}

const propertyDetails = {
  name: 'The Powder Chalet',
  address: '1230 Wind River Trail',
  subdivision: 'Shoshoni Plains',
  status: 'Coming Soon / Pre-Construction',
  style: 'Mountain Modern',
  sqft: '2,258 sq ft',
  bedrooms: '4',
  bathrooms: '2.5',
  garage: '692 sq ft, 2-car attached',
  patio: '882 sq ft concrete patio/deck',
  layout: 'Single-level living',
  price: 'Price available upon request',
}

const propertySchema = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  name: 'The Powder Chalet — 1230 Wind River Trail, Driggs, Idaho',
  alternateName: 'The Powder Chalet',
  description:
    'The Powder Chalet is a new 4-bedroom mountain modern home in Driggs, Idaho featuring 2,258 sq ft of single-level living, an open-concept main living area, primary suite, office/flex bedroom, 2.5 bathrooms, attached 2-car garage, and 882 sq ft of patio space. Located in Shoshoni Plains, Teton Valley.',
  image: [
    'https://grand-teton-builders.vercel.app/powder-chalet-front-sunset.png',
    'https://grand-teton-builders.vercel.app/powder-chalet-front-elevation-square.png',
    'https://grand-teton-builders.vercel.app/powder-chalet-side-elevation-square.png',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1230 Wind River Trail',
    addressLocality: 'Driggs',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  numberOfBedrooms: 4,
  numberOfBathroomsTotal: 2.5,
  numberOfFullBathrooms: 2,
  numberOfPartialBathrooms: 1,
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 2258,
    unitCode: 'FTK',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Open-concept great room, dining, and kitchen' },
    { '@type': 'LocationFeatureSpecification', name: 'Large kitchen island and walk-in pantry' },
    { '@type': 'LocationFeatureSpecification', name: 'Primary suite with walk-in closet' },
    { '@type': 'LocationFeatureSpecification', name: 'Office/flex bedroom with closet' },
    { '@type': 'LocationFeatureSpecification', name: 'Attached 2-car garage (692 sq ft)' },
    { '@type': 'LocationFeatureSpecification', name: 'Single-level living' },
    { '@type': 'LocationFeatureSpecification', name: '882 sq ft concrete patio/deck' },
    { '@type': 'LocationFeatureSpecification', name: 'Mountain modern exterior with wood siding and stone accents' },
  ],
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
      name: 'The Powder Chalet — New 4-Bedroom Home in Driggs, Idaho',
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
      name: 'Is The Powder Chalet available for purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Powder Chalet at 1230 Wind River Trail is a new 4-bedroom mountain modern home in Shoshoni Plains, Driggs, Idaho, currently in pre-construction. Grand Teton Builders is accepting buyer inquiries now. Contact us to learn about availability, pricing, and the build timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'How big is The Powder Chalet and what is the floor plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Powder Chalet offers 2,258 sq ft of finished single-level living with 4 bedrooms and 2.5 bathrooms, including an open great room, dining area, kitchen with large island and walk-in pantry, a primary suite with walk-in closet, two additional bedrooms in a separate wing, and a 4th bedroom designed as a flexible office or guest room with closet. The home also includes a 692 sq ft attached 2-car garage and 882 sq ft of concrete patio/deck space.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I select finishes or make changes to the home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because The Powder Chalet is currently in pre-construction, early buyers may have the opportunity to participate in certain finish selections and customization. Contact Grand Teton Builders to discuss what is possible based on the current build timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is The Powder Chalet a custom home or a spec home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Powder Chalet is a mountain modern spec home built by Grand Teton Builders to the same quality standards as our custom homes. It is designed to reflect the mountain lifestyle of Teton Valley without requiring a buyer to manage a full custom build process from the ground up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is The Powder Chalet located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Powder Chalet is located at 1230 Wind River Trail in the Shoshoni Plains subdivision in Driggs, Idaho, in the heart of Teton Valley. Driggs offers easy access to Grand Targhee Resort, the Tetons, Jackson Hole, and four-season mountain recreation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I schedule a private tour or site visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We welcome qualified buyers to schedule site visits and private conversations about The Powder Chalet. Use the inquiry form on this page, call 208-262-3669, or email Hello@grandtetonbuilders.com to arrange a visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is The Powder Chalet a good fit for second-home or full-time buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. With single-level living, 4 bedrooms including an office/flex room, generous storage, and an attached 2-car garage, The Powder Chalet is designed to work equally well for full-time mountain residents, second-home buyers, and remote-work-friendly lifestyle buyers in Teton Valley.',
      },
    },
  ],
}

const specs = [
  { label: 'Home Name', value: 'The Powder Chalet' },
  { label: 'Address', value: '1230 Wind River Trail' },
  { label: 'Subdivision', value: 'Shoshoni Plains' },
  { label: 'Location', value: 'Driggs, Idaho' },
  { label: 'Home Style', value: 'Mountain Modern' },
  { label: 'Finished Living Area', value: '2,258 sq ft' },
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '2.5' },
  { label: 'Layout', value: 'Single-level' },
  { label: 'Garage', value: '692 sq ft, 2-car attached' },
  { label: 'Patio / Deck', value: '882 sq ft concrete' },
  { label: 'Status', value: 'Coming Soon / Pre-Construction' },
]

const features = [
  'New mountain modern home in Driggs, Idaho',
  '2,258 sq ft of finished single-level living',
  '4 bedrooms — including a 4th bedroom designed as office/flex room with closet',
  '2.5 bathrooms',
  'Open-concept kitchen, dining, and great room',
  'Large kitchen island and walk-in pantry',
  'Private primary suite with walk-in closet',
  'Attached 2-car garage (692 sq ft)',
  'Large laundry and mudroom',
  'Winter/sports storage, lock-off storage, and snowmobile bench area',
  '882 sq ft of expansive concrete patio/deck space',
  'Warm wood siding, stone accents, and dark modern exterior finishes',
  'Designed for full-time living, second-home use, or mountain lifestyle buyers',
]

const renderings = [
  {
    src: '/powder-chalet-front-sunset.png',
    alt: 'The Powder Chalet — angled front view at sunset with Teton mountain range behind, new 4-bedroom mountain modern home at 1230 Wind River Trail in Driggs Idaho',
    caption: 'Front view at sunset',
  },
  {
    src: '/powder-chalet-front-elevation-square.png',
    alt: 'The Powder Chalet — straight-on front elevation rendering showing wood siding, stone accents, and dark modern finishes of the new 4-bedroom home in Driggs Idaho',
    caption: 'Front elevation',
  },
  {
    src: '/powder-chalet-side-elevation-square.png',
    alt: 'The Powder Chalet — side elevation rendering showing the dramatic gabled roofline, floor-to-ceiling windows, and covered patio of the new mountain modern home in Driggs Idaho',
    caption: 'Side elevation with covered patio',
  },
]

const whyDriggs = [
  {
    title: 'Teton Valley Setting',
    desc: 'Driggs sits in the heart of Teton Valley with views of the Teton Range, offering one of the most dramatic mountain backdrops in the American West.',
  },
  {
    title: 'Grand Targhee Access',
    desc: 'Minutes from Grand Targhee Resort, known for deep powder, lighter crowds, and year-round mountain recreation.',
  },
  {
    title: 'Four-Season Living',
    desc: 'Skiing and snowshoeing in winter, hiking, cycling, and fly fishing in summer. Driggs offers genuine mountain living in every season.',
  },
  {
    title: 'Jackson-Adjacent Value',
    desc: 'Access to the Jackson Hole lifestyle at a fraction of the price, with more land, less congestion, and a stronger sense of community.',
  },
  {
    title: 'Small-Town Mountain Feel',
    desc: 'A real mountain town with local character, growing amenities, and a welcoming community of full-time residents and second-home owners.',
  },
  {
    title: 'Strong Investment Trajectory',
    desc: 'Teton Valley has seen consistent interest from relocation buyers, second-home purchasers, and investors drawn to the combination of lifestyle and land value.',
  },
]

const faqs = [
  {
    q: 'Is The Powder Chalet available for purchase?',
    a: 'Yes. The Powder Chalet at 1230 Wind River Trail is a new 4-bedroom mountain modern home in Shoshoni Plains, Driggs, Idaho, currently in pre-construction. Grand Teton Builders is accepting buyer inquiries now. Contact us to learn about availability, pricing, and the build timeline.',
  },
  {
    q: 'How big is The Powder Chalet and what is the floor plan?',
    a: 'The Powder Chalet offers 2,258 sq ft of finished single-level living with 4 bedrooms and 2.5 bathrooms, including an open great room, dining area, kitchen with large island and walk-in pantry, a primary suite with walk-in closet, two additional bedrooms in a separate wing, and a 4th bedroom designed as a flexible office or guest room with closet. The home also includes a 692 sq ft attached 2-car garage and 882 sq ft of concrete patio/deck space.',
  },
  {
    q: 'Can I select finishes or make changes to the home?',
    a: 'Because The Powder Chalet is currently in pre-construction, early buyers may have the opportunity to participate in certain finish selections and customization. Contact Grand Teton Builders to discuss what is possible based on the current build timeline.',
  },
  {
    q: 'Is The Powder Chalet a custom home or a spec home?',
    a: 'The Powder Chalet is a mountain modern spec home built by Grand Teton Builders to the same quality standards as our custom homes. It is designed to reflect the mountain lifestyle of Teton Valley without requiring a buyer to manage a full custom build process from the ground up.',
  },
  {
    q: 'Where is The Powder Chalet located?',
    a: 'The Powder Chalet is located at 1230 Wind River Trail in the Shoshoni Plains subdivision in Driggs, Idaho, in the heart of Teton Valley. Driggs offers easy access to Grand Targhee Resort, the Tetons, Jackson Hole, and four-season mountain recreation.',
  },
  {
    q: 'Can I schedule a private tour or site visit?',
    a: 'Yes. We welcome qualified buyers to schedule site visits and private conversations about The Powder Chalet. Use the inquiry form below, call 208-262-3669, or email Hello@grandtetonbuilders.com to arrange a visit.',
  },
  {
    q: 'Is The Powder Chalet a good fit for second-home or full-time buyers?',
    a: 'Both. With single-level living, 4 bedrooms including an office/flex room, generous storage, and an attached 2-car garage, The Powder Chalet is designed to work equally well for full-time mountain residents, second-home buyers, and remote-work-friendly lifestyle buyers in Teton Valley.',
  },
]

export default function DriggsHomePage() {
  return (
    <>
      <SchemaOrg schema={propertySchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      <Nav />

      <main>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'The Powder Chalet — Driggs, Idaho' },
          ]}
        />

        {/* HERO */}
        <section
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(31,36,33,0.35) 0%, rgba(31,36,33,0.55) 50%, rgba(31,36,33,0.97) 100%), url('/powder-chalet-front-sunset.png')",
            minHeight: '75vh',
            paddingTop: 116,
          }}
          aria-label="The Powder Chalet hero"
        >
          <div className="hero-content">
            <p className="hero-eyebrow">The Powder Chalet &mdash; 1230 Wind River Trail, Driggs, Idaho</p>
            <h1>
              The Powder Chalet<br />
              <em>New 4-Bedroom Mountain Modern Home in Driggs, Idaho</em>
            </h1>
            <p>
              A new 2,258 sq ft mountain modern home in Shoshoni Plains, Driggs, Idaho.
              4 bedrooms, 2.5 baths, single-level living, attached 2-car garage, and
              expansive patio &mdash; designed for refined Teton Valley living.
            </p>
            <div className="hero-actions">
              <a href="#inquiry" className="btn-primary">
                Inquire About The Powder Chalet
              </a>
              <a href="#details" className="btn-outline">
                View Property Details
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
          <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Property Snapshot</p>
          <h2
            className="section-title"
            id="property-overview-heading"
            style={{ color: 'var(--limestone)' }}
          >
            The Powder Chalet &mdash; 1230 Wind River Trail
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
              <p className="section-eyebrow">About The Powder Chalet</p>
              <h2 className="section-title" id="description-heading">
                A New 4-Bedroom Mountain Modern Home Built for Teton Valley Living
              </h2>
              <p className="section-sub" style={{ maxWidth: '100%', marginBottom: 24 }}>
                Welcome to The Powder Chalet at 1230 Wind River Trail &mdash; a new
                4-bedroom mountain modern home designed for comfortable year-round
                living in Driggs, Idaho. With warm vertical wood siding, dark modern
                accents, stone detailing, black-framed windows, and a low-profile
                roofline, the exterior creates a refined Teton Valley look that feels
                both contemporary and rooted in its mountain setting.
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
                Inside, the floor plan centers around an open great room, dining area, and
                kitchen, creating a spacious main living area designed for gathering,
                entertaining, and everyday comfort. The kitchen includes a large island
                layout and walk-in pantry, while the adjoining dining and great room spaces
                connect naturally to the rear patio.
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
                The private primary suite includes a generous bedroom, walk-in closet, and
                spacious primary bath. Two additional bedrooms sit in a separate wing of
                the home, creating practical separation for family or guests. The fourth
                bedroom includes a closet and is designed as a flexible office/bedroom
                space, making it ideal for remote work, guest use, a bunk room, hobby room,
                or additional sleeping space.
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
                Built with mountain living in mind, The Powder Chalet also includes a
                large laundry/mudroom, winter/sports storage, lock-off storage, a
                snowmobile bench area, and an attached two-car garage. The expansive
                patio space creates room for outdoor dining, relaxing, and enjoying the
                surrounding Teton Valley lifestyle.
              </p>
            </div>
            <div>
              <Image
                src="/powder-chalet-front-elevation-portrait.png"
                alt="The Powder Chalet — portrait rendering of the new 4-bedroom mountain modern home at 1230 Wind River Trail in Driggs, Idaho"
                width={1000}
                height={1400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* RENDERINGS GALLERY */}
        <section
          style={{ background: 'var(--charcoal)', padding: '96px 5vw' }}
          aria-labelledby="renderings-heading"
        >
          <p className="section-eyebrow" style={{ color: 'var(--brass)' }}>Renderings</p>
          <h2
            className="section-title"
            id="renderings-heading"
            style={{ color: 'var(--limestone)' }}
          >
            The Powder Chalet in Detail
          </h2>
          <p className="section-sub" style={{ color: 'rgba(231,224,210,0.6)' }}>
            Architectural renderings of the new 4-bedroom mountain modern home at
            1230 Wind River Trail, Driggs, Idaho.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
              marginTop: 48,
            }}
            role="list"
            aria-label="The Powder Chalet renderings"
          >
            {renderings.map(({ src, alt, caption }) => (
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
            What&rsquo;s Included at The Powder Chalet
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
            Inquire About The Powder Chalet
          </h2>
          <p className="section-sub">
            Request details, ask about finish selections, or schedule a private
            conversation about the home with Grand Teton Builders.
          </p>
          <div className="contact-inner" style={{ marginTop: 56 }}>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">&#x1F4CD;</div>
                <div>
                  <div className="contact-item-label">Property Address</div>
                  <div className="contact-item-val">1230 Wind River Trail, Driggs, ID</div>
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
                <p className="contact-highlight-title">The Powder Chalet &mdash; Coming Soon</p>
                <p className="contact-highlight-body">
                  The Powder Chalet is currently in pre-construction. Early
                  inquiries may have the opportunity to participate in certain
                  finish selections.
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
            <form className="contact-form" aria-label="The Powder Chalet inquiry form">
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
                  <option>The Powder Chalet in Driggs, Idaho</option>
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
                  placeholder="Tell us what you are looking for, any questions about the home, or request a private conversation..."
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
      </main>

      <Footer />
    </>
  )
}
