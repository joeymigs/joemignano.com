import AnimateText from '@/components/AnimateText'

import css from './HomeHeroAvailability.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function HomeHeroAvailability() {
  return (
    <div className={css.Wrap}>
      <AnimateText
        wrapVariants={{ animate: { transition: { delayChildren: 2 }}}}
        split='words'
        className={typo.BodyS}
      >Available for work —</AnimateText>
      <AnimateText
        wrapVariants={{ animate: { transition: { delayChildren: 2.33 }}}}
        segmentVariants={{initial: { y: 16 }}}
        split='words'
        className={cx(css.Date, typo.HeadingL)}
      >Mar ‘25</AnimateText>
    </div>
  )
}
