'use client'

import Image from 'next/image'

/* ── Service definitions ── */
const services = [
  {
    icon: '/assets/images/s1-icon.svg',
    title: 'Web Application Development',
    description:
      'We design and build fast, scalable web applications from the ground up — from marketing sites to complex internal platforms — using modern frameworks and clean, maintainable architecture.',
  },
  {
    icon: '/assets/images/s2-icon.svg',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android, built for performance and a smooth user experience, backed by 15 years of in-house engineering experience.',
  },
  {
    icon: '/assets/images/s3-icon.svg',
    title: 'UI/UX Design',
    description:
      'Interfaces designed around how your users actually think — wireframes, prototypes, and responsive design that converts visitors into customers.',
  },
  {
    icon: '/assets/images/s4-icon.svg',
    title: 'Technology Solutions',
    description:
      'End-to-end technology packages covering architecture, integrations, CMS builds, and infrastructure — one partner for your entire stack.',
  },
  {
    icon: '/assets/images/s5-icon.svg',
    title: 'AI & Automation Integration',
    description:
      'AI agents, chatbots, and workflow automation layered into your existing software using LangChain and Gemini — no full rebuild required.',
  },
  {
    icon: '/assets/images/s6-icon.svg',
    title: 'Quality Assurance & Support',
    description:
      'Rigorous manual and automated QA, performance testing, and ongoing support so bugs get caught before your users ever see them.',
  },
]

export default function Services() {
  return (
    <section id="services-section" className="service-area bg_color_black pt-120 pb-120 position-relative z-index-one overflow-hidden">
      <div className="container">

        {/* ── Section heading ── */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title text-anime gradient-title">What We Build</h2>
              <p className="desc text_color_light_white">
                Full-stack software development services, with AI woven in
                wherever it genuinely makes your product better.
              </p>
            </div>
          </div>
        </div>

        {/* ── Service cards ── */}
        <div className="row pt-60 gy-4">
          {services.map(({ icon, title, description }, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="service-box-wrap">
                <div className="service-box position-relative overflow-hidden">
                  <h3>
                    <Image
                      src={icon}
                      alt={title}
                      width={44}
                      height={44}
                    />
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Background shape ── */}
      <img
        className="position-absolute z-index-minus-one translate-middle top-50 start-50"
        src="/assets/images/new-images-v2/shapes/service-bg-sp.png"
        alt=""
      />
    </section>
  )
}
