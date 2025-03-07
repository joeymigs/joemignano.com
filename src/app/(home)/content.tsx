import type { Skill } from "@/types"

import Image, { StaticImageData } from "next/image"

import BrowserFrame from "@/components/BrowserFrame"
import PhoneFrame from "@/components/PhoneFrame"

import bookfinder from '/public/images/work/bookfinder/hero-image.jpg'
import jg2020s_desktop from '/public/images/work/jg-2020s/hero-jg-2020s-desktop.jpg'
import jg2020s_mobile from '/public/images/work/jg-2020s/hero-jg-2020s-mobile.jpg'
import jg2010s from '/public/images/work/jg-2010s/hero-new.jpg'

import youtube from '/public/images/home/other-jg-work-youtube-3-2.jpg'
import kitadake from '/public/images/home/other-jg-work-kitadake-3-2.jpg'
import condeNast from '/public/images/home/other-jg-work-conde-nast-3-2.jpg'

import css from './Homepage.module.css'
import teasersCss from './components/CaseStudyTeasers/CaseStudyTeasers.module.css'

export type CaseStudyTeaser = {
  url: string;
  title: string;
  desc: string;
  skills: Skill[];
  bgToken?: string;
  image: React.ReactNode;
}
export type OtherWorkTeaser = {
  url: string;
  title: string;
  desc: string;
  cta: string;
  image: StaticImageData;
  imageAlt: string;
  slug: string;
}

export const caseStudyTeasers: CaseStudyTeaser[] = [
  {
    url: '/work/bookfinder',
    title: 'Bookfinder',
    desc: 'Web app that helps a bookseller track thousands of multilingual book listings across dozens of sites.',
    skills: [
      { type: 'design', name: 'UX/UI Design' },
      { type: 'dev', name: 'Full-Stack Dev' },
      { type: 'dev', name: 'React' },
      { type: 'dev', name: 'Firebase' },
      { type: 'dev', name: 'Node.js' },
    ],
    bgToken: '--case-study-bg-bookfinder',
    image: (
      <BrowserFrame shadow={400} wrapClass={teasersCss.ImageWrap}>
        <Image src={bookfinder} alt="Bookfinder, New Listings view" />
      </BrowserFrame>
    ),
  },
  {
    url: '/work/jg-2020s',
    title: 'japan-guide.com, Welcome to the 2020s',
    desc: 'After building a reputation as a leading travel website, JG needed a modern, responsive design and codebase to match.',
    skills: [
      { type: 'design', name: 'Product Design' },
      { type: 'dev', name: 'Full-Stack Dev' },
      { type: 'dev', name: 'PHP' },
      { type: 'dev', name: 'JavaScript' },
      { type: 'dev', name: 'CSS' },
    ],
    bgToken: '--case-study-bg-jg-2020s',
    image: (
      <>
        <BrowserFrame shadow={400} wrapClass={teasersCss.ImageWrap}>
          <Image src={jg2020s_desktop} alt="japan-guide.com, Mt. Fuji Destination page" />
        </BrowserFrame>
        <div className={css['CaseStudyTeaserImage--jg2020s-mobile']}>
          <PhoneFrame shimColor="#fff" isMobileMini>
            <Image src={jg2020s_mobile} alt="japan-guide.com, Shimokita Peninsula page" />
          </PhoneFrame>
        </div>
      </>
    ),
  },
  {
    url: '/work/jg-2010s',
    title: 'japan-guide.com, Welcome to the 2010s',
    desc: 'How I brought a major tourism website’s early-2000s design, info architecture, and codebase in the 21st century.',
    skills: [
      { type: 'design', name: 'UX Research' },
      { type: 'design', name: 'Info Architecture' },
      { type: 'design', name: 'Product Design' },
      { type: 'dev', name: 'Full-Stack Dev' },
      { type: 'dev', name: 'PHP' },
      { type: 'dev', name: 'JavaScript' },
      { type: 'dev', name: 'CSS' },
    ],
    bgToken: '--case-study-bg-jg-2010s',
    image: (
      <BrowserFrame
        wrapClass={teasersCss.ImageWrap}
        frameClass={css['CaseStudyTeaserImage--jg2010s-after']}
        shadow={400}
      >
        <Image src={jg2010s} alt="japan-guide.com, post-2015" />
      </BrowserFrame>
    ),
  },
]

export const otherWorkTeasers: OtherWorkTeaser[] = [
  {
    url: 'https://www.youtube.com/watch?v=4YUej6aF2gg',
    title: 'YouTube host',
    desc: 'I scripted and hosted 5 videos for japan-guide.com’s 300k-subscriber travel YouTube channel.',
    cta: 'Watch a video',
    image: youtube,
    imageAlt: 'Joe hosting a YouTube video',
    slug: 'youtube',
  },
  {
    url: 'https://www.japan-guide.com/blog/peaks/',
    title: 'Travel writing',
    desc: 'I explored some of Japan’s most unique mountains for my outdoor adventure blog series, “Among the Peaks.”',
    cta: 'Read an article',
    image: kitadake,
    imageAlt: "Mt. Kitadake, Japan’s second tallest mountain",
    slug: 'writing',
  },
  {
    url: 'https://www.cntraveler.com/stories/2016-06-07/japans-setouchi-triennale-art-fair-to-attend',
    title: 'Photography',
    desc: 'I took thousands of photos on over 100 field assignments for JG. One of my photos was featured on the Condé Nast Traveler website.',
    cta: 'See on Condé Nast',
    image: condeNast,
    imageAlt: 'Yayoi Kusama’s “Pumpkin” sculpture at the Setouchi Triennale art fair; photo featured on Condé Nast Traveler',
    slug: 'photography',
  },
]