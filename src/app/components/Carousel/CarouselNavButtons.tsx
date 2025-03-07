import { useSwiper } from 'swiper/react'

import Icon from '@/components/Icon'
import Chevron from '@/assets/icons/Chevron.svg'

import css from './Carousel.module.css'
import cx from 'classnames'

export default function CarouselNavButtons() {
  const swiper = useSwiper()

  return (
    <div className={css.Wrap}>
      <button className={cx(css.Button, css.Prev)} onClick={() => swiper.slidePrev()}>
        <Icon svg={Chevron} />
      </button>
      <button className={cx(css.Button, css.Next)} onClick={() => swiper.slideNext()}>
        <Icon svg={Chevron} rotate="180deg" />
      </button>
    </div>
  )
}
