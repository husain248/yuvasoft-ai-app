'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ── Categories ── */
const categories = ['All', 'Web App', 'Mobile App', 'UI/UX', 'Blockchain & AI/ML', 'AI Agents']

/* ── Portfolio cards ── */
const portfolioItems = [
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-1.jpg',
    tag: 'Ruby on Rails',
    title: 'RoofLink',
    href: 'https://rooflink.com/',
    target: 'blank',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-2.jpg',
    tag: 'Ruby on Rails',
    title: 'Petestablished',
    href: 'https://petstablished.com/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-3.jpg',
    tag: 'Ruby on Rails',
    title: 'BestClass',
    href: 'https://www.bestclass.us/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-4.jpg',
    tag: 'Ruby on Rails',
    title: 'Heath Matthews Physio',
    href: 'https://heathmatthewsphysio.com',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-5.jpg',
    tag: 'React JS',
    title: 'ClassMax',
    href: 'https://www.theworldrelay.com/running-out-of-time/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-6.jpg',
    tag: 'React JS',
    title: 'Avertro',
    href: 'https://www.avertro.com/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-7.jpg',
    tag: 'React JS',
    title: 'GivePlease',
    href: 'https://www.givepls.com',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-8.jpg',
    tag: 'React JS',
    title: 'Bentley Motors',
    href: 'https://www.bentleymotors.com/en.html',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-9.jpg',
    tag: 'PHP / Laravel',
    title: 'Compport',
    href: 'https://www.compport.com/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-10.jpg',
    tag: 'PHP / Laravel',
    title: 'VirtualPRO',
    href: 'https://www.virtualpro.com/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-11.jpg',
    tag: 'PHP / Laravel',
    title: 'Build My Ski Trip',
    href: 'https://www.buildmyskitrip.com/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-12.jpg',
    tag: 'PHP / Laravel',
    title: 'StaffShare365',
    href: 'https://www.staffshare365.net/',
  },
  {
    category: 'Web App',
    image: '/assets/images/portfolio/w-13.jpg',
    tag: 'PHP / Laravel',
    title: 'Connect Firm',
    href: 'https://connectfirm.com/',
  },
  {
    category: 'Mobile App',
    image: '/assets/images/portfolio/a-1.jpg',
    tag: 'Mobile App',
    title: 'SwiftVEE',
    href: 'https://swiftvee.com/',
  },
  {
    category: 'Mobile App',
    image: '/assets/images/portfolio/a-2.jpg',
    tag: 'Mobile App',
    title: 'Zaxby',
    href: 'https://play.google.com/store/apps/details?id=com.snapfinger.mobile.zaxbys&hl=en',
  },
  {
    category: 'Mobile App',
    image: '/assets/images/portfolio/a-3.jpg',
    tag: 'Mobile App',
    title: 'DIFX Exchange',
    href: 'https://play.google.com/store/apps/details?id=app.difx.exchange',
  },
  {
    category: 'Mobile App',
    image: '/assets/images/portfolio/a-4.jpg',
    tag: 'Mobile App',
    title: 'Sarwa',
    href: 'https://play.google.com/store/apps/details?id=com.sarwa&hl=en_IN&gl=US',
  },
  {
    category: 'Mobile App',
    image: '/assets/images/portfolio/a-5.jpg',
    tag: 'Mobile App',
    title: 'Pi Pay',
    href: 'https://play.google.com/store/apps/details?id=com.pipay.app.android',
  },
  {
    category: 'UI/UX',
    image: '/assets/images/portfolio/ux-1.jpg',
    tag: 'Design',
    title: 'Rest Less',
    href: 'https://restless.co.uk/leisure-and-lifestyle/film-and-tv/?ref=onthebox',
  },
  {
    category: 'UI/UX',
    image: '/assets/images/portfolio/ux-2.jpg',
    tag: 'Design',
    title: 'Colina Insurance',
    href: 'https://www.colina.com/',
  },
  {
    category: 'UI/UX',
    image: '/assets/images/portfolio/ux-3.jpg',
    tag: 'Design',
    title: 'Paleonola',
    href: 'https://paleonola.com/',
  },
  {
    category: 'UI/UX',
    image: '/assets/images/portfolio/ux-4.jpg',
    tag: 'Design',
    title: 'Voluspa',
    href: 'https://voluspa.com/',
  },
  {
    category: 'Blockchain & AI/ML',
    image: '/assets/images/portfolio/ai-1.jpg',
    tag: 'Blockchain & AI/ML',
    title: 'Multi-Modal AI Agent',
    href: 'https://www.omakase.ai/',
  },
  {
    category: 'Blockchain & AI/ML',
    image: '/assets/images/portfolio/ai-2.jpg',
    tag: 'Blockchain & AI/ML',
    title: 'ZEALS',
    href: 'https://zeals.ai/en/',
  },
  {
    category: 'Blockchain & AI/ML',
    image: '/assets/images/portfolio/ai-3.jpg',
    tag: 'Design',
    title: 'Crobo.money',
    href: 'https://www.crobo.money/',
  },
  {
    category: 'Blockchain & AI/ML',
    image: '/assets/images/new-images-v2/resources/resources-4.png',
    tag: 'Blockchain & AI/ML',
    title: 'AI Multi-Camera Monitoring',
    href: '/',
  },
  
]

/* ── AI Agents tab cards ── */
const aiAgentItems = [
  {
    image: '/assets/images/new-images-v2/resources/resources-1.png',
    tag: 'Rental Solutions',
    title: 'Magicalswap',
    time: 'Rental Solutions',
    href: '/products/magicalswap',
  },
  {
    image: '/assets/images/new-images-v2/resources/resources-2.png',
    tag: 'Track Location',
    title: 'Whereareyou',
    time: 'Track Location',
    href: '/products/whereareyou',
  },
  {
    image: '/assets/images/new-images-v2/resources/resources-3.png',
    tag: 'Productivity',
    title: 'Lifenotes',
    time: 'Notes App',
    href: '/products/lifenotes',
  },
  {
    image: '/assets/images/new-images-v2/resources/resources-4.png',
    tag: 'Networking',
    title: 'NetAssist',
    time: 'AI Network Tool',
    href: '/products/netassist',
  },
]

/* ── Icons ── */
const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const INITIAL_COUNT = 6
  const isAIAgents = active === 'AI Agents'

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active)

  const handleTabChange = (cat: string) => {
    setActive(cat)
    setShowAll(false)
  }

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hasMore = filtered.length > INITIAL_COUNT && !showAll
  const displayItems = isAIAgents ? aiAgentItems : visible

  return (
    <section id="portfolio-section" className="portfolio-area bg_color_black pt-0 pb-120">
      <style>{`
        .portfolio-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 40px;
          margin-bottom: 48px;
          justify-content: center;
        }
        .portfolio-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.65);
          transition: all 0.25s;
          white-space: nowrap;
        }
        .portfolio-tab-btn:hover {
          border-color: rgba(255,255,255,0.25);
          color: #fff;
          background: rgba(255,255,255,0.07);
        }
        .portfolio-tab-btn.active {
          background: linear-gradient(135deg, #4229ff, #9003FF);
          border-color: transparent;
          color: #fff;
        }
        .portfolio-tab-btn .tab-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.7;
          flex-shrink: 0;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 991px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 479px) { .portfolio-grid { grid-template-columns: 1fr; } }
        .portfolio-card {
          border-radius: 16px;
          overflow: hidden;
          background: #0e0f23;
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          animation: cardFadeIn 0.35s ease forwards;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          border-color: rgba(66,41,255,0.4);
          box-shadow: 0 16px 40px rgba(66,41,255,0.15);
        }
        .portfolio-card-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
        }
        .portfolio-card-body {
          padding: 14px 14px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .portfolio-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .portfolio-card-tag {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        .portfolio-card-heart {
          color: rgba(255,255,255,0.25);
          cursor: pointer;
          transition: color 0.2s;
          line-height: 1;
        }
        .portfolio-card-heart:hover { color: #ff4d6d; }
        .portfolio-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin: 0;
        }
        .portfolio-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: auto;
        }
        .portfolio-card-time-label {
          font-size: 10px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .portfolio-card-time-val {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
        }
        .portfolio-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #4229ff, #9003FF);
          border-radius: 999px;
          padding: 6px 14px;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .portfolio-card-cta:hover { opacity: 0.85; color: #fff; }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h2 className="title gradient-title">Our Portfolio</h2>
              <p className="desc text_color_light_white">
                A selection of products and client projects we&apos;ve designed, built, and shipped.
              </p>
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="portfolio-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-tab-btn${active === cat ? ' active' : ''}`}
              onClick={() => handleTabChange(cat)}
            >
              {active === cat && <span className="tab-dot" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="portfolio-grid">
          {displayItems.map((item, i) => (
            <div key={`${active}-${i}`} className="portfolio-card">
              <img src={item.image} alt={item.title} className="portfolio-card-img" />
              <div className="portfolio-card-body">
                <div className="portfolio-card-meta">
                  <span className="portfolio-card-tag">{item.tag}</span>
                  <Link href={item.href} className="portfolio-card-cta" target='_blank'>
                    View Project <ArrowIcon />
                  </Link>
                </div>
                <p className="portfolio-card-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More — only for non-AI-Agents tabs */}
        {!isAIAgents && hasMore && (
          <div className="text-center mt-5">
            <button
              className="common-btn border-style border-style-transparent"
              onClick={() => setShowAll(true)}
            >
              Show More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
