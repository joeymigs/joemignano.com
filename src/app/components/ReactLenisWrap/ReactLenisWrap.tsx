"use client"

import { useRef, useEffect, type PropsWithChildren, useState } from "react"
import { ReactLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion/react'

interface NavigatorUAData { platform?: string }
interface ExtendedNavigator extends Navigator { userAgentData?: NavigatorUAData }

export default function ReactLenisWrap({ children }: PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null)
  const [disableLenis, setDisableLenis] = useState(false)

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const platform = (navigator as ExtendedNavigator).userAgentData?.platform || navigator.platform || ""
    const isMac = platform.toUpperCase().includes("MAC")

    setDisableLenis(isSafari && isMac)
  }, [])


  useEffect(() => {
    if (disableLenis) return

    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
<<<<<<< HEAD
  }, [disableLenis])
=======
  }, [])
>>>>>>> origin/main

  if (disableLenis)
    return <>{children}</>

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      {children}
    </ReactLenis>
  )
}
