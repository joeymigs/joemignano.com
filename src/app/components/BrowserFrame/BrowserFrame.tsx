import type { CSSProperties, PropsWithChildren } from "react"
import type { Variants, ViewportOptions } from "@/types/animation"

import AnimatedImage, { defaultVariants, defaultViewportOptions } from "@/components/AnimatedImage"

import css from './BrowserFrame.module.css'
import grid from '@/css/grid/Grid.module.css'
import cx from 'classnames'

export type BrowserFrameProps = PropsWithChildren<{
  wrapClass?: string;
  frameClass?: string;
  shadow?: 100 | 200 | 300 | 400 | 500;
  animate?: boolean;
  variants?: Variants;
  viewportOptions?: ViewportOptions;
  animateOnLoad?: boolean;
}>

export default function BrowserFrame({
  children,
  wrapClass,
  frameClass,
  shadow = 500,
  animate = false,
  variants = defaultVariants,
  viewportOptions = defaultViewportOptions,
  animateOnLoad = false,
}: BrowserFrameProps) {
  const Wrap = animate ? AnimatedImage : "div"

  return (
    <Wrap
      className={cx(css.Wrap, grid.SiteGrid, wrapClass)}
      {...(animate && { variants, viewportOptions, animateOnLoad })}
    >
      <div
        className={cx(css.Frame, frameClass)}
        style={{"--shadow": `var(--elevation-${shadow})`} as CSSProperties}
      >
        <div className={cx(css.Bar)}>
          <div className={css.Buttons}>
            <div className={css.Button} />
            <div className={css.Button} />
            <div className={css.Button} />
          </div>
        </div>
        {children}
      </div>
    </Wrap>
  )
}
