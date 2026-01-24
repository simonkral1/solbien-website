"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function FadeIn({ children, delay = 0, duration = 0.5, className = "" }: FadeInProps) {
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
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
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
