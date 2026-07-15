'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    src: '/assets/images/about-slider/coding-screen.jpg',
    alt: 'Web development coding on screen',
  },
  {
    src: '/assets/images/about-slider/laptop-code.jpg',
    alt: 'Laptop with web development code',
  },
  {
    src: '/assets/images/about-slider/developer-desk.jpg',
    alt: 'Developer workspace with technology stack',
  },
  {
    src: '/assets/images/about-slider/code-editor.jpg',
    alt: 'Code editor and modern web technologies',
  },
  {
    src: '/assets/images/about-slider/web-tech.jpg',
    alt: 'Web development technologies',
  },
]

const INTERVAL_MS = 3500

export default function AboutImageSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="about-image-slider">
      <style>{`
        .about-image-slider {
          position: relative;
          width: 100%;
          aspect-ratio: 1320 / 500;
          border-radius: 20px;
          overflow: hidden;
          background: #0a0a12;
        }
        .about-image-slider__slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .about-image-slider__slide.is-active {
          opacity: 1;
        }
        .about-image-slider__dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
        }
        .about-image-slider__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .about-image-slider__dot.is-active {
          background: #fff;
          transform: scale(1.25);
        }
        @media (max-width: 575px) {
          .about-image-slider {
            aspect-ratio: 16 / 9;
          }
          .about-image-slider__dots {
            bottom: 12px;
          }
        }
      `}</style>

      {slides.map((slide, i) => (
        <img
          key={slide.src}
          className={`about-image-slider__slide${i === active ? ' is-active' : ''}`}
          src={slide.src}
          alt={slide.alt}
        />
      ))}

      <div className="about-image-slider__dots" role="tablist" aria-label="About image slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`about-image-slider__dot${i === active ? ' is-active' : ''}`}
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}
