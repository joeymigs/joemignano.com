import type { CaseStudyHero } from "@/types"

import SkillPills from "@/components/SkillPills"
import AnimatedText from "@/components/AnimatedText"

import css from './CaseStudyHero.module.css'
import grid from '@/css/grid/Grid.module.css'
import layout from '@/css/layout/Layout.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function CaseStudyHero({ title, desc, skills, image }: CaseStudyHero) {
  return (
    <section className={css.Wrap}>
      <div className={cx(grid.SiteGrid, layout.Main, css.InnerWrap)}>
        <header className={cx(css.Header, grid['xl--Col-3-10'])}>
          <SkillPills skills={skills} className={css.SkillPills} delimiter="+" animate />
          <h1 className={cx(typo.HeadingL, typo.Balance, css.Title)}>
            <AnimatedText animateOnLoad>{title}</AnimatedText>
          </h1>
          <p className={cx(typo.BodyL, typo.Balance, css.Desc)}>
            <AnimatedText
              animateOnLoad
              wrapVariants={{ animate: { transition: { delayChildren: 0.1 }}}}
            >
              {desc}
            </AnimatedText>
          </p>
        </header>
        <div className={css.ImageWrap}>
          {image}
        </div>
      </div>
    </section>
  )
}
