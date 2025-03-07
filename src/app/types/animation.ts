import { motion, type Variants, type AnimationDefinition } from "motion/react"

type ViewportOptions = NonNullable<Parameters<typeof motion.div>["0"]["viewport"]>

export type {
  Variants,
  AnimationDefinition,
  ViewportOptions, 
}