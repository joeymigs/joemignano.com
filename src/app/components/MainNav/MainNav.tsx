"use client"

import type { Variants } from "@/types/animation"

import { socials } from "@/data/socials"

import { useState, useRef, useEffect } from "react"

import { motion } from "motion/react"
import { useLenis } from "lenis/react"

import easings from "@/const/easings"

import { useOnClickOutside } from "@/hooks/useOnClickOutside"
import { useOnEscapeKey } from "@/hooks/useOnEscapeKey"

import Link from "next/link"
import Button from "@/components/Button"

import Icon from "@/components/Icon"
import Hamburger from "@/assets/icons/Hamburger.svg"
import X from "@/assets/icons/X.svg"

import css from './MainNav.module.css'
import typo from "@/css/typography/Typography.module.css"
import cx from 'classnames'
import IconLinks from "../IconLinks"

const wrapVariants: Variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.33,
      staggerChildren: 0.1,
      delayChildren: 0.33,
      ease: easings.bigFadeIn,
    }
  },
  closed: {
    opacity: 0,
    x: 160,
  }
}
const menuVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.33,
    }
  },
  closed: {}
}
const linkVariants: Variants = {
  closed: {
    y: 16, opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easings.bigFadeIn,
      duration: 1,
    },
  },
}

type MainNavProps = { className?: string }

export default function MainNav({ className = '' }: MainNavProps) {
  const menuRef = useRef(null)
  const [open, setOpen] = useState(false)
  const lenis = useLenis()

  function handleLinkClick() {
    setOpen(false)
  }

  useOnClickOutside(menuRef, () => setOpen(false))
  useOnEscapeKey(() => setOpen(false))

  useEffect(() => {
    if( !lenis ) return
    
    if( open )
      lenis.stop()
    else
      lenis.start()
  }, [open, lenis])

  return (
    <div className={cx(className, css.Wrap, {[css.Open]: open})} aria-label="Main Navigation">
      <button 
        className={css.Trigger}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="main-menu"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <Icon svg={Hamburger} className={css.Hamburger} />
        <Icon svg={X} className={css.X} />
      </button>
      
      <motion.nav
        className={css.MenuWrap}
        role="menu"
        ref={menuRef}
        variants={wrapVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <motion.ul
          className={css.Menu}
          variants={menuVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
        >
          <motion.li
            data-id="home"
            onClick={handleLinkClick}
            variants={linkVariants}
          >
            <Link className={cx(css.Link, typo.Hover)} href="/">
              <span className={typo.Link}>Home</span>
            </Link>
          </motion.li>
          <motion.li
            data-id="work"
            onClick={handleLinkClick}
            variants={linkVariants}
          >
            <Link className={cx(css.Link, typo.Hover)} href="/#work">
              <span className={typo.Link}>Work</span>
            </Link>
          </motion.li>
          <motion.li
            data-id="about"
            onClick={handleLinkClick}
            variants={linkVariants}
          >
            <Link className={cx(css.Link, typo.Hover)} href="/about">
              <span className={typo.Link}>About</span>
            </Link>
          </motion.li>
          <motion.li
            data-id="contact"
            onClick={handleLinkClick}
            variants={linkVariants}
          >
            <Link className={cx(css.Link, typo.Hover)} href="#contact">
              <span className={typo.Link}>Contact</span>
            </Link>
          </motion.li>

          <motion.li data-id="connect-button">
            <Button variant="catchy" className={css.Button} href="#contact" inline>
              Let’s Connect
            </Button>
          </motion.li>
        </motion.ul>

        <div data-id="mobile-footer" className={css.MobileFooter}>
          <motion.div
            className={css.Email}
            variants={menuVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
          >
            <motion.span variants={linkVariants}>Email Address:</motion.span>
            <motion.a
              href="mailto:joe@joemignano.com"
              className={typo.Underline}
              variants={linkVariants}
            >
              joe@joemignano.com
            </motion.a>
          </motion.div>
          
          <IconLinks
            links={socials}
            className={css.Socials}
            wrapVariants={menuVariants}
            linkVariants={linkVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
          />
        </div>

        <div className={cx(css.BgCircle, css.c1)} />
        <div className={cx(css.BgCircle, css.c2)} />
      </motion.nav>
    </div>
  )
}
