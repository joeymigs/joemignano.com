"use client"

import { motion } from 'motion/react'

import { useSiteHeaderData } from './useSiteHeaderData'

import Link from 'next/link'
import MainNav from '@/components/MainNav'
import SiteLogo from '@/components/SiteLogo'
import Icon from '@/components/Icon'
import Arrow from '@/assets/icons/Arrow.svg'

import css from './SiteHeader.module.css'
import cx from 'classnames'

export default function SiteHeader() {
  const { headerMode, backButtonUrl, transitionDelay } = useSiteHeaderData()

  return (
    <motion.header
      className={cx(css.Wrap, css[headerMode])}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: transitionDelay, ease: 'easeOut' }}
    >
      { backButtonUrl && 
        <Link href={backButtonUrl} className={css.BackButton}>
          <Icon svg={Arrow} rotate="90deg" />
        </Link>
      }
      <SiteLogo className={css.SiteLogo} />
      <MainNav className={css.MainNav} />
    </motion.header>
  )
}
