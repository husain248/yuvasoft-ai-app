import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

/* ── Team data — single source of truth ── */
export const teamMembers = [
  {
    name: 'Hitesh Kanwar',
    post: 'Founder / CEO',
    img: '/assets/images/team/hitesh-pic.jpg',
    slug: 'hitesh-kanwar',
    linkedin: 'https://www.linkedin.com/in/hiteshkanwar786/',
    bio: ['Our clients interests are ours as well We strive to deliver valuable products and services for both our clients and their customers We think that great things can only be achieve through a sustainable, strong and professional team. We love challenges and we are keen learners. We measure our success by the success of those we serve. Thats not some tagline, Its a tenet that informs everything we believe and do. As CEO of Yuvasoft, Mr. Hitesh Gurjar is responsible for technical leadership and innovation, further developing the companys technical community, and aligning its software strategy, architecture and partner relationships to deliver customer value. He has a passion for innovation and development. He has extensive experience leading the development of cutting-edge products and technologies.',
    ],
    skills: ['Product Strategy', 'Software Architecture', 'AI & Automation', 'Team Leadership', 'Client Relations'],
    experience: 'Over 12+ years experience',
    email: 'info@yuvasoftech.com',
    qualification: 'Bachelor of Engineering'
  },
  {
    name: 'Sandeep Singh Sisodiya',
    post: 'Product Manager / Director',
    img: '/assets/images/team/sandeep-pic.jpg',
    slug: 'sandeep-singh-sisodiya',
    linkedin: 'https://www.linkedin.com/in/sandy1987/',
    bio: [
      'We work with passion. We are enthusiastic about the work we do and the products we build.I am proud of our company and the people that have brought us to where we are today, and I am excited about where we are going tomorrow. As Managing Director of Yuvasoft Mr. Sandeep Sisodiya is the visionary of the company when it comes to the technical aspect of Yuvasofts processes. He set new goals and challenges in the coming years, Yuvaosft will remain to be committed to the core values of quality, customer delight, integrity, agility and efficiency - the same core values that have brought Yuvasoft to where we are today, a world class IT service and solutions company offering IT service and solutions to key markets in Asia Americas and Australia.',
    ],
    skills: ['Product Management', 'Agile Delivery', 'Stakeholder Management', 'Roadmap Planning', 'UX Strategy'],
    experience: 'Over 12+ years experience',
    email: 'info@yuvasoftech.com',
    qualification: 'Bachelor of Engineering'
  },
  {
    name: 'Satish Mishra',
    post: 'Founder / CTO',
    img: '/assets/images/team/satish-pic.jpg',
    slug: 'satish-mishra',
    linkedin: 'https://www.linkedin.com/in/satish-mishra-40890098/',
    bio: [
      'Satish Mishra is a Co-Founder of Yuvatech Solutions USA LLC, I am committed to driving the global expansion of tech services, leveraging a proven foundation established by Yuvatechsoft Solutions in 2013. We have delivered over 140 projects across industries, including U.S. defense and multinational corporations. Our expertise spans web and mobile applications, backend technologies like Ruby on Rails, Node.js, and Python with Django, and frontend frameworks such as Angular, React, and Next.js.  ',
      'Additionally, our latest focus is on developing advanced AI-driven systems with tools like LangChain and LangGraph to provide innovative solutions in a rapidly evolving technological landscape. My mission is to empower businesses with cutting-edge technology tailored to their needs.',
    ],
    skills: ['System Architecture', 'Full-Stack Engineering', 'Cloud Infrastructure', 'AI Integration', 'Engineering Leadership'],
    experience: 'Over 8+ years experience',
    email: 'info@yuvasoftech.com',
    qualification: 'Bachelor of Engineering'
  },
  {
    name: 'Ranveer Singh Rawat',
    post: 'Founder / CTO',
    img: '/assets/images/team/ranveer-pic.jpg',
    slug: 'ranveer-singh-rawat',
    linkedin: 'https://www.linkedin.com/in/ranveer-rawat-bb386123/',
    bio: [
      'Accomplished, results-driven IT and software developer with a legacy of delivering complex initiatives successfully with teams. Proven ability to own, build, lead, and develop technical teams in the execution of the strategic vision and product roadmap. Able to communicate, prioritize and implement technology initiatives while ensuring frugal budgetary and governance controls. Value team relationships and leading with an analytical mindset.',
    ],
    skills: ['Operations Management', 'Business Development', 'Client Success', 'Growth Strategy', 'Project Delivery'],
    experience: 'Over 10+ years experience',
    email: 'info@yuvasoftech.com',
    qualification: 'Bachelor of Engineering'
  },
]

export function getMember(slug: string) {
  return teamMembers.find((m) => m.slug === slug)
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const member = getMember(slug)
  if (!member) return {}
  return {
    title: `${member.name} — ${member.role} | Yuvasoft`,
    description: member.bio[0],
  }
}

/* ── Icons ── */
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M7.04 21H3.25V9.63H7.04V21ZM7.42 5.21C7.42 4.01 6.47 3.04 5.27 3C4.05 2.97 3.03 3.93 3 5.15 2.97 6.37 3.93 7.39 5.15 7.42 6.39 7.43 7.4 6.45 7.42 5.21ZM20.95 14.13C20.95 10.59 18.66 9.51 16.71 9.51c-1.37-.04-2.66.63-3.41 1.77V9.64H9.64V21h3.79v-5.89c0-.06 0-.12 0-.18-.08-1.21.84-2.26 2.05-2.34.99 0 1.74.64 1.74 2.44V21h3.79l-.05-6.86-.01-.01Z" fill="currentColor"/>
  </svg>
)

const ArrowSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M21.706 12.708L14.707 19.707a1 1 0 0 1-1.414-1.414L18.586 13H3a1 1 0 1 1 0-2h15.586l-5.293-5.293a1 1 0 0 1 1.414-1.414l6.999 6.999a1 1 0 0 1 0 1.416z" fill="currentColor"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M5 13l4 4L19 7" stroke="#00C881" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Page ── */
export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params
  const member = getMember(slug)
  if (!member) notFound()

  const others = teamMembers.filter((m) => m.slug !== slug)

  return (
    <main>
      {/* ── Breadcrumb ── */}
      <section className="breadcrumb-area minus-margin overflow-hidden position-relative z-index-one">
        <div className="container">
          <div className="row justify-content-center position-relative z-index-one">
            <div className="col-lg-10">
              <div className="breadcrumb-info text-center">
                <p className="breadcrumb-nav text_color_white">
                  <Link href="/">Home</Link>
                  <i className="bi bi-slash-lg mx-1"></i>
                  <Link href="/about">About</Link>
                  <i className="bi bi-slash-lg mx-1"></i>
                  <span className="text_color_light_white">{member.name}</span>
                </p>
                <h1 className="text_color_white">{member.name}</h1>
                <p className="breadcrumb-desc text_color_light_white">{member.role} at Yuvasoft</p>
              </div>
            </div>
          </div>
        </div>
        <video className="breadcrumb-video-bg z-index-minus-one position-absolute top-0 start-0 h-100 w-100"
          playsInline autoPlay muted loop>
          <source src="/assets/images/new-images-v2/video/breadcrumb.mp4" type="video/mp4"/>
        </video>
      </section>

      {/* ── Member detail ── */}
      <section className="team-details-area bg_color_deep_blue pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between gy-5">

            {/* Left: bio */}
            <div className="col-lg-7 col-md-12 order-2 order-lg-1">
              <div className="team-personal-data">

                <div className="team-dev-head">
                  <h3 className="team-dev-name text_color_white">{member.name}</h3>
                  <h5 className="team-dev-title text_color_light_white" style={{ marginTop: '8px', marginBottom: '20px' }}>
                    {member.post}
                  </h5>
                  {member.bio.map((para, i) => (
                    <p key={i} className="team-dev-desc text_color_light_white mb-3">{para}</p>
                  ))}
                </div>

                {/* Skills */}
                <div className="team-dev-skills mt-5">
                  <h3 className="dev-skills-title text_color_white">Areas of Expertise</h3>
                  <div className="dev-overview-data mt-3">
                    {member.skills.map((skill, i) => (
                      <p key={i} className="text_color_light_white d-flex align-items-center gap-2 mb-2">
                        <CheckIcon /> {skill}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="team-dev-skills mt-4">
                  <h3 className="dev-skills-title text_color_white">Contact</h3>
                  <div className="dev-skills-tags mt-3">
                    <ul className="custom-ul tag-list d-flex flex-wrap align-items-center">
                      <li><a href={`mailto:${member.email}`}>{member.email}</a></li>
                      
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="team-dev-social mt-5 d-flex flex-wrap gap-3">
                  <a
                    className="common-btn bg-white-style"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon /> View LinkedIn
                  </a>
                  <Link className="common-btn border-style border-style-transparent" href="/contact">
                    Get in Touch <ArrowSvg />
                  </Link>
                </div>

              </div>
            </div>

            {/* Right: photo */}
            <div className="col-lg-4 col-md-12 order-1 order-lg-2">
              <div className="team-box-wrap">
                <div className="team-box">
                  <div className="team-img team-single-img overflow-hidden position-relative text-center">
                    <img
                      className="w-100"
                      src={member.img}
                      alt={member.name}
                      style={{ borderRadius: '20px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick card */}
              <div className="bg_color_light_black p-4 mt-4" style={{ borderRadius: '16px' }}>
                <h5 className="text_color_white mb-3">Quick Info</h5>
                {[
                  { label: 'Post',     value: member.post },
                  { label: 'Experience', value: member.experience },
                  { label: 'Qualification',   value: member.qualification  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      paddingBottom: '10px',
                      marginBottom: '10px',
                      borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    }}
                  >
                    <span className="text_color_light_white" style={{ fontSize: '14px' }}>{item.label}</span>
                    <span className="text_color_white" style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Other team members ── */}
      {others.length > 0 && (
        <section className="team-area bg_color_black pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="title text_color_white text-anime">Meet the Rest of the Team</h2>
                </div>
              </div>
            </div>
            <div className="row pt-60 gy-4 justify-content-center">
              {others.map((m) => (
                <div key={m.slug} className="col-lg-3 col-md-6">
                  <div className="team-box-wrap">
                    <div className="team-box">
                      <div className="team-img overflow-hidden position-relative text-center">
                        <img src={m.img} alt={m.name} />
                        <div className="team-info-wrap position-absolute bottom-0 start-0 h-100 w-100 d-flex align-items-end">
                          <div className="d-flex w-100 justify-content-between align-items-center">
                            <div className="team-info text-start">
                              <Link href={`/team/${m.slug}`}>
                                <h2 className="h2 text_color_white">{m.name}</h2>
                              </Link>
                              <p className="text_color_light_white">{m.role}</p>
                            </div>
                            <a
                              href={m.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="team-social d-flex align-items-center justify-content-center"
                              aria-label={`${m.name} on LinkedIn`}
                            >
                              <LinkedInIcon />
                            </a>
                          </div>
                        </div>
                      </div>
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
