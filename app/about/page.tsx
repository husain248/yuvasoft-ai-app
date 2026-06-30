import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — Yuvasoft AI',
  description: 'We are a premier AI agency on a mission to revolutionize businesses through intelligent solutions.',
}

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.04068 21.0007H3.25068V9.63069H7.04068V21.0007ZM7.42068 5.21069C7.42068 4.01069 6.47069 3.04068 5.27069 3.00068C4.05069 2.97068 3.03068 3.93068 3.00068 5.15068C2.97068 6.37068 3.93068 7.39068 5.15068 7.42068C6.39068 7.43068 7.40068 6.45069 7.42068 5.21069ZM20.9507 14.1307C20.9507 10.5907 18.6607 9.51068 16.7107 9.51068C15.3407 9.47068 14.0507 10.1407 13.3007 11.2807V9.64068H9.64068V21.0107H13.4307V15.1107C13.4307 15.0507 13.4307 14.9907 13.4307 14.9307C13.4307 14.9307 13.4307 14.9307 13.4307 14.9207C13.3507 13.7107 14.2707 12.6607 15.4807 12.5807C16.4707 12.5807 17.2207 13.2207 17.2207 15.0207V21.0107H21.0107L20.9607 14.1407L20.9507 14.1307Z" fill="currentColor"/>
  </svg>
)

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7061 12.708L14.707 19.7071C14.512 19.9021 14.256 20 14 20C13.744 20 13.488 19.9021 13.293 19.7071C12.902 19.3161 12.902 18.684 13.293 18.293L18.5859 13H3C2.447 13 2 12.552 2 12C2 11.448 2.447 11 3 11H18.5859L13.293 5.70707C12.902 5.31607 12.902 4.68401 13.293 4.29301C13.684 3.90201 14.316 3.90201 14.707 4.29301L21.7061 11.292C21.7991 11.385 21.8721 11.495 21.9231 11.618C22.0241 11.862 22.0241 12.1381 21.9231 12.3821C21.8721 12.5051 21.7991 12.615 21.7061 12.708Z" fill="currentColor"/>
  </svg>
)

const team = [
  { name: 'Arjun Sharma', role: 'CEO & Co-Founder', img: '/assets/images/new-images-v2/team/team-1.png' },
  { name: 'Priya Mehta', role: 'Managing Director', img: '/assets/images/new-images-v2/team/team-2.png' },
  { name: 'Rahul Verma', role: 'Product Manager', img: '/assets/images/new-images-v2/team/team-3.png' },
  { name: 'Sneha Patel', role: 'Digital Marketer', img: '/assets/images/new-images-v2/team/team-4.png' },
  { name: 'Vikram Rao', role: 'Software Engineer', img: '/assets/images/new-images-v2/team/team-5.png' },
  { name: 'Anita Singh', role: 'Front End Developer', img: '/assets/images/new-images-v2/team/team-6.png' },
]

const testimonials = [
  {
    name: 'Adam Zampol',
    role: 'CEO Kingoston Corps, USA',
    stars: 5,
    text: '"Incredible innovation! This AI company has not only exceeded my expectations but has redefined what\'s possible in the tech world. Their cutting-edge solutions seamlessly integrate into our workflows, bringing efficiency intelligence to the forefront. Truly a game-changer!"'
  },
  {
    name: 'Sarah Leon',
    role: 'Business Owner, Dubai',
    stars: 4.5,
    text: '"Choosing this AI company was the best decision for my business. Their customized solutions have streamlined our processes, providing insights that were previously unimaginable. The impact on productivity and decision-making has been remarkable. Highly recommended!"'
  },
  {
    name: 'Michael Hamilton',
    role: 'CEO, Piqo Tech, Indonesia',
    stars: 4.5,
    text: '"From an IT perspective, seamless implementation and minimal troubleshooting are signs of a quality product. This AI company not only delivers cutting-edge solutions but also ensures that end-users experience a level of satisfaction that is second to none."'
  },
]

const values = [
  {
    title: 'Innovation',
    desc: 'We specialize in custom AI development to precisely meet and exceed the unique needs of your organization.',
    icon: '/assets/images/s7-icon.svg',
  },
  {
    title: 'Commitment',
    desc: 'We specialize in custom AI development to precisely meet and exceed the unique needs of your organization.',
    icon: '/assets/images/s8-icon.svg',
  },
  {
    title: 'Teamwork',
    desc: 'We specialize in custom AI development to precisely meet and exceed the unique needs of your organization.',
    icon: '/assets/images/s9-icon.svg',
  },
  {
    title: 'Growth',
    desc: 'We specialize in custom AI development to precisely meet and exceed the unique needs of your organization.',
    icon: '/assets/images/s10-icon.svg',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* ── Breadcrumb with video bg ──────────────────────────────── */}
      <section className="breadcrumb-area minus-margin overflow-hidden position-relative z-index-one">
        <div className="container">
          <div className="row justify-content-center position-relative z-index-one">
            <div className="col-lg-5">
              <div className="breadcrumb-info text-center">
                <p className="breadcrumb-nav text_color_white">
                  <Link href="/">Home</Link>
                  <i className="bi bi-slash-lg"></i>About Us
                </p>
                <h1 className="text_color_white">About Us</h1>
                <p className="breadcrumb-desc text_color_light_white">
                  We will help a client&apos;s problems to develop the products they
                  have with high quality. Change the appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <video
          className="breadcrumb-video-bg z-index-minus-one position-absolute top-0 start-0 h-100 w-100"
          playsInline autoPlay muted loop
        >
          <source src="/assets/images/new-images-v2/video/breadcrumb.mp4" type="video/mp4"/>
        </video>
      </section>

      {/* ── Commitment / Featured image + Brand slider ────────────── */}
      <section className="commitment-area bg_color_deep_blue pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                className="w-100"
                src="/assets/images/new-images-v2/about-cta-two.png"
                alt="About Yuvasoft"
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>

          {/* Brand logos marquee strip */}
          <div className="row pt-120">
            <div className="col-lg-12">
              <h2 className="commitment-brand-title text-uppercase text-center pb-60 text_color_light_white"
                style={{ fontSize: '14px', letterSpacing: '3px', opacity: 0.5 }}>
                Trusted by world-leading companies
              </h2>
              <div className="swiper brand-slide-wrap side-shadow">
                <div className="swiper-wrapper">
                  {['LangChain', 'Gemini', 'LangGraph', 'React.js', 'Python', 'LangSmith'].map((brand) => (
                    <div key={brand} className="swiper-slide">
                      <div className="brand-box">
                        <span className="text_color_light_white" style={{ fontSize: '24px', fontWeight: 600, opacity: 0.5 }}>
                          {brand}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About SaasLyn — stats + quote ────────────────────────── */}
      <section className="about-ai-area pt-120 pb-120 bg_color_deep_blue">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-4">
            <div className="col-xl-2 col-lg-2">
              <img
                src="/assets/images/yuva-logo-icon.png"
                alt="Yuvasoft"
                className="img-fluid"
              />
            </div>
            <div className="col-xl-9 col-lg-10">
              <div className="about-ai-info">
                <div className="section-title gradient-sub-title">
                  <span className="text-uppercase text_color_white gradient-sub">About Yuvasoft AI</span>
                  <h2 className="title text_color_white">
                    Yuvasoft transforms your ideas into intelligent, scalable solutions with cutting-edge AI capabilities — unleashing a world of automation and business possibilities at your fingertips.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-border d-flex justify-content-center">
          <img src="/assets/images/new-images-v2/shapes/devider.png" alt="" />
        </div>

        {/* Stats counters */}
        <div className="container">
          <div className="row achievement-line-wrap gy-4">
            {[
              { value: '120', suffix: '+', label: 'Active Clients' },
              { value: '300', suffix: '+', label: 'Projects Completed' },
              { value: '50', suffix: 'M+', label: 'API Requests / Month' },
              { value: '97', suffix: '%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="col-lg-3 achievement-single-line-wrap">
                <div className="achievement-count-box text-center">
                  <h2 className="counter-item text_color_white">
                    <span className="odometer d-inline-block" data-odometer-final={stat.value}>.</span>
                    <em>{stat.suffix}</em>
                  </h2>
                  <p className="text_color_light_white">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <div className="values-area bg_color_deep_blue pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="values-wrapper bg_color_light_black">
                <div className="row gy-5">
                  {/* Left heading */}
                  <div className="col-lg-5 col-xl-5">
                    <div className="values-heading">
                      <div className="section-title gradient-sub-title">
                        <span className="text-uppercase text_color_white gradient-sub">Values</span>
                        <h2 className="title text_color_white">
                          Our Foundational Values at the Heart of Yuvasoft
                        </h2>
                        <p className="desc text_color_light_white">
                          We empower diverse sectors with intelligent solutions
                          that seamlessly integrate into a spectrum of
                          industries, driving innovation across the board.
                        </p>
                      </div>
                      <Link className="common-btn border-style mt-4" href="/service">
                        Learn More <ArrowSvg />
                      </Link>
                    </div>
                  </div>

                  {/* Right values grid */}
                  <div className="col-lg-7 col-xl-7">
                    <div className="values-box-wrap">
                      {values.map((v, i) => (
                        <div key={i} className="single-values-box">
                          <div className="values-icon d-flex justify-content-center align-items-center">
                            <img src={v.icon} alt={v.title} width={24} height={24} />
                          </div>
                          <h2 className="text_color_white h2">{v.title}</h2>
                          <p className="text_color_light_white">{v.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Team ─────────────────────────────────────────────────── */}
      <section className="team-area bg_color_deep_blue pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title gradient-sub-title text-center">
                <span className="text-uppercase text_color_white gradient-sub">Team</span>
                <h2 className="title text_color_white">Meet Our Exceptional Team</h2>
                <p className="desc text_color_light_white">
                  Discover brilliance in every role as you meet our exceptional
                  team, the heartbeat of our success.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-60 gy-4">
            {team.map((member, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="team-box-wrap">
                  <div className="team-box">
                    <div className="team-img overflow-hidden position-relative text-center">
                      <img className="text-center" src={member.img} alt={member.name}/>
                      <div className="team-info-wrap position-absolute bottom-0 start-0 h-100 w-100 d-flex align-items-end">
                        <div className="d-flex w-100 justify-content-between align-items-center">
                          <div className="team-info text-start">
                            <h2 className="h2 text_color_white">{member.name}</h2>
                            <p className="text_color_light_white">{member.role} at Yuvasoft</p>
                          </div>
                          <a href="#" className="team-social d-flex align-items-center justify-content-center">
                            <LinkedInIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (dual marquee row) ──────────────────────── */}
      <div className="testimonial-area bg_color_black pb-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title gradient-sub-title text-center">
                <h2 className="title text_color_white">What our users are saying</h2>
                <p className="desc text_color_light_white">
                  Explore the authentic voices of user satisfaction. Echoing
                  diverse and exceptional experiences with our products.
                </p>
              </div>
            </div>
          </div>

          {/* Top slider */}
          <div className="row pt-60 gy-4">
            <div className="col-lg-12 ps-0 pe-0">
              <div className="swiper testimonial-slide-top">
                <div className="swiper-wrapper">
                  {testimonials.map((t, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="testimonial-box">
                        <ul className="custom-ul rating d-flex align-items-center">
                          {[...Array(Math.floor(t.stars))].map((_, s) => (
                            <li key={s}><i className="bi bi-star-fill"></i></li>
                          ))}
                          {t.stars % 1 !== 0 && <li><i className="bi bi-star-half"></i></li>}
                        </ul>
                        <p className="text_color_light_white">{t.text}</p>
                        <h3 className="text_color_white">{t.name}</h3>
                        <span className="text_color_light_white">{t.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom slider (reverse marquee) */}
            <div className="col-lg-12 ps-0 pe-0">
              <div className="swiper testimonial-slide-bottom">
                <div className="swiper-wrapper">
                  {[...testimonials].reverse().map((t, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="testimonial-box">
                        <ul className="custom-ul rating d-flex align-items-center">
                          {[...Array(Math.floor(t.stars))].map((_, s) => (
                            <li key={s}><i className="bi bi-star-fill"></i></li>
                          ))}
                          {t.stars % 1 !== 0 && <li><i className="bi bi-star-half"></i></li>}
                        </ul>
                        <p className="text_color_light_white">{t.text}</p>
                        <h3 className="text_color_white">{t.name}</h3>
                        <span className="text_color_light_white">{t.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Subscribe CTA ─────────────────────────────────────────── */}
      <section className="subscribe-area bg_color_deep_blue position-relative z-index-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-wrap subscribe-wrap-two overflow-hidden position-relative z-index-one">
                <div className="section-title text-center">
                  <h2 className="title text_color_white">
                    Start Your Journey with Yuvasoft
                  </h2>
                  <p className="desc text_color_light_white">
                    Unleash the power of AI-driven solutions and elevate your
                    business to new heights.
                  </p>
                </div>
                <div className="two-btn-wrap d-flex flex-wrap justify-content-center gap-3">
                  <Link className="common-btn bg-white-style" href="/service">
                    Get Started Now <ArrowSvg />
                  </Link>
                  <Link className="common-btn border-style border-style-transparent" href="/contact">
                    Contact Us
                  </Link>
                </div>
                <img
                  className="position-absolute z-index-minus-one start-0 top-0 h-100 w-100"
                  src="/assets/images/new-images-v2/shapes/noise.png"
                  alt=""
                />
                {/* Decorative arrows */}
                <img
                  className="arrow-left-img position-absolute z-index-minus-one start-0"
                  src="/assets/images/new-images-v2/shapes/subscribe-arrow-left.png"
                  alt=""
                />
                <img
                  className="arrow-right-img position-absolute z-index-minus-one end-0"
                  src="/assets/images/new-images-v2/shapes/subscribe-arrow-right.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
