import type { CaseStudyFeatureSet } from "@/types"

import CaseStudyFeature from "@/work/components/CaseStudyFeature"

type CaseStudyFeatureSetProps = {
  featureSet: CaseStudyFeatureSet;
}

export default function CaseStudyFeatureSet({ featureSet }: CaseStudyFeatureSetProps) {
  return featureSet.map((feature, i) => <CaseStudyFeature {...feature} key={i} />)
}