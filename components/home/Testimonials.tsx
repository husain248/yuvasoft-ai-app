'use client'

import { useEffect } from 'react'

const testimonials = [
  {
    name: ' Almaz Bikchurin',
    role: 'CEO & Founder, Tatar on Rails',
    image: '/assets/images/testimonial/author-7.png',
    text: 'Using their good people and project management skills, Yuvasoft Solutions Private Limited always delivers work on time. Their adaptability and work culture have helped them mesh well with the internal team. They continue to communicate well, resulting in a strong, long-term partnership.',
  },
  {
    name: 'Anonymous',
    role: 'CTO, Software Development & Consulting Company',
    image: '/assets/images/testimonial/author-6.png',
    text: 'Stakeholders have been impressed with the quality of the work so far. Yuvasoft Solutions Private Limited has delivered everything on time and in budget. Their team communicates directly and effectively. As a result, the project has run smoothly so far.',
  },
  {
    name: 'Samuel Adesoga',
    role: 'Consultant, IT Consulting Firm',
    image: '/assets/images/testimonial/author-8.png',
    text: 'Yuvasoft Solutions Private Limited was able to complete the project in a timely manner. Project management was effective. They were very flexible and easy to work with.',
  },
  {
    name: 'Head of Delivery',
    role: 'Software Company',
    image: '/assets/images/testimonial/author-7.png',
    text: 'Yuvasoft Solutions Private Limited followed the clients requirements for the app and delivered on time. The project ran hassle-free, there were no recorded issues, and the team stayed on track and was very close to their estimates. Customers can expect a responsive vendor.',
  },
  {
    name: 'CEO',
    role: 'Full-Service Web & Mobile Development Company',
    image: '/assets/images/testimonial/author-6.png',
    text: 'Yuvasoft Solutions Private Limited follows the clients timelines to ensure they meet deadlines. Their team communicates well; communication is managed by the clients project manager.',
  },
  {
    name: 'Ollie Lawson',
    role: 'Managing Director, Vivify Studios',
    image: '/assets/images/testimonial/author-6.png',
    text: 'Yuvasoft Solutions Private Limited provides quality work with excellent communication. They were able to meet tight deadlines and pass all QC tests. They used Skype, Jira, and held regular calls and meetings.',
  },
]

export default function Testimonials() {
  useEffect(() => {
    // Wait for Swiper to be available on window (loaded via <Script> in layout.tsx)
    const init = () => {
      if (typeof (window as any).Swiper === 'undefined') {
        setTimeout(init, 200)
        return
      }

      const slider = document.querySelector('.testimonial-3__slider')
      if (!slider) return

      // Destroy any existing instance to avoid double-init on hot-reload
      const existing = (slider as any).swiper
      if (existing) existing.destroy(true, true)

      new (window as any).Swiper('.testimonial-3__slider', {
        slidesPerView: 1,
        spaceBetween: 64,
        loop: true,
        speed: 2400,
        effect: 'slide',
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          1300: {
            slidesPerView: 2.8,
            spaceBetween: 64,
          },
        },
      })
    }

    init()
  }, [])

  return (
    <section className="testimonial-3 section section-padding-top-bottom overflow-hidden">
      <div className="container">
        <div className="row g-2 justify-content-between align-items-end">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="section-header-3">
              <span className="section-sub-title">Testimonials</span>
              <h2 className="section-title text-anime">
                What our awesome Customers say
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="testimonial-3__info">
              <p>
                The a long established fact that a reader will be distracted
                the readable content of page when looking at layout the.
              </p>
            </div>
          </div>
        </div>

        {/* saaslyn_screenfix_right lets the slider bleed to the right edge */}
        <div className="row row-padding-top saaslyn_screenfix_right">
          <div className="col-12">
            <div className="swiper testimonial-3__slider">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="testimonial-3__item">

                      {/* Left decorative triangle */}
                      <div className="triangle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="150" viewBox="0 0 52 150" fill="none">
                          <path
                            d="M35.6612 36.6382C56.4441 57.9905 56.4441 92.0095 35.6612 113.362L1.07269e-06 150L7.62939e-06 -3.19093e-06L35.6612 36.6382Z"
                            fill="currentColor" fillOpacity="0.08"
                          />
                        </svg>
                      </div>

                      <div className="item-content">
                        {/* Header: stars + quote icon */}
                        <div className="item-header">
                          <div className="rating-stars">
                            <ul>
                              {[...Array(5)].map((_, s) => (
                                <li key={s}>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="38" viewBox="0 0 48 38" fill="none">
                              <path opacity="0.16" d="M2 0H18C19.1046 0 20 0.89543 20 2V17.1716C20 17.702 19.7893 18.2107 19.4142 18.5858L1.70711 36.2929C1.07714 36.9229 0 36.4767 0 35.5858V2C0 0.895431 0.895431 0 2 0Z" fill="currentColor"/>
                              <path opacity="0.16" d="M30 0H46C47.1046 0 48 0.89543 48 2V17.1716C48 17.702 47.7893 18.2107 47.4142 18.5858L29.7071 36.2929C29.0771 36.9229 28 36.4767 28 35.5858V2C28 0.895431 28.8954 0 30 0Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>

                        {/* Author */}
                        <div className="item-author">
                          <div className="author-avatar">
                            <img src={t.image} alt={t.name} />
                          </div>
                          <h6 className="author-title">{t.name}</h6>
                          <span className="author-designation">{t.role}</span>
                        </div>

                        {/* Review text */}
                        <p>{t.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
