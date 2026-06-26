import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Services — Yuvasoft AI',
  description: 'Comprehensive AI solutions tailored to transform your business and drive digital success.',
}

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z" fill="currentColor"/>
  </svg>
)

export default function ServicesPage() {
  return (
    <main>
      {/* ── Breadcrumb ── */}
      <section className="breadcrumb-area minus-margin overflow-hidden position-relative z-index-one">
        <div className="container">
          <div className="row justify-content-center position-relative z-index-one">
            <div className="col-lg-12">
              <div className="breadcrumb-info text-center">
                <p className="breadcrumb-nav text_color_white">
                  <Link href="/">Home</Link>
                  <i className="bi bi-slash-lg"></i>Services
                </p>
                <h1 className="text_color_white">Our Services</h1>
                <p className="breadcrumb-desc text_color_light_white">
                  Comprehensive AI solutions tailored to transform your business and drive digital success.
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

      {/* ── Services grid ── */}
      <section className="service-area bg_color_black pt-120 pb-120 position-relative z-index-one overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title text_color_white text-anime">What We Offer</h2>
                <p className="desc text_color_light_white">
                  From strategy to deployment — we cover every stage of your AI journey.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-60 gy-4">
            {services.map((service) => (
              <div key={service.slug} className="col-lg-4 col-md-6">
                <div className="service-box-wrap h-100">
                  <div className="service-box position-relative overflow-hidden h-100 d-flex flex-column">
                    <h3>{service.title}</h3>
                    <p className="flex-grow-1">{service.description}</p>
                    <Link className="border-btn mt-3" href={`/service/${service.slug}`}>
                      Learn More <ArrowSvg />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          className="position-absolute z-index-minus-one translate-middle top-50 start-50"
          src="/assets/images/new-images-v2/shapes/service-bg-sp.png"
          alt=""
        />
      </section>

      {/* ── CTA ── */}
      <section className="subscribe-area bg_color_black position-relative z-index-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-wrap overflow-hidden position-relative z-index-one">
                <div className="section-title text-center">
                  <h2 className="title text_color_white text-anim">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="desc text_color_light_white">
                    Let's discuss how the right AI service can solve your most pressing challenges.
                  </p>
                </div>
                <div className="two-btn-wrap mt-4 mt-lg-5 d-flex flex-wrap justify-content-center">
                  <Link className="common-btn bg-white-style" href="/contact">
                    Get a Free Consultation <ArrowSvg />
                  </Link>
                </div>
                <img className="position-absolute z-index-minus-one start-0 top-0 h-100 w-100"
                  src="/assets/images/new-images-v2/shapes/noise.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
