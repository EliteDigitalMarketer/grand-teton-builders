'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
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

  return (
    <>
      <nav aria-label="Main navigation">
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
          <div className="nav-overlay-header">
            <button
              type="button"
              className="nav-overlay-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="nav-close-icon" aria-hidden="true" />
              <span>Close</span>
            </button>

            <Link
              href="/"
              className="nav-logo"
              onClick={closeMenu}
              aria-label="Grand Teton Builders — Home"
            >
              <Image
                src="/gtb-logo-light.png"
                alt="Grand Teton Builders logo"
                width={280}
                height={100}
                className="nav-logo-img"
                priority
              />
            </Link>

            <Link href="/#contact" className="nav-inquire" onClick={closeMenu}>
              Inquire
            </Link>
          </div>

          <nav aria-label="Overlay navigation" className="nav-overlay-nav">
            <ul className="nav-overlay-list">
              <li>
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link href="/#about" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link href="/#gallery" onClick={closeMenu}>Gallery</Link>
              </li>
              <li>
                <Link href="/projects" onClick={closeMenu}>Projects</Link>
              </li>
              <li>
                <Link href="/#services" onClick={closeMenu}>Services</Link>
              </li>
              <li>
                <Link href="/#contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="nav-overlay-footer">
            <div>
              <div className="nav-overlay-footer-label">Call</div>
              <a href="tel:+12082623669">(208) 262-3669</a>
            </div>
            <div>
              <div className="nav-overlay-footer-label">Email</div>
              <a href="mailto:Hello@grandtetonbuilders.com">Hello@grandtetonbuilders.com</a>
            </div>
            <div>
              <div className="nav-overlay-footer-label">Based In</div>
              <span>Driggs, Idaho</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
