"use client"

import { type CSSProperties, useEffect, useRef, useState } from 'react'

import Image, { type StaticImageData } from 'next/image'

import { motion } from 'motion/react'

import css from './BeforeAfter.module.css'
import grid from '@/css/grid/Grid.module.css'
import typo from '@/css/typography/Typography.module.css'
import cx from 'classnames'

type BeforeAfterProps = {
  heading: string
  beforeImage: StaticImageData
  afterImage: StaticImageData
  callouts?: {
    text: string
    top: `${string}%`
    side: 'right'|'left'
    length: string
  }[]
}

export default function BeforeAfter({
  heading,
  beforeImage,
  afterImage,
  callouts = [],
}: BeforeAfterProps) {
  const [image, setImage] = useState(afterImage)
  const [maxHeight, setMaxHeight] = useState<number | null>(null)
  const [showButton, setShowButton] = useState(false)

  const imageWrapRef = useRef<HTMLDivElement>(null)
  const beforeImgRef = useRef<HTMLImageElement>(null)
  const afterImgRef = useRef<HTMLImageElement>(null)

  const toggleImage = () => {
    setImage(image === beforeImage ? afterImage : beforeImage)
  }

  const updateMaxHeight = () => {
    if (!beforeImgRef.current || !afterImgRef.current) return

    const newMaxHeight = Math.max(
      beforeImgRef.current.clientHeight,
      afterImgRef.current.clientHeight
    )
    setMaxHeight(newMaxHeight)
  }

  useEffect(() => {
    if (!imageWrapRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setShowButton(entry.intersectionRatio > 0.33),
      { root: null, threshold: 0.33 }
    )

    observer.observe(imageWrapRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => updateMaxHeight()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={cx(css.Wrap, grid.Subgrid)}>
      <h3 className={cx(css.Heading, typo.HeadingM)}>{heading}</h3>

      <div ref={imageWrapRef} className={css.ImageWrap}>
        <div style={{ position: 'relative', height: maxHeight ? `${maxHeight}px` : 'auto' }}>
          <Image
            ref={beforeImgRef}
            className={cx(css.Image, {[css.active]: image === beforeImage})}
            src={beforeImage}
            alt="Before"
            onLoad={updateMaxHeight}
          />
          <Image
            ref={afterImgRef}
            className={cx(css.Image, {[css.active]: image === afterImage})}
            src={afterImage}
            alt="After"
            onLoad={updateMaxHeight}
          />

          { callouts?.length > 0 &&
            <div className={cx(css.Callouts, {[css.hide]: image === beforeImage})}>
              {callouts.map(({ text, top, side, length }, i) => (
                <motion.div
                  key={i}
                  className={cx(css.Callout, css[side])}
                  style={{ top, ['--length']: length } as CSSProperties }
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.67 }}
                  viewport={{ once: true }}
                >
                  <span>{text}</span>
                </motion.div>
              ))}
            </div> }
        </div>

        <button className={cx(css.ToggleButton, {[css.hide]: !showButton})} onClick={toggleImage}>
          <span>{image === beforeImage ? 'See After' : 'See Before'}</span>
        </button>
      </div>
    </div>
  )
}