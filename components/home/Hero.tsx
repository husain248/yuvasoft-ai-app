'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const rotatingServices = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Technology Solutions',
  'AI & Automation',
]

const rotatingTitleWords = [
  'Scale',
  'Automate',
  'Transform',
  'Accelerate',
  'Future-Proof',
]

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pause = 1400) {
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
    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return words[index].substring(0, subIndex)
}

function useRotatingWord(words: string[], interval = 2800) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(t)
  }, [words, interval])

  return { word: words[index], index }
}

export default function Hero() {
  const typed = useTypewriter(rotatingServices)
  const { word: titleWord, index: titleIndex } = useRotatingWord(rotatingTitleWords)

  return (
    <div
      className="hero-area hero-area-canvas minus-margin overflow-hidden position-relative z-index-one"
      style={{
        backgroundImage: 'url(/assets/images/banner/banner-three-bg.png)',
      }}
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
        .hero-services-kicker .kicker-label {
          opacity: 0.65;
          font-weight: 400;
        }
        .hero-services-kicker .kicker-typed {
          min-width: 1px;
        }
        .hero-services-kicker .kicker-cursor {
          display: inline-block;
          animation: hero-blink 1s step-end infinite;
        }
        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Rotating title word */
        .hero-rotate-wrapper {
          display: inline-block;
          position: relative;
          // overflow: hidden;
          vertical-align: bottom;
          height: 1.15em;
          min-width: 180px;
        }
        .hero-rotate-word {
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(135deg, #00C881, #02D6E4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: heroWordIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          white-space: nowrap;
        }
        @keyframes heroWordIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className="container position-relative z-index-one">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 order-1 order-lg-0 mt-5 mt-lg-0">
            <div className="hero-info">
              <span className="hero-services-kicker text_color_white">
                <span className="kicker-label">We build:</span>
                <span className="kicker-typed">{typed}</span>
                <span className="kicker-cursor">|</span>
              </span>
              <h1 className="text_color_white">
                Software & AI Solutions That{' '}
                <span className="hero-rotate-wrapper">
                  <span className="hero-rotate-word" key={titleIndex}>
                    {titleWord}
                  </span>
                </span>{' '}
                <div>Your Business</div>
              </h1>
              <p className="text_color_light_white hero-text">
                We design and build custom web platforms, mobile apps, and enterprise software — and layer in AI where it actually moves the needle, so your business runs faster and smarter.
              </p>
              <div className="two-btn-wrap d-flex flex-wrap mt-lg-5 mt-4">
                <Link className="common-btn bg-white-style" href="/contact">
                  Get Started
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <a
                  className="vid common-btn border-style border-style-transparent"
                  href="https://vimeo.com/712351958"
                >
                  Watch Demo
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.283 16.752C9.93296 16.752 9.58301 16.662 9.26001 16.481C8.59301 16.107 8.19495 15.4281 8.19495 14.6641V9.33594C8.19495 8.57194 8.59301 7.89304 9.26001 7.51904C9.93101 7.14404 10.719 7.15906 11.373 7.56006L15.8521 10.3C16.4491 10.666 16.806 11.301 16.806 12.001C16.806 12.701 16.4491 13.3359 15.8521 13.7019L11.373 16.4419C11.034 16.6479 10.659 16.752 10.283 16.752ZM10.285 8.75C10.153 8.75 10.047 8.79688 9.99304 8.82788C9.90304 8.87788 9.69397 9.02894 9.69397 9.33594V14.6641C9.69397 14.9721 9.90304 15.1221 9.99304 15.1721C10.084 15.2231 10.323 15.3249 10.59 15.1609L15.069 12.4209C15.283 12.2899 15.306 12.083 15.306 12C15.306 11.917 15.283 11.7101 15.069 11.5801L10.59 8.84009C10.481 8.77209 10.377 8.75 10.285 8.75ZM12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.899 2.75 2.75 6.899 2.75 12C2.75 17.101 6.899 21.25 12 21.25C17.101 21.25 21.25 17.101 21.25 12C21.25 6.899 17.101 2.75 12 2.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-0 order-lg-1">
            <div className="hero-img-wrap section-middle">
              <img src="/assets/images/new-images-v2/hero/hero-1.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
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
  )
}

