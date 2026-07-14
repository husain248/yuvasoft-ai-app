'use client'

const agents = [
  {
    icon: '/assets/images/langchain-icon.svg',
    title: 'LangChain',
    description: 'Store and manage contact information for leads, prospects, and customers',
  },
  {
    icon: '/assets/images/gemini-icon.svg',
    title: 'Gemini API',
    description: 'Automate your sales processes and workflows to increase efficiency and close more deals',
    active: true,
  },
  {
    icon: '/assets/images/langgraph-icon.svg',
    title: 'LangGraph',
    description: 'Seamlessly integrate with your email system for better communication management',
  },
  {
    icon: '/assets/images/react-icon.svg',
    title: 'React.js',
    description: 'Track tasks, activities, and follow-ups to stay organized and productive',
  },
  {
    icon: '/assets/images/python-icon.svg',
    title: 'Python',
    description: 'Generate detailed reports and analytics to make data-driven business decisions',
  },
  {
    icon: '/assets/images/langsmith-icon.svg',
    title: 'LangSmith',
    description: 'Provide excellent customer support with integrated help desk and ticketing system',
  },
]

export default function AIAgents() {
  return (
    <section className="features section">
      <div className="container">

        {/* Section heading */}
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-xxl-12">
            <div className="section-header text-center">
              <h2 className="section-title text-anime gradient-title">
                AI Agents for Every Industry
              </h2>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="row row-padding-top">
          <div className="col-12">
            <div className="features-item__wrapper">
              {agents.map((agent, i) => (
                <div
                  key={i}
                  className="features__item"
                  {...(agent.active ? { 'data-active': 'true' } : {})}
                >
                  <div className="item-icon">
                    <img src={agent.icon} alt={agent.title} />
                  </div>
                  <div className="item-content">
                    <h6 className="item-title">
                      <a href="#">{agent.title}</a>
                    </h6>
                    <p>{agent.description}</p>
                  </div>
                  <img
                    src="/assets/images/features-item-shape.png"
                    alt="features-item-shape"
                    className="item-shape"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
