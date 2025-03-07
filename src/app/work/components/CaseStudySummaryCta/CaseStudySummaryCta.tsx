"use client"

import type { PropsWithChildren } from 'react'

import { motion } from 'motion/react'
import easings from '@/const/easings'

import css from './CaseStudySummaryCta.module.css'

export default function CaseStudySummaryCta({ children }: PropsWithChildren) {
  return (
    <motion.div
      className={css.Cta}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: easings.bigFadeIn } }}
      viewport={{ once: true, amount: 0.5, margin: '-50% 0px 0px 0px' }}
    >
      {children}
    </motion.div>
  )
}
