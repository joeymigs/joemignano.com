"use client"

import { PropsWithChildren } from "react"

import useIsVisible from "@/hooks/useIsVisible"

import css from './CaseStudyTeasers.module.css'
import cx from 'classnames'

type CaseStudyTeaserWrapProps = PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
}>

export default function CaseStudyTeaserWrap({
  className,
  style,
  children,
}: CaseStudyTeaserWrapProps) {
  const { isVisible, targetRef } = useIsVisible<HTMLDivElement>({
    options: { threshold: 0.925, rootMargin: '100% 0px 0px 0px' },
  })

  return (
    <div className={cx(className, { [css.fullyInView]: isVisible })} ref={targetRef} style={style}>
      {children}
    </div>
  )
}
