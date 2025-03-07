import type { SkillType } from '@/types'

import { SkillPill } from '@/components/SkillPills'

import css from './Learnings.module.css'
import grid from '@/css/grid/Grid.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

type LearningsProps = {
  content: {
    heading: string;
    items: {
      type: SkillType;
      text: React.ReactNode;
    }[]
  }[]
}

export default function Learnings({ content }: LearningsProps) {
  return (
    <div className={cx(css.Wrap, grid.Subgrid)}>
      { content.map(({ heading, items }, i) => (
        <div key={i} className={cx(css.Set, grid['ml--Col-Span-6'], grid['l--Col-Span-5'])}>
          <h3 className={typo.HeadingM}>{heading}</h3>
          <ul className={cx(css.List, typo.BodyM)}>
            {items.map((item, j) => (
              <li key={j} className={cx(css.Item, css[item.type])}>
                <SkillPill skill={{type: item.type}} isCheck />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )) }
    </div>
  )
}
