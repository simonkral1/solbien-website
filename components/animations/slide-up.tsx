"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export default function SlideUp({ children, delay = 0, duration = 0.5, distance = 50, className = "" }: SlideUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: distance,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration,
            delay: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
