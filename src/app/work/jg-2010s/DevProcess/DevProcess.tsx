import { devProcessSteps } from '@/work/jg-2010s/content'

import Icon from '@/components/Icon'

import css from './DevProcess.module.css'
import grid from '@/css/grid/Grid.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

export default function DevProcess() {
  return (
    <div className={cx(css.Wrap, grid.SiteGrid)}>
      <h3 className={typo.HeadingM}>The process</h3>
      <div className={css.Steps}>
        { devProcessSteps.map(({ heading, image, text, devIcons }, i) => (
          <div className={css.Step} key={i}>
            <h4 className={typo.HeadingS}>{heading}</h4>
            <div className={css.ImageWrap}>
              {image}
            </div>
            <p className={cx(typo.BodyM, typo.Prose)}>{text}</p>
            <div className={css.DevIcons}>
              { devIcons.map((icon, j) => <Icon key={j} svg={icon} />) }
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}
