import { caseStudyTeasers, otherWorkTeasers } from '@/(home)/content'

import HomeHero from "./components/HomeHero";
import CaseStudyTeasers from "./components/CaseStudyTeasers";
import OtherWorkTeasers from "./components/OtherWorkTeasers";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CaseStudyTeasers teasers={caseStudyTeasers} />
      <OtherWorkTeasers teasers={otherWorkTeasers} />
    </>
  )
}