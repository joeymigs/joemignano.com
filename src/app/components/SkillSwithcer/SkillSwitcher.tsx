import type { CaseStudySkillType } from "@/types"

import Icon from "@/components/Icon"
import DesignSvg from "@/assets/icons/Design.svg"
import DevSvg from "@/assets/icons/Dev.svg"

import css from './SkillSwitcher.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

type SkillSwitcherProps = {
  skillType: CaseStudySkillType;
  onToggle: (newState: CaseStudySkillType) => void;
}

export default function SkillSwitcher({ skillType, onToggle }: SkillSwitcherProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={skillType === "dev"}
      aria-label="Toggle between design and development work"
      className={cx(css.Switcher, css[skillType])}
      onClick={() => onToggle(skillType === "design" ? "dev" : "design")}
      data-skill={skillType}
    >
      <span className={cx(css.Label, typo.BodyM, css.Left)} data-skill='design'>Design</span>
      <span className={css.Track}>
        <span className={css.Thumb}>
          <Icon svg={skillType==='design' ? DesignSvg : DevSvg} className={css.ThumbIcon} />
        </span>
      </span>
      <span className={cx(css.Label, typo.BodyM, css.Right)} data-skill='dev'>Dev</span>
    </button>
  )
}

