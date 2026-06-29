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
      <section className="contact-area bg_color_deep_blue pt-120 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title gradient-sub-title text-center">
                <h2 className="title text_color_white">
                  Our team is ready to help you
                </h2>
                <p className="desc text_color_light_white">
                  Our dedicated team is prepared and eager to provide you with
                  the assistance you need, ensuring your success and
                  satisfaction. Feel free to reach out anytime for our support.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-between gy-4 pt-60">
            <div className="col-lg-7 col-md-12">
              <div className="form-wrap form-wrap-contact w-100">
                <form className="common-form-box">
                  <h3 className="form-title text_color_white">Get In touch</h3>
                  <p className="form-info text_color_light_white">
                    Our team would love to hear from you. Write your message to
                    us!
                  </p>
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <div className="input-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder="write your first name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <label>First Name</label>
                        <input type="text" placeholder="write your last name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="write your email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-group">
                        <label>Message</label>
                        <textarea
                          cols={30}
                          rows={4}
                          placeholder="write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 pt-3">
                      <div className="form-info-wrap">
                        <button
                          type="submit"
                          className="common-btn bg-blue-style w-100 d-flex justify-content-center"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="contact-hero h-100 overflow-hidden"></div>
            </div>
          </div>
          <div className="row gy-4 pt-120">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className='d-flex align-items-start flex-wrap'>
                <div className="contact-card-box text-center flex-fill">
                  <div className="contact-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16.0013 3.33398C9.75197 3.33398 4.66797 8.41798 4.66797 14.6673C4.66797 21.3113 10.84 25.3886 14.924 28.0859L15.6306 28.5553C15.7426 28.63 15.872 28.6673 16 28.6673C16.128 28.6673 16.2573 28.63 16.3693 28.5553L17.076 28.0859C21.16 25.3886 27.332 21.3113 27.332 14.6673C27.3346 8.41798 22.2506 3.33398 16.0013 3.33398ZM16.0013 18.0007C14.16 18.0007 12.668 16.5087 12.668 14.6673C12.668 12.826 14.16 11.334 16.0013 11.334C17.8426 11.334 19.3346 12.826 19.3346 14.6673C19.3346 16.5087 17.8426 18.0007 16.0013 18.0007Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <h3 className="contact-card-title text_color_white">
                      India Address
                    </h3>
                    <p className="contact-card-desc text_color_light_white">
                      715-7th Floor, Pukhraj Corporate,Navlakha Square, Indore(MP)-452001, INDIA.
                    </p>
                  </div>
                </div>
                <div className="contact-card-box text-center flex-fill">
                  <div className="contact-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16.0013 3.33398C9.75197 3.33398 4.66797 8.41798 4.66797 14.6673C4.66797 21.3113 10.84 25.3886 14.924 28.0859L15.6306 28.5553C15.7426 28.63 15.872 28.6673 16 28.6673C16.128 28.6673 16.2573 28.63 16.3693 28.5553L17.076 28.0859C21.16 25.3886 27.332 21.3113 27.332 14.6673C27.3346 8.41798 22.2506 3.33398 16.0013 3.33398ZM16.0013 18.0007C14.16 18.0007 12.668 16.5087 12.668 14.6673C12.668 12.826 14.16 11.334 16.0013 11.334C17.8426 11.334 19.3346 12.826 19.3346 14.6673C19.3346 16.5087 17.8426 18.0007 16.0013 18.0007Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <h3 className="contact-card-title text_color_white">
                      Canada Address
                    </h3>
                    <p className="contact-card-desc text_color_light_white">
                      1469 Parkcrest Avenue Kamloops BC V2B 4W5, CANADA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className='d-flex align-items-start flex-wrap'>
                <div className="contact-card-box text-center flex-fill">
                  <div className="contact-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M23.5002 18.8977L27.0243 20.999C27.7523 21.4337 28.1281 22.279 27.9615 23.111C27.2801 26.523 23.8536 28.7097 20.4976 27.7884C12.5789 25.615 6.39345 19.4484 4.21211 11.5124C3.28945 8.15502 5.47359 4.72566 8.88692 4.04299L8.90938 4.03901C9.74271 3.87234 10.5923 4.24967 11.0256 4.98167L13.1096 8.50035C13.8509 9.75235 13.4827 11.3643 12.2707 12.1697L10.0562 13.643C11.6189 17.3857 14.6054 20.3844 18.3374 21.9444L19.8241 19.7243C20.6361 18.515 22.2495 18.1524 23.5002 18.8977Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <h3 className="contact-card-title text_color_white">
                      Contact Info
                    </h3>
                    <p className="contact-card-desc text_color_light_white">
                      <a href="tel:999 3351929"> +91 (0) 999 3351929</a><br />
                      <a href="tel:+1 (250) 320-2415"> +1 (250) 320-2415</a>
                    </p>
                  </div>
                </div>
                <div className="contact-card-box text-center flex-fill">
                  <div className="contact-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M24 6.66602H8C5.33333 6.66602 4 7.99935 4 10.666V22.666C4 25.3327 5.33333 26.666 8 26.666H24C26.6667 26.666 28 25.3327 28 22.666V10.666C28 7.99935 26.6667 6.66602 24 6.66602ZM23.9212 12.8074L17.3721 17.57C16.9614 17.8687 16.48 18.018 16 18.018C15.52 18.018 15.0373 17.8687 14.6279 17.5714L8.07878 12.8074C7.63211 12.4834 7.53339 11.8567 7.85872 11.41C8.18272 10.9647 8.80519 10.8634 9.25586 11.19L15.8053 15.9527C15.9227 16.0367 16.0786 16.038 16.196 15.9527L22.7454 11.19C23.1948 10.8634 23.8186 10.9647 24.1426 11.41C24.4679 11.858 24.3679 12.4834 23.9212 12.8074Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <h3 className="contact-card-title text_color_white">
                      Live Support
                    </h3>
                    <p className="contact-card-desc text_color_light_white">
                      <a href="mailto:info@yuvasoftech.com"
                        > info@yuvasoftech.com</a>
                        <br/>
                        <a href="mailto:hr@yuvasoftech.com"
                        > hr@yuvasoftech.com</a>
                      
                    </p>
                  </div>
                </div>
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
                      fontSize: '48px', fontWeight: 700, color: '#ffffff',
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
