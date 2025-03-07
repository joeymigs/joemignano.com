import { useEffect, useRef, useState } from "react"

type UseIsVisibleOptions = {
  options?: IntersectionObserverInit,
  once?: boolean,
}

export default function useIsVisible<T extends HTMLElement = HTMLElement>({
  options = {},
  once = false,
}: UseIsVisibleOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef<T>(null)

  useEffect(() => {
    const currentTarget = targetRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting)

        if (once && entry.isIntersecting) {
          observer.unobserve(entry.target)
          observer.disconnect()
        }
      })
    }, options)

    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget)
        observer.unobserve(currentTarget)
      
      observer.disconnect()
    }
  }, [once, options])

  return { isVisible, targetRef }
}