"use client"

import { motion } from 'motion/react'

import Icon from '@/components/Icon'

import css from './CaseStudyDevIcons.module.css'
import cx from 'classnames'
import easings from '@/const/easings'

type CaseStudyDevIconsProps = {
  icons: React.ReactNode[]
  align?: 'left' | 'right'
}

export default function CaseStudyDevIcons({ icons = [], align = 'left' }: CaseStudyDevIconsProps) {
  return (
    <motion.div
      className={cx(css.Wrap, css[align])}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.67, ease: easings.bigFadeIn } }}
      exit={{ opacity: 0, y: 16 }}
      key="icons"
    >
      {icons.map((icon, i) => <Icon key={i}>{icon}</Icon>)}
    </motion.div>
  )
}
