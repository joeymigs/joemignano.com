import type { CaseStudyFeatureImage } from '@/types'
import type { CSSProperties } from 'react'

import Image from 'next/image'

import CaseStudyFeatureImageCarousel from './CaseStudyFeatureImageCarousel'

import css from './CaseStudyFeatureImage.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function CaseStudyFeatureImage({
  component,
  slides,
  type,
  bgColor,
  bg,
  bgImage,
  verticalOnMobile = false,
  additionalContent,
  caption,
  justify,
  aspectRatio,
  mobileMarginBreakout,
}: CaseStudyFeatureImage) {
  const hasSlides = slides && slides.length > 0
  
  const wrapClasses = cx(
    css.Image,
    justify && css[`justify-${justify}`],
    {
      [css.VertOnMobile]: verticalOnMobile,
      [css.MobileMarginBreakout]: mobileMarginBreakout,
    }
  )
  const contentWrapClasses = cx(css.ContentWrap, type && css[type])
  const bgStyles = { ['--bg']: bg || bgColor || '', aspectRatio } as CSSProperties

  return (
    <div className={wrapClasses} style={bgStyles}>
      {hasSlides
        ? <CaseStudyFeatureImageCarousel slides={slides} contentWrapClasses={contentWrapClasses} />
        : <div className={css.BgWrap}>
            {bgImage && <Image src={bgImage} className={css.BgImg} alt="" />}
            <div className={contentWrapClasses}>
              {component}
            </div>
          </div>
      }
      {additionalContent}
      {caption && <div className={cx(css.Caption, typo.BodyXS)}>{caption}</div>}
    </div>
  )
}
