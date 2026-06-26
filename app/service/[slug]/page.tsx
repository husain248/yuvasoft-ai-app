import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getService } from '@/lib/data'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.title} — Yuvasoft AI`,
    description: service.description,
  }
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.99978 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z" fill="#00C881"/>
  </svg>
)

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7061 12.708L14.707 19.7071C14.512 19.9021 14.256 20 14 20C13.744 20 13.488 19.9021 13.293 19.7071C12.902 19.3161 12.902 18.684 13.293 18.293L18.5859 13H3C2.447 13 2 12.552 2 12C2 11.448 2.447 11 3 11H18.5859L13.293 5.70707C12.902 5.31607 12.902 4.68401 13.293 4.29301C13.684 3.90201 14.316 3.90201 14.707 4.29301L21.7061 11.292Z" fill="currentColor"/>
  </svg>
)

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <main>
      {/* ── Breadcrumb with video bg ── */}
      <section className="breadcrumb-area minus-margin overflow-hidden position-relative z-index-one">
        <div className="container">
          <div className="row justify-content-center position-relative z-index-one">
            <div className="col-lg-12">
              <div className="breadcrumb-info text-center">
                <p className="breadcrumb-nav text_color_white">
                  <Link href="/">Home</Link>
                  <i className="bi bi-slash-lg"></i>
                  <Link href="/service">Services</Link>
                  <i className="bi bi-slash-lg"></i>
                  {service.title}
                </p>
                <h1 className="text_color_white">{service.title}</h1>
                <p className="breadcrumb-desc text_color_light_white">{service.breadcrumbDesc}</p>
              </div>
            </div>
          </div>
        </div>
        <video className="breadcrumb-video-bg z-index-minus-one position-absolute top-0 start-0 h-100 w-100"
          playsInline autoPlay muted loop>
          <source src="/assets/images/new-images-v2/video/breadcrumb.mp4" type="video/mp4"/>
        </video>
      </section>

      {/* ── Main detail — mirrors teams-details.html layout ── */}
      <section className="team-details-area bg_color_deep_blue pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between gy-4">

            {/* Left: content */}
            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
              <div className="team-personal-data">
                <div className="team-dev-head">
                  <h3 className="team-dev-name text_color_white">{service.title}</h3>
                  <h5 className="team-dev-title text_color_light_white">{service.subtitle}</h5>
                  <p className="team-dev-desc text_color_light_white">{service.description}</p>

                  <h3 className="dev-skills-title text_color_white mt-3">Key Features</h3>
                  <div className="dev-overview-data mt-2">
                    {service.features.slice(0, 2).map((f, i) => (
                      <p key={i} className="text_color_light_white">
                        <CheckIcon />{f.label}
                      </p>
                    ))}
                  </div>
                  <div className="dev-overview-data mt-2">
                    {service.features.slice(2).map((f, i) => (
                      <p key={i} className="text_color_light_white">
                        <CheckIcon />{f.label}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="team-dev-skills mt-4">
                  <h3 className="dev-skills-title text_color_white">Key Benefits</h3>
                  <p className="dev-skills-desc text_color_light_white">
                    What you gain when you work with us on {service.title.toLowerCase()}.
                  </p>
                  <div className="dev-skills-tags">
                    <ul className="custom-ul tag-list d-flex flex-wrap align-items-center">
                      {service.keyBenefits.map((b, i) => (
                        <li key={i}><a href="#">{b}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="team-dev-skills mt-4">
                  <h3 className="dev-skills-title text_color_white">What&apos;s Included</h3>
                  <div className="dev-skills-tags">
                    <ul className="custom-ul tag-list d-flex flex-wrap align-items-center">
                      {service.tagsOne.map((t, i) => (
                        <li key={i}><a href="#">{t}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="team-dev-social mt-4">
                  <h3 className="dev-social-title text_color_white">Interested?</h3>
                  <Link className="common-btn bg-white-style me-2" href="/contact">
                    Get a Free Consultation <ArrowSvg />
                  </Link>
                  <Link className="common-btn border-style border-style-transparent" href="/service">
                    All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: image card */}
            <div className="col-lg-4 col-md-12 order-1 order-lg-2">
              <div className="team-box-wrap">
                <div className="team-box">
                  <div className="team-img team-single-img overflow-hidden position-relative text-center">
                    <img className="text-center w-100" src={service.image} alt={service.title}/>
                    <div className="team-info-wrap position-absolute bottom-0 start-0 h-100 w-100 d-flex align-items-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values / How we deliver ── */}
      <div className="values-area bg_color_deep_blue pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="values-wrapper bg_color_light_black">
                <div className="row gy-5">
                  <div className="col-lg-5 col-xl-5">
                    <div className="values-heading">
                      <div className="section-title gradient-sub-title">
                        <span className="text-uppercase text_color_white gradient-sub">How We Deliver</span>
                        <h2 className="title text_color_white">{service.valuesTitle}</h2>
                        <p className="desc text_color_light_white">{service.valuesDesc}</p>
                      </div>
                      <Link className="common-btn border-style mt-4" href="/contact">
                        Start Now <ArrowSvg />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-7">
                    <div className="values-box-wrap">
                      {service.values.map((v, i) => (
                        <div key={i} className="single-values-box">
                          <div className="values-icon d-flex justify-content-center align-items-center">
                            <span style={{ fontSize: '28px' }}>{v.icon}</span>
                          </div>
                          <h2 className="text_color_white h2">{v.title}</h2>
                          <p className="text_color_light_white">{v.description}</p>
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

      {/* ── Other services ── */}
      {others.length > 0 && (
        <section className="service-area bg_color_black pt-120 pb-120 position-relative z-index-one overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title text_color_white text-anime">Other Services</h2>
                </div>
              </div>
            </div>
            <div className="row pt-60 gy-4">
              {others.map((s) => (
                <div key={s.slug} className="col-lg-4 col-md-6">
                  <div className="service-box-wrap h-100">
                    <div className="service-box position-relative overflow-hidden h-100 d-flex flex-column">
                      <h3>{s.title}</h3>
                      <p className="flex-grow-1">{s.description}</p>
                      <Link className="border-btn mt-3" href={`/service/${s.slug}`}>
                        Learn More <ArrowSvg />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="position-absolute z-index-minus-one translate-middle top-50 start-50"
            src="/assets/images/new-images-v2/shapes/service-bg-sp.png" alt=""/>
        </section>
      )}
    </main>
  )
}
