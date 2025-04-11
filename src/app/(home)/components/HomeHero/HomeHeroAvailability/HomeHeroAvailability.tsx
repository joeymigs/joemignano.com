import type { WorkAvailability } from '@/data/workAvailability'

import AnimatedText from '@/components/AnimatedText'

import css from './HomeHeroAvailability.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function HomeHeroAvailability({
  availableFromDate,
  statusMessage,
}: WorkAvailability) {
  return (
    <div className={css.Wrap}>
      <AnimatedText
        wrapVariants={{ animate: { transition: { delayChildren: 2 }}}}
        split='words'
        className={typo.BodyS}
        animateOnLoad
      >{statusMessage} —</AnimatedText>
      <AnimatedText
        wrapVariants={{ animate: { transition: { delayChildren: 2.33 }}}}
        segmentVariants={{initial: { y: 16 }}}
        split='words'
        className={cx(css.Date, typo.HeadingL)}
        animateOnLoad
      >{availableFromDate}</AnimatedText>
    </div>
  )
}
