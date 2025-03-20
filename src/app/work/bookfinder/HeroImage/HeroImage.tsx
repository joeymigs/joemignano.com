import Image from "next/image"
import heroImage from '/public/images/work/bookfinder/hero-image.jpg'

import BrowserFrame from "@/components/BrowserFrame"

import css from './HeroImage.module.css'

export default function HeroImage() {
  return (
    <div className={css.Wrap}>
      <BrowserFrame
        wrapClass={css.DesktopWrap}
        animate
        variants={{ animate: { transition: { delay: 0.33 }}}}
        animateOnLoad
      >
        <Image src={heroImage} alt="Bookinder, New Listings view" priority />
      </BrowserFrame>
    </div>
  )
}
