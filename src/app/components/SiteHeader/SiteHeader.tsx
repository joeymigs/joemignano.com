"use client"

import { motion } from 'motion/react'

import { useSiteHeaderData } from './useSiteHeaderData'

import BackButton from '@/components/BackButton'
import SiteLogo from '@/components/SiteLogo'
import MainNav from '@/components/MainNav'

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
      {backButtonUrl && <BackButton url={backButtonUrl} />}
      <SiteLogo />
      <MainNav />
    </motion.header>
  )
}
