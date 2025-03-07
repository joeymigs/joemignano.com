import Image from "next/image"
import desktopImage from '/public/images/work/jg-2020s/hero-jg-2020s-desktop.jpg'
import mobileImage from '/public/images/work/jg-2020s/hero-jg-2020s-mobile.jpg'

import BrowserFrame from "@/components/BrowserFrame"
import PhoneFrame from "@/components/PhoneFrame"

import grid from '@/css/grid/Grid.module.css'
import css from './HeroImage.module.css'
import cx from 'classnames'

export default function HeroImage() {
  return (
    <div className={css.Wrap}>
      <BrowserFrame
        wrapClass={css.DesktopWrap}
        animate
        variants={{ animate: { transition: { delay: 0.33 }}}}
        animateOnLoad
      >
        <Image src={desktopImage} alt="japan-guide.com, Mt. Fuji Destination page" />
      </BrowserFrame>
      <div className={cx(css.MobileContainer, grid.SiteGrid)}>
        <PhoneFrame 
          wrapClass={cx(css.MobileWrap, grid['l--Col-8-12'])}
          frameClass={css.MobileFrame}
          shimColor="#fff"
          animate
          variants={{ animate: { transition: { delay: 0.67 }}}}
          animateOnLoad
        >
          <Image src={mobileImage} alt="japan-guide.com, Shimokita Peninsula page" />
        </PhoneFrame>
      </div>
    </div>
  )
}
