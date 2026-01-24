"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value

    // First set duration based on value size
    const totalDuration = duration * 1000
    const stepTime = totalDuration / end

    // Don't make it too slow for small numbers
    const minStepTime = 50
    const finalStepTime = Math.max(minStepTime, stepTime)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
      }
    }, finalStepTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration, isInView])

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}
