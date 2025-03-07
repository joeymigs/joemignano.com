import Icon from '@/components/Icon'

import css from './CaseStudyDevIcons.module.css'
import cx from 'classnames'

type CaseStudyDevIconsProps = {
  icons: React.FC<React.SVGProps<SVGSVGElement>>[]
  align?: 'left' | 'right'
}

export default function CaseStudyDevIcons({ icons = [], align = 'left' }: CaseStudyDevIconsProps) {
  return (
    <div className={cx(css.Wrap, css[align])}>
      {icons.map((icon, i) => <Icon key={i} svg={icon} />)}
    </div>
  )
}
