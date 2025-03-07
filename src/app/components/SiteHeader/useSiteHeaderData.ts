import type { PageData } from '@/types'

import { pages } from '@/data/pages'
import { usePathname } from 'next/navigation'

export function useSiteHeaderData(): PageData {
  const pathname = usePathname()

  return {
    headerMode: pages[pathname]?.headerMode || 'light',
    backButtonUrl: pages[pathname]?.backButtonUrl,
    transitionDelay: pages[pathname]?.transitionDelay ?? 0,
  }
}