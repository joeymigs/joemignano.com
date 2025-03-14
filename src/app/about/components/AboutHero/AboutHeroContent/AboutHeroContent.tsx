"use client"

import type { PropsWithChildren, ReactNode } from "react"

import { motion, useScroll, useTransform } from "motion/react"

type AboutHeroContentProps = PropsWithChildren<{
  className?: string
  heading: ReactNode
}>

export default function AboutHeroContent({ children, className, heading }: AboutHeroContentProps) {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 0.33], [0, -64])
  const opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0])

  return (
    <motion.div className={className} style={{ opacity, y }}>
      {heading}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 3, delay: 1.33, ease: "easeOut" }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
