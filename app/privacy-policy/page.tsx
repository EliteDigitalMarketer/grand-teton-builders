import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Grand Teton Builders LLC',
  description:
    'Privacy Policy for Grand Teton Builders LLC — how we collect, use, share, and protect your information when you use the Grand Teton Builders website.',
  alternates: {
    canonical: 'https://grand-teton-builders.vercel.app/privacy-policy',
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

const h3Style = {
  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
  fontSize: 12,
  fontWeight: 600 as const,
  color: 'var(--brass)',
  marginTop: 32,
  marginBottom: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
}

const h4Style = {
  fontFamily: 'var(--font-gfs-didot)',
  fontSize: 18,
  fontWeight: 400 as const,
  color: 'var(--charcoal)',
  marginTop: 28,
  marginBottom: 10,
  letterSpacing: '0.02em',
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

export default function PrivacyPolicyPage() {
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
          aria-labelledby="privacy-policy-heading"
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
              id="privacy-policy-heading"
              className="section-title"
              style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', marginBottom: 16 }}
            >
              Privacy Policy
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
              Last updated: June 23, 2026
            </p>
          </header>

          {/* Intro */}
          <p style={pStyle}>We value your privacy very highly.</p>
          <p style={pStyle}>
            Please read this Privacy Policy carefully before using the
            grand-teton-builders.vercel.app Website (the &ldquo;Website&rdquo;) as
            this Privacy Policy contains important information regarding your
            privacy and how we may use the information we collect about you.
          </p>
          <p style={pStyle}>
            Your access to and use of the Website is conditional upon your
            acceptance of and compliance with this Privacy Policy.
          </p>
          <p style={pStyle}>
            This Privacy Policy applies to everyone, including, but not limited
            to: visitors, users, and others, who wish to access or use the
            Website.
          </p>
          <p style={pStyle}>
            By accessing or using the Website, you agree to be bound by this
            Privacy Policy. If you disagree with any part of the Privacy Policy,
            then you do not have our permission to access or use the Website.
          </p>

          {/* WHAT INFORMATION WE COLLECT */}
          <h2 style={h2Style}>
            What Information We Collect, Where We Get This Information, and How
            We Use This Information
          </h2>
          <p style={pStyle}>
            We collect any and all information that you enter on this Website.
            We collect the following information about you:
          </p>

          <h4 style={h4Style}>Name</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Where we get this information:</span>{' '}
            Information submitted by the consumer; Tracking pixels.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>How we use this information:</span>{' '}
            Marketing and advertising; Performing services; Processing or
            fulfilling orders or transactions; Processing payments; Providing
            customer service; Resolving disputes; Verifying customer
            information.
          </p>

          <h4 style={h4Style}>Billing address</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Where we get this information:</span>{' '}
            Information submitted by the consumer; Tracking pixels.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>How we use this information:</span>{' '}
            Marketing and advertising; Performing services; Processing or
            fulfilling orders or transactions; Processing payments; Providing
            customer service; Resolving disputes; Verifying customer
            information.
          </p>

          <h4 style={h4Style}>Phone number</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Where we get this information:</span>{' '}
            Information submitted by the consumer; Tracking pixels.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>How we use this information:</span>{' '}
            Marketing and advertising; Performing services; Processing or
            fulfilling orders or transactions; Processing payments; Providing
            customer service; Resolving disputes; Verifying customer
            information.
          </p>

          <h4 style={h4Style}>Email address</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Where we get this information:</span>{' '}
            Information submitted by the consumer; Tracking pixels.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>How we use this information:</span>{' '}
            Marketing and advertising; Performing services; Processing or
            fulfilling orders or transactions; Processing payments; Providing
            customer service; Resolving disputes; Verifying customer
            information.
          </p>

          <h4 style={h4Style}>Credit card or debit card number</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Where we get this information:</span>{' '}
            Information submitted by the consumer; Tracking pixels.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>How we use this information:</span>{' '}
            Marketing and advertising; Performing services; Processing or
            fulfilling orders or transactions; Processing payments; Providing
            customer service; Resolving disputes; Verifying customer
            information.
          </p>

          <h4 style={h4Style}>Card CVV (security code)</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Where we get this information:</span>{' '}
            Information submitted by the consumer; Tracking pixels.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>How we use this information:</span>{' '}
            Marketing and advertising; Performing services; Processing or
            fulfilling orders or transactions; Processing payments; Providing
            customer service; Resolving disputes; Verifying customer
            information.
          </p>

          {/* SMS */}
          <h2 style={h2Style}>SMS &amp; Text Message Communications</h2>
          <p style={pStyle}>
            If you provide your mobile phone number to Grand Teton Builders LLC,
            you may opt in to receive SMS or MMS text messages from us. These
            messages may include, but are not limited to:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Responses to inquiries you submit</li>
            <li style={liStyle}>Event information, scheduling, and reminders</li>
            <li style={liStyle}>Booking confirmations or updates</li>
            <li style={liStyle}>Customer service communications</li>
            <li style={liStyle}>
              Marketing or promotional messages (if you have explicitly opted in)
            </li>
          </ul>

          <h3 style={h3Style}>Consent to Receive SMS Messages</h3>
          <p style={pStyle}>
            By submitting your phone number through our website forms, booking
            forms, inquiry forms, or by otherwise providing your number and
            agreeing to receive messages, you consent to receive recurring
            automated or non-automated text messages from Grand Teton Builders
            LLC at the number provided.
          </p>
          <p style={pStyle}>
            Consent to receive text messages is not a condition of purchase.
          </p>

          <h3 style={h3Style}>Message Frequency &amp; Fees</h3>
          <p style={pStyle}>
            Message frequency may vary. Message and data rates may apply
            depending on your mobile carrier and plan.
          </p>

          <h3 style={h3Style}>Opt-Out &amp; Help Instructions</h3>
          <p style={pStyle}>
            You may opt out of receiving SMS messages at any time by replying
            STOP to any message you receive from us.
          </p>
          <p style={pStyle}>
            For help, reply HELP or contact us at{' '}
            <a
              href="mailto:Hello@grandtetonbuilders.com"
              style={{ color: 'var(--brass)', textDecoration: 'none' }}
            >
              Hello@grandtetonbuilders.com
            </a>{' '}
            or{' '}
            <a
              href="tel:+12082623669"
              style={{ color: 'var(--brass)', textDecoration: 'none' }}
            >
              (208) 262-3669
            </a>
            .
          </p>

          {/* WITH WHOM WE SHARE */}
          <h2 style={h2Style}>With Whom We Share Your Information</h2>
          <p style={pStyle}>
            We share your personal information with the following categories of
            third parties for the following reasons:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>
              No mobile information will be shared with third
              parties/affiliates for marketing/promotional purposes. Information
              sharing to subcontractors in support services, such as customer
              service is permitted. All other use case categories exclude text
              messaging originator opt-in data and consent; this information
              will not be shared with any third parties.
            </li>
          </ul>

          <p style={pStyle}>
            <span style={labelStyle}>Why your information is shared with the third party</span>
          </p>

          <h4 style={h4Style}>Email marketing vendors</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>To market to you via email</li>
            <li style={liStyle}>To manage our interactions with you.</li>
          </ul>

          <h4 style={h4Style}>Customer management systems</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>To process transactions.</li>
          </ul>

          <h3 style={h3Style}>Disclosure of Information</h3>
          <p style={pStyle}>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as set
            forth in this Privacy Policy.
          </p>

          <p style={pStyle}>
            <span style={labelStyle}>a) Third-Party Service Providers:</span>{' '}
            We may share information with third-party service providers who
            assist us in operating our website, conducting our business, or
            servicing you.
          </p>

          <p style={pStyle}>
            <span style={labelStyle}>b) Legal Compliance:</span>{' '}
            We may disclose information when required by law or in response to
            lawful requests by public authorities.
          </p>
          <p style={pStyle}>
            Data disclosure laws vary between countries, and even within
            countries, they can be subject to federal, state/provincial, and
            local regulations. In the United States and Canada, data disclosure
            laws encompass a combination of federal and provincial/state
            regulations. Below is a brief overview of the major federal laws in
            both countries.
          </p>

          <h3 style={h3Style}>United States</h3>

          <h4 style={h4Style}>1. Federal Trade Commission Act (FTC Act)</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Overview:</span> The FTC Act broadly
            prohibits unfair and deceptive practices in commerce, including the
            unauthorized disclosure of personal information.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Enforcement:</span> The Federal Trade
            Commission (FTC) enforces the FTC Act.
          </p>

          <h4 style={h4Style}>2. Gramm-Leach-Bliley Act (GLBA)</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Overview:</span> Primarily applicable to
            financial institutions, GLBA requires these institutions to protect
            the privacy and security of consumer financial information.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Enforcement:</span> Various federal
            agencies, including the FTC, have enforcement authority.
          </p>

          <h4 style={h4Style}>
            3. Health Insurance Portability and Accountability Act (HIPAA)
          </h4>
          <p style={pStyle}>
            <span style={labelStyle}>Overview:</span> Applies to protected health
            information held by covered entities and their business associates.
            It sets standards for the privacy and security of health
            information.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Enforcement:</span> The Department of
            Health and Human Services (HHS) is responsible for enforcing HIPAA.
          </p>

          <h4 style={h4Style}>
            4. Children&rsquo;s Online Privacy Protection Act (COPPA)
          </h4>
          <p style={pStyle}>
            <span style={labelStyle}>Overview:</span> COPPA regulates the online
            collection of personal information from children under 13. It
            requires obtaining parental consent.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Enforcement:</span> The FTC enforces COPPA.
          </p>

          <h4 style={h4Style}>5. California Consumer Privacy Act (CCPA)</h4>
          <p style={pStyle}>
            <span style={labelStyle}>Overview:</span> State-level legislation
            granting California residents specific privacy rights and imposing
            obligations on businesses handling their personal information.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Enforcement:</span> The California Attorney
            General can enforce the CCPA.
          </p>

          <h3 style={h3Style}>Canada</h3>

          <h4 style={h4Style}>
            1. Personal Information Protection and Electronic Documents Act
            (PIPEDA)
          </h4>
          <p style={pStyle}>
            <span style={labelStyle}>Overview:</span> Applies to private-sector
            organizations engaged in commercial activities. It regulates the
            collection, use, and disclosure of personal information.
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Enforcement:</span> The Office of the
            Privacy Commissioner of Canada (OPC) oversees PIPEDA compliance.
          </p>

          <h4 style={h4Style}>2. Provincial Legislation</h4>
          <p style={pStyle}>
            In addition to PIPEDA, some provinces have their own privacy
            legislation. For example, Alberta and British Columbia have their
            own private-sector privacy laws.
          </p>

          <p style={pStyle}>
            Please be advised these laws are subject to change, and new
            regulations may be introduced. Always consult with legal
            professionals to ensure compliance with the latest data disclosure
            laws that apply to your specific circumstances.
          </p>

          {/* HOW WE PROTECT */}
          <h2 style={h2Style}>How We Protect Your Information</h2>
          <p style={pStyle}>
            We have implemented the following measures to protect and safeguard
            your personal information:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>
              limiting the amount of personal information that we collect to
              strictly necessary only;
            </li>
            <li style={liStyle}>
              using SSL or other secure connection technologies when receiving
              or sending personal information beyond internal networks;
            </li>
            <li style={liStyle}>
              destroying the personal information that we no longer need;
            </li>
            <li style={liStyle}>
              screening all employees with access to personal information;
            </li>
            <li style={liStyle}>training our employees;</li>
            <li style={liStyle}>
              implementing and monitoring intrusion prevention and detection
              systems;
            </li>
            <li style={liStyle}>maintaining up-to-date software and safeguards;</li>
            <li style={liStyle}>implementing physical security measures.</li>
          </ul>

          {/* COOKIES */}
          <h2 style={h2Style}>Cookies</h2>
          <p style={pStyle}>
            A cookie is a small piece of data sent from a website and stored on
            your computer by your web browser. The file is added once you agree
            to store cookies on your computer or device, and the cookie helps
            analyze web traffic or lets you know when you visit a particular
            site. Cookies allow sites to respond to you as an individual. The
            Website can also tailor its operations to your needs, likes, and
            dislikes by gathering and remembering information about your
            preferences.
          </p>
          <p style={pStyle}>
            This Website collects cookies and may use cookies for reasons
            including, but not limited to:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Analyze our web traffic using an analytics package;</li>
            <li style={liStyle}>Identify if you are signed in to the Website;</li>
            <li style={liStyle}>Test content on the Website;</li>
            <li style={liStyle}>Store information about your preferences;</li>
            <li style={liStyle}>Recognize when you return to the Website.</li>
          </ul>
          <p style={pStyle}>
            Overall, cookies help us provide you with a better Website, by
            enabling us to monitor which pages you find useful and which you do
            not. A cookie in no way gives us access to your computer or any
            information about you, other than the data you choose to share with
            us.
          </p>
          <p style={pStyle}>
            You can accept or decline cookies. Most web browsers automatically
            accept cookies, but you can modify your browser setting to decline
            cookies if you prefer. This setting may prevent you from taking full
            advantage of the Website.
          </p>

          {/* CHILDREN'S PRIVACY */}
          <h2 style={h2Style}>Children&rsquo;s Privacy</h2>
          <p style={pStyle}>
            This Website is intended for use by a general audience and does not
            offer services to children. Should a child whom we know to be under
            18 send personal information to us, we will use that information
            only to respond to that child to inform him or her that they cannot
            use this Website.
          </p>

          {/* ANALYTICS */}
          <h2 style={h2Style}>Analytics Programs</h2>
          <p style={pStyle}>
            This Website uses Google Analytics to collect information about you
            and your behaviors. If you would like to opt out of Google
            Analytics, please visit{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--brass)', textDecoration: 'none' }}
            >
              https://tools.google.com/dlpage/gaoptout/
            </a>
            .
          </p>

          {/* CANADA RIGHTS */}
          <h2 style={h2Style}>The Rights of Canada Residents</h2>
          <p style={pStyle}>
            The residents of Canada have the following rights with regard to
            their personal information:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <span style={labelStyle}>Access.</span> The right to access the
              personal information that we have collected about you;
            </li>
            <li style={liStyle}>
              <span style={labelStyle}>Rectification of information.</span> You
              have the right to request that we amend any of the information
              that we have collected on you;
            </li>
            <li style={liStyle}>
              <span style={labelStyle}>Withdrawal of consent.</span> You have
              the right to withdraw your consent to the processing of your
              information;
            </li>
            <li style={liStyle}>
              <span style={labelStyle}>Lodge a complaint.</span> You have the
              right to lodge a complaint regarding our collection, sharing and
              processing of information with competent authorities in the
              proper jurisdiction.
            </li>
          </ul>

          {/* EXERCISING RIGHTS */}
          <h2 style={h2Style}>Exercising Your Rights</h2>
          <p style={pStyle}>
            Residents of Canada may exercise the rights specified above by
            submitting a consumer request to the person accountable for our
            privacy practices and policies, whose contact information is below.
          </p>
          <p style={pStyle}>
            We will need to verify your identity prior to effectuating your
            request. To verify your identity, you will need to provide us with
            the following information with your request:
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Name</li>
            <li style={liStyle}>Email address</li>
          </ul>
          <p style={pStyle}>
            Please note that we may be unable to process your request if you do
            not provide us with the above information.
          </p>
          <p style={pStyle}>
            We will respond to most consumer requests within 30 days of receipt.
            However, some requests may take longer. We will notify you in
            writing if we need more time to respond (up to an additional 30
            days). We have the ability to deny your request(s) if certain
            exceptions in the law apply. If we do deny your request(s), we will
            provide you with the reasons for such denials.
          </p>

          {/* ACCOUNTABILITY */}
          <h2 style={h2Style}>Accountability</h2>
          <p style={pStyle}>
            The following person is accountable and responsible for our privacy
            practices and procedures:
          </p>
          <p style={pStyle}>
            <span style={labelStyle}>Jesse Hall</span>
            <br />
            <a
              href="mailto:Hello@grandtetonbuilders.com"
              style={{ color: 'var(--brass)', textDecoration: 'none' }}
            >
              Hello@grandtetonbuilders.com
            </a>
          </p>
          <p style={pStyle}>
            You may lodge a complaint with us by contacting the person
            accountable and responsible for our privacy practices and
            procedures at the contact information above. You may also lodge a
            complaint with the Office of the Privacy Commissioner of Canada by
            filling out their complaint form or by calling{' '}
            <a
              href="tel:+12082623669"
              style={{ color: 'var(--brass)', textDecoration: 'none' }}
            >
              (208) 262-3669
            </a>
            .
          </p>

          {/* THIRD-PARTY WEBSITES */}
          <h2 style={h2Style}>Third-Party Websites</h2>
          <p style={pStyle}>
            This Website may contain hyperlinks to websites operated by parties
            other than us. We provide such hyperlinks for your reference only.
            We do not control such websites and are not responsible for their
            contents or the privacy or other practices of such websites. It is
            up to you to read and fully understand their Privacy Policies. Our
            inclusion of hyperlinks to such websites does not imply any
            endorsement of the material on such websites or any association
            with their operators.
          </p>

          {/* QUESTIONS */}
          <h2 style={h2Style}>Questions</h2>
          <p style={pStyle}>
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <a
              href="mailto:Hello@grandtetonbuilders.com"
              style={{ color: 'var(--brass)', textDecoration: 'none' }}
            >
              Hello@grandtetonbuilders.com
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
