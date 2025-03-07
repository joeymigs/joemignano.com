import type { CaseStudySummary } from '@/types'

import css from './CaseStudySummary.module.css'
import grid from '@/css/grid/Grid.module.css'
import layout from '@/css/layout/Layout.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function CaseStudySummary({ sections, side }: CaseStudySummary) {
  return (
    <section className={cx(css.Wrap)}>
      <div className={cx(css.Inner, grid.SiteGrid, layout.Main)}>
        <div className={cx(css.Body, grid['l--Col-1-7'], grid['xl--Col-2-7'])}>
          {sections.map(({ heading, content, isProse = true }, i) => (
            <div className={css.Section} key={i}>
              <h2 className={typo.HeadingM}>{heading}</h2>
              <div
                className={cx(typo.BodyM, {[typo.Prose]: isProse}, typo.Clamped)}
              >{content}</div>
            </div>
          ))}
        </div>
        {side && <div className={cx(css.Side, grid['l--Col-8-12'])}>{side}</div>}
      </div>
    </section>
  )
}