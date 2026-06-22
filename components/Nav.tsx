import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="Grand Teton Builders — Home">
          <Image
            src="/gtb-logo-light.png"
            alt="Grand Teton Builders logo"
            width={280}
            height={100}
            className="nav-logo-img"
            priority
          />
        </Link>
        <div className="nav-links" role="menubar">
          <Link href="/#about" role="menuitem">About</Link>
          <Link href="/#gallery" role="menuitem">Gallery</Link>
          <Link href="/projects" role="menuitem">Projects</Link>
          <Link href="/#services" role="menuitem">Services</Link>
          <Link
            href="/new-construction-home-for-sale-driggs-idaho"
            className="nav-cta"
            role="menuitem"
          >
            View the Driggs Home
          </Link>
        </div>
      </nav>
    </>
  )
}
