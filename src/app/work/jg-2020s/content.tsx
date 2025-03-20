import type {
  CaseStudyHero,
  CaseStudySummary,
  CaseStudyFeaturesBySkill,
  CaseStudyFeatureSlide,
} from "@/types"

import Link from "next/link"

import HeroImage from "./HeroImage"

import CaseStudyDeliverables from "@/work/components/CaseStudyDeliverables"
import CaseStudySummaryCta from "@/work/components/CaseStudySummaryCta"
import CaseStudyDevIcons from "@/work/components/CaseStudyDevIcons"

import MobileBg1 from "/public/images/work/jg-2020s/mobile-bg-shikoku.jpg"
import MobileBg2 from "/public/images/work/jg-2020s/mobile-bg-festivals.jpg"
import MobileBg3 from "/public/images/work/jg-2020s/mobile-bg-home-regions.jpg"
import MobileBg4 from "/public/images/work/jg-2020s/mobile-bg-bus-tables.jpg"
import MobileBg5 from "/public/images/work/jg-2020s/mobile-bg-booking.jpg"

import ShikokuImg from '/public/images/work/jg-2020s/Shikoku-mobile.jpg'
import FestivalsImg from "/public/images/work/jg-2020s/Festivals-mobile.jpg"
import HomeRegionsImg from "/public/images/work/jg-2020s/Home-Regions-mobile.jpg"
import BusTablesImg from "/public/images/work/jg-2020s/Bus-Tables-mobile.jpg"
import BookingImg from "/public/images/work/jg-2020s/Booking-mobile.jpg"

import NavMenuBg1 from '/public/images/work/jg-2020s/nav-menu-bg-1.jpg'
import NavMenuBg2 from '/public/images/work/jg-2020s/nav-menu-bg-2.jpg'

import JgDocsImg1 from '/public/images/work/jg-2020s/JgDocs-1.jpg'
import JgDocsImg2 from '/public/images/work/jg-2020s/JgDocs-2.jpg'
import JgDocsImg3 from '/public/images/work/jg-2020s/JgDocs-3.jpg'

import DevIconPhp from '@/assets/icons/dev/php.svg'
import DevIconCss from '@/assets/icons/dev/css.svg'
import DevIconSass from '@/assets/icons/dev/sass.svg'
import DevIconJs from '@/assets/icons/dev/js.svg'

import Button from "@/components/Button"
import Icon from "@/components/Icon"
import Arrow from "@/assets/icons/Arrow.svg"

import typo from '@/css/typography/Typography.module.css'
import cx from "classnames"

const goingMobileSlides: CaseStudyFeatureSlide[] = [
  {
    bgImage: MobileBg1,
    content: {
      type: 'phone',
      imageData: ShikokuImg,
      alt: "Shikoku regional page, mobile version",
    },
    preloadBgImage: MobileBg1,
    preloadMainAsset: ShikokuImg,
  },
  {
    bgImage: MobileBg2,
    content: {
      type: 'phone',
      imageData: FestivalsImg,
      alt: "Festivals page, mobile version",
      frameProps: { shimColor: "#ffffff" },
    },
    preloadBgImage: MobileBg2,
    preloadMainAsset: FestivalsImg,
  },
  {
    bgImage: MobileBg3,
    content: {
      type: 'phone',
      imageData: HomeRegionsImg,
      alt: "Regions of Japan, Homepage, mobile version",
    },
    preloadBgImage: MobileBg3,
    preloadMainAsset: HomeRegionsImg,
  },
  {
    bgImage: MobileBg4,
    content: {
      type: 'phone',
      imageData: BusTablesImg,
      alt: "Bus timetables, mobile version",
      frameProps: { shimColor: "#ffffff" },
    },
    preloadBgImage: MobileBg4,
    preloadMainAsset: BusTablesImg,
  },
  {
    bgImage: MobileBg5,
    content: {
      type: 'phone',
      imageData: BookingImg,
      alt: "Booking.com listings integration, mobile version",
      frameProps: { shimColor: "#ffffff" },
    },
    preloadBgImage: MobileBg5,
    preloadMainAsset: BookingImg,
  },
]

const navMenuSlides: CaseStudyFeatureSlide[] = [
  {
    bgImage: NavMenuBg1,
    content: {
      type: 'phone',
      videoSrc: "/images/work/jg-2020s/explore-menu.mp4",
      videoProps: {
        poster: "/images/work/jg-2020s/explore-menu-poster.jpg",
        width: 800,
        height: 1600,
      },
      alt: "Explore Menu in action",
    },
    preloadBgImage: NavMenuBg1,
    preloadMainAsset: "/images/work/jg-2020s/explore-menu.mp4",
    caption: <><strong>Early Solution:</strong> “Explore Menu,” circa 2019–2022</>,
  },
  {
    bgImage: NavMenuBg2,
    content: {
      type: 'phone',
      videoSrc: "/images/work/jg-2020s/new-section-nav.mp4",
      videoProps: {
        poster: "/images/work/jg-2020s/ExploreMenu-mobile.jpg",
        width: 800,
        height: 1600,
      },
      alt: "New section nav menus in action",
      frameProps: { shimColor: "var(--surface-bg-primary)" },
    },
    preloadBgImage: NavMenuBg2,
    preloadMainAsset: "/images/work/jg-2020s/new-section-nav.mp4",
    caption: <><strong>Latest Solution:</strong> New section & site navigation, 2023–Present</>,
  }
]

const jgDocsSlides: CaseStudyFeatureSlide[] = [
  {
    content: {
      type: 'browser',
      imageData: JgDocsImg1,
      alt: "japan-guide.com's JG Docs 'Images' page",
    },
    preloadMainAsset: JgDocsImg1,
  },
  {
    content: {
      type: 'browser',
      imageData: JgDocsImg2,
      alt: "japan-guide.com's JG Docs 'Icons' page",
    },
    preloadMainAsset: JgDocsImg2,
  },
  {
    content: {
      type: 'browser',
      imageData: JgDocsImg3,
      alt: "japan-guide.com's JG Docs 'Colors' page",
    },
    preloadMainAsset: JgDocsImg3,
  },
]

export const hero: CaseStudyHero = {
  title: <>japan-guide.com, Welcome to the <span className={typo.Underline}>2020s</span></>,
  desc: "A multi-year effort to keep Japan Guide engaging, fast, and exceptionally helpful.",
  skills: [
    { type: 'design', name: 'Product Design' },
    { type: 'dev', name: 'Full-Stack Dev' },
  ],
  image: <HeroImage />,
}

export const summary: CaseStudySummary = {
  sections: [
    {
      heading: 'Background',
      content: <>
        <p>After a major design and codebase overhaul (see my <Link href="/work/jg-2010s">2015 
           case study</Link>), the groundwork had been laid to start realizing bigger goals for 
           japan-guide.com. We’d made major strides in UX and development, but there was still work 
           to do. JG still needed a <strong>mobile-friendly, modern design</strong>, more <strong>intuitive 
           navigation</strong>, and <strong>faster page speeds</strong> for travelers from around 
           the world.</p>
        <p>My main role at JG was to make those things happen.</p>
        <p>This case study highlights some of my key efforts over my last 5 years at Japan Guide as  
           our team’s sole product designer and developer to make the site’s user experience 
           delightful, fast, and competitive with big name competitors.</p>
      </>,
    },
    {
      heading: 'Timeline',
      content: <p>2017 – 2022</p>,
    },
    {
      heading: 'Key Deliverables',
      content: <CaseStudyDeliverables items={[
        {
          skill: [{ type: 'design', name: 'Design' }, { type: 'dev', name: 'Dev' }],
          desc: <strong>Fully responsive, mobile-friendly UX</strong>,
        },
        {
          skill: [{ type: 'design', name: 'Design' }, { type: 'dev', name: 'Dev' }],
          desc: <strong>Optimized site & sectional navigation</strong>,
        },
        {
          skill: [{ type: 'design', name: 'Design' }, { type: 'dev', name: 'Dev' }],
          desc: <strong>Comprehensive design system & docs</strong>,
        },
      ]} />,
      isProse: false,
    }
  ],
  side: (
    <CaseStudySummaryCta>
      <Button href="https://www.japan-guide.com" target="_blank" rel="noopener" variant="cta" stretch>
        Visit japan-guide.com <Icon svg={Arrow} rotate="225deg" />
      </Button>
      <div style={{display: 'flex', alignItems: 'center', gap: 'var(--space-75)'}}>
        <span className={cx(typo.BodyS, typo.Prose)} style={{fontWeight: 'var(--font-weight-medium)'}}>
          🔴&nbsp; See the live site!
        </span>
      </div>
    </CaseStudySummaryCta>
  ),
}

export const features: CaseStudyFeaturesBySkill = {
  design: [
    {
      skill: {type: 'design', name: 'Product Design'},
      heading: "Going mobile",
      text: <>
        <p>Creating responsive designs for over 2,000 pages of desktop-optimized content was no 
           small task. But with over 50% of JG’s users accessing the site on mobile devices when we 
           launched our first fully responsive version in 2017, the effort was worth it.</p>
        <p>I adapted hundreds of components and layout designs to fit any and all screen sizes. I 
           also made sure my changes had <strong><u>zero</u> impact on SEO</strong>, accessibility,
           or ad spaces.</p>
      </>,
      image: {
        bgColor: '#DCEBFB',
        verticalOnMobile: true,
        slides: goingMobileSlides,
      }
    },
    {
      skill: {type: 'design', name: 'Product Design'},
      heading: "Getting navigation right",
      text: <>
        <p>Japan Guide’s content is highly structured, but most sessions begin with visitors 
           landing deep within the site from Google search results. Helping users <strong>orient 
           and navigate quickly</strong> — on any device — was vital.</p>
        <p>We tried out multiple navigation experiences over the years. One notable attempt was 
           the “Explore” menu (2019–2022). This app-within-an-app concept was highly
           interactive and made exploring the site extremely fast. Ultimately, though, analytics 
           showed that always-visible, top-of-the-page sectional nav menus were more effective at 
           boosting discoverability.</p>
      </>,
      image: {
        bgColor: "#e5f1ff",
        verticalOnMobile: true,
        slides: navMenuSlides,
      },
    },
    {
      skill: {type: 'design', name: 'Product Design'},
      heading: "Wrangling styles into a design system",
      text: <>
        <p>JG was maturing, accumulating components, new designs, and complexity. But without a 
           design system in place, <em>consistently</em> applying colors, typography, spacing, and 
           all the design decisions that make a solid UX, was becoming a sisyphean task.</p>
        <p>So, I created a <strong>design system</strong> for JG — a framework for standardizing, 
           naming, and applying styles in both designs and code. I also created “JG Docs,” 
           a <strong>living documentation resource</strong> directly linked to our codebase, to 
           provide a single source of truth for our writers, videographers, and myself.</p>
      </>,
      image: {
        bgColor: '#F4F2FD',
        slides: jgDocsSlides,
      }
    },
  ],
  dev: [
    {
      skill: {type: 'dev', name: 'Front End Dev'},
      heading: "Going mobile",
      text: <>
        <p>Making a legacy website fully responsive isn’t (just) about rewriting CSS. To transform 
           JG’s UX to work seamlessly on mobile, desktop, and everything in between, I:</p>
        <ul>
          <li>Restructured hundreds of templates to support mobile-friendly CSS and JS</li>
          <li>Implemented a modular, SASS-based design system built on a modified BEM methodology</li>
          <li>Optimized page load speed with responsive image components, fine-tuned CSS and JS bundling, 
              and lazy loading techniques</li>
          <li>Ensured wide browser support, including IE11 (until 2022)</li>
        </ul>
      </>,
      image: {
        bgColor: '#DDFEF5',
        verticalOnMobile: true,
        slides: goingMobileSlides,
        additionalContent: (
          <CaseStudyDevIcons icons={[
            <DevIconPhp key="php-icon" />,
            <DevIconCss key="css-icon" />,
            <DevIconJs key="js-icon" />
          ]} />
        ),
      }
    },
    {
      skill: {type: 'dev', name: 'Full-Stack Dev'},
      heading: "Getting navigation right",
      text: <>
        <p>I used a range of techniques to implement the “Explore” menu’s interactive design while 
           keeping loading times snappy. After downloading and caching a JSON data file on page 
           load, the menu was built in JavaScript, loading the current section’s data via a 
           depth-first search of the section data. The zoom level and positioning of the mini 
           Japan SVG maps were calculated dynamically.</p>
      </>,
      image: {
        bgColor: '#e8fef8',
        verticalOnMobile: true,
        slides: navMenuSlides,
        additionalContent: (
          <CaseStudyDevIcons
            icons={[
              <DevIconPhp key="php-icon" />,
              <DevIconCss key="css-icon" />,
              <DevIconJs key="js-icon" />
            ]}
            align="right"
          />
        ),
      },
    },
    {
      skill: {type: 'dev', name: 'Front End Dev'},
      heading: "Wrangling styles into a design system",
      text: <>
        <p>To implement our new design system, I needed a single source of truth in the codebase. 
           Being the late 2010s when I began to build out the system, I leaned heavily on SASS, 
           adding in CSS custom properties as browser support improved.</p>
        <p>To make our living documentation system, I used a Node.js-based build process to parse 
           the SASS maps containing design system values to create a JSON equivalent. This allowed 
           us to have up-to-date docs that always reflected exactly the same values being used on 
           the site.</p>
      </>,
      image: {
        bgColor: '#FDF2F9',
        slides: jgDocsSlides,
        additionalContent: <CaseStudyDevIcons icons={[
          <DevIconSass key="sass-icon" />, <DevIconCss key="css-icon" />,
        ]} />,
      }
    },
  ],
}