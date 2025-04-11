import joeHeroImg from '/public/images/home/joe-hero.jpg'

import HomeHeroImage from './HomeHeroImage'

import HomeHeroH1 from './HomeHeroH1'
import HomeHeroH2 from './HomeHeroH2'
import HomeHeroTagline from './HomeHeroTagline'
import HomeHeroAvailability from './HomeHeroAvailability'
import HomeHeroArrow from './HomeHeroArrow'

import css from './HomeHero.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'
import { workAvailability } from '@/data/workAvailability'

export default function HomeHero() {
  return (
    <section className={css.Wrap}>
      <HomeHeroImage src={joeHeroImg} className={css.Image} />
      <HomeHeroH1 className={cx(typo.DisplayXl, css.Title)} />
      <HomeHeroH2 className={cx(typo.DisplayL, css.Subtitle)} />
      <HomeHeroTagline />
      {workAvailability.status === 'available' && <HomeHeroAvailability {...workAvailability} />}
      <HomeHeroArrow />
    </section>
  )
}