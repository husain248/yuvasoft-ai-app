'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import ContactForm from './ContactForm'

interface Props {
  onClose: () => void
}

export default function ContactModal({ onClose }: Props) {
  // Wait for mount so document.body is available (SSR safety)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  if (!mounted) return null

  return createPortal(
    <div
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        /* Sit above absolutely everything on the page */
        zIndex: 2147483647,
        background: 'rgba(2,2,26,0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'cmFadeIn 0.22s ease forwards',
      }}
    >
      <style>{`
        @keyframes cmFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cmSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .cm-inner {
          animation: cmSlideUp 0.32s cubic-bezier(0.16,1,0.3,1) forwards;
        }
      `}</style>

      <div
        className="cm-inner"
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
            borderRadius: '24px 0 0 24px',
            padding: '48px 36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* noise overlay */}
          <img
            src="/assets/images/new-images-v2/shapes/noise.png"
            alt=""
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', opacity: 0.2,
              pointerEvents: 'none',
            }}
          />

          {/* Logo + heading */}
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

          {/* Phone + Email */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>
                Phone
              </p>
              <a href="tel:+919993351929" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none', lineHeight: 1.7 }}>
                +91 (0) 999 335 1929
              </a>
              <a href="tel:+12503202415" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none' }}>
                +1 (250) 320-2415
              </a>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>
                Email
              </p>
              <a href="mailto:info@yuvasoftech.com" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none', lineHeight: 1.7 }}>
                info@yuvasoftech.com
              </a>
              <a href="mailto:hr@yuvasoftech.com" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '13px', display: 'block', textDecoration: 'none' }}>
                hr@yuvasoftech.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="contact-form-ui" style={{ flex: 1, padding: '48px 40px 40px', minWidth: 0 }}>
          <h4 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '6px' }}>
            Send Us a Message
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '28px' }}>
            We&apos;ll get back to you within 24 hours.
          </p>

          <ContactForm
            onSuccess={onClose}
            submitLabel="Send Message"
            submitClass="bg-white-style"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
