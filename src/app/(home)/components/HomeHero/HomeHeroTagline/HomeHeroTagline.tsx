"use client"

import { motion } from 'motion/react'

import AnimatedText from '@/components/AnimatedText'

import Icon from '@/components/Icon'
import MiniJapan from '@/assets/icons/i-heart-japan.svg'

import css from './HomeHeroTagline.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function HomeHeroTagline() {
  return (
    <div className={css.Tagline}>
      <div style={{overflow: 'clip'}}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24, rotateZ: 2 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Icon svg={MiniJapan} className={css.MiniJapan} />
        </motion.div>
      </div>
      <AnimatedText
        split='words'
        wrapVariants={{ animate: { transition: { delayChildren: 2 }}}}
        className={cx(typo.BodyM, typo.Prose, typo.Inverse)}
        animateOnLoad
      >
        <p>
          Former developer & designer for Japan’s top Google-ranked English travel website,
          <br /> 
          <a href="https://www.japan-guide.com" target="_blank" rel="noopener">japan-guide.com</a>
        </p>
      </AnimatedText>
    </div>
  )
}
