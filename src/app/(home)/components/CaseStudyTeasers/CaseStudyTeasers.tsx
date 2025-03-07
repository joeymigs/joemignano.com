import { CaseStudyTeaser } from '@/(home)/content'

import Link from 'next/link'

import AnimateText from '@/components/AnimateText'
import SkillPills from '@/components/SkillPills'
import Icon from '@/components/Icon'
import Arrow from '@/assets/icons/Arrow.svg'

import CaseStudyTeaserWrap from './CaseStudyTeaserWrap'

import css from './CaseStudyTeasers.module.css'
import layout from '@/css/layout/Layout.module.css'
import grid from '@/css/grid/Grid.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

type CaseStudyTeasersProps = {
  teasers: CaseStudyTeaser[];
}

export default function CaseStudyTeasers({ teasers = [] }: CaseStudyTeasersProps) {
  return (
    <section id="work" className={css.Wrap}>
      <div className={css.HeaderWrap} style={{backgroundColor: `var(${teasers[0]?.bgToken})`}}>
        <header className={cx(css.Header, grid.SiteGrid, layout.Main)}>
          <h2 className={cx(typo.HeadingL, grid['ml--Col-2'], grid['xxl--Col-1-6'])}>
            <AnimateText
              style={{ display: 'block', overflow: 'hidden' }}
              split="letters"
              segmentVariants={{ initial: { y: 20 } }}
            >Selected Work</AnimateText>
          </h2>
        </header>
      </div>
      <div className={css.Teasers}>
        {teasers.map(({ title, desc, skills, url, bgToken, image }, i) => (
          <CaseStudyTeaserWrap
            className={css.TeaserWrap}
            style={{ backgroundColor: `var(${bgToken})` }}
            key={i}
          >
            <div className={cx(css.Teaser, grid.SiteGrid, layout.Main)}>
              <div className={cx(
                css.Text,
                grid['ml--Col-2-5'],
                grid['xl--Col-2-4'],
                grid['xxl--Col-1-4'],
              )}>
                <div className={typo.Hover}>
                  <Link href={url}>
                    <h3 className={cx(css.Title, typo.DisplayM, typo.Balance)}>
                      <span className={typo.Link}>{title}</span>
                    </h3>
                    <p className={cx(typo.BodyM, css.Desc)}>{desc}</p>
                    <SkillPills skills={skills} className={css.SkillPills} />
                  </Link>
                </div>
                <Link href={url} className={cx(css.Cta, typo.Hover)}>
                  <span>
                    <span className={typo.Link}>See case study</span>
                  </span>
                  <Icon className={css.CtaArrow} svg={Arrow} rotate="270deg" />
                </Link>
              </div>
              <Link href={url} className={cx(css.Image, grid['ml--Col-7-12'], grid['xl--Col-6-12'])}>
                {image}
              </Link>
            </div>
          </CaseStudyTeaserWrap>
        ))}
      </div>
    </section>
  )
}
