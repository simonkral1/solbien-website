"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import React from "react"

interface StaggeredChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  itemDelay?: number
  staggerDirection?: "forward" | "reverse"
}

export default function StaggeredChildren({
  children,
  className = "",
  delay = 0,
  itemDelay = 0.1,
  staggerDirection = "forward",
}: StaggeredChildrenProps) {
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
        hidden: {},
        visible: {
          transition: {
            staggerChildren: itemDelay,
            staggerDirection: staggerDirection === "reverse" ? -1 : 1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
