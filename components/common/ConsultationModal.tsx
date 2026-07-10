'use client'

import { useState } from 'react'
import ContactModal from '@/components/common/ContactModal'

/* ── Drop-in button that opens the same ContactModal used in the Hero ── */
export function ConsultationButton({ serviceTitle: _ }: { serviceTitle?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="common-btn bg-white-style mt-4"
        onClick={() => setOpen(true)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
      >
        Get a Free Consultation
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.706 12.708L14.707 19.707a1 1 0 0 1-1.414-1.414L18.586 13H3a1 1 0 1 1 0-2h15.586l-5.293-5.293a1 1 0 0 1 1.414-1.414l6.999 6.999a1 1 0 0 1 0 1.416z"
            fill="currentColor"
          />
        </svg>
      </button>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  )
}
