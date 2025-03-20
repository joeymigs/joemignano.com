import type { PropsWithChildren } from 'react'

import Link from 'next/link'

import css from './SiteHeaderButton.module.css'
import cx from 'classnames'

type SiteHeaderButtonProps = PropsWithChildren<{
  align: 'left' | 'right'
  id?: string
  href?: string
  onClick?: () => void
  className?: string
  aria?: Record<`aria-${string}`, string>
}>

export default function SiteHeaderButton({
  children,
  align,
  id,
  href,
  onClick,
  className,
  aria,
}: SiteHeaderButtonProps) {
  const classes = cx(css.Button, css[align], className)

  return href
    ? <Link href={href} className={classes} id={id} {...aria}>{children}</Link>
    : <button className={classes} onClick={onClick} id={id} {...aria}>{children}</button>
}
