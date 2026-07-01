'use client'

import React from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   ContactForm — reusable form used in:
     • /contact page (inside the existing form-wrap markup)
     • Hero popup modal (inside the modal's right panel)
   Props:
     onSuccess — optional callback called after submit (e.g. close modal)
     submitLabel — button text (default "Submit Now")
     submitClass — CSS class on submit button (default "bg-blue-style")
   ───────────────────────────────────────────────────────────────────────────── */

interface ContactFormProps {
  onSuccess?: () => void
  submitLabel?: string
  submitClass?: string
}

export default function ContactForm({
  onSuccess,
  submitLabel = 'Submit Now',
  submitClass = 'bg-blue-style',
}: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSuccess?.()
  }

  return (
    <form className="common-form-box" onSubmit={handleSubmit}>
      <div className="row gy-3">

        {/* First name */}
        <div className="col-lg-6">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" required />
          </div>
        </div>

        {/* Last name */}
        <div className="col-lg-6">
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" required />
          </div>
        </div>

        {/* Email */}
        <div className="col-lg-6">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
        </div>

        {/* Phone */}
        <div className="col-lg-6">
          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 99933 51929" />
          </div>
        </div>

        {/* Service */}
        {/* <div className="col-lg-12">
          <div className="input-group">
            <label>I&apos;m interested in…</label>
            <select>
              <option value="">Select a service</option>
              <option>AI Strategy &amp; Consulting</option>
              <option>Custom AI Development</option>
              <option>Machine Learning Solutions</option>
              <option>Natural Language Processing</option>
              <option>AI Analytics &amp; Insights</option>
              <option>AI Training &amp; Support</option>
              <option>General Enquiry</option>
            </select>
          </div>
        </div> */}

        {/* Message */}
        <div className="col-lg-12">
          <div className="input-group">
            <label>Message</label>
            <textarea
              cols={30}
              rows={4}
              placeholder="write your message"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <div className="col-lg-12 pt-3">
          <div className="form-info-wrap pt-3">
            <button
              type="submit"
              className={`common-btn ${submitClass} w-100 d-flex justify-content-center`}
            >
              {submitLabel}
            </button>
          </div>
        </div>

      </div>
    </form>
  )
}
