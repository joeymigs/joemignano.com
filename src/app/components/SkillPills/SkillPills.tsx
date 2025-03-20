import type { Skill } from "@/types"

import { Fragment } from "react"

import Icon from "@/components/Icon"
import Check from "@/assets/icons/CheckIcon.svg"

import AnimatedSkillPills from "./AnimatedSkillPills"

import css from "./SkillPills.module.css"
import cx from "classnames"

type SkillPillsProps = {
  skills: Skill[];
  delimiter?: string;
  className?: string;
  animate?: boolean;
}

type SkillPillProps = 
  | { skill: Skill; isCheck?: false; } 
  | { skill: Omit<Skill, "name">; isCheck: true; }

export default function SkillPills({
  skills = [],
  delimiter,
  className,
  animate = false,
}: SkillPillsProps) {
  if( animate )
    return <AnimatedSkillPills skills={skills} delimiter={delimiter} className={className} />
  
  return (
    <ul className={cx(css.Pills, className)}>
      {skills.map((skill, i) => (
        <Fragment key={`skill-${i}`}>
          <li>
            <SkillPill skill={skill} />
          </li>
          {delimiter && i < skills.length - 1 && (
            <li className={css.Delimiter} key={`delimiter-${i}`}>{delimiter}</li>
          )}
        </Fragment>
      ))}
    </ul>
  )
}

export function SkillPill({ skill, isCheck }: SkillPillProps) {
  const { type, name } = skill as Skill;

  return (
    <span className={cx(css.Pill, css[type], {[css.Check]: isCheck})}>
      { isCheck ? <Icon svg={Check} /> : <span>{name}</span> }
    </span>
  )
}
