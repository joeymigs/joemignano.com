import type { PropsWithChildren } from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/react"

import { Archivo } from 'next/font/google'

import "@/css/reset.css"
import "@/css/tokens/size.css"
import "@/css/tokens/space.css"
import "@/css/tokens/colors.css"
import "@/css/tokens/typography.css"
import "@/css/tokens/border-radius.css"
import "@/css/tokens/grid.css"
import "@/css/tokens/elevation.css"
import "@/css/utils.css"
import "@/css/global.css"
import "@/css/html.css"
import "@/css/body.css"

import ReactLenisWrap from "@/components/ReactLenisWrap"
import SiteHeader from "@/components/SiteHeader"
import SiteMain from "@/components/SiteMain"
import SiteFooter from "@/components/SiteFooter"

export const metadata: Metadata = {
  title: "Joe Mignano | Product Designer & Web Developer ",
  description: "Portfolio of Joe Mignano, a product designer and web developer based in Denver, CO.",
  icons: {
    icon: [
      {
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.svg',
      },
      {
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.svg',
      },
    ],
  },
}

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <ReactLenisWrap>
          <SiteHeader />
          <SiteMain>{children}</SiteMain>
          <SiteFooter />
        </ReactLenisWrap>
        <Analytics />
      </body>
    </html>
  )
}
