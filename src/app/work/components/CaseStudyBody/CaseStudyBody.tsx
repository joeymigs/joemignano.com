"use client"

import type { CaseStudySkillType } from "@/types"

import { useState, useRef, type ReactNode } from "react"

import CaseStudyStickyBar from "@/work/components/CaseStudyStickyBar"

import css from "./CaseStudyBody.module.css"
import layout from "@/css/layout/Layout.module.css"
import cx from "classnames"

type CaseStudyBodyProps = {
  [SkillType in CaseStudySkillType]: ReactNode;
} & {
  scrollToTopOnToggle?: boolean;
}

export default function CaseStudyBody({ design, dev, scrollToTopOnToggle = false }: CaseStudyBodyProps) {
  const [mode, setMode] = useState<CaseStudySkillType>("design")
  const content = mode === "design" ? design : dev
  const bodyRef = useRef<HTMLElement>(null)

  const scrollToTop = () => {
    bodyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleToggleMode = (newMode: CaseStudySkillType) => {
    setMode(newMode)
    
    if( scrollToTopOnToggle ) scrollToTop()
  }

  return (
    <section className={cx(css.Wrap, css[mode])} ref={bodyRef}>
      <CaseStudyStickyBar mode={mode} onToggleMode={handleToggleMode} />

      <div className={cx(css.Features, layout.Main)}>
        {content}
      </div>
    </section>
  )
}