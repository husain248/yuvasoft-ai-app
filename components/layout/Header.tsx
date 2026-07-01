'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/#industries-section' },
  { label: 'Products', href: '/#products-section' },
  { label: 'Contact',  href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Sticky header shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        /* ── Top bar ── */
        .site-header-top {
          background: linear-gradient(180deg,rgba(255,255,255,.5) -613.39%,rgba(255,255,255,.04) 283.93%,rgba(255,255,255,.5) 283.93%);
          padding: 8px 0;
          position: relative;
          z-index: 9;
        }

        /* ── Main nav ── */
        .site-nav {
          width: 100%;
          padding: 18px 0;
          position: absolute;
          left: 0;
          z-index: 99;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .site-nav.scrolled {
          position: fixed;
          top: 0;
          background: rgba(2,2,26,0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.4);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* Logo */
        .nav-logo img { max-width: 160px; display: block; }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: #fff;
          font-size: 17px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .nav-links a:hover { opacity: 0.7; }

        /* Desktop CTA */
        .nav-cta { display: flex; gap: 10px; flex-shrink: 0; }

        /* Hamburger button */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 8px;
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
          z-index: 200;
          position: relative;
        }
        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-drawer {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 150;
          pointer-events: none;
        }
        .mobile-drawer.open {
          pointer-events: all;
        }

        /* Backdrop */
        .drawer-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .mobile-drawer.open .drawer-backdrop { opacity: 1; }

        /* Panel */
        .drawer-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(320px, 85vw);
          height: 100%;
          background: #02021a;
          border-left: 1px solid rgba(255,255,255,0.1);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow-y: auto;
        }
        .mobile-drawer.open .drawer-panel { transform: translateX(0); }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .drawer-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
          color: #fff;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          line-height: 1;
          flex-shrink: 0;
        }

        .drawer-nav {
          list-style: none;
          margin: 0;
          padding: 16px 0;
        }
        .drawer-nav li a {
          display: block;
          padding: 14px 24px;
          color: rgba(255,255,255,0.85);
          font-size: 17px;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s, padding-left 0.2s;
        }
        .drawer-nav li a:hover {
          color: #02D6E4;
          padding-left: 30px;
        }

        .drawer-footer {
          padding: 24px;
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .drawer-footer .common-btn { justify-content: center; width: 100%; }

        /* Responsive breakpoints */
        @media (max-width: 991.98px) {
          .nav-links,
          .nav-cta { display: none; }
          .hamburger { display: flex; }
          .mobile-drawer { display: block; }
        }
        @media (min-width: 992px) {
          .hamburger { display: none; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>

      <header>
        {/* ── Top bar ── */}
        <div className="site-header-top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <p className="text_color_light_white d-flex align-items-center mb-0" style={{ fontSize: '14px', gap: '6px' }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1C5.037 1 1 5.037 1 10s4.037 9 9 9 9-4.037 9-9S14.963 1 10 1zm0 16.744C5.73 17.744 2.256 14.27 2.256 10S5.73 2.256 10 2.256 17.744 5.73 17.744 10 14.27 17.744 10 17.744zm2.955-5.676a.628.628 0 0 1 0 .888.624.624 0 0 1-.441.182.624.624 0 0 1-.442-.182L9.556 10.445A.629.629 0 0 1 9.372 10V5.815a.628.628 0 1 1 1.256 0v3.926l2.327 2.327z" fill="white"/>
                  </svg>
                  <span className="text_color_white" style={{ fontWeight: 600 }}>Working Hours:</span>
                  Monday – Friday, 10am – 7pm
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="d-flex align-items-center gap-4">
                  <a className="text_color_light_white" style={{ fontSize: '14px' }} href="mailto:info@yuvasoftech.com">info@yuvasoftech.com</a>
                  <a className="text_color_light_white" style={{ fontSize: '14px' }} href="tel:+919993351929">+91 (0) 999 3351929</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
          <div className="container">
            <div className="nav-inner">

              {/* Logo */}
              <Link href="/" className="nav-logo">
                <img src="/assets/images/yuva-logo.png" alt="Yuvasoft" />
              </Link>

              {/* Desktop links */}
              <ul className="nav-links">
                {navLinks.map(({ label, href }) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>

              

              {/* Hamburger */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span /><span /><span />
              </button>

            </div>
          </div>
        </nav>

        {/* ── Mobile drawer ── */}
        <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
          {/* Backdrop */}
          <div className="drawer-backdrop" onClick={close} />

          {/* Panel */}
          <div className="drawer-panel">
            <div className="drawer-header">
              <Link href="/" onClick={close}>
                <img src="/assets/images/yuva-logo.png" alt="Yuvasoft" style={{ maxWidth: '130px' }} />
              </Link>
              <button className="drawer-close" onClick={close} aria-label="Close menu">×</button>
            </div>

            <ul className="drawer-nav">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} onClick={close}>{label}</Link>
                </li>
              ))}
            </ul>

           
          </div>
        </div>

      </header>
    </>
  )
}
