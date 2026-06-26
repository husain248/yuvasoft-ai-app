'use client'

export default function Achievement() {
  return (
    /* Exact class list from index-4.html */
    <section className="achievement-area pt-120 pb-120 bg_color_black">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Left heading */}
          <div className="col-lg-3">
            <h2 className="achievement-title text_color_white text-center text-lg-start">
              See our Achievement
            </h2>
          </div>

          {/* Stats */}
          <div className="col-lg-9">
            <div className="row achievement-line-wrap gy-4">

              <div className="col-lg-4 achievement-single-line-wrap">
                <div className="achievement-count-box text-center">
                  <h2 className="counter-item text_color_white">
                    <span
                      className="odometer d-inline-block"
                      data-odometer-final="98"
                    >.</span>
                    <em>%</em>
                  </h2>
                  <p className="text_color_light_white">Accuracy in Data</p>
                </div>
              </div>

              <div className="col-lg-4 achievement-single-line-wrap">
                <div className="achievement-count-box text-center">
                  <h2 className="counter-item text_color_white">
                    <span
                      className="odometer d-inline-block"
                      data-odometer-final="5"
                    >.</span>
                    <em>M+</em>
                  </h2>
                  <p className="text_color_light_white">Global Users</p>
                </div>
              </div>

              <div className="col-lg-4 achievement-single-line-wrap">
                <div className="achievement-count-box text-center">
                  <h2 className="counter-item text_color_white">
                    <span
                      className="odometer d-inline-block"
                      data-odometer-final="2"
                    >.</span>
                    <em>M+</em>
                  </h2>
                  <p className="text_color_light_white">Accuracy in Data</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="site-border mt-5"></div>
      </div>
    </section>
  )
}
