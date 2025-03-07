import type { CaseStudyFeature } from '@/types'

import css from './CaseStudyFeatureImage.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function CaseStudyFeatureImage({
  component,
  type,
  bgColor,
  bg,
  verticalOnMobile = false,
  additional,
  caption,
  align,
  justify,
  mobileMarginBreakout,
}: CaseStudyFeature['image']) {
  const classes = cx(
    css.Image, 
    align && css[`align-${align}`],
    justify && css[`justify-${justify}`],
    {
      [css.VertOnMobile]: verticalOnMobile,
      [css.MobileMarginBreakout]: mobileMarginBreakout,
    }
  )
  const styles = {['--bg']: bg || bgColor || ''} as React.CSSProperties

  return (
    <div className={classes} style={styles}>
      { type
        ? <div className={cx(css.ContentWrap, css[type])}>{component}</div>
        : component }
      {additional}
      {caption && <div className={cx(css.Caption, typo.BodyXS)}>{caption}</div>}
    </div>
  )
}
