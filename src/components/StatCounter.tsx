import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export default function StatCounter({
  value,
  suffix = '',
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsub = springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toString()
    })
    return unsub
  }, [springValue])

  return (
    <div className="text-center">
      <div className="font-serif text-4xl text-ink sm:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-widest2 text-ink/50">{label}</div>
    </div>
  )
}
