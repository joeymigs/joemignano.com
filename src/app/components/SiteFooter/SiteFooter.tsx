"use client"

import { socials } from '@/data/socials'
import { colophon } from '@/data/colophon'

import { motion, useScroll, useTransform } from 'motion/react'

import Icon from '@/components/Icon'
import IconLinks from '@/components/IconLinks'
import Arrow from '@/assets/icons/Arrow.svg'

import css from './SiteFooter.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function SiteFooter() {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0.9, 1], [0.95, 1])
  const y = useTransform(scrollYProgress, [0.9, 1], [64, 0])

  const bottomOpacity = useTransform(scrollYProgress, [1, 0.975], [1, 0])
  const bottomY = useTransform(scrollYProgress, [1, 0.975], [0, 8])

  return (
    <footer className={css.Wrap} id="contact">
      <motion.div className={css.BgCircle} style={{ opacity, scale, y }} />
      <motion.div className={css.Cta} style={{ opacity, scale, y }}>
        <h2 className={cx(css.GetInTouch, typo.DisplayXl)}>
          <a className={typo.Underline} href="mailto:joe@joemignano.com" rel="noopener noreferrer">
            Get in Touch
          </a>
          <Icon className={css.Arrow} rotate="270deg" svg={Arrow} />
        </h2>
        <p className={typo.BodyM}>Got a project? Let’s talk. :)</p>
      </motion.div>

      <div className={css.FooterFooter}>
        <motion.div className={css.Socials} style={{ opacity: bottomOpacity, y: bottomY }}>
          <span className={cx(css.FooterLabel ,typo.DisplayXS)}>Find me on:</span>
          <IconLinks links={socials} className={css.Icons} />
        </motion.div>
        <motion.div className={css.Colophon} style={{ opacity: bottomOpacity, y: bottomY }}>
          <span className={cx(css.FooterLabel ,typo.DisplayXS)}>Built with:</span>
          <IconLinks links={colophon} className={css.Icons} />
        </motion.div>
        <motion.div className={css.Copyright} style={{ opacity: bottomOpacity, y: bottomY }}>
          <span className={typo.DisplayXS}>©2024 Joe Mignano</span>
        </motion.div>
      </div>
    </footer>
  )
}
