"use client"

import type { PropsWithChildren, CSSProperties } from "react"
import type { Variants, ViewportOptions } from "@/types/animation"

import { motion } from "motion/react"

import merge from "lodash.merge"

import easings from "@/const/easings"

type AnimatedImageProps = PropsWithChildren<{
  className?: string;
  variants?: Variants;
  viewportOptions?: ViewportOptions;
  animateOnLoad?: boolean;
  style?: CSSProperties;
}>

export const defaultVariants: Variants = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: easings.bigFadeIn } },
}
export const defaultViewportOptions: ViewportOptions = { once: true };

export default function AnimatedImage({
  children,
  className,
  variants,
  viewportOptions,
  animateOnLoad = false,
  style,
}: AnimatedImageProps) {
  const mergedVariants = merge({}, defaultVariants, variants)
  const mergedViewportOptions = merge({}, defaultViewportOptions, viewportOptions)

  return (
    <motion.div
      className={className}
      style={style}
      variants={mergedVariants}
      initial="initial"
      {...animateOnLoad
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: mergedViewportOptions }
      }
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
