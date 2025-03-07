import Icon from "@/components/Icon"
import InstagramSvg from "@/assets/icons/Instagram.svg"
import LinkedInSvg from "@/assets/icons/LinkedIn.svg"

import AboutHeroPic from "./AboutHeroPic"

import AnimateText from "@/components/AnimateText"

import css from "./AboutHero.module.css"
import layout from "@/css/layout/Layout.module.css"
import typo from "@/css/typography/Typography.module.css"
import cx from "classnames"
import AboutHeroContent from "./AboutHeroContent/AboutHeroContent"
import AboutHeroOverlay from "./AboutHeroOverlay/AboutHeroOverlay"

export default function AboutHero() {
  const heading = (
    <h1 className={cx(css.Title, typo.DisplayL)}>
      <AnimateText
        split="letters"
        wrapVariants={{animate: {transition: {staggerChildren: 0.067}}}}
        segmentVariants={{animate: {transition: {duration: 1.33}}}}
      >About me.</AnimateText>
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
          <div className={cx(typo.BodyL, typo.Prose, typo.Inverse)}>
            <p>In 2010, I moved from the U.S. to Japan to chase a handful of personal dreams.</p>
            <p>Over a decade later, I had carved out a life and career that combined my passions for travel, Japan, and web dev and design. From 2014–2022, I worked at <a href="https://www.japan-guide.com" target="_blank" rel="noopener" style={{ whiteSpace: 'nowrap' }}>japan-guide.com</a>, Japan’s top Google-ranked English travel planning website — serving over 2M users per month — as a full-stack developer, designer, and UX specialist.</p>
            <p>In 2023, I moved back to the U.S. to begin a new chapter in my story. I’m currently based in Denver, Colorado, working as a freelance web developer and designer.</p>
          </div>
          <div className={css.SocialIcons}>
            <a href="https://www.linkedin.com/in/joemignano/" target="_blank" rel="noopener noreferrer">
              <Icon svg={LinkedInSvg} />
            </a>
            <a href="https://www.instagram.com/joemignano/" target="_blank" rel="noopener noreferrer">
              <Icon svg={InstagramSvg} />
            </a>
          </div>
        </AboutHeroContent>
      </div>
    </div>
  )
}
