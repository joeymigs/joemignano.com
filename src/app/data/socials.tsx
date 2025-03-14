import InstagramSvg from "@/assets/icons/Instagram.svg"
import LinkedInSvg from "@/assets/icons/LinkedIn.svg"

type Social = {
  name: string
  url: string
  iconSvg: React.FC<React.SVGProps<SVGSVGElement>>
}

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joemignano/',
    iconSvg: LinkedInSvg,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/joeymigs/',
    iconSvg: InstagramSvg,
  },
]