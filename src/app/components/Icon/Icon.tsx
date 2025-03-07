import { FC, SVGProps, CSSProperties } from "react"

import css from './Icon.module.css'
import cx from 'classnames'

export type IconProps = {
  svg: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  rotate?: '45deg' | '90deg' | '135deg' | '180deg' | '225deg' | '270deg';
  style?: CSSProperties;
}

export default function Icon({ svg: Svg, className, style, rotate }: IconProps) {
  return (
    <span className={cx(css.Icon, className)} style={{ rotate, ...style }}>
      <Svg />
    </span>
  )
}
