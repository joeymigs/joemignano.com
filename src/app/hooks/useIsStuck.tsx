import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 * Hook providing a React HTML element reference and a boolean React state that describes whether
 * the element is currently "stuck" via `position: sticky`.
 * 
 *  * IMPORTANT: The element's CSS `position` property must be set with the value `sticky` and an
 *    inset (`top`|`right`|`bottom`|`left`) property set to at least 1px LESS than the observer's
 *    `rootMargin` property in the direction of the rootMargin edge to which the element sticks.
 *    By default, the observer's `rootMargin` is set to `-1px 0px 0px 0px`, which means the element
 *    must have `top: 0` to be considered "stuck".
 * 
 * @example
 *   useIsStuck() //<-- JS
 *   position: sticky; top: 0; //<-- CSS
 * @example
 *   useIsStuck({ rootMargin: '-10px 0px 0px 0px' }) //<-- JS
 *   position: sticky; top: 11px; //<-- CSS
 * 
 */
export default function useIsStuck<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {},
  onStuckChange?: (isStuck: boolean) => void
): [RefObject<T | null>, boolean] {
  const stickyElementRef = useRef<T>(null)
  const [isStuck, setIsStuck] = useState<boolean>(false)

  useEffect(() => {
    const container = stickyElementRef.current
    if( !container ) return

    const observer = new IntersectionObserver(
      ([e]) => setIsStuck(e.boundingClientRect.top <= 0 && e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: '-1px 0px 0px 0px',
        ...options,
      }
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [stickyElementRef, options])

  useEffect(() => {
    if( typeof onStuckChange === 'function' ) onStuckChange(isStuck)
  }, [isStuck, onStuckChange])

  return [stickyElementRef, isStuck]
}
