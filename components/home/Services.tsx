'use client'

const services = [
  {
    icon: 'ai-strategy',
    color: '#FB6A15',
    title: 'AI Strategy & Consulting',
    description: 'Transform your business with strategic AI planning, expert consulting, and comprehensive implementation roadmaps that drive sustainable digital transformation and competitive advantage.'
  },
  {
    icon: 'custom-dev',
    color: '#02D6E4',
    title: 'Custom AI Development',
    description: 'Build tailored AI solutions that precisely meet your unique business requirements, leveraging cutting-edge technology to create intelligent systems that drive innovation and growth.'
  },
  {
    icon: 'ml-solutions',
    color: '#F800FF',
    title: 'Machine Learning Solutions',
    description: 'Develop and deploy advanced machine learning models that automate processes, predict outcomes, and deliver intelligent insights to optimize your business operations and decision-making.'
  },
  {
    icon: 'nlp',
    color: '#9003FF',
    title: 'Natural Language Processing',
    description: 'Harness the power of language understanding with NLP solutions that enable intelligent chatbots, sentiment analysis, content generation, and automated text processing capabilities.'
  },
  {
    icon: 'analytics',
    color: '#9003FF',
    title: 'AI Analytics & Insights',
    description: 'Unlock the power of your data with advanced AI analytics that provide actionable insights, predictive intelligence, and strategic recommendations for informed decision-making.'
  },
  {
    icon: 'training',
    color: '#00D622',
    title: 'AI Training & Support',
    description: 'Empower your team with comprehensive AI training programs and ongoing technical support to ensure successful adoption, skill development, and maximum value from AI investments.'
  }
]

export default function Services() {
  return (
    <section className="service-area bg_color_black pt-120 pb-120 position-relative z-index-one overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="title text_color_white text-anime">Our Services</h2>
              <p className="desc text_color_light_white">
                Comprehensive AI solutions tailored to transform your business
                and drive digital success.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-60 gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-box-wrap">
                <div className="service-box position-relative overflow-hidden">
                  <h3>
                    <span className="service-icon" style={{ color: service.color }}>
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <rect x="2" y="2" width="40" height="40" rx="8" fill={service.color} fillOpacity="0.1" />
                      </svg>
                    </span>
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
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
  )
}
