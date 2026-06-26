import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Products — Yuvasoft AI',
  description: 'AI-powered products built to solve real-world business problems.',
}

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923Z" fill="currentColor"/>
  </svg>
)

export default function ProductsPage() {
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
                  <i className="bi bi-slash-lg"></i>Products
                </p>
                <h1 className="text_color_white">Our Products</h1>
                <p className="breadcrumb-desc text_color_light_white">
                  AI-powered products built to solve real-world problems — from healthcare to logistics to productivity.
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

      {/* ── Products grid ── */}
      <section className="blog-area bg_color_black pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title text_color_white text-anime">AI Products We've Built</h2>
                <p className="desc text_color_light_white">
                  Each product solves a specific real-world challenge using cutting-edge AI technology.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-60 gy-4">
            {products.map((product, i) => (
              <div key={product.slug} className={i < 2 ? 'col-lg-6' : 'col-lg-6'}>
                <div className="blog-box h-100">
                  <div className="blog-img overflow-hidden">
                    <img className="w-100" src={product.image} alt={product.name}/>
                  </div>
                  <div className="blog-info">
                    <span className="text_color_light_white" style={{
                      fontSize: '13px',
                      border: `1px solid ${product.color}`,
                      color: product.color,
                      padding: '3px 10px',
                      borderRadius: '20px',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>
                      {product.category}
                    </span>
                    <h2 className="text_color_white">
                      <Link href={`/products/${product.slug}`}>{product.name}</Link>
                    </h2>
                    <p className="text_color_light_white">{product.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {product.techStack.slice(0, 3).map((t) => (
                        <span key={t} style={{
                          background: 'rgba(255,255,255,0.07)',
                          color: 'rgba(255,255,255,0.6)',
                          padding: '2px 10px',
                          borderRadius: '12px',
                          fontSize: '12px',
                        }}>{t}</span>
                      ))}
                    </div>
                    <Link className="border-btn border-btn-white" href={`/products/${product.slug}`}>
                      Read More <ArrowSvg />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="subscribe-area bg_color_black position-relative z-index-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-wrap overflow-hidden position-relative z-index-one">
                <div className="section-title text-center">
                  <h2 className="title text_color_white text-anim">Have a Product Idea?</h2>
                  <p className="desc text_color_light_white">
                    We can help you go from concept to production-ready AI product.
                  </p>
                </div>
                <div className="two-btn-wrap mt-4 mt-lg-5 d-flex flex-wrap justify-content-center">
                  <Link className="common-btn bg-white-style me-2" href="/contact">
                    Let&apos;s Talk <ArrowSvg />
                  </Link>
                  <Link className="common-btn border-style border-style-transparent" href="/service">
                    Our Services
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
