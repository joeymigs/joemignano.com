import type { CaseStudyFeatureFigureContent } from '@/types'

import PhoneFrame, { type PhoneFrameProps } from '@/components/PhoneFrame'
import BrowserFrame, { type BrowserFrameProps } from '@/components/BrowserFrame'
import AnimatedImage from '@/components/AnimatedImage'

import Image from 'next/image'
import Video from '@/components/Video'

import css from './CaseStudyFeatureFigure.module.css'
import cx from 'classnames'

const defaultFrameProps: Partial<PhoneFrameProps | BrowserFrameProps> = {
  shadow: 300,
  animate: true,
  viewportOptions: { amount: 0.1 },
  variants: {
    animate: { transition: { duration: 1.67 }},
    exit: { opacity: 0, y: 24, transition: { duration: 0.33 }},
  },
}

export default function CaseStudyFeatureFigureContent( props: CaseStudyFeatureFigureContent ) {
  if( 'content' in props )
    return <div className={css.ContentWrap}>{props.content}</div>

  const { type, alt, frameProps, justify, align } = props

  const frames = {
    phone: PhoneFrame,
    browser: BrowserFrame,
    screenshot: AnimatedImage,
    default: AnimatedImage,
  }
  const Frame = type ? frames[type] : frames.default

  const classes = cx(
    css.ContentWrap,
    type && css[type],
    justify && css[`justify-${justify}`],
    align && css[`align-${align}`],
  )
  
  const content = 'videoSrc' in props
    ? <Video src={props.videoSrc} alt={alt} {...props.videoProps} />
    : <Image
        src={props.imageData ?? props.imageSrc}
        alt={alt}
        {...props.imageProps}
        className={props.imageClassName}
      />

  return (
    <div className={classes}>
      <Frame {...{ ...defaultFrameProps, ...frameProps }}>{content}</Frame>
    </div>
  )
}

