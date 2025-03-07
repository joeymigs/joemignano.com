"use client"

import easings from '@/const/easings'
import lerp from '@/util/lerp'
import { motion, useScroll, useTransform } from 'motion/react'
import { useState } from 'react'

export default function HomeHeroH2({ className }: { className: string }) {
  const [animationProgress, setAnimationProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  const opacity = lerp(0, 1, animationProgress)
  const scale = lerp(0.975, 1, animationProgress)
  const translateY = lerp(-24, 0, animationProgress)

  const blendedOpacity = useTransform(scrollYProgress, [0, 0.075], [opacity, 0])
  const blendedScale = useTransform(scrollYProgress, [0, 0.1], [scale, 0.975])
  const blendedTranslateY = useTransform(scrollYProgress, [0, 0.1], [translateY, -24])

  return (
    <motion.h2
      className={className}
      initial={{ y: -24, rotateZ: 1, opacity: 0 }}
      animate={{ y: 0, rotateZ: 0, opacity: 1 }}
      transition={{ ease: easings.textStagger, duration: 2, delay: 1 }}
      onUpdate={(latest: { opacity: number }) => {
        if (animationProgress < 1) setAnimationProgress(latest.opacity)
      }}
      onAnimationComplete={() => setAnimationProgress(1)}
      style={{ opacity: blendedOpacity, scale: blendedScale, y: blendedTranslateY }}
    >
      Web developer <span>&</span> Product designer.
    </motion.h2>
  );
}