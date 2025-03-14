import { headingText, bodyText } from "@/about/content"
import { socials } from "@/data/socials"

import AboutHeroPic from "./AboutHeroPic"
import AboutHeroOverlay from "./AboutHeroOverlay"
import AboutHeroContent from "./AboutHeroContent"

import AnimatedText from "@/components/AnimatedText"
import IconLinks from "@/components/IconLinks"

import css from "./AboutHero.module.css"
import layout from "@/css/layout/Layout.module.css"
import typo from "@/css/typography/Typography.module.css"
import cx from "classnames"

export default function AboutHero() {
  const heading = (
    <h1 className={cx(css.Title, typo.DisplayL)}>
      <AnimatedText
        split="letters"
        wrapVariants={{ animate: { transition: { staggerChildren: 0.067, delayChildren: 0.67 }}}}
        segmentVariants={{ animate: { transition: { duration: 1 }}}}
        animateOnLoad
      >{headingText}</AnimatedText>
    </h1>
  )
  return (
    <div className={css.Wrap}>
      <div className={css.BG}>
        <AboutHeroOverlay className={css.Overlay} />
        <AboutHeroPic />
      </div>
      
      <div className={css.ContentWrap}>
        <AboutHeroContent
          heading={heading}
          className={cx(css.Content, typo.Clamped, typo.Pretty, layout['Main--to-l'])}
        >
          <div className={cx(typo.BodyM, typo.Prose, typo.Inverse)}>
            {bodyText}
          </div>
          <IconLinks links={socials} className={css.Socials} />
        </AboutHeroContent>
      </div>
    </div>
  )
}
