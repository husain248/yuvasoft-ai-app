'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div
      className="hero-area hero-area-canvas minus-margin overflow-hidden position-relative z-index-one"
      style={{
        backgroundImage: 'url(/assets/images/banner/banner-three-bg.png)',
      }}
    >
      <div className="container position-relative z-index-one">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 order-1 order-lg-0 mt-5 mt-lg-0">
            <div className="hero-info">
              <h1 className="text_color_white">Build Smarter. Scale Faster. With AI-Powered Digital Solutions</h1>
              <p className="text_color_light_white hero-text">
                We create intelligent websites and AI-driven automation systems that help your business grow faster, reduce manual work, and maximize efficiency.
              </p>
              <div className="two-btn-wrap d-flex flex-wrap mt-lg-5 mt-4">
                <Link className="common-btn bg-white-style" href="/contact">
                  Get Started
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <a
                  className="vid common-btn border-style border-style-transparent"
                  href="https://vimeo.com/712351958"
                >
                  Watch Demo
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.283 16.752C9.93296 16.752 9.58301 16.662 9.26001 16.481C8.59301 16.107 8.19495 15.4281 8.19495 14.6641V9.33594C8.19495 8.57194 8.59301 7.89304 9.26001 7.51904C9.93101 7.14404 10.719 7.15906 11.373 7.56006L15.8521 10.3C16.4491 10.666 16.806 11.301 16.806 12.001C16.806 12.701 16.4491 13.3359 15.8521 13.7019L11.373 16.4419C11.034 16.6479 10.659 16.752 10.283 16.752ZM10.285 8.75C10.153 8.75 10.047 8.79688 9.99304 8.82788C9.90304 8.87788 9.69397 9.02894 9.69397 9.33594V14.6641C9.69397 14.9721 9.90304 15.1221 9.99304 15.1721C10.084 15.2231 10.323 15.3249 10.59 15.1609L15.069 12.4209C15.283 12.2899 15.306 12.083 15.306 12C15.306 11.917 15.283 11.7101 15.069 11.5801L10.59 8.84009C10.481 8.77209 10.377 8.75 10.285 8.75ZM12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.899 2.75 2.75 6.899 2.75 12C2.75 17.101 6.899 21.25 12 21.25C17.101 21.25 21.25 17.101 21.25 12C21.25 6.899 17.101 2.75 12 2.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-0 order-lg-1">
            <div className="hero-img-wrap section-middle">
              <img src="/assets/images/new-images-v2/hero/hero-1.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-120 position-relative z-index-one">
        <div className="row row-padding-top">
          <div className="col-12">
            <div className="banner-three__thumb scale">
              <img
                src="/assets/images/banner/banner-three-thumb.png"
                alt="banner-thumb"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
