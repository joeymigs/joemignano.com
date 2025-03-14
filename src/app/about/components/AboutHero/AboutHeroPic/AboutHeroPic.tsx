import type { CSSProperties } from "react"

import { getImageProps } from "next/image"

import AnimatedImage from "@/components/AnimatedImage"

export default function AboutHeroPic() {
  const common = {
    alt: 'Joe in the Japanese South Alps',
    sizes: '100vw',
    priority: true,
  }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 2976,
    height: 1536,
    quality: 80,
    src: '/images/about/joe-about-desktop.jpg',
  })
  const {
    props: { srcSet: mobile, ...heroAttributes },
  } = getImageProps({
    ...common,
    width: 731,
    height: 1536,
    quality: 70,
    src: '/images/about/joe-about-mobile.jpg',
  })
  const styles = {
    objectFit: "cover",
    objectPosition: "right",
    position: "absolute",
    inset: "0",
    height: "100%",
    width: "100%",
  }

  return (
    <AnimatedImage
      variants={{
        initial: { y: 0 },
        animate: { y: 0, transition: { duration: 3 }},
      }}
      animateOnLoad
    >
      <picture>
        <source media="(min-width: 560px)" srcSet={desktop} style={styles as CSSProperties} />
        <source media="(max-width: 559px)" srcSet={mobile} style={styles as CSSProperties} />
        <img {...heroAttributes} alt={common.alt} style={styles as CSSProperties} />
      </picture>
    </AnimatedImage>
  )
}
