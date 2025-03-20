"use client"

import type { CSSProperties, MediaHTMLAttributes } from "react"

import { useCallback, useEffect, useRef } from "react"

import useIsVisible from "@/hooks/useIsVisible"

import css from "./Video.module.css"

export type VideoProps = {
  src: string
  height?: number
  width?: number
  type?: string
  poster?: string
  alt?: string
  style?: CSSProperties
  preload?: MediaHTMLAttributes<HTMLVideoElement>["preload"]
  autoPlay?: MediaHTMLAttributes<HTMLVideoElement>["autoPlay"]
  lazyPlay?: boolean
  lazyOptions?: IntersectionObserverInit
}

export default function Video({
  src,
  height,
  width,
  type = "video/mp4",
  poster,
  style,
  alt,
  preload = "auto",
  autoPlay = false,
  lazyPlay = true,
  lazyOptions,
}: VideoProps) {
  const { isVisible, targetRef } = useIsVisible<HTMLDivElement>({
    options: { threshold: 0.33, ...lazyOptions }
  })

  const videoRef = useRef<HTMLVideoElement>(null)

  const startVideo = useCallback(async () => {
    try {
      await videoRef.current?.play()
    }
    catch(e) {
      console.error("Error playing video:", e)
    }
  }, [])

  const stopVideo = useCallback(() => {
    try {
      videoRef.current?.pause()
    }
    catch(e) {
      console.error("Error pausing video:", e)
    }
  }, [])

  useEffect(() => {
    if( autoPlay || !lazyPlay ) return

    if( isVisible ) { startVideo() }
    else { stopVideo() }
  }, [isVisible, startVideo, stopVideo, lazyPlay, autoPlay])

  return (
    <div ref={targetRef} className={css.Wrap}>
      <video
        height={height}
        width={width}
        ref={videoRef}
        loop
        muted
        autoPlay={autoPlay}
        preload={preload}
        playsInline
        poster={poster}
        aria-label={alt}
        style={style}
        className={css.Video}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag. Please try viewing in a modern browser.
      </video>
    </div>
  )
}
