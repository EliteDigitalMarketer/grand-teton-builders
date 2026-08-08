'use client'

import Script from 'next/script'

/**
 * ContactForm — embeds the NurturePro/GHL A2P-compliant contact form.
 *
 * The iframe is inlined verbatim from the embed snippet (form ID
 * I2GwFujwoyIo0NpV0dEL). The companion form_embed.js script listens for
 * postMessage events from the iframe and handles auto-resizing based on
 * form content; we load it via next/script with strategy="afterInteractive"
 * so it initializes after the iframe is mounted in the DOM.
 *
 * Rendered on both the homepage (#contact section) and the /contact page.
 */
export default function ContactForm() {
  return (
    <div style={{ width: '100%' }}>
      <iframe
        src="https://link.nurturepro.io/widget/form/I2GwFujwoyIo0NpV0dEL"
        style={{
          width: '100%',
          height: 988,
          border: 'none',
          borderRadius: 8,
          display: 'block',
          background: '#fff',
        }}
        id="inline-I2GwFujwoyIo0NpV0dEL"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="A2P GHL FORM"
        data-height="988"
        data-layout-iframe-id="inline-I2GwFujwoyIo0NpV0dEL"
        data-form-id="I2GwFujwoyIo0NpV0dEL"
        title="Grand Teton Builders inquiry form"
      />
      <Script
        src="https://link.nurturepro.io/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
