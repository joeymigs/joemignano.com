import { hero, summary, features } from "./content"

import Jg2020sIntro from "./Jg2020sIntro"

import CaseStudyHero from "@/work/components/CaseStudyHero"
import CaseStudySummary from "@/work/components/CaseStudySummary"
import CaseStudyBody from "@/work/components/CaseStudyBody"
import CaseStudyFeatureSet from "@/work/components/CaseStudyFeatureSet"

import css from './CaseStudy.module.css'

export default function CaseStudy() {
  return (
    <div className={css.Wrap}>
      <CaseStudyHero title={hero.title} desc={hero.desc} skills={hero.skills} image={hero.image} />
      <CaseStudySummary sections={summary.sections} side={summary.side} />
      <Jg2020sIntro />
      <CaseStudyBody
        design={<CaseStudyFeatureSet featureSet={features.design} />}
        dev={<CaseStudyFeatureSet featureSet={features.dev} />}
      />
    </div>
  )
}
