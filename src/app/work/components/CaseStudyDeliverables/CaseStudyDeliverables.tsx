import type { Skill } from '@/types'

import { SkillPill } from '@/components/SkillPills'

import css from './CaseStudyDeliverables.module.css'
import cx from 'classnames'

const multipleSkills = (skill: Skill | Skill[]) => Array.isArray(skill)

type CaseStudyDeliverablesProps = {
  items: {
    skill: Skill | Skill[],
    desc: React.ReactNode
  }[]
}

export default function CaseStudyDeliverables({ items }: CaseStudyDeliverablesProps ) {
  return (
    <ul className={css.Deliverables}>
      {items.map(({ skill, desc }, i) => (
        <li
          key={i}
          className={cx(css.Deliverable, multipleSkills(skill) ? css.dnd : css[skill.type])}
        >
          <SkillPill skill={multipleSkills(skill) ? {type: 'dnd'} : skill} isCheck />
          <span className={css.Desc}>{desc}</span>
          <span className={css.Skill}>
            { multipleSkills(skill)
              ? skill.map((s, index) => <SkillPill key={index} skill={s} />)
              : <SkillPill skill={skill} /> }
          </span>
        </li>
      ))}
    </ul>
  )
}
