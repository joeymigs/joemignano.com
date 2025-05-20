import LinkedInSvg from "@/assets/icons/LinkedIn.svg"
import GitHubSvg from "@/assets/icons/GitHub.svg"
import InstagramSvg from "@/assets/icons/Instagram.svg"

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
    name: 'GitHub',
    url: 'https://github.com/joeymigs',
    iconSvg: GitHubSvg,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/joeymigs/',
    iconSvg: InstagramSvg,
  },
]