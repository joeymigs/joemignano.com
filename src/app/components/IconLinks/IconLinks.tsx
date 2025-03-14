import { motion, Variants, TargetAndTransition, VariantLabels } from 'motion/react'

import Icon from '@/components/Icon'

import css from './IconLinks.module.css'
import cx from 'classnames'

type IconLinksProps = {
  links: {
    name: string
    url: string
    iconSvg: React.FC<React.SVGProps<SVGSVGElement>>
  }[]
  className: string
  wrapVariants?: Variants
  linkVariants?: Variants
  initial?: TargetAndTransition | VariantLabels
  animate?: TargetAndTransition | VariantLabels
  isExternal?: boolean
}

export default function IconLinks({
  links,
  className,
  wrapVariants,
  linkVariants,
  initial,
  animate,
  isExternal = true,
}: IconLinksProps) {
  const Wrap = wrapVariants ? motion.div : 'div'
  const LinkWrap = linkVariants ? motion.a : 'a'

  return (
    <Wrap
      className={cx(css.Wrap, className)}
      variants={wrapVariants}
      initial={initial}
      animate={animate}
    >
      {links.map(({ name, url, iconSvg }) => (
        <LinkWrap
          key={name}
          title={name}
          href={url}
          {...isExternal && {
            target: "_blank",
            rel: "noopener noreferrer",
          }}
          variants={linkVariants}
        >
          <Icon svg={iconSvg} />
        </LinkWrap>
      ))}
    </Wrap>
  )
}
