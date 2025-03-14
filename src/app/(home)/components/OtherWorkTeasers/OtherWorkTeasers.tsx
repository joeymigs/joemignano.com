"use client"

import type { Variants } from "@/types/animation"

import { useState } from 'react'

import { motion } from 'motion/react'

import easings from '@/const/easings'

import Link from 'next/link'
import Image from 'next/image'

import { OtherWorkTeaser } from '@/(home)/content'

import AnimatedText from '@/components/AnimatedText'
import Icon from '@/components/Icon'
import Arrow from '@/assets/icons/Arrow.svg'

import css from './OtherWorkTeasers.module.css'
import grid from '@/css/grid/Grid.module.css'
import layout from '@/css/layout/Layout.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

const teaserWrapVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.067,
    },
  },
}
const teaserVariants: Variants = {
  initial: {
    y: 48, opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easings.bigFadeIn,
      duration: 1,
    },
  },
}

type OtherWorkTeasersProps = {
  teasers: OtherWorkTeaser[];
}

export default function OtherWorkTeasers({ teasers = [] }: OtherWorkTeasersProps) {
  const [animationIsComplete, setAnimationIsComplete] = useState(false)

  return (
    <section className={css.Wrap}>
      <div className={cx(grid.SiteGrid, layout.Main)}>
        <header className={css.HeaderCard}>
          <h2 className={typo.HeadingL} style={{maxWidth: '16ch'}}>
            <AnimatedText
              style={{ display: 'block', overflow: 'hidden' }}
              split="letters"
              segmentVariants={{ initial: { y: 20 } }}
            >
              Other work for <span style={{display: 'inline-block'}}>japan-guide.com <i>&mdash;</i></span>
            </AnimatedText>
          </h2>
        </header>
      </div>
      <motion.ol
        className={cx(css.Cards, grid.SiteGrid, layout.Main)}
        variants={teaserWrapVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        onAnimationComplete={() => setAnimationIsComplete(true)}
      >
        {teasers.map(({ url, image, imageAlt, title, desc, cta, slug }, i) => (
          <motion.li key={i} className={grid['l--Col-Span-4']} variants={teaserVariants}>
            <Link
              href={url}
              className={cx(
                css.Teaser,
                css[slug],
                { [css.isHoverable]: animationIsComplete },
                typo.Hover,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={image} className={css.Image} alt={imageAlt} />
              <div className={css.Text}>
                <h3 className={typo.DisplayS}>{title}</h3>
                <p className={cx(css.Desc, typo.BodyM, typo.Pretty)}>{desc}</p>
              </div>
              <div className={css.Cta}>
                <span>
                  <span className={typo.Link}>{cta}</span>
                </span>
                <Icon svg={Arrow} rotate='270deg' className={css.CtaArrow} />
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
