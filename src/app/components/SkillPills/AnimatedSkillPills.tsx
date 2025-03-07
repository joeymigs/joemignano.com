"use client"

import type { Skill } from "@/types"

import { Fragment } from "react"
import { motion } from "motion/react"

import { SkillPill } from "./SkillPills"

import css from "./SkillPills.module.css"
import cx from "classnames"

type AnimatedSkillPillsProps = {
  skills: Skill[];
  delimiter?: string;
  className?: string;
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function AnimatedSkillPills({ skills, delimiter, className }: AnimatedSkillPillsProps) {
  return (
    <motion.ul
      className={cx(css.Pills, className)}
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      {skills.map((skill, i) => (
        <Fragment key={`group-${i}`}>
          <motion.li variants={itemVariants}>
            <SkillPill skill={skill} />
          </motion.li>
          {delimiter && i < skills.length - 1 && (
            <motion.li className={css.Delimiter} variants={itemVariants}>
              {delimiter}
            </motion.li>
          )}
        </Fragment>
      ))}
    </motion.ul>
  )
}