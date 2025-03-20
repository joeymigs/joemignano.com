import { PropsWithChildren, FC, SVGProps } from "react"

import Link from "next/link"

import Icon, { IconProps } from "@/components/Icon"

import css from "./Button.module.css"
import cx from "classnames"

type ButtonVariant = 'regular' | 'catchy' | 'cta'

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  stretch?: boolean;
  inline?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: FC<SVGProps<SVGSVGElement>>;
  iconProps?: Omit<IconProps, 'svg'>;
}>

export default function Button({
  variant = 'regular',
  href,
  target,
  rel,
  stretch,
  inline,
  disabled,
  className,
  style,
  icon,
  iconProps,
  children,
}: ButtonProps) {
  const classes = cx(
    css.Button,
    css[variant],
    {
      [css.stretch]: stretch,
      [css.inline]: inline,
    },
    className
  )

  const { className: iconClassName, ...restIconProps } = iconProps || {}
  const content = <>
    {children}
    {icon && <Icon svg={icon} className={cx(css.Icon, iconClassName)} {...restIconProps} />}
  </>

  return (
    href
      ? <Link
          href={href} 
          target={target} 
          rel={rel} 
          className={classes} 
          style={style}
          data-disabled={disabled}
        >{content}</Link>
      : <button className={classes} style={style} disabled={disabled}>{content}</button>
  )
}
