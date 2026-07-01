'use client'

import { useEffect, useRef, useState } from 'react'

export interface StatItem {
  target: number
  suffix: string
  label: string
  decimals?: number
  colClass?: string
}

/* Animates 0 → target with cubic ease-out */
function useCountUp(target: number, duration = 1800, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, decimals])

  return value
}

function SingleStat({ stat, active }: { stat: StatItem; active: boolean }) {
  const value = useCountUp(stat.target, 1800, active, stat.decimals ?? 0)
  const display = stat.decimals ? value.toFixed(stat.decimals) : Math.floor(value)

  return (
    <div className={stat.colClass ?? 'col-lg-3'} >
      <div className="achievement-count-box achievement-single-line-wrap text-center">
        <h2 className="counter-item text_color_white">
          <span className="d-inline-block">{display}</span>
          <em>{stat.suffix}</em>
        </h2>
        <p className="text_color_light_white">{stat.label}</p>
      </div>
    </div>
  )
}

interface Props {
  stats: StatItem[]
  rowClass?: string
}

export default function StatsCounter({ stats, rowClass = 'row achievement-line-wrap gy-4' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={rowClass}>
      {stats.map((stat, i) => (
        <SingleStat key={i} stat={stat} active={active} />
      ))}
    </div>
  )
}
