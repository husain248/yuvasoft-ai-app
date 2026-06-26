'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <section className="footer-area bg_color_black pt-120">
      <div className="container">
        <div className="row justify-content-between footer-widget-wrapper">

          {/* Logo + description */}
          <div className="col-lg-3">
            <div className="footer-widget">
              <div className="footer-desc">
                <img src="/assets/images/yuva-logo.png" alt="SaasLyn" />
                <p className="text_color_light_white mt-3">
                  At SaasLyn, we offer affordable and comprehensive range of
                  AI solutions, that empower drive growth, and enhance
                  efficiency to meet your unique needs.
                </p>
                <ul className="custom-ul mt-3 social-list d-flex align-items-center flex-wrap">
                  <li>
                    <a href="#">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3333 16.001C29.3333 22.6543 24.4533 28.1743 18.08 29.1743V20.001H21.3333L21.9333 16.001H18.08V13.4943C18.08 12.4409 18.6 11.4143 20.2533 11.4143H21.9333V8.25429C21.9333 8.25429 20.4133 7.98763 18.9467 7.98763C15.9067 7.98763 13.9066 9.70761 13.9066 13.0543V15.9876H10.68V19.9876H13.9066V29.1609C7.53331 28.1609 2.65332 22.641 2.65332 15.9876C2.65332 8.62763 8.62666 2.6543 15.9867 2.6543C23.3467 2.6543 29.32 8.62763 29.32 15.9876" fill="currentColor"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.92 11.0537C27.8266 9.13365 27.3866 7.427 25.9866 6.027C24.5866 4.627 22.88 4.18701 20.96 4.09367C18.9733 3.98701 13.0399 3.98701 11.0666 4.09367C9.14661 4.18701 7.45329 4.627 6.03996 6.027C4.62663 7.427 4.19994 9.13365 4.10661 11.0537C3.99994 13.0403 3.99994 18.9737 4.10661 20.9603C4.19994 22.8803 4.63996 24.587 6.03996 25.987C7.45329 27.387 9.14661 27.827 11.0666 27.9203C13.0533 28.027 18.9866 28.027 20.96 27.9203C22.88 27.827 24.5866 27.387 25.9866 25.987C27.3866 24.587 27.8266 22.8803 27.92 20.9603C28.0266 18.9737 28.0266 13.0403 27.92 11.067V11.0537ZM16 22.3337C12.5066 22.3337 9.66663 19.4937 9.66663 16.0003C9.66663 12.507 12.5066 9.667 16 9.667C19.4933 9.667 22.3333 12.507 22.3333 16.0003C22.3333 19.4937 19.4933 22.3337 16 22.3337ZM23.3599 10.0003C22.6266 10.0003 22.0266 9.40033 22.0266 8.667C22.0266 7.93366 22.6133 7.33366 23.3599 7.33366C24.0933 7.33366 24.6933 7.93366 24.6933 8.667C24.6933 9.40033 24.0933 10.0003 23.3599 10.0003ZM20.3333 16.0003C20.3333 18.387 18.3866 20.3337 16 20.3337C13.6133 20.3337 11.6666 18.387 11.6666 16.0003C11.6666 13.6137 13.6133 11.667 16 11.667C18.3866 11.667 20.3333 13.6137 20.3333 16.0003Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2668 8.34603C23.5334 7.55936 21.6801 6.98602 19.7601 6.66602C19.5201 7.07935 19.2534 7.63935 19.0667 8.07935C17.0134 7.78601 14.9868 7.78601 12.9601 8.07935C12.7734 7.63935 12.4934 7.07935 12.2668 6.66602C10.3334 6.98602 8.4801 7.55936 6.7601 8.34603C3.26676 13.4394 2.32009 18.4127 2.80009 23.3193C5.1201 24.986 7.3601 25.9993 9.5601 26.666C10.0934 25.946 10.5868 25.1727 11.0001 24.3593C10.2001 24.066 9.4401 23.706 8.7201 23.2793C8.90676 23.146 9.09344 22.9994 9.26677 22.8527C13.6534 24.8394 18.4268 24.8394 22.7601 22.8527C22.9468 22.9994 23.1201 23.146 23.3068 23.2793C22.5868 23.706 21.8267 24.066 21.0267 24.3593C21.4401 25.1727 21.9334 25.946 22.4668 26.666C24.6668 25.9993 26.9201 24.986 29.2268 23.3193C29.8134 17.6393 28.3068 12.706 25.2934 8.34603H25.2668ZM11.5734 20.226C10.2534 20.226 9.17343 19.026 9.17343 17.5594C9.17343 16.0927 10.2267 14.8927 11.5734 14.8927C12.9201 14.8927 14.0001 16.0927 13.9734 17.5594C13.9734 19.026 12.9067 20.226 11.5734 20.226ZM20.4268 20.226C19.1068 20.226 18.0267 19.026 18.0267 17.5594C18.0267 16.0927 19.0801 14.8927 20.4268 14.8927C21.7734 14.8927 22.8534 16.0927 22.8267 17.5594C22.8267 19.026 21.7734 20.226 20.4268 20.226Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.38659 28.0009H4.33327V12.8409H9.38659V28.0009ZM9.89327 6.94759C9.89327 5.34759 8.62661 4.05425 7.02661 4.00091C5.39994 3.96091 4.03994 5.2409 3.99994 6.86757C3.95994 8.49424 5.23993 9.85424 6.86659 9.89424C8.51993 9.90758 9.8666 8.60092 9.89327 6.94759ZM27.9333 18.8409C27.9333 14.1209 24.8799 12.6809 22.2799 12.6809C20.4533 12.6276 18.7333 13.5209 17.7333 15.0409V12.8542H12.8533V28.0143H17.9066V20.1476C17.9066 20.0676 17.9066 19.9876 17.9066 19.9076C17.9066 19.9076 17.9066 19.9076 17.9066 19.8942C17.7999 18.2809 19.0266 16.8809 20.6399 16.7742C21.9599 16.7742 22.9599 17.6276 22.9599 20.0276V28.0143H28.0133L27.9466 18.8542L27.9333 18.8409Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget d-lg-flex justify-content-center">
              <div className="footer-link-wrap">
                <h3 className="footer-title">Company</h3>
                <ul className="custom-ul footer-link">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/teams">Team</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product links */}
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget d-lg-flex justify-content-center">
              <div className="footer-link-wrap">
                <h3 className="footer-title">Product</h3>
                <ul className="custom-ul footer-link">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Upcoming</a></li>
                  <li><a href="#">Builder</a></li>
                  <li><a href="#">On Sale</a></li>
                  <li><Link href="/">Live Demo</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h3 className="footer-title">Join our Newsletter</h3>
              {/* position-relative is on the form via CSS class, button uses top-50 + translate */}
              <form action="#" className="footer-subscribe position-relative">
                <input
                  className="w-100"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="common-btn border-style border-style-transparent position-absolute top-50 translate-middle-y"
                >
                  Subscribe
                </button>
              </form>
              <p className="text_color_light_white mt-3">
                We will send you weekly updates for your better Product
                management.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="row">
          <div className="col-lg-12">
            <div className="copy-right-wrap d-flex justify-content-between flex-column flex-lg-row">
              <p className="text_color_light_white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.99992 15.1673C4.04792 15.1673 0.833252 11.9527 0.833252 8.00065C0.833252 4.04865 4.04792 0.833984 7.99992 0.833984C11.9519 0.833984 15.1666 4.04865 15.1666 8.00065C15.1666 11.9527 11.9519 15.1673 7.99992 15.1673ZM7.99992 1.83398C4.59925 1.83398 1.83325 4.59998 1.83325 8.00065C1.83325 11.4013 4.59925 14.1673 7.99992 14.1673C11.4006 14.1673 14.1666 11.4013 14.1666 8.00065C14.1666 4.59998 11.4006 1.83398 7.99992 1.83398ZM10.4112 9.61865C10.5679 9.39198 10.5113 9.08001 10.2846 8.92334C10.0573 8.76534 9.74596 8.8233 9.58862 9.04997C9.24862 9.5413 8.68918 9.83463 8.09318 9.83463C7.08185 9.83463 6.25985 9.01264 6.25985 8.0013C6.25985 6.98997 7.08185 6.16797 8.09318 6.16797C8.68985 6.16797 9.24862 6.4613 9.58862 6.95264C9.74596 7.1793 10.0573 7.23793 10.2846 7.07926C10.5119 6.92193 10.5685 6.61062 10.4112 6.38395C9.88388 5.62262 9.0172 5.16862 8.09253 5.16862C6.52986 5.16862 5.2592 6.43995 5.2592 8.00195C5.2592 9.56395 6.52986 10.8353 8.09253 10.8353C9.0172 10.834 9.88388 10.3793 10.4112 9.61865Z" fill="currentColor" fillOpacity="0.7"/>
                </svg>
                {' '}Copyright 2025 SaasLyn. Inc.
              </p>
              <ul className="custom-ul footer-menu d-flex flex-wrap align-items-center">
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy policy</Link></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
