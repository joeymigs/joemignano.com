import { PropsWithChildren } from 'react'

import css from './SiteMain.module.css'

export default function SiteMain({ children }: PropsWithChildren) {
  return (
    <main className={css.Wrap}>{children}</main>
  )
}
