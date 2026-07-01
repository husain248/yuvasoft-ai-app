import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products, getProduct } from '@/lib/data'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Yuvasoft AI`,
    description: product.description,
  }
}

const ArrowSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923Z" fill="currentColor"/>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M8.99978 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z" fill="#00C881"/>
  </svg>
)

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const others = products.filter((p) => p.slug !== slug).slice(0, 3)

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
                  <i className="bi bi-slash-lg"></i>
                  <Link href="/products">Products</Link>
                  <i className="bi bi-slash-lg"></i>
                  {product.name}
                </p>
                <h1 className="text_color_white">{product.name}</h1>
                <p className="breadcrumb-desc text_color_light_white">{product.tagline}</p>
              </div>
            </div>
          </div>
        </div>
        <video className="breadcrumb-video-bg z-index-minus-one position-absolute top-0 start-0 h-100 w-100"
          playsInline autoPlay muted loop>
          <source src="/assets/images/new-images-v2/video/breadcrumb.mp4" type="video/mp4"/>
        </video>
      </section>

      {/* ── Hero product info ── */}
      <section className="team-details-area bg_color_deep_blue pt-120 pb-0">
        <div className="container">
          <div className="row justify-content-between gy-5">

            {/* Left content */}
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="team-personal-data">

                {/* Category badge */}
                <span style={{
                  border: `1px solid ${product.color}`,
                  color: product.color,
                  padding: '4px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  display: 'inline-block',
                  marginBottom: '20px',
                }}>{product.category}</span>

                <div className="team-dev-head">
                  <h3 className="team-dev-name text_color_white">{product.name}</h3>
                  <h5 className="team-dev-title text_color_light_white">{product.tagline}</h5>
                  {product.longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="team-dev-desc text_color_white mb-3">{para.trim()}</p>
                  ))}
                </div>

                {/* Features */}
                <div className="team-dev-skills mt-4">
                  <h3 className="dev-skills-title text_color_white">Features</h3>
                  <div className="dev-overview-data mt-2">
                    {product.features.map((f, i) => (
                      <p key={i} className="d-flex align-items-center text_color_white mb-1 gap-2">
                        <CheckIcon /> {f}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Magicalswap-only: Owner & Tenant Benefits */}
                {slug === 'magicalswap' && (
                  <div className="row mt-5 gy-4">
                    <div className="col-md-6">
                      <div className="bg_color_light_black p-4" style={{ borderRadius: '16px', height: '100%' }}>
                        <h4 className="text_color_white mb-3" style={{ fontSize: '20px' }}>
                          🏠 Owner Benefits
                        </h4>
                        {[
                          '0% Brokerage',
                          'Verified Tenants',
                          'Free Marketing',
                          'On-Time Rent',
                          'Legal Agreements',
                        ].map((item, i) => (
                          <p key={i} className="text_color_white d-flex align-items-center mb-2 gap-2">
                            <CheckIcon /> <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg_color_light_black p-4" style={{ borderRadius: '16px', height: '100%' }}>
                        <h4 className="text_color_white mb-3" style={{ fontSize: '20px' }}>
                          🔑 Tenant Benefits
                        </h4>
                        {[
                          '9% Brokerage',
                          '15 Days Notice',
                          'Pre-Screened Properties',
                          'Quick and Easy Move-In',
                          '24/7 Support',
                        ].map((item, i) => (
                          <p key={i} className="text_color_white d-flex align-items-center mb-2 gap-2">
                            <CheckIcon /> <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div className="team-dev-skills mt-4">
                  <h3 className="dev-skills-title text_color_white">Built With</h3>
                  <div className="dev-skills-tags">
                    <ul className="custom-ul tag-list d-flex flex-wrap align-items-center">
                      {product.techStack.map((t) => (
                        <li key={t}><a href="#">{t}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use cases */}
                {/* <div className="team-dev-skills mt-4">
                  <h3 className="dev-skills-title text_color_white">Use Cases</h3>
                  <div className="dev-skills-tags">
                    <ul className="custom-ul tag-list d-flex flex-wrap align-items-center">
                      {product.useCases.map((u) => (
                        <li key={u}><a href="#">{u}</a></li>
                      ))}
                    </ul>
                  </div>
                </div> */}

                {/* CTAs */}
                <div className="team-dev-social mt-4">
                  <Link className="common-btn bg-white-style me-2" href="/contact">
                    Request a Demo <ArrowSvg />
                  </Link>
                  <Link className="common-btn border-style border-style-transparent" href="/products">
                    All Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: screenshot card */}
            <div className="col-lg-4 order-1 order-lg-2">
              {/* Accent bar */}
              {/* <div style={{
                height: '4px',
                background: product.color,
                borderRadius: '4px 4px 0 0',
              }}/> */}
              <div className="team-box-wrap">
                <div className="team-box overflow-hidden">
                  <div className="team-img pt-0 team-single-img overflow-hidden position-relative text-center">
                    <img className="w-100" src={product.screenshot} alt={product.name}/>
                  </div>
                </div>
              </div>

              {/* QR code — Magicalswap only */}
              {slug === 'magicalswap' && (
                <div className="about-wrap bg_color_light_black p-4 mt-4" style={{ borderRadius: '16px' }}>
                  <h5 className="text_color_white mb-4 text-center">Download App</h5>
                  <img
                    src="/assets/images/Magical-qr.png"
                    alt="Scan to download Magicalswap"
                    className="w-100"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works — Magicalswap only ── */}
      {slug === 'magicalswap' && (
        <div className="bg_color_deep_blue pb-120 pt-120">
          <div className="container">

            <style>{`
              .hiw-section-title {
                font-size: clamp(28px, 4vw, 42px);
                font-weight: 700;
                color: #fff;
                text-transform: uppercase;
                line-height: 1.15;
                margin-bottom: 40px;
              }
              .hiw-section-title span {
                background: linear-gradient(270deg,#00C881,#02D6E4,#4229ff,#9003FF,#02D6E4,#00C881);
                background-size: 300% 300%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: gradient-shift 6s ease infinite;
              }
              .hiw-step {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                margin-bottom: 32px;
              }
              .hiw-icon {
                width: 56px;
                height: 56px;
                border-radius: 14px;
                background: linear-gradient(135deg, #6e45e9, #9003FF);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              }
              .hiw-icon svg {
                width: 26px;
                height: 26px;
                color: #fff;
              }
              .hiw-step-title {
                font-size: 15px;
                font-weight: 700;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 6px;
              }
              .hiw-step-desc {
                font-size: 15px;
                color: rgba(255,255,255,0.6);
                line-height: 1.6;
                margin: 0;
              }
              .hiw-divider {
                width: 1px;
                background: rgba(255,255,255,0.08);
                margin: 0 auto;
              }
              @media (max-width: 767px) {
                .hiw-divider { display: none; }
              }
            `}</style>

            <div className="row gy-5">

              {/* ── Owners ── */}
              <div className="col-md-5">
                <h2 className="hiw-section-title">
                  How It Works For<br /><span>Owners</span>
                </h2>
                {[
                  { title: 'List Your Property',    desc: 'Sign in, upload photos, and list your property in minutes.' },
                  { title: 'Property Verification', desc: 'Ensure your property is verified for trust and reliability.' },
                  { title: 'Get Verified Tenants',  desc: 'We verify tenant details using national IDs for secure renting.' },
                  { title: 'Get Rent Easily',       desc: 'Collect rent online or offline with hassle-free payment options.' },
                ].map((step, i) => (
                  <div key={i} className="hiw-step">
                    <div className="hiw-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                        <path d="M15 6l-3 3" />
                      </svg>
                    </div>
                    <div>
                      <p className="hiw-step-title">{step.title}</p>
                      <p className="hiw-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="col-md-1 d-none d-md-flex">
                <div className="hiw-divider" />
              </div>

              {/* ── Tenants ── */}
              <div className="col-md-5 offset-md-1 offset-md-0">
                <h2 className="hiw-section-title">
                  How It Works For<br /><span>Tenants</span>
                </h2>
                {[
                  { title: 'Find Property',           desc: 'Search and discover your ideal rental property easily through the app.' },
                  { title: 'Get Verified Property',   desc: 'Browse only trusted, verified listings for a secure rental experience.' },
                  { title: 'Show Interest in Property', desc: 'Bookmark properties you love and stay updated on their availability.' },
                  { title: 'Get Area Manager Details', desc: 'Connect with expert area managers for guidance and offline support.' },
                ].map((step, i) => (
                  <div key={i} className="hiw-step">
                    <div className="hiw-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                        <path d="M15 6l-3 3" />
                      </svg>
                    </div>
                    <div>
                      <p className="hiw-step-title">{step.title}</p>
                      <p className="hiw-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Other products ── */}
      {others.length > 0 && (
        <section className="blog-area bg_color_black pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title text_color_white text-anime">Other Products</h2>
                </div>
              </div>
            </div>
            <div className="row pt-60 gy-4">
              {others.map((p) => (
                <div key={p.slug} className="col-lg-4">
                  <div className="blog-box h-100">
                    <div className="blog-img overflow-hidden">
                      <img className="w-100" src={p.image} alt={p.name}/>
                    </div>
                    <div className="blog-info">
                      <h2 className="text_color_white">
                        <Link href={`/products/${p.slug}`}>{p.name}</Link>
                      </h2>
                      <p className="text_color_light_white">{p.description}</p>
                      <Link className="border-btn border-btn-white" href={`/products/${p.slug}`}>
                        Read More <ArrowSvg />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
