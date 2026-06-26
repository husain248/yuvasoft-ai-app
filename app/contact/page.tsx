'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <main>
      {/* ── Breadcrumb ── */}
      <section className="breadcrumb-area minus-margin overflow-hidden position-relative z-index-one">
        <div className="container">
          <div className="row justify-content-center position-relative z-index-one">
            <div className="col-lg-10">
              <div className="breadcrumb-info text-center">
                <p className="breadcrumb-nav text_color_white">
                  <Link href="/">Home</Link>
                  <i className="bi bi-slash-lg"></i>Contact
                </p>
                <h1 className="text_color_white">Get In Touch</h1>
                <p className="breadcrumb-desc text_color_light_white">
                  Tell us about your project and we&apos;ll respond within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <video className="breadcrumb-video-bg z-index-minus-one position-absolute top-0 start-0 h-100 w-100"
          playsInline autoPlay muted loop>
          <source src="/assets/images/new-images-v2/video/breadcrumb.mp4" type="video/mp4"/>
        </video>
      </section>

      {/* ── Contact main ── */}
      <section className="contact-area bg_color_black pt-120 pb-120">
        <div className="container">
          <div className="row gy-5 justify-content-between">

            {/* ── Left info cards ── */}
            <div className="col-lg-4">
              <div className="section-title mb-4">
                <span className="sub-title d-inline-block">Contact Us</span>
                <h2 className="title text_color_white">Let&apos;s Build Something Intelligent Together</h2>
                <p className="desc text_color_light_white mt-3">
                  Whether you have a clear brief or just an idea, we&apos;d love to hear from you. Our team typically responds within 4 business hours.
                </p>
              </div>

              {/* Info items */}
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                  ),
                  label: 'Office Address',
                  value: '42 Innovation Hub, Tech Park, Pune, Maharashtra 411014',
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+91 98765 43210',
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@yuvasoft.ai',
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 2c1.71 0 3.31.47 4.68 1.28L4.28 16.68A8.99 8.99 0 0 1 3 12c0-4.97 4.03-9 9-9zm0 18c-1.71 0-3.31-.47-4.68-1.28l12.4-12.4A8.99 8.99 0 0 1 21 12c0 4.97-4.03 9-9 9z" fill="currentColor"/>
                    </svg>
                  ),
                  label: 'Working Hours',
                  value: 'Monday – Friday, 10am – 6pm IST',
                },
              ].map((item, i) => (
                <div key={i} className="d-flex align-items-start gap-3 mb-4">
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, color: 'rgba(255,255,255,0.8)',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text_color_light_white mb-1" style={{ fontSize: '13px' }}>{item.label}</p>
                    <p className="text_color_white mb-0" style={{ fontSize: '15px' }}>{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="mt-4">
                <p className="text_color_light_white mb-2" style={{ fontSize: '13px' }}>Follow Us</p>
                <ul className="custom-ul social-list social-list-two d-flex align-items-center flex-wrap">
                  {(['Facebook', 'LinkedIn', 'Instagram', 'X']).map((s) => (
                    <li key={s}><a href="#" aria-label={s}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
                        <text x="10" y="14" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">
                          {s[0]}
                        </text>
                      </svg>
                    </a></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="col-lg-7">
              <div className="about-wrap bg_color_light_black p-5" style={{ borderRadius: '24px' }}>
                <h3 className="text_color_white mb-1">Send Us a Message</h3>
                <p className="text_color_light_white mb-4">Fill in the form and we&apos;ll be in touch within 24 hours.</p>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>First Name *</label>
                      <input
                        type="text"
                        placeholder="John"
                        required
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: '#fff', fontSize: '15px', outline: 'none',
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>Last Name *</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        required
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: '#fff', fontSize: '15px', outline: 'none',
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: '#fff', fontSize: '15px', outline: 'none',
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: '#fff', fontSize: '15px', outline: 'none',
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>Company / Organisation</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: '#fff', fontSize: '15px', outline: 'none',
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>What are you interested in?</label>
                      <select
                        style={{
                          width: '100%', background: '#1a1f2e',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: 'rgba(255,255,255,0.7)', fontSize: '15px', outline: 'none',
                        }}
                      >
                        <option value="">Select a service...</option>
                        <option>AI Strategy &amp; Consulting</option>
                        <option>Custom AI Development</option>
                        <option>Machine Learning Solutions</option>
                        <option>Natural Language Processing</option>
                        <option>AI Analytics &amp; Insights</option>
                        <option>AI Training &amp; Support</option>
                        <option>Product Inquiry</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="text_color_light_white mb-2" style={{ fontSize: '14px' }}>Your Message *</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project, challenge, or idea..."
                        required
                        style={{
                          width: '100%', background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px',
                          padding: '14px 18px', color: '#fff', fontSize: '15px',
                          outline: 'none', resize: 'vertical',
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="common-btn bg-white-style w-100 justify-content-center"
                        style={{ border: 'none', cursor: 'pointer' }}
                      >
                        Send Message
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Contact Us ── */}
      <section className="service-area bg_color_deep_blue pt-120 pb-120 position-relative z-index-one overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title text_color_white text-anime">What Happens Next?</h2>
                <p className="desc text_color_light_white">Here&apos;s our simple, no-pressure process from first contact to project kick-off.</p>
              </div>
            </div>
          </div>
          <div className="row pt-60 gy-4">
            {[
              { num: '01', title: 'We Read Your Message', desc: 'Every submission is personally read by a team lead — no automated gatekeeping.' },
              { num: '02', title: 'Discovery Call', desc: 'We schedule a 30-minute call to understand your goals, constraints, and timeline.' },
              { num: '03', title: 'Proposal', desc: 'Within 3 business days you receive a clear proposal: scope, timeline, and investment.' },
              { num: '04', title: 'Kick-Off', desc: 'Once you&apos;re happy, we hit the ground running — no lengthy procurement cycles.' },
            ].map((step) => (
              <div key={step.num} className="col-lg-3 col-md-6">
                <div className="service-box-wrap h-100">
                  <div className="service-box position-relative overflow-hidden h-100">
                    <span style={{
                      fontSize: '48px', fontWeight: 700, color: 'rgba(255,255,255,0.08)',
                      display: 'block', marginBottom: '8px', lineHeight: 1,
                    }}>{step.num}</span>
                    <h3 style={{ fontSize: '18px' }}>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
