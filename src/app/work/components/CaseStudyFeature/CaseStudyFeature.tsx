import type { CaseStudyFeature, CaseStudyFeatureContentOnly } from "@/types"

import { SkillPill } from "@/components/SkillPills"

import CaseStudyFeatureImage from "./CaseStudyFeatureImage"

import css from './CaseStudyFeature.module.css'
import grid from '@/css/grid/Grid.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function CaseStudyFeature(props: CaseStudyFeature | CaseStudyFeatureContentOnly) {
  if( "content" in props )
    return <div className={css.Wrap}>{props.content}</div>

  const { skill, heading, text, textAlign = 'center', image, imagePosition } = props

  const wrapClasses = cx(
    css.Wrap,
    grid.SiteGrid,
    { [css[`imagePosition-${imagePosition}`]]: imagePosition }
  )
  const textClasses = cx(
    css.Text,
    grid['ml--Col-Span-6'],
    grid['xl--Col-2-5'],
    { [css[`align-${textAlign}`]]: textAlign }
  )

  return (
    <div className={wrapClasses}>
      <div className={cx(css.ImageWrap, grid['ml--Col-Span-6'])}>
        <CaseStudyFeatureImage {...image!} align={imagePosition} />
      </div>
      <div className={cx(css.TextWrap, grid['ml--Col-Span-6'], grid.Subgrid)}>
        <div className={textClasses}>
          {skill && <SkillPill skill={skill} />}
          <h3 className={cx(typo.HeadingM, typo.Pretty)}>{heading}</h3>
          <div className={cx(typo.BodyM, typo.Prose)}>{text}</div>
        </div>
      </div>
    </div>
  )
}