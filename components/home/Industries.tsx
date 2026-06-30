'use client'

import Link from 'next/link'

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7061 12.708L14.707 19.7071C14.512 19.9021 14.256 20 14 20C13.744 20 13.488 19.9021 13.293 19.7071C12.902 19.3161 12.902 18.684 13.293 18.293L18.5859 13H3C2.447 13 2 12.552 2 12C2 11.448 2.447 11 3 11H18.5859L13.293 5.70707C12.902 5.31607 12.902 4.68401 13.293 4.29301C13.684 3.90201 14.316 3.90201 14.707 4.29301L21.7061 11.292C21.7991 11.385 21.8721 11.495 21.9231 11.618C22.0241 11.862 22.0241 12.1381 21.9231 12.3821C21.8721 12.5051 21.7991 12.615 21.7061 12.708Z" fill="currentColor" />
  </svg>
)

const industries = [
  {
    image: '/assets/images/awesome-features/ai-feature-1.png',
    imageWidth: 300,
    tag: 'Healthcare',
    title: 'Healthcare & Clinic Booking',
    desc: 'Custom booking systems and patient management software, with optional AI assistants for appointment scheduling and patient queries.',
    href: '/industries/healthcare',
    wide: false,
  },
  {
    image: '/assets/images/awesome-features/ai-feature-2.png',
    imageWidth: 350,
    tag: 'Real Estate',
    title: 'Real Estate & Rentals',
    desc: 'Rental and property platforms that connect owners and tenants directly — like Magicalswap, our own rental listing platform.',
    href: '/industries/real-estate',
    wide: false,
  },
  {
    image: '/assets/images/awesome-features/ai-feature-3.png',
    imageWidth: 300,
    tag: 'AI-Agent',
    title: 'For Network Assistance',
    desc: 'Monitor, troubleshoot, and optimize your network instantly with an intelligent AI-powered assistant.',
    href: '/industries/network-assistance',
    wide: true,
  },
]

export default function Industries() {
  return (
    <section id="industries-section" className="industries-area bg_color_black">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title text_color_white d-inline-block text-anime">
                Industries We Serve
              </h2>
              <p className="desc text_color_light_white">
                From web platforms to mobile apps, we build software for the
                industries that need it most — adding AI where it genuinely
                helps people work faster.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-60 gy-4">
          {industries.map((item, i) => (
            <div key={i} className={item.wide ? 'col-md-12' : 'col-md-6'}>
              <div className={`industries-box${item.wide ? ' industries-box-design-two d-lg-flex' : ''} position-relative overflow-hidden z-index-one`}>
                <div className={`industries-img overflow-hidden text-center${item.wide ? ' flex-shrink-0 order-lg-1' : ''}`}>
                  <img src={item.image} alt={item.title} width={item.imageWidth} />
                </div>
                <div className={`industries-info${item.wide ? ' mt-lg-0' : ''}`}>
                  <span className="text_color_light_white">{item.tag}</span>
                  <h2>{item.title}</h2>
                  <p className="text_color_light_white">{item.desc}</p>
                  <Link className="common-btn border-style" href={item.href}>
                    Learn More <ArrowSvg />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
