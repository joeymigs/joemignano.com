"use client"

import AnimatedText from '@/components/AnimatedText'
import { motion, useScroll, useTransform } from 'motion/react'

export default function HomeHeroH1({ className }: { className: string }) {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  return (
    <motion.h1 className={className} style={{ opacity, scale }}>
      <AnimatedText
        split="words"
        wrapVariants={{
          initial: {
            paddingBottom: '0',
            marginBottom: '0',
          },
          animate: {
            paddingBottom: '0.25em',
            marginBottom: '-0.25em',
            transition: {
              delay: 0.425,
              duration: 1.33,
              staggerChildren: 0.06,
            },
          },
        }}
        segmentVariants={{
          initial: { y: 64 },
          animate: { opacity: 0.5, transition: { duration: 1.33 }},
        }}
        animateOnLoad
      >Hi, I’m Joe.</AnimatedText>
    </motion.h1>
  )
}
