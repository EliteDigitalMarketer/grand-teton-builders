import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Grand Teton Builders LLC',
  description:
    'Terms of Service for Grand Teton Builders LLC including SMS/text messaging program terms, message frequency, opt-out instructions (HELP and STOP), and customer support information.',
  alternates: {
    canonical: 'https://grand-teton-builders.vercel.app/terms-of-service',
  },
  robots: { index: true, follow: true },
}

const h2Style = {
  fontFamily: 'var(--font-gfs-didot)',
  fontSize: 26,
  fontWeight: 400 as const,
  color: 'var(--charcoal)',
  marginTop: 56,
  marginBottom: 20,
  letterSpacing: '0.02em',
  lineHeight: 1.2,
}

const pStyle = {
  fontSize: 14,
  fontWeight: 300 as const,
  lineHeight: 1.85,
  color: 'var(--text-mid)',
  marginBottom: 16,
  letterSpacing: '0.02em',
}

const ulStyle = {
  paddingLeft: 24,
  marginBottom: 20,
  marginTop: 4,
}

const liStyle = {
  fontSize: 14,
  fontWeight: 300 as const,
  lineHeight: 1.85,
  color: 'var(--text-mid)',
  marginBottom: 8,
  letterSpacing: '0.02em',
}

const labelStyle = {
  fontSize: 12,
  fontWeight: 600 as const,
  color: 'var(--charcoal)',
  letterSpacing: '0.04em',
}

// Callout style for the required bold disclosures (HELP, STOP, carrier liability, rates).
// A brass-accented callout box gives the required items unmissable visual weight without
// making the whole page shout.
const calloutStyle = {
  fontSize: 15,
  fontWeight: 700 as const,
  color: 'var(--charcoal)',
  letterSpacing: '0.02em',
  lineHeight: 1.7,
  marginTop: 12,
  marginBottom: 20,
  padding: '18px 22px',
  background: 'rgba(176, 138, 74, 0.08)',
  borderLeft: '3px solid var(--brass)',
}

const brassLink = {
  color: 'var(--brass)',
  textDecoration: 'none',
  fontWeight: 500 as const,
}

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 116, background: 'var(--snowfield)' }}>
        <article
          style={{
            maxWidth: 860,
            margin: '0 auto',
            padding: '80px 5vw 96px',
          }}
          aria-labelledby="terms-of-service-heading"
        >
          {/* Header */}
          <header
            style={{
              marginBottom: 48,
              paddingBottom: 32,
              borderBottom: '1px solid rgba(31,36,33,0.12)',
            }}
          >
            <p className="section-eyebrow">Legal</p>
            <h1
              id="terms-of-service-heading"
              className="section-title"
              style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', marginBottom: 16 }}
            >
              Terms of Service
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-gfs-didot)',
                fontSize: 18,
                color: 'var(--charcoal)',
                letterSpacing: '0.02em',
                marginBottom: 8,
              }}
            >
              Grand Teton Builders LLC
            </p>
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                color: 'var(--text-light)',
                textTransform: 'uppercase',
              }}
            >
              Last updated: August 8, 2026
            </p>
          </header>

          {/* Intro */}
          <p style={pStyle}>
            These Terms of Service (the &ldquo;Terms&rdquo;) govern your access
            to and use of the communications programs, website, and services
            provided by Grand Teton Builders LLC (&ldquo;Grand Teton
            Builders,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), including our SMS/text messaging program. By
            opting in to receive text messages from us, submitting a form on our
            website, or otherwise using our services, you agree to be bound by
            these Terms.
          </p>
          <p style={pStyle}>
            If you do not agree to these Terms, please do not use our SMS
            program or services.
          </p>

          {/* PROGRAM NAME */}
          <h2 style={h2Style}>Program Name</h2>
          <p style={pStyle}>
            <span style={labelStyle}>Grand Teton Builders</span>
            {' '}&mdash; the SMS/text messaging program operated by Grand Teton
            Builders LLC.
          </p>

          {/* PROGRAM DESCRIPTION */}
          <h2 style={h2Style}>Program Description</h2>
          <p style={pStyle}>
            The Grand Teton Builders SMS program is used to communicate with
            prospective clients, current clients, and homeowners regarding
            luxury mountain home development, custom home construction, and spec
            homes in Driggs, Idaho and throughout Teton Valley. By opting in,
            you consent to receive text messages from us that may include:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>
              Responses to inquiries you submit through our website or forms
            </li>
            <li style={liStyle}>
              Home viewing and appointment confirmations, updates, and reminders
            </li>
            <li style={liStyle}>
              Project, construction, and build-progress updates
            </li>
            <li style={liStyle}>
              Property listing information for current or upcoming homes
            </li>
            <li style={liStyle}>
              Customer service communications and follow-ups
            </li>
          </ul>
          <p style={pStyle}>
            Consent to receive text messages is not a condition of purchase of
            any goods or services from Grand Teton Builders.
          </p>

          {/* MESSAGE FREQUENCY */}
          <h2 style={h2Style}>Message Frequency</h2>
          <p style={pStyle}>
            Message frequency varies based on your interactions with us and the
            nature of your inquiry. Grand Teton Builders sends recurring
            messages only in response to your requests, appointments, and
            active projects. You may receive messages when submitting a new
            inquiry, coordinating a home showing, or during the course of an
            active build. Messages are not sent on a fixed schedule.
          </p>

          {/* MESSAGE AND DATA RATES */}
          <h2 style={h2Style}>Message and Data Rates</h2>
          <p style={calloutStyle}>
            <strong>Message and data rates may apply.</strong> Any messages sent
            to or received from Grand Teton Builders may be subject to standard
            message and data rates charged by your mobile carrier. Please
            contact your mobile carrier for details on your specific plan and
            applicable rates.
          </p>

          {/* HELP */}
          <h2 style={h2Style}>Help Instructions</h2>
          <p style={calloutStyle}>
            <strong>
              For help, reply HELP to any message you receive from Grand Teton
              Builders.
            </strong>{' '}
            You will receive a response with contact information for customer
            support. You may also contact us directly at{' '}
            <a href="mailto:Hello@grandtetonbuilders.com" style={brassLink}>
              Hello@grandtetonbuilders.com
            </a>{' '}
            or{' '}
            <a href="tel:+12082623669" style={brassLink}>
              (208) 262-3669
            </a>
            .
          </p>

          {/* STOP */}
          <h2 style={h2Style}>Opt-Out Instructions</h2>
          <p style={calloutStyle}>
            <strong>
              To stop receiving text messages from Grand Teton Builders at any
              time, reply STOP to any message you receive.
            </strong>{' '}
            After you reply STOP, you will receive one final confirmation
            message acknowledging your opt-out request, and no further messages
            will be sent to your number unless you opt back in. You may also
            opt out by contacting us directly at{' '}
            <a href="mailto:Hello@grandtetonbuilders.com" style={brassLink}>
              Hello@grandtetonbuilders.com
            </a>
            .
          </p>

          {/* CUSTOMER SUPPORT */}
          <h2 style={h2Style}>Customer Support</h2>
          <p style={pStyle}>
            For questions, concerns, or assistance regarding our SMS program or
            any of our services, please contact us using the information below:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <span style={labelStyle}>Email:</span>{' '}
              <a href="mailto:Hello@grandtetonbuilders.com" style={brassLink}>
                Hello@grandtetonbuilders.com
              </a>
            </li>
            <li style={liStyle}>
              <span style={labelStyle}>Phone:</span>{' '}
              <a href="tel:+12082623669" style={brassLink}>
                (208) 262-3669
              </a>
            </li>
            <li style={liStyle}>
              <span style={labelStyle}>Location:</span> Driggs, Teton Valley,
              Idaho
            </li>
            <li style={liStyle}>
              <span style={labelStyle}>Business Hours:</span> Monday &ndash;
              Friday, 9:00 AM &ndash; 5:00 PM Mountain Time
            </li>
          </ul>

          {/* CARRIER LIABILITY */}
          <h2 style={h2Style}>Carrier Liability</h2>
          <p style={calloutStyle}>
            <strong>
              Carriers are not liable for any delayed or undelivered messages.
            </strong>{' '}
            Grand Teton Builders is not responsible for and will not be held
            liable for delays, interruptions, or failed delivery of messages
            caused by your mobile carrier, network availability, device
            malfunction, message filtering, or any other factors outside our
            reasonable control.
          </p>

          {/* PRIVACY POLICY */}
          <h2 style={h2Style}>Privacy Policy</h2>
          <p style={pStyle}>
            Your privacy is important to us. All information collected in
            connection with our SMS program and services is handled in
            accordance with our{' '}
            <Link href="/privacy-policy" style={brassLink}>
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. Please
            review our Privacy Policy carefully to understand how we collect,
            use, and safeguard your information, including how mobile
            information and consent data are protected and not shared with
            third parties for marketing purposes.
          </p>

          {/* CONSENT */}
          <h2 style={h2Style}>Consent</h2>
          <p style={pStyle}>
            By opting in to our SMS program, you represent and warrant that you
            are the account holder for the mobile phone number provided, or
            that you have the authority to authorize the receipt of messages
            at that number. You further represent that you are at least 18
            years of age.
          </p>
          <p style={pStyle}>
            Consent to receive text messages is not a condition of purchase.
          </p>

          {/* CHANGES */}
          <h2 style={h2Style}>Changes to These Terms</h2>
          <p style={pStyle}>
            Grand Teton Builders reserves the right to update or modify these
            Terms at any time without prior notice. Changes will be posted on
            this page with an updated &ldquo;Last updated&rdquo; date. Your
            continued participation in our SMS program or use of our services
            after any such changes constitutes your acceptance of the updated
            Terms. We encourage you to review this page periodically.
          </p>

          {/* GOVERNING LAW */}
          <h2 style={h2Style}>Governing Law</h2>
          <p style={pStyle}>
            These Terms are governed by and construed in accordance with the
            laws of the State of Idaho, without regard to its conflict of law
            provisions. Any disputes arising out of or related to these Terms
            or our SMS program shall be resolved in the state or federal
            courts located in Teton County, Idaho.
          </p>

          {/* CONTACT */}
          <h2 style={h2Style}>Contact Us</h2>
          <p style={pStyle}>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Grand Teton Builders LLC</span>
            <br />
            Email:{' '}
            <a href="mailto:Hello@grandtetonbuilders.com" style={brassLink}>
              Hello@grandtetonbuilders.com
            </a>
            <br />
            Phone:{' '}
            <a href="tel:+12082623669" style={brassLink}>
              (208) 262-3669
            </a>
            <br />
            Driggs, Idaho
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
