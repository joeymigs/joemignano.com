import type { PageSettings } from '@/types'

export const pages: PageSettings = {
  '/': {
    headerMode: 'dark',
    transitionDelay: 2,
  },
  '/about': {
    headerMode: 'dark',
  },
  '/work/bookfinder': {
    headerMode: 'light',
    backButtonUrl: '/',
    transitionDelay: 1,
  },
  '/work/jg-2010s': {
    headerMode: 'light',
    backButtonUrl: '/',
    transitionDelay: 1,
  },
  '/work/jg-2020s': {
    headerMode: 'light',
    backButtonUrl: '/',
    transitionDelay: 0.67,
  },
}