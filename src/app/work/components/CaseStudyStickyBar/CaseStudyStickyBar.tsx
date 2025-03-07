import type { CaseStudySkillType } from "@/types"

import useIsStuck from "@/hooks/useIsStuck"

import SkillSwitcher from "@/components/SkillSwithcer"

import css from "./CaseStudyStickyBar.module.css"
import cx from "classnames"

type CaseStudyStickyBarProps = {
  mode: CaseStudySkillType
  onToggleMode: (mode: CaseStudySkillType) => void
}

export default function CaseStudyStickyBar({ mode, onToggleMode }: CaseStudyStickyBarProps) {
  const [stickyRef, isStuck] = useIsStuck<HTMLDivElement>()

  return (
    <div ref={stickyRef} className={cx(css.StickyBar, { [css.stuck]: isStuck })}>
      <SkillSwitcher skillType={mode} onToggle={onToggleMode} />
    </div>
  )
}
