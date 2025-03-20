import type { CaseStudyFeatureFigure } from '@/types'
import type { CSSProperties } from 'react'

import Image from 'next/image'

import CaseStudyFeatureCarousel from './CaseStudyFeatureCarousel'
import CaseStudyFeatureFigureContent from './CaseStudyFeatureFigureContent'

import css from './CaseStudyFeatureFigure.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function CaseStudyFeatureFigure({
  content,
  slides,
  bgColor,
  bg,
  bgImage,
  verticalOnMobile = false,
  additionalContent,
  caption,
  aspectRatio,
  mobileMarginBreakout,
}: CaseStudyFeatureFigure) {
  const hasSlides = slides && slides.length > 0
  
  const wrapClasses = cx(
    css.Wrap,
    {
      [css.VertOnMobile]: verticalOnMobile,
      [css.MobileMarginBreakout]: mobileMarginBreakout,
    }
  )
  const bgStyles = { ['--bg']: bg || bgColor || '', aspectRatio } as CSSProperties

  return (
    <figure className={wrapClasses} style={bgStyles}>
      {hasSlides
        ? <CaseStudyFeatureCarousel slides={slides} />
        : <div className={css.BgWrap}>
            {bgImage && <Image src={bgImage} className={css.BgImg} alt="" />}
            {content && <CaseStudyFeatureFigureContent {...content} />}
          </div>
      }
      {additionalContent}
      {caption && <div className={cx(css.Caption, typo.BodyXS)}>{caption}</div>}
    </figure>
  )
}
