'use client'

export default function DataSection() {
  return (
    <section className="data-area bg_color_black pb-120 overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-4">
          <div className="col-lg-6 col-xl-5">
            <div className="data-img-wrap position-relative z-index-one">
              <img
                className="w-100 rounded-lg"
                src="/assets/images/why-choose-graphic.png"
                alt="Data Visualization"
                
              />
              <img
                className="data-img-2 d-none d-lg-block position-absolute"
                src="/assets/images/data-2.svg"
                alt=""
              />
              <img
                className="data-sp position-absolute z-index-minus-one"
                src="/assets/images/new-images-v2/shapes/data.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="data-info">
              <span className="text_color_light_white">WHY CHOOSE US?</span>
              <h2 className="text_color_white text-anim">
                Why Yuvasoft?
              </h2>
              
              <ul className="listing custom-ul d-flex flex-column why-list">
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.03 9.13599C16.323 9.42899 16.323 9.90402 16.03 10.197L11.363 14.864C11.217 15.01 11.025 15.084 10.833 15.084C10.641 15.084 10.449 15.011 10.303 14.864L7.97 12.531C7.677 12.238 7.677 11.763 7.97 11.47C8.263 11.177 8.73801 11.177 9.03101 11.47L10.834 13.273L14.97 9.13702C15.263 8.84402 15.737 8.84399 16.03 9.13599Z"
                      fill="currentColor"
                      fillOpacity="0.7"
                    />
                  </svg>
                  We are a group of problem solvers and code ninjas that believe in building software that has real purpose. By combining talent, expertise, and hard work, we build custom software.
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.03 9.13599C16.323 9.42899 16.323 9.90402 16.03 10.197L11.363 14.864C11.217 15.01 11.025 15.084 10.833 15.084C10.641 15.084 10.449 15.011 10.303 14.864L7.97 12.531C7.677 12.238 7.677 11.763 7.97 11.47C8.263 11.177 8.73801 11.177 9.03101 11.47L10.834 13.273L14.97 9.13702C15.263 8.84402 15.737 8.84399 16.03 9.13599Z"
                      fill="currentColor"
                      fillOpacity="0.7"
                    />
                  </svg>
                  We emphasizes the importance of being reliable, efficient, and respectful of deadlines.
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.03 9.13599C16.323 9.42899 16.323 9.90402 16.03 10.197L11.363 14.864C11.217 15.01 11.025 15.084 10.833 15.084C10.641 15.084 10.449 15.011 10.303 14.864L7.97 12.531C7.677 12.238 7.677 11.763 7.97 11.47C8.263 11.177 8.73801 11.177 9.03101 11.47L10.834 13.273L14.97 9.13702C15.263 8.84402 15.737 8.84399 16.03 9.13599Z"
                      fill="currentColor"
                      fillOpacity="0.7"
                    />
                  </svg>
                  Our execution of tasks, projects, or services meet or exceed established standards, demonstrating a high level of excellence, accuracy, and proficiency.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
