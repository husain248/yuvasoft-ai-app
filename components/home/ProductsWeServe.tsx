'use client'

import { useEffect } from 'react'
import Link from 'next/link'

const ArrowIcon = () => (
  <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z" fill="currentColor" />
  </svg>
)

const products = [
  {
    image: '/assets/images/new-images-v2/resources/resources-1.png',
    title: 'Magicalswap',
    description: 'Artificial Intelligence (AI) has transcended the realm of possibility, becoming a transformative force that...',
  },
  {
    image: '/assets/images/new-images-v2/resources/resources-2.png',
    title: 'Whereareyou',
    description: 'Contrary to popular belief, AI is not just algorithms and data; it\'s also a strategic tool for unleashing...',
  },
  {
    image: '/assets/images/new-images-v2/resources/resources-3.png',
    title: 'Lifenotes',
    description: 'Explore the strategic approaches where AI is leveraged for business success. From optimizing operations...',
  },
  {
    image: '/assets/images/new-images-v2/resources/resources-4.png',
    title: '',
    description: 'Artificial Intelligence (AI) has transcended the realm of possibility, becoming a transformative force that...',
  },
]

export default function ProductsWeServe() {
  useEffect(() => {
    // resources-slider is already initialized by new-js-v2/main.js
    // but we guard in case this component mounts after the global init ran
    const init = () => {
      if (typeof (window as any).Swiper === 'undefined' || typeof (window as any).$ === 'undefined') {
        setTimeout(init, 200)
        return
      }
      const el = document.querySelector('.resources-slider')
      if (!el || (el as any).swiper) return   // already initialized

      new (window as any).Swiper('.resources-slider', {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        speed: 1000,
        breakpoints: {
          320:  { slidesPerView: 1 },
          480:  { slidesPerView: 1 },
          768:  { slidesPerView: 2 },
          992:  { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 3 },
        },
        navigation: {
          nextEl: '.resources-button-next',
          prevEl: '.resources-button-prev',
        },
      })
    }
    init()
  }, [])

  return (
    <section className="blog-area bg_color_black pb-120 section-padding-top">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Heading */}
          <div className="col-lg-7">
            <div className="section-title">
              <h2 className="title text_color_white text-anime">
                Prodcuts We Serve
              </h2>
              <p className="desc text_color_light_white">
                Dive into the forefront of AI innovation and thought
                leadership with our latest insights. Where expert knowledge
                meets the pulse of artificial intelligence, keeping you
                informed and inspired.
              </p>
            </div>
          </div>

          {/* Slider arrow buttons (desktop only) */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="slider-button-wrap-arrow d-flex justify-content-lg-end">
              <div className="resources-button-prev slide-btn slide-btn-prev">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36 4.5C18.63 4.5 4.5 18.63 4.5 36C4.5 53.37 18.63 67.5 36 67.5C53.37 67.5 67.5 53.37 67.5 36C67.5 18.63 53.37 4.5 36 4.5ZM36 64.5C20.286 64.5 7.5 51.714 7.5 36C7.5 20.286 20.286 7.5 36 7.5C51.714 7.5 64.5 20.286 64.5 36C64.5 51.714 51.714 64.5 36 64.5ZM49.5 36C49.5 36.828 48.828 37.5 48 37.5H27.6211L34.0591 43.938C34.6441 44.523 34.6441 45.4741 34.0591 46.0591C33.7651 46.3531 33.3811 46.4971 32.9971 46.4971C32.6131 46.4971 32.2291 46.3501 31.9351 46.0591L22.9351 37.0591C22.7971 36.9211 22.6863 36.7528 22.6113 36.5698C22.4583 36.2038 22.4583 35.7903 22.6113 35.4243C22.6863 35.2383 22.7971 35.0731 22.9351 34.9351L31.9351 25.9351C32.5201 25.3501 33.4712 25.3501 34.0562 25.9351C34.6412 26.5201 34.6412 27.4712 34.0562 28.0562L27.6182 34.4941H48C48.828 34.5001 49.5 35.172 49.5 36Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="resources-button-next slide-btn slide-btn-next">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36 4.5C18.63 4.5 4.5 18.63 4.5 36C4.5 53.37 18.63 67.5 36 67.5C53.37 67.5 67.5 53.37 67.5 36C67.5 18.63 53.37 4.5 36 4.5ZM36 64.5C20.286 64.5 7.5 51.714 7.5 36C7.5 20.286 20.286 7.5 36 7.5C51.714 7.5 64.5 20.286 64.5 36C64.5 51.714 51.714 64.5 36 64.5ZM49.3828 36.5728C49.3078 36.7588 49.1971 36.924 49.0591 37.062L40.0591 46.062C39.7651 46.356 39.3811 46.5 38.9971 46.5C38.6131 46.5 38.2291 46.353 37.9351 46.062C37.3501 45.477 37.3501 44.5259 37.9351 43.9409L44.373 37.5029H24C23.172 37.5029 22.5 36.8309 22.5 36.0029C22.5 35.1749 23.172 34.5029 24 34.5029H44.3789L37.9409 28.0649C37.3559 27.4799 37.3559 26.5288 37.9409 25.9438C38.5259 25.3588 39.477 25.3588 40.062 25.9438L49.062 34.9438C49.2 35.0818 49.3107 35.2501 49.3857 35.4331C49.5357 35.7931 49.5358 36.2068 49.3828 36.5728Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="row pt-60 gy-4">
          <div className="col-lg-12">
            <div className="swiper resources-slider">
              <div className="swiper-wrapper">
                {products.map((product, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="blog-box">
                      <div className="blog-img overflow-hidden">
                        <img className="w-100" src={product.image} alt={product.title || 'product'} />
                      </div>
                      <div className="blog-info">
                        {product.title && (
                          <h2 className="text_color_white">
                            <Link href="/blog">{product.title}</Link>
                          </h2>
                        )}
                        <p className="text_color_light_white">{product.description}</p>
                        <Link className="border-btn border-btn-white" href="/blog">
                          Read More <ArrowIcon />
                        </Link>
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
