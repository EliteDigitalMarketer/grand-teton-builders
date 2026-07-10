'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const lastScrollY = useRef(0)
  const closeMenu = () => setMenuOpen(false)

  // Close overlay on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Lock body scroll while overlay is open
  useEffect(() => {
    if (menuOpen) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [menuOpen])

  // Hide nav on scroll down, show on scroll up (beckbuilds-style)
  useEffect(() => {
    // Initialize to current scroll position in case the page loads mid-scroll
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current

      // Ignore tiny movements to prevent flicker on trackpads
      if (Math.abs(delta) < 5) return

      if (currentScrollY < 100) {
        // Near top of page: always visible
        setNavVisible(true)
      } else if (delta > 0) {
        // Scrolling down: hide
        setNavVisible(false)
      } else {
        // Scrolling up: show
        setNavVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={navVisible ? '' : 'nav-hidden'}
      >
        <button
          type="button"
          className="nav-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="nav-overlay"
        >
          <span className="nav-menu-icon" aria-hidden="true" />
          <span className="nav-menu-label">Menu</span>
        </button>

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

        <Link href="/#contact" className="nav-inquire">
          Inquire
        </Link>
      </nav>

      {menuOpen && (
        <div
          id="nav-overlay"
          className="nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="nav-overlay-topbar">
            <button
              type="button"
              className="nav-overlay-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="nav-close-icon" aria-hidden="true" />
              <span>Close</span>
            </button>
          </div>

          <div className="nav-overlay-body">
            {/* Left column — main nav (serif, larger) */}
            <div className="nav-overlay-col nav-overlay-col-primary">
              <ul className="nav-overlay-primary-list">
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link href="/#about" onClick={closeMenu}>About</Link></li>
                <li><Link href="/#gallery" onClick={closeMenu}>Gallery</Link></li>
                <li><Link href="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><Link href="/#services" onClick={closeMenu}>Services</Link></li>
                <li><Link href="/#contact" onClick={closeMenu}>Contact</Link></li>
              </ul>
              <div className="nav-overlay-divider" />
              <div className="nav-overlay-utility">
                <Link href="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
              </div>
            </div>

            {/* Right grouping — Current Homes + Services, kept tight together */}
            <div className="nav-overlay-sublists">
              <div className="nav-overlay-col">
                <p className="nav-overlay-col-label">Current Homes</p>
                <ul className="nav-overlay-col-list">
                  <li>
                    <Link href="/new-construction-home-for-sale-driggs-idaho" onClick={closeMenu}>
                      The Powder Chalet &mdash; Driggs, ID
                    </Link>
                  </li>
                  <li>
                    <Link href="/new-construction-home-for-sale-santa-fe-new-mexico" onClick={closeMenu}>
                      6 High Desert Vista &mdash; Santa Fe, NM
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" onClick={closeMenu} className="nav-overlay-col-arrow">
                      View All Projects &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-overlay-col">
                <p className="nav-overlay-col-label">Services</p>
                <ul className="nav-overlay-col-list">
                  <li>
                    <Link href="/custom-home-builders-driggs-idaho" onClick={closeMenu}>
                      Custom Home Builders
                    </Link>
                  </li>
                  <li>
                    <Link href="/luxury-homes-teton-valley" onClick={closeMenu}>
                      Luxury Homes in Teton Valley
                    </Link>
                  </li>
                  <li>
                    <Link href="/spec-homes-driggs-idaho" onClick={closeMenu}>
                      Spec Homes in Driggs
                    </Link>
                  </li>
                  <li>
                    <Link href="/build-process" onClick={closeMenu}>
                      Our Build Process
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-overlay-footer">
            <div className="nav-overlay-footer-item">
              <a href="tel:+12082623669">(208) 262-3669</a>
            </div>
            <div className="nav-overlay-footer-item nav-overlay-footer-center">
              <a href="mailto:Hello@grandtetonbuilders.com">Hello@grandtetonbuilders.com</a>
            </div>
            <div className="nav-overlay-footer-item nav-overlay-footer-right">
              Driggs, Idaho
            </div>
          </div>
        </div>
      )}
    </>
  )
}
