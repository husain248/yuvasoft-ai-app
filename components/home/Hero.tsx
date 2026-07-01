'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContactModal from '@/components/common/ContactModal'

/* ── Slide data ──────────────────────────────────────────────────────────── */

const heroSlides = [
  {
    service: 'Web Applications',
    titleWord: 'Scale',
    description:
      'We build fast, maintainable web apps using Next.js, React, and Ruby on Rails — from marketing sites to complex internal platforms engineered to grow with your business.',
  },
  {
    service: 'Mobile Apps',
    titleWord: 'Accelerate',
    description:
      'Native Android and React Native apps built for real-world performance — one codebase, both platforms, polished UX from day one.',
  },
  {
    service: 'UI/UX Design',
    titleWord: 'Transform',
    description:
      'Interfaces designed around how your users actually think — wireframes, prototypes, and responsive design that converts visitors into customers.',
  },
  {
    service: 'Technology Solutions',
    titleWord: 'Future-Proof',
    description:
      'End-to-end technology packages covering architecture, integrations, CMS builds, and infrastructure — one partner for your entire stack.',
  },
  {
    service: 'AI & Automation',
    titleWord: 'Automate',
    description:
      'AI agents, chatbots, and workflow automation layered into your existing software using LangChain and Gemini — no full rebuild required.',
  },
  {
    service: 'Quality Assurance',
    titleWord: 'Strengthen',
    description:
      'Rigorous manual and automated QA, performance testing, and ongoing support so bugs get caught before your users ever see them.',
  },
]

/* ── Typewriter hook ─────────────────────────────────────────────────────── */

function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 80,
  pause = 1400
) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const t = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return { typed: words[index].substring(0, subIndex), index }
}

/* ── Hero component ──────────────────────────────────────────────────────── */

export default function Hero() {
  const serviceLabels = heroSlides.map((s) => s.service)
  const { typed, index: slideIndex } = useTypewriter(serviceLabels)
  const slide = heroSlides[slideIndex]

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* ── Contact modal ── */}
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}

      <div
        className="hero-area hero-area-canvas minus-margin overflow-hidden position-relative z-index-one"
        style={{ backgroundImage: 'url(/assets/images/banner/banner-three-bg.png)' }}
      >
        <style>{`
          .hero-services-kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.3px;
            margin-bottom: 16px;
            padding: 6px 16px;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 999px;
            background: rgba(255,255,255,0.05);
          }
          .hero-services-kicker .kicker-label { opacity: 0.65; font-weight: 400; }
          .kicker-cursor {
            display: inline-block;
            animation: hero-blink 1s step-end infinite;
          }
          @keyframes hero-blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0; }
          }
          .hero-rotate-wrapper {
            display: inline-block;
            position: relative;
            vertical-align: bottom;
            height: 1.15em;
            min-width: 180px;
          }
          .hero-rotate-word {
            display: inline-block;
            position: absolute;
            left: 0; bottom: 0;
            background: linear-gradient(135deg, #00C881, #02D6E4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: heroWordIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
            white-space: nowrap;
          }
          @keyframes heroWordIn {
            0%   { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0);    opacity: 1; }
          }
          .hero-text {
            animation: heroDescIn 0.5s ease forwards;
          }
          @keyframes heroDescIn {
            0%   { opacity: 0; transform: translateY(6px); }
            100% { opacity: 1; transform: translateY(0);   }
          }
          /* Contact Us pill button */
          .hero-contact-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 13px 22px;
            border-radius: 32px;
            border: 1px solid rgba(255,255,255,0.32);
            background: rgba(255,255,255,0.06);
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(4px);
            letter-spacing: 0.3px;
            line-height: 1;
          }
          .hero-contact-btn:hover {
            background: rgba(255,255,255,0.12);
            border-color: rgba(255,255,255,0.5);
            transform: translateY(-1px);
          }
        `}</style>

        <div className="container position-relative z-index-one">
          <div className="row justify-content-between align-items-center">

            {/* ── Left: text ── */}
            <div className="col-lg-6 order-1 order-lg-0 mt-5 mt-lg-0">
              <div className="hero-info">
                <span className="hero-services-kicker text_color_white">
                  <span className="kicker-label">We build:</span>
                  <span className="kicker-typed">{typed}</span>
                  <span className="kicker-cursor">|</span>
                </span>

                <h1 className="text_color_white">
                  Software &amp; AI Solutions That{' '}
                  <span className="hero-rotate-wrapper">
                    <span className="hero-rotate-word" key={slideIndex}>
                      {slide.titleWord}
                    </span>
                  </span>{' '}
                  <div>Your Business</div>
                </h1>

                <p className="text_color_light_white hero-text" key={`desc-${slideIndex}`}>
                  {slide.description}
                </p>

                <div className="two-btn-wrap d-flex flex-wrap mt-lg-5 mt-4" style={{ gap: '12px' }}>
                  {/* Get Started → /contact page */}
                  <Link className="common-btn bg-white-style" href="/contact">
                    Get Started
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>

                  {/* Contact Us → opens popup */}
                  <button
                    type="button"
                    className="hero-contact-btn"
                    onClick={() => setModalOpen(true)}
                    aria-label="Open contact form"
                  >
                    Contact Us
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Right: hero image ── */}
            <div className="col-lg-4 order-0 order-lg-1">
              <div className="hero-img-wrap section-middle">
                <img src="/assets/images/new-images-v2/hero/hero-1.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom showcase thumbnail ── */}
        <div className="container pt-120 position-relative z-index-one">
          <div className="row row-padding-top">
            <div className="col-12">
              <div className="banner-three__thumb scale">
                <img
                  src="/assets/images/banner/banner-three-thumb.png"
                  alt="banner-thumb"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container pt-120 position-relative z-index-one">
        <div className="row row-padding-top">
          <div className="col-12">
            <div className="banner-three__thumb scale">
              <img
                src="/assets/images/banner/banner-three-thumb.png"
                alt="banner-thumb"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
