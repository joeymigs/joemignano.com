import NextJsSvg from '@/assets/icons/dev/nextjs.svg'
import VercelSvg from '@/assets/icons/dev/vercel.svg'
import ReactSvg from '@/assets/icons/dev/react.svg'
import MotionSvg from '@/assets/icons/dev/motion.svg'
import TypeScript from '@/assets/icons/dev/typescript.svg'

type Colophon = {
  name: string
  url: string
  iconSvg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const colophon: Colophon[] = [
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    iconSvg: NextJsSvg,
  },
  {
    name: 'Hosted on Vercel',
    url: 'https://vercel.com/home',
    iconSvg: VercelSvg,
  },
  {
    name: 'React',
    url: 'https://react.dev/',
    iconSvg: ReactSvg,
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    iconSvg: TypeScript,
  },
  {
    name: 'Motion',
    url: 'https://www.motion.dev/',
    iconSvg: MotionSvg,
  },
]