'use client'

import Link from 'next/link'

export default function Subscribe() {
  return (
    <section className="subscribe-area bg_color_black position-relative z-index-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe-wrap overflow-hidden position-relative z-index-one">
              <div className="section-title text-center">
                <h2 className="title text_color_white text-anim">
                  Start Your AI Journey with SaasLyn
                </h2>
                <p className="desc text_color_light_white">
                  Embark on an AI transformation journey into the future of
                  intelligent business as you kickstart your exploration of
                  SaasLyn, where limitless AI possibilities await at every
                  click and command.
                </p>
              </div>
              <div className="two-btn-wrap mt-4 mt-lg-5 d-flex flex-wrap justify-content-center">
                <Link className="common-btn bg-white-style" href="/service">
                  Get Started
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z" fill="currentColor"/>
                  </svg>
                </Link>
                <Link className="common-btn border-style border-style-transparent" href="/contact">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5521 21.7514C16.0931 21.7514 15.6311 21.6894 15.1751 21.5644C9.01011 19.8724 4.12909 14.9944 2.43609 8.83344C2.05109 7.43244 2.26204 5.97243 3.03204 4.72443C3.80504 3.47043 5.0761 2.58543 6.5191 2.29743C7.4791 2.10543 8.4281 2.53343 8.9151 3.35443L10.4781 5.99442C11.2371 7.27642 10.86 8.92742 9.61896 9.75342L8.4881 10.5054C9.5451 12.6754 11.3229 14.4584 13.4839 15.5144L14.2462 14.3774C15.0772 13.1384 16.7281 12.7674 18.0091 13.5304L20.6522 15.1064C21.4702 15.5944 21.8931 16.5494 21.7071 17.4814C21.4191 18.9244 20.5341 20.1954 19.2811 20.9684C18.4391 21.4864 17.5021 21.7514 16.5521 21.7514Z" fill="currentColor"/>
                  </svg>
                  Contact Us
                </Link>
              </div>
              <img
                className="position-absolute z-index-minus-one start-0 top-0 h-100 w-100"
                src="/assets/images/new-images-v2/shapes/noise.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="subscribe-sp-left z-index-minus-one position-absolute start-0 top-50 translate-middle-y"
        src="/assets/images/new-images-v2/shapes/subscribe-left.png"
        alt=""
      />
      <img
        className="subscribe-sp-right z-index-minus-one position-absolute end-0 top-50 translate-middle-y"
        src="/assets/images/new-images-v2/shapes/subscribe-right.png"
        alt=""
      />
    </section>
  )
}
