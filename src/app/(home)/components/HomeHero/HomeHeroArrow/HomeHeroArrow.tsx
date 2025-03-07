"use client"

import { motion } from 'motion/react'

import Icon from '@/components/Icon'
import Arrow from '@/assets/icons/Arrow.svg'

import css from './HomeHeroArrow.module.css'

export default function HomeHeroArrow() {
  return (
    <motion.a
      href="#work"
      className={css.Button}
      initial={{ y: '25%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.33, duration: 0.33, ease: 'easeInOut' }}
    >
      <Icon svg={Arrow} className={css.Arrow} />
    </motion.a>
  )
}
