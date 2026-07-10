'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { icon: '/assets/images/rails-icon.svg',      label: 'Ruby On Rails' },
  { icon: '/assets/images/android-icon.svg',    label: 'Android Devlopment' },
  { icon: '/assets/images/react-icon.svg',      label: 'React.js' },
  { icon: '/assets/images/react-icon.svg',      label: 'React Native' },
  { icon: '/assets/images/python-icon.svg',     label: 'Node.js' },
  { icon: '/assets/images/langchain-icon.svg',  label: 'LangChain' },
  { icon: '/assets/images/python-icon.svg',     label: 'Python' },
  { icon: '/assets/images/gemini-icon.svg',     label: 'Gemini API' },
  { icon: '/assets/images/langgraph-icon.svg',  label: 'LangGraph' },
  { icon: '/assets/images/langsmith-icon.svg',  label: 'LangSmith' },
  { icon: '/assets/images/blockchain-icon.svg',     label: 'Blockchain' },

]

export default function SkillsSlider() {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    const init = () => {
      if (typeof (window as any).Swiper === 'undefined') {
        setTimeout(init, 200)
        return
      }
      const el = document.querySelector('.skills-swiper')
      if (!el || (el as any).swiper) return

      swiperRef.current = new (window as any).Swiper('.skills-swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        speed: 600,
        pagination: {
          el: '.skills-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.skills-btn-next',
          prevEl: '.skills-btn-prev',
        },
        breakpoints: {
          480:  { slidesPerView: 3, spaceBetween: 16 },
          768:  { slidesPerView: 4, spaceBetween: 20 },
          992:  { slidesPerView: 5, spaceBetween: 20 },
          1200: { slidesPerView: 6, spaceBetween: 24 },
        },
      })
    }
    init()
  }, [])

  return (
    <section className="skills-slider-area bg_color_black pb-120">
      <style>{`
        /* ── Skills Slider ── */
        .skills-slider-area {
          padding-top: 60px;
        }

        /* Header row */
        .skills-slider-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 36px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .skills-slider-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 10px;
        }
        .skills-slider-heading {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
        }
        .skills-slider-heading span {
          background: linear-gradient(270deg,#00C881,#02D6E4,#4229ff,#9003FF,#02D6E4,#00C881);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 6s ease infinite;
        }

        /* Nav buttons */
        .skills-nav-wrap {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .skills-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s;
          flex-shrink: 0;
        }
        .skills-nav-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.35);
        }
        .skills-nav-btn.swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }

        /* Cards */
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 28px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          min-height: 140px;
          cursor: default;
        }
        .skill-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(2,214,228,0.35);
          transform: translateY(-4px);
        }
        .skill-card .skill-icon {
          width: 52px;
          height: 52px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: opacity 0.3s, filter 0.3s;
        }
        .skill-card:hover .skill-icon {
          opacity: 1;
          filter: none;
        }
        .skill-card .skill-label {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          line-height: 1.3;
        }

        /* Pagination dots */
        .skills-pagination {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          gap: 6px;
        }
        .skills-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          opacity: 1;
          transition: background 0.3s, width 0.3s;
          cursor: pointer;
        }
        .skills-pagination .swiper-pagination-bullet-active {
          background: #02D6E4;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <div className="container">

        {/* Header */}
        <div className="skills-slider-header">
          <div>
            <span className="skills-slider-label">Our Skills</span>
            <h2 className="skills-slider-heading">
              Technologies <span>We Master</span>
            </h2>
          </div>
          <div className="skills-nav-wrap">
            <button className="skills-nav-btn skills-btn-prev" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="skills-nav-btn skills-btn-next" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="swiper skills-swiper">
          <div className="swiper-wrapper">
            {skills.map((skill, i) => (
              <div key={i} className="swiper-slide">
                <div className="skill-card">
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="skill-icon"
                    width={52}
                    height={52}
                  />
                  <span className="skill-label">{skill.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots pagination */}
        <div className="skills-pagination"></div>

      </div>
    </section>
  )
}
