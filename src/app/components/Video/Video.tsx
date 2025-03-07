"use client"

import { CSSProperties, useCallback, useEffect, useRef } from "react"

import useIsVisible from "@/hooks/useIsVisible"

import css from "./Video.module.css"

type VideoProps = {
  src: string
  type?: string
  poster?: string
  alt?: string
  style?: CSSProperties
  lazyOptions?: IntersectionObserverInit
}

export default function Video({
  src,
  type = "video/mp4",
  poster,
  style,
  alt,
  lazyOptions,
}: VideoProps) {
  const { isVisible, targetRef } = useIsVisible<HTMLDivElement>({
    options: {
      rootMargin: "200px",
      threshold: 0.1,
      ...lazyOptions,
    }
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
    if( isVisible )
      startVideo()
    else
      stopVideo()
  }, [isVisible, startVideo, stopVideo])

  return (
    <div ref={targetRef} className={css.Wrap}>
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        preload="none"
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
