import Icon from '@/components/Icon'
import Arrow from '@/assets/icons/Arrow.svg'

import css from './BackButton.module.css'
import SiteHeaderButton from '../SiteHeader/SiteHeaderButton'

type BackButtonProps = {
  url: string
}

export default function BackButton({ url }: BackButtonProps) {
  return (
    <SiteHeaderButton align="left" href={url} className={css.BackButton}>
      <Icon svg={Arrow} rotate="90deg" />
    </SiteHeaderButton>
  )
}
