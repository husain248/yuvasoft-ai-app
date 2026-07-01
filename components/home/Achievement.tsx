'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  target: number
  suffix: string
  label: string
  decimals?: number
}

const stats: StatItem[] = [
  { target: 98,  suffix: '%',  label: 'Accuracy in Data' },
  { target: 5,   suffix: 'M+', label: 'Global Users' },
  { target: 300, suffix: '+',  label: 'Projects Completed' },
]

/* Animates a number from 0 → target over `duration` ms */
function useCountUp(target: number, duration = 1800, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, decimals])

  return value
}

function StatCounter({ stat, active }: { stat: StatItem; active: boolean }) {
  const value = useCountUp(stat.target, 1800, active, stat.decimals ?? 0)
  return (
    <div className="achievement-count-box text-center">
      <h2 className="counter-item text_color_white">
        <span className="d-inline-block">
          {stat.decimals ? value.toFixed(stat.decimals) : Math.floor(value)}
        </span>
        <em>{stat.suffix}</em>
      </h2>
      <p className="text_color_light_white">{stat.label}</p>
    </div>
  )
}

export default function Achievement() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect() // fire once
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="achievement-area pt-120 pb-120 bg_color_black">
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
              {stats.map((stat, i) => (
                <div key={i} className="col-lg-4 achievement-single-line-wrap">
                  <StatCounter stat={stat} active={active} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="site-border mt-5"></div>
      </div>
    </section>
  )
}
