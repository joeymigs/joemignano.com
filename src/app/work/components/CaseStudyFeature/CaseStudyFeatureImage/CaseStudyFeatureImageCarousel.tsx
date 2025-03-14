"use client"

import type { CaseStudyFeatureImageSlide } from '@/types'

import { useState, type CSSProperties } from 'react'

import { motion, AnimatePresence } from 'motion/react'

import Image from 'next/image'
import Icon from '@/components/Icon'
import Chevron from '@/assets/icons/Chevron.svg'

import css from './CaseStudyFeatureImage.module.css'
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

type CaseStudyFeatureImageCarouselProps = {
  slides: CaseStudyFeatureImageSlide[]
  contentWrapClasses?: string
}

export default function CaseStudyFeatureImageCarousel({
  slides,
  contentWrapClasses,
}: CaseStudyFeatureImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSlide = slides[currentIndex]

  const bgStyles = {['--bg']: currentSlide.bg || currentSlide.bgColor || ''} as CSSProperties
  const bgImage = currentSlide.bgImage
  const component = currentSlide.component
  const caption = currentSlide.caption
  
  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className={css.BgWrap} style={bgStyles}>
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
        <div key={`content-${currentIndex}`} className={contentWrapClasses}>
          {component}
        </div>

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
    </div>
  )
}
