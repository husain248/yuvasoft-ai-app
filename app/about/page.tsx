import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — Yuvasoft AI',
  description: 'We are a premier AI agency on a mission to revolutionize businesses through intelligent solutions.',
}

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923Z" fill="currentColor"/>
  </svg>
)

const team = [
  { name: 'Arjun Sharma', role: 'AI Research Director', img: '/assets/images/team/team-thumb-1.png' },
  { name: 'Priya Mehta', role: 'Chief AI Officer', img: '/assets/images/team/team-thumb-2.png' },
  { name: 'Rahul Verma', role: 'ML Engineer', img: '/assets/images/team/team-thumb-3.png' },
  { name: 'Sneha Patel', role: 'Data Scientist', img: '/assets/images/team/team-thumb-4.png' },
  { name: 'Vikram Rao', role: 'Senior AI Engineer', img: '/assets/images/team/team-thumb-5.png' },
  { name: 'Anita Singh', role: 'AI Product Manager', img: '/assets/images/team/team-thumb-6.png' },
]

const stats = [
  { icon: '/assets/images/new-images-v2/features/feature-1.svg', label: 'AI Models Deployed', value: '150+' },
  { icon: '/assets/images/new-images-v2/features/feature-2.svg', label: 'API Requests / Month', value: '50M+' },
  { icon: '/assets/images/new-images-v2/features/feature-3.svg', label: 'AI Solutions Delivered', value: '300+' },
  { icon: '/assets/images/new-images-v2/features/feature-4.svg', label: 'Active Clients', value: '120+' },
]

const values = [
  { title: 'Innovation First', desc: 'We stay at the leading edge of AI research to give our clients a competitive advantage.' },
  { title: 'Transparency', desc: 'Clear communication, honest timelines, and no black-box solutions.' },
  { title: 'Impact Over Vanity', desc: 'We measure success by business outcomes, not lines of code or model accuracy scores.' },
  { title: 'Partnership', desc: 'Your team is our team. We embed deeply and build alongside you — not just for you.' },
  { title: 'Ethical AI', desc: 'We design systems that are fair, explainable, and aligned with your values.' },
  { title: 'Continuous Learning', desc: 'AI moves fast. We invest heavily in keeping our skills and knowledge current.' },
]

export default function AboutPage() {
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
                  <i className="bi bi-slash-lg"></i>About
                </p>
                <h1 className="text_color_white">About Yuvasoft AI</h1>
                <p className="breadcrumb-desc text_color_light_white">
                  A premier AI agency on a mission to revolutionize businesses through intelligent, scalable solutions.
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

      {/* ── Who We Are ── */}
      <section className="about-area bg_color_black pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-title d-inline-block">Who We Are</span>
                <h2 className="title text_color_white">
                  <span>Yuvasoft AI</span> — Powering the Next Wave of Intelligent Business
                </h2>
                <p className="desc text_color_light_white mt-3">
                  We are a team of AI engineers, data scientists, and strategists united by a single mission: to make artificial intelligence genuinely useful for real businesses. Founded in 2022, we have helped companies across healthcare, logistics, fintech, and SaaS harness AI to reduce costs, move faster, and serve their customers better.
                </p>
                <p className="desc text_color_light_white mt-2">
                  We don't just build models — we build solutions that work in production, integrate with your existing stack, and deliver measurable ROI from day one.
                </p>
                <div className="two-btn-wrap d-flex flex-wrap mt-4">
                  <Link className="common-btn bg-white-style me-2" href="/contact">
                    Work With Us <ArrowSvg />
                  </Link>
                  <Link className="common-btn border-style border-style-transparent" href="/service">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data-img-wrap position-relative z-index-one">
                <img className="w-100" src="/assets/images/new-images-v2/data/data-1.svg" alt="About Yuvasoft"/>
                <img className="data-img-2 d-none d-lg-block position-absolute"
                  src="/assets/images/new-images-v2/data/data-2.svg" alt=""/>
                <img className="data-sp position-absolute z-index-minus-one"
                  src="/assets/images/new-images-v2/shapes/data.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="achievement-area pt-120 pb-120 bg_color_deep_blue">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="achievement-title text_color_white">Our Impact in Numbers</h2>
            </div>
          </div>
          <div className="row gy-4">
            {stats.map((s, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="achievement-count-box text-center">
                  <img src={s.icon} alt={s.label} style={{ width: '48px', height: '48px', marginBottom: '16px' }}/>
                  <h2 className="text_color_white" style={{ fontSize: '48px', fontWeight: 700 }}>{s.value}</h2>
                  <p className="text_color_light_white">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="service-area bg_color_black pt-120 pb-120 position-relative z-index-one overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title text_color_white text-anime">Our Core Values</h2>
                <p className="desc text_color_light_white">
                  The principles that guide every decision, every line of code, and every client relationship.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-60 gy-4">
            {values.map((v, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="service-box-wrap h-100">
                  <div className="service-box position-relative overflow-hidden h-100">
                    <h3 style={{ fontSize: '20px' }}>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img className="position-absolute z-index-minus-one translate-middle top-50 start-50"
          src="/assets/images/new-images-v2/shapes/service-bg-sp.png" alt=""/>
      </section>

      {/* ── Team ── */}
      <section className="team-area bg_color_deep_blue pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <span className="sub-title d-inline-block">Meet the Team</span>
                <h2 className="title text_color_white text-anime">The Minds Behind the Magic</h2>
                <p className="desc text_color_light_white">
                  A diverse team of engineers, scientists, and strategists — all passionate about applied AI.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-60 gy-4 justify-content-center">
            {team.map((member, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-6">
                <div className="team-box text-center">
                  <div className="team-img overflow-hidden" style={{ borderRadius: '50%', width: '120px', height: '120px', margin: '0 auto 16px' }}>
                    <img className="w-100 h-100" style={{ objectFit: 'cover' }} src={member.img} alt={member.name}/>
                  </div>
                  <h5 style={{ color: '#fff', fontSize: '15px', marginBottom: '4px' }}>{member.name}</h5>
                  <p className="text_color_light_white" style={{ fontSize: '12px' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="data-area bg_color_black pb-120 overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-4">
            <div className="col-lg-6 col-xl-5">
              <div className="data-img-wrap position-relative z-index-one">
                <img className="w-100" src="/assets/images/new-images-v2/works/works-img-ai.png" alt="Mission"/>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="data-info">
                <span className="text_color_light_white">Our Mission</span>
                <h2 className="text_color_white text-anim">
                  Make AI Genuinely Useful for Every Business
                </h2>
                <p className="text_color_light_white">
                  Too many AI projects fail not because the technology is wrong, but because it's disconnected from real business problems. Our mission is to close that gap — delivering AI solutions that are practical, explainable, and built to last.
                </p>
                <ul className="listing custom-ul d-flex flex-column">
                  {['Human-centred AI design', 'Production-ready from day one', 'Measurable business outcomes', 'Long-term partnership over one-off projects'].map((item, i) => (
                    <li key={i}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.03 9.136C16.323 9.429 16.323 9.904 16.03 10.197L11.363 14.864C11.217 15.01 11.025 15.084 10.833 15.084C10.641 15.084 10.449 15.011 10.303 14.864L7.97 12.531C7.677 12.238 7.677 11.763 7.97 11.47C8.263 11.177 8.738 11.177 9.031 11.47L10.834 13.273L14.97 9.137C15.263 8.844 15.737 8.844 16.03 9.136Z" fill="currentColor" fillOpacity="0.7"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link className="common-btn bg-white-style mt-4" href="/contact">
                  Start a Conversation <ArrowSvg />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
