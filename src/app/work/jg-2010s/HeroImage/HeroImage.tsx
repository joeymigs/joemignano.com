import Image from "next/image"
import before from '/public/images/work/jg-2010s/hero-old.jpg'
import after from '/public/images/work/jg-2010s/hero-new.jpg'

import BrowserFrame from "@/components/BrowserFrame"

import css from './HeroImage.module.css'

export default function HeroImage() {
  return (
    <div className={css.Wrap}>
      <BrowserFrame
        wrapClass={css.Before}
        shadow={300}
        animate
        variants={{
          animate: {
            opacity: 0.8,
            transition: { delay: 0.33 },
          }
        }}
        animateOnLoad
      >
        <Image src={before} alt="japan-guide.com: Before" />
      </BrowserFrame>
      <BrowserFrame
        wrapClass={css.After}
        shadow={500}
        animate
        variants={{ animate: { transition: { delay: 0.67 }}}}
        animateOnLoad
      >
        <Image
          src={after}
          alt="japan-guide.com: After"
          style={{
            aspectRatio: '1920 / 1120',
            objectPosition: 'top',
            objectFit: 'cover',
          }}
        />
      </BrowserFrame>
    </div>
  )
}
