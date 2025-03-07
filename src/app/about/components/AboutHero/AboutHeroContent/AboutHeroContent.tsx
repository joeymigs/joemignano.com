"use client"

import type { PropsWithChildren, ReactNode } from "react"

import { motion, useScroll, useTransform } from "motion/react"

type AboutHeroContentProps = PropsWithChildren<{
  className?: string
  heading: ReactNode
}>

export default function AboutHeroContent({ children, className, heading }: AboutHeroContentProps) {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  const wrapOpacity = useTransform(scrollYProgress, [0, 0.5, 0.75], [1, 1, 0])
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.25], [0.15, 0.9])

  return (
    <motion.div className={className} style={{ y, opacity: wrapOpacity }}>
      {heading}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 0.2,
          transition: { duration: 2, delay: 0.33, ease: "easeOut" }
        }}
        viewport={{ once: true }}
        style={{ opacity: bodyOpacity }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
