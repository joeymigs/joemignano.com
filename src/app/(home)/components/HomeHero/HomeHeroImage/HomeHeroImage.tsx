"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import lerp from "@/util/lerp"

type HomeHeroImageProps = {
  src: StaticImageData
  className: string
}

export default function HomeHeroImage({ src, className }: HomeHeroImageProps) {
  const [animationProgress, setAnimationProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  const opacity = lerp(0, 1, animationProgress)
  const scale = lerp(0.95, 1, animationProgress)

  const blendedOpacity = useTransform(scrollYProgress, [0, 0.1], [opacity, 0])
  const blendedScale = useTransform(scrollYProgress, [0, 0.1], [scale, 0.95])

  const smoothOpacity = useSpring(blendedOpacity, { stiffness: 150, damping: 25 })
  const smoothScale = useSpring(blendedScale, { stiffness: 150, damping: 25 })

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3, ease: "easeOut", delay: 0.33 }}
      onUpdate={(latest: { opacity: number }) => {
        if (animationProgress < 1)
          setAnimationProgress(latest.opacity)
      }}
      onAnimationComplete={() => setAnimationProgress(1)}
      style={{ opacity: smoothOpacity, scale: smoothScale }}
    >
      <Image
        src={src}
        alt="Joe Mignano"
        priority={true}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 960px) 730px, 810px"
      />
    </motion.div>
  )
}
