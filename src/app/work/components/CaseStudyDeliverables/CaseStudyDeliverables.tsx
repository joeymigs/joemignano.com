import type { Skill } from '@/types'

import { SkillPill } from '@/components/SkillPills'

import css from './CaseStudyDeliverables.module.css'

type CaseStudyDeliverablesProps = {
  items: {
    skill: Skill | Skill[],
    desc: string
  }[]
}

export default function CaseStudyDeliverables({ items }: CaseStudyDeliverablesProps ) {
  return (
    <ul className={css.Deliverables}>
      {items.map(({ skill, desc }, i) => (
        <li key={i} className={css.Deliverable}>
          <span className={css.Desc}>{desc}</span>
          <span className={css.Skill}>
            { Array.isArray(skill)
              ? skill.map((s, index) => <SkillPill key={index} skill={s} />)
              : <SkillPill skill={skill} /> }
          </span>
        </li>
      ))}
    </ul>
  )
}
