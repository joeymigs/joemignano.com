import { useEffect, type RefObject } from 'react'

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null> | RefObject<T | null>[],
  handler: (event: MouseEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as Node

      if (!target || !target.isConnected) return

      const isOutside = Array.isArray(ref)
        ? ref
            .filter(r => Boolean(r.current))
            .every(r => r.current && !r.current.contains(target))
        : ref.current && !ref.current.contains(target)

      if (isOutside) handler(event)
    }

    document.addEventListener('click', listener)
    
    return () => {
      document.removeEventListener('click', listener);
    }
  }, [ref, handler]);
}
