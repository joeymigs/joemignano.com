import type { PropsWithChildren } from "react"
import type { Variants, ViewportOptions } from "@/types/animation"

import AnimatedImage, { defaultVariants, defaultViewportOptions } from "@/components/AnimatedImage"

import css from './PhoneFrame.module.css'
import cx from 'classnames'

type PhoneFrameProps = PropsWithChildren<{
  wrapClass?: string;
  frameClass?: string;
  shimColor?: string;
  isMobileMini?: boolean;
  hasTallShim?: boolean;
  shadow?: 100 | 200 | 300 | 400 | 500;
  animate?: boolean;
  variants?: Variants;
  viewportOptions?: ViewportOptions;
  animateOnLoad?: boolean;
}>;

export default function PhoneFrame({
  children,
  wrapClass,
  frameClass,
  shimColor,
  isMobileMini,
  hasTallShim,
  shadow = 500,
  animate = false,
  variants = defaultVariants,
  viewportOptions = defaultViewportOptions,
  animateOnLoad = false,
}: PhoneFrameProps) {
  const Wrap = animate ? AnimatedImage : "div"
  
  const frameStyles = {
    "--shim-bg-color": shimColor,
    "--shadow": `var(--elevation-${shadow})`
  } as React.CSSProperties
  
  return (
    <Wrap
      className={cx(css.Wrap, wrapClass)}
      {...animate && { variants, viewportOptions, animateOnLoad }}
    >
      <div
        className={cx(css.Frame, {[css.MiniMobile]: isMobileMini}, frameClass)}
        style={frameStyles}
      >
        <div className={cx(css.Screen)}>
          { shimColor && <div className={cx(css.Shim, {[css.TallShim]: hasTallShim})} /> }
          <div className={cx(css.Bar)} />
          {children}
        </div>
      </div>
    </Wrap>
  )
}
