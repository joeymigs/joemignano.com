"use client"

import type { CSSProperties } from 'react'
import type { CaseStudyFeatureSlide } from '@/types'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import { getNextIndex, getPrevIndex } from '@/util/getIndex'

import useIsVisible from '@/hooks/useIsVisible'
import usePrerenderSlideAssets from './usePrerenderSlideAssets'

import Image from 'next/image'

import CaseStudyFeatureFigureContent from './CaseStudyFeatureFigureContent'

import Icon from '@/components/Icon'
import Chevron from '@/assets/icons/Chevron.svg'

import css from './CaseStudyFeatureFigure.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

const bgImgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.9, transition: { duration: 1.33 } },
  exit: { opacity: 0, transition: { duration: 1.33 } },
}
const captionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.67, delay: 0.67 } },
  exit: { opacity: 0, transition: { duration: 0.33 } }
}

type CaseStudyFeatureCarouselProps = {
  slides: CaseStudyFeatureSlide[]
  contentWrapClasses?: string
}

export default function CaseStudyFeatureCarousel({ slides }: CaseStudyFeatureCarouselProps) {
  const { isVisible, targetRef } = useIsVisible<HTMLDivElement>({
    options: { threshold: 0.1, rootMargin: '100% 0px 0px 0px' },
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSlide = slides[currentIndex]

  const { bgImage, content, caption, bg, bgColor } = currentSlide
  const bgStyles = { ['--bg']: bg || bgColor || '' } as CSSProperties

  const handlePrevSlide = () => setCurrentIndex((prev) => getPrevIndex(prev, slides))
  const handleNextSlide = () => setCurrentIndex((prev) => getNextIndex(prev, slides))

  const prerenderedAssets = usePrerenderSlideAssets(slides, currentIndex)
  
  return (
    <div className={css.BgWrap} style={bgStyles} ref={targetRef}>
      <AnimatePresence>
        {bgImage && (
          <motion.div
            key={bgImage.src}
            className={css.BgImg}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={bgImgVariants}
          >
            <Image src={bgImage} alt="" />
          </motion.div>
        )}
        
        <CaseStudyFeatureFigureContent {...content} key={`content-${currentIndex}`} />

        {caption && (
          <motion.div
            key={`caption-${currentIndex}`}
            className={cx(css.Caption, typo.BodyXS)}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={captionVariants}
          >
            {caption}
          </motion.div>
        )}
        
        <button
          key="prevButton"
          onClick={handlePrevSlide}
          className={css.SlideButton}
          data-slide-button="prev"
        >
          <Icon svg={Chevron} />
        </button>
        <button
          key="nextButton"
          onClick={handleNextSlide}
          className={css.SlideButton}
          data-slide-button="next"
        >
          <Icon svg={Chevron} rotate="180deg" />
        </button>
      </AnimatePresence>

      {isVisible && <div className="visually-hidden">{prerenderedAssets}</div>}
    </div>
  )
}
