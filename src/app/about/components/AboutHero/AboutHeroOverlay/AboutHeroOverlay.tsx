"use client"

import { motion } from "motion/react"

type AboutHeroOverlayProps = {
  className?: string
}

export default function AboutHeroOverlay({ className }: AboutHeroOverlayProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    />
  )
}
