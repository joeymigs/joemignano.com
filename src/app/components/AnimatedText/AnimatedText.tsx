"use client"

import type { CSSProperties, PropsWithChildren, ReactElement, ReactNode } from "react"
import type { Variants, AnimationDefinition } from "@/types/animation"

import { useRef, isValidElement, cloneElement, Children } from "react"

import { motion } from 'motion/react'
import merge from "lodash.merge"

import easings from "@/const/easings"

type AnimatedTextVariants = {
  wrap: Variants
  segment: Variants
}

const variantsDefaults: AnimatedTextVariants = {
  wrap: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  },
  segment: {
    initial: {
      y: 12,
      x: -3,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        ease: easings.textStagger,
        duration: 0.67,
      },
    },
  }
}

type AnimatedTextProps = PropsWithChildren<{
  split?: 'words' | 'letters'
  variants?: AnimatedTextVariants
  wrapVariants?: Partial<Variants>
  segmentVariants?: Partial<Variants>
  animateOnLoad?: boolean
  onAnimationComplete?: (definition: AnimationDefinition) => void
  className?: string
  style?: CSSProperties
}>

export default function AnimatedText({
  children,
  split = "words",
  wrapVariants,
  segmentVariants,
  animateOnLoad = false,
  onAnimationComplete,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef(null)

  const mergedWrapVariants = merge({}, variantsDefaults.wrap, wrapVariants)
  const mergedSegmentVariants = merge({}, variantsDefaults.segment, segmentVariants)

  function splitText(text: string) {
    const regex = split === "words" ? /(\s+)/ : ""
    return text.split(regex).map((part, i) => (
      <motion.span
        key={i}
        variants={mergedSegmentVariants}
        style={{ display: "inline-block" }}
      >
        {part === " " ? "\u00A0" : part}
      </motion.span>
    ))
  }

  function processNode(node: ReactNode): ReactNode {
    if( typeof node === "string" ) {
      return splitText(node)
    }
    if( isValidElement(node) ) {
      const element = node as ReactElement<{ children?: ReactNode }>
      return cloneElement(element, {
        children: element.props.children
          ? Children.map(element.props.children, processNode)
          : element.props.children,
      })
    }
    return node
  }

  const animatedChildren = Children.map(children, processNode)

  return (
    <motion.span
      ref={ref}
      initial="initial"
      {...animateOnLoad
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: { once: true } }
      }
      variants={mergedWrapVariants}
      className={className}
      style={style}
      onAnimationComplete={onAnimationComplete}
    >
      {animatedChildren}
    </motion.span>
  )
}
