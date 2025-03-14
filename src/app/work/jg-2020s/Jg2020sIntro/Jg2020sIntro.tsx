import Jg2020sIntroHero from "../Jg2020sIntroHero"

import css from "./Jg2020sIntro.module.css"
import typo from "@/css/typography/Typography.module.css"
import layout from "@/css/layout/Layout.module.css"
import cx from 'classnames'

export default function Jg2020sIntro() {
  return (
    <section>
      <div className={cx(css.IntroHero, layout['Main--from-xs'])}>
        <Jg2020sIntroHero />
      </div>
      <div className={cx(css.IntroText, layout['Main--to-l'])}>
        <h3 className={cx(typo.HeadingM, typo.Pretty)}>Adapting Japan Guide for a new generation of travelers</h3>
        <div className={cx(typo.BodyM, typo.Prose)}>
          <p>When I joined <a href="https://www.japan-guide.com" target="_blank" rel="noopener">japan-guide.com</a> in 
             2014, the site held top-ranked Google search results for a huge range of Japan travel 
             keywords (Tokyo, Kyoto, Mt. Fuji, bullet train...), attracting 2M+ unique monthly 
             users on average.</p>
          <p>But that level of success doesn’t sustain itself. Approaching the 2020s, we had made 
             major strides in UX and development, but we still had work to do. JG still needed 
             a <strong>mobile-friendly, modern design</strong>, more <strong>intuitive 
             navigation</strong>, and <strong>faster page speeds</strong> for travelers from around 
             the world.</p>
          <p>My main role at JG was to make those things happen.</p>
        </div>
      </div>
    </section>
  )
}
