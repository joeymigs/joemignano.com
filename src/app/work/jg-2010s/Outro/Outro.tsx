import { SkillPill } from '@/components/SkillPills'

import Link from 'next/link'

import Learnings from '@/work/jg-2010s/Learnings'
import BeforeAfter from '@/work/jg-2010s/BeforeAfter'

import hpBeforeImg from '/public/images/work/jg-2010s/results-homepage-before.jpg'
import hpAfterImg from '/public/images/work/jg-2010s/results-homepage-after.jpg'
import destBeforeImg from '/public/images/work/jg-2010s/results-destination-before.jpg'
import destAfterImg from '/public/images/work/jg-2010s/results-destination-after.jpg'
import interestBeforeImg from '/public/images/work/jg-2010s/results-interest-before.jpg'
import interestAfterImg from '/public/images/work/jg-2010s/results-interest-after.jpg'

import css from './Outro.module.css'
import layout from '@/css/layout/Layout.module.css'
import grid from '@/css/grid/Grid.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function Outro() {
  return (
    <div className={cx(css.Wrap, layout.Main, grid.SiteGrid)}>
      <section className={cx(css.Section, grid['l--Col-2-11'], grid.Subgrid)}>
        <header className={cx(css.Header, grid['ml--Col-Span-6'], grid['l--Col-1-5'])}>
          <SkillPill skill={{ name: 'Final Design & Release', type: 'dnd' }} />
          <h2 className={css.Heading}>The results</h2>
          <div className={cx(typo.BodyM, typo.Prose)}>
            <p>In total, the project took about 6 months: roughly 3 months each for design and 
              development. There were many late nights, compromises, mistakes, and successes, but 
              on April 1, 2015, we made the deadline we set with our advertisers and published a 
              brand new version of japan-guide.com.</p>
          </div>
        </header>

        <BeforeAfter
          heading="Homepage"
          beforeImage={hpBeforeImg}
          afterImage={hpAfterImg}
          callouts={[
            { text: 'New site architecture', top: '1.6%', side: 'right', length: '0px' },
            { text: 'Multipurpose hero space', top: '9.5%', side: 'right', length: '0px' },
            { text: 'More engaging partner OTA booking box', top: '40%', side: 'right', length: '5.75cqw' },
            { text: 'New icons', top: '17.15%', side: 'left', length: '5.5cqw'},
            { text: 'More prominent photography', top: '28%', side: 'left', length: '6.15cqw' },
            { text: 'Popular content more discoverable', top: '56.8%', side: 'left', length: '6cqw' },
          ]}
        />
        <BeforeAfter
          heading="Destination page"
          beforeImage={destBeforeImg}
          afterImage={destAfterImg}
          callouts={[
            { text: 'New section nav', top: '8.75%', side: 'left', length: '5.75cqw' },
            { text: 'More legible typography', top: '36.5%', side: 'left', length: '7.15cqw' },
            { text: 'More idiomatic microcopy', top: '47.4%', side: 'left', length: '5.75cqw' },
            { text: 'Iconography to reinforce “Interest” categories', top: '58.25%', side: 'left', length: '7.2cqw'},
            { text: 'Clearer related content organization', top: '51%', side: 'right', length: '5.75cqw' },
          ]}
        />
        <BeforeAfter
          heading="“Interests” page"
          beforeImage={interestBeforeImg}
          afterImage={interestAfterImg}
          callouts={[
            { text: 'New site organization', top: '11.25%', side: 'left', length: '5.75cqw' },
            { text: 'New hero images for section top pages', top: '23%', side: 'left', length: '5.75cqw' },
            { text: 'New CTAs and social links', top: '45.3%', side: 'left', length: '7.75cqw' },
            { text: 'Highest traffic sections featured', top: '66%', side: 'left', length: '7.2cqw'},
            { text: 'Lots of images', top: '87.6%', side: 'left', length: '5.2cqw'},
            { text: 'More user engagement', top: '69.3%', side: 'right', length: '5.75cqw' },
          ]}
        />
      </section>

      <section className={cx(css.Section, grid['l--Col-2-11'], grid.Subgrid)}>
        <header className={cx(css.Header, grid['ml--Col-Span-6'], grid['l--Col-1-5'])}>
          <SkillPill skill={{ name: 'What we learned', type: 'dnd' }} />
          <h2 className={css.Heading}>Going forward</h2>
          <div className={cx(typo.BodyM, typo.Prose)}>
            <p>We were thrilled that user feedback after launch was <strong>over 80% 
               positive</strong>. Direct feedback via our site’s feedback form largely praised the 
               new look and feel, and many comments mentioned the site feeling “easier to use.”</p>
            <p>With this project complete, the work on “<Link href="/work/jg-2020s">Stage 2</Link>” 
               could begin: making the site fully mobile-friendly, continuing to modernize the 
               design and codebase, and adding new and improved features and content to keep JG 
               ahead of our competition.</p>
          </div>
        </header>

        <Learnings
          content={[
            {
              heading: 'What worked',
              items: [
                {
                  type: 'design',
                  text: <>
                    <strong>Increased traffic to target content areas.</strong> Varied by section, 
                    but in some cases we saw increases over 1,400%.</>,
                },
                {
                  type: 'design',
                  text: <>
                    <strong>Site traffic continued to rise.</strong> We saw no negative impact in 
                    traffic or bounce rates post-redesign.</>,
                },
                {
                  type: 'dev',
                  text: <>
                    <strong>Maintained full browser support</strong> for over 99% of users.
                  </>,
                }
              ],
            },
            {
              heading: 'What’s next',
              items: [
                {
                  type: 'dnd',
                  text: <>
                    Site was <strong>not yet mobile-friendly/responsive</strong>, our main goal 
                    for “Stage 2.”
                  </>
                },
                {
                  type: 'dnd',
                  text: <>
                    Many <strong>sections and components still needed to be upgraded.</strong>
                  </>
                },
                {
                  type: 'dnd',
                  text: <>
                    “Stage 1” development prioritized expediency and shipping an MVP. “Stage 2” 
                    was our chance to <strong>focus on optimization</strong>.
                  </>
                }
              ]
            }
          ]}
        />
      </section>
    </div>
  )
}
