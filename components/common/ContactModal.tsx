'use client'

import { useEffect } from 'react'
import ContactForm from './ContactForm'

interface Props {
  onClose: () => void
}

export default function ContactModal({ onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(2,2,26,0.88)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '940px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          borderRadius: '24px',
          background: '#0e0f23',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
          display: 'flex',
        }}
      >
        {/* ── Close ── */}
        <button
          onClick={onClose}
          aria-label="Close contact form"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff',
            fontSize: '20px',
            lineHeight: 1,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.2)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)' }}
        >
          ×
        </button>

        {/* ── Left info panel (hidden on mobile) ── */}
        <div
          className="d-none d-lg-flex flex-column justify-content-between subscribe-wrap subscribe-wrap-two"
          style={{
            width: '40%',
            flexShrink: 0,
            // background: 'linear-gradient(160deg, #0023ec 0%, #9746d8 55%, #d100eb 100%)',
            borderRadius: '24px 0 0 24px',
            padding: '48px 36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* noise */}
          <img
            src="/assets/images/new-images-v2/shapes/noise.png"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, pointerEvents: 'none' }}
          />

          {/* Top: logo + heading */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <img
              src="/assets/images/yuva-logo.png"
              alt="Yuvasoft"
              style={{ maxWidth: '150px', marginBottom: '28px' }}
            />
            <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px' }}>
              Let&apos;s Build Something Intelligent Together
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '14px', lineHeight: 1.7 }}>
              Tell us about your project and our team will respond within one business day.
            </p>
          </div>

          {/* Bottom: real contact details */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Offices */}
            {/* <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>
                Offices
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { country: 'India', addr: '715-7th Floor, Pukhraj Corporate, Navlakha Square, Indore (MP) — 452001' },
                  { country: 'Canada', addr: '1469 Parkcrest Avenue, Kamloops BC V2B 4W5' },
                ].map((o) => (
                  <div key={o.country} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0, marginTop: '3px', color: 'rgba(255,255,255,0.6)' }}>
                      <path d="M16.0013 3.33398C9.75197 3.33398 4.66797 8.41798 4.66797 14.6673C4.66797 21.3113 10.84 25.3886 14.924 28.0859L15.6306 28.5553C15.7426 28.63 15.872 28.6673 16 28.6673C16.128 28.6673 16.2573 28.63 16.3693 28.5553L17.076 28.0859C21.16 25.3886 27.332 21.3113 27.332 14.6673C27.3346 8.41798 22.2506 3.33398 16.0013 3.33398ZM16.0013 18.0007C14.16 18.0007 12.668 16.5087 12.668 14.6673C12.668 12.826 14.16 11.334 16.0013 11.334C17.8426 11.334 19.3346 12.826 19.3346 14.6673C19.3346 16.5087 17.8426 18.0007 16.0013 18.0007Z" fill="currentColor" />
                    </svg>
                    <div>
                      <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', display: 'block', marginBottom: '2px' }}>{o.country}</span>
                      <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '12px', lineHeight: 1.5 }}>{o.addr}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Phone + Email */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>Phone</p>
                <a href="tel:+919993351929" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none', lineHeight: 1.7 }}>
                  +91 (0) 999 335 1929
                </a>
                <a href="tel:+12503202415" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none' }}>
                  +1 (250) 320-2415
                </a>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>Email</p>
                <a href="mailto:info@yuvasoftech.com" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none', lineHeight: 1.7 }}>
                  info@yuvasoftech.com
                </a>
                <a href="mailto:hr@yuvasoftech.com" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none' }}>
                  hr@yuvasoftech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className='contact-form-ui' style={{ flex: 1, padding: '48px 40px 40px', minWidth: 0 }}>
          <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '6px' }}>
            Send Us a Message
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '28px' }}>
            We&apos;ll get back to you within 24 hours.
          </p>

          {/* ↓ shared reusable form — close modal on submit */}
          <ContactForm
            onSuccess={onClose}
            submitLabel="Send Message"
            submitClass="bg-white-style"
          />
        </div>
      </div>
    </div>
  )
}
