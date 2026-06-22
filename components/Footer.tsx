import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer aria-label="Site footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <Image
            src="/gtb-logo-light.png"
            alt="Grand Teton Builders"
            width={224}
            height={80}
            className="footer-brand-logo"
          />
          <p className="footer-brand-desc">
            Grand Teton Builders creates refined mountain homes in Driggs, Idaho
            and throughout Teton Valley &mdash; blending timeless architecture, durable
            materials, and thoughtful design for the way people live in the
            mountains.
          </p>
          <p className="footer-service-area">
            Serving Driggs, Victor, Tetonia, Alta &amp; Teton Valley, Idaho
          </p>
        </div>

        {/* Current Home */}
        <div>
          <p className="footer-col-title">Current Home</p>
          <ul className="footer-links">
            <li>
              <Link href="/new-construction-home-for-sale-driggs-idaho">
                New Construction Home for Sale in Driggs, Idaho
              </Link>
            </li>
            <li>
              <Link href="/new-construction-home-for-sale-driggs-idaho#inquiry">
                Request Details &amp; Pricing
              </Link>
            </li>
            <li>
              <Link href="/new-construction-home-for-sale-driggs-idaho#inquiry">
                Schedule a Private Showing
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li><Link href="/custom-home-builders-driggs-idaho">Custom Home Builders in Driggs</Link></li>
            <li><Link href="/luxury-homes-teton-valley">Luxury Homes in Teton Valley</Link></li>
            <li><Link href="/spec-homes-driggs-idaho">Spec Homes in Driggs, Idaho</Link></li>
            <li><Link href="/build-process">Our Build Process</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><Link href="/about">About Grand Teton Builders</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Mountain Home Blog</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {currentYear} Grand Teton Builders LLC &middot; Driggs, Idaho
          &middot; All rights reserved
        </p>
        <p className="footer-tagline">&ldquo;Built for Generations. Inspired by Nature.&rdquo;</p>
      </div>
    </footer>
  )
}
