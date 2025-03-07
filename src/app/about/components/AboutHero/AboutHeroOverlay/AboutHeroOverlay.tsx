"use client"

import { motion, useScroll, useTransform } from "motion/react"

type AboutHeroOverlayProps = {
  className?: string
}

export default function AboutHeroOverlay({ className }: AboutHeroOverlayProps) {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.75, 1])

  return (
    <motion.div className={className} style={{ opacity }} />
  )
}
