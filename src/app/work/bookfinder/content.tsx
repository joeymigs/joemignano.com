import type { CaseStudyHero, CaseStudySummary, CaseStudyFeaturesBySkill } from "@/types"

import Image from "next/image"

import HeroImage from "./HeroImage"

import CaseStudySummaryCta from "@/work/components/CaseStudySummaryCta"
import CaseStudyDeliverables from "@/work/components/CaseStudyDeliverables"

import feature1Img from '/public/images/work/bookfinder/design-feature-1.jpg'
import feature2Img from '/public/images/work/bookfinder/design-feature-2.jpg'
import feature3Img from '/public/images/work/bookfinder/design-feature-3.jpg'
import feature4Img from '/public/images/work/bookfinder/design-feature-4.jpg'
import feature5Img from '/public/images/work/bookfinder/design-feature-5.jpg'

import Button from "@/components/Button"
import Icon from "@/components/Icon"
import Arrow from "@/assets/icons/Arrow.svg"
// import GitHub from "@/assets/icons/GitHub.svg"

import css from "@/work/bookfinder/CaseStudy.module.css"
import typo from "@/css/typography/Typography.module.css"
import cx from "classnames"
import AnimatedImage from "@/components/AnimatedImage"

export const hero: CaseStudyHero = {
  title: <span className={typo.Underline}>Bookfinder</span>,
  desc: "Time-saving web app that tracks thousands of online book listings.",
  skills: [
    { type: 'design', name: 'UX/UI Design' },
    { type: 'dev', name: 'Full-Stack Dev' },
  ],
  image: <HeroImage />,
}

export const summary: CaseStudySummary = {
  sections: [
    {
      heading: 'Client',
      content: <p>Freelance project for a Tokyo-based bookseller</p>,
    },
    {
      heading: 'Background',
      content: <>
        <p>My client was spending countless hours searching for book titles online.</p>
        <p>“I am always in search of several hundred titles,” they told me, “and find myself
          Googling these titles several times a week.” The manual process was both 
          time-consuming and risky, as valuable finds easily slipped through the cracks.</p>
        <p>Luckily, they found me. The task: <strong>build an app that tracks book listings and 
          price changes</strong> across multiple sites and daily auctions.</p>
      </>,
    },
    {
      heading: 'Key Deliverables',
      content: <CaseStudyDeliverables items={[
        {
          skill: { type: 'design', name: 'Design' },
          desc: <strong>Bespoke UI design</strong>,
        },
        {
          skill: { type: 'dev', name: 'Dev' },
          desc: <strong>Google Cloud Functions-powered back end</strong>,
        },
        {
          skill: { type: 'dev', name: 'Dev' },
          desc: <><strong>Node.js scripts</strong> tailored to each target site</>,
        },
        {
          skill: { type: 'dev', name: 'Dev' },
          desc: <><strong>React front end</strong> using Tanstack Query, React Router</>,
        },
      ]} />,
      isProse: false,
    }
  ],
  side: (
    <CaseStudySummaryCta>
      <Button
        variant="cta"
        stretch style={{opacity: 0.5, '--_bg-color': '#8ebddf'} as React.CSSProperties}
      >
        Try a demo <Icon svg={Arrow} rotate="225deg" />
      </Button>
      <div style={{display: 'flex', alignItems: 'center', gap: 'var(--space-75)'}}>
        {/* <Icon svg={GitHub} style={{"--icon-size": '24px'} as React.CSSProperties} /> */}
        <span className={cx(typo.BodyS, typo.Prose)}>
          {/* <b>GitHub repo</b> available upon <a href="mailto:joeymigs@gmail.com">request</a>. */}
          <span
            style={{
              display: 'inline-block',
              width: 'fit-content',
              transform: 'scale(-1.25, 1.25)',
              marginRight: '0.5em',
            }}>📢</span>
          <em style={{fontWeight: 'var(--font-weight-medium)'}}>Coming soon!</em>
        </span>
      </div>
    </CaseStudySummaryCta>
  ),
}

export const features: CaseStudyFeaturesBySkill = {
  design: [
    {
      skill: {type: 'design', name: 'UX/UI Design'},
      heading: "Complex functionality; Simple UI",
      text: <>
        <p>Each day, the app scans listings and compares them to past results, surfacing new or 
           price-changed items.</p>
        <p>While the app performs millions of comparisons to find these potentially valuable 
           listings, the UI shows the results in a clean, quickly scannable format. Navigating 
           between different days’ results and saving listings are also important features,  
           designed to be as fast and intuitive as possible.</p>
      </>,
      image: {
        bgColor: '#DCEBFB',
        type: "desktop",
        component: (
          <AnimatedImage>
            <Image className={css.Screenshot} src={feature1Img} alt="Date picker feature" />
          </AnimatedImage>
        ),
      },
    },
    {
      skill: {type: 'design', name: 'UX/UI Design'},
      heading: "Making thousands of search queries easy to manage",
      text: <>
        <p>My client needed to keep track of thousands of search queries across multiple sites — without
           getting lost in a sea of terms. I designed the UI to make finding, adding, and deleting terms 
           fast and intuitive, placing tools where they were always within reach but never in the way.
        </p>
      </>,
      image: {
        bgColor: '#EDF1F1',
        type: "desktop",
        component: (
          <AnimatedImage>
            <Image className={css.Screenshot} src={feature2Img} alt="Search terms view" />
          </AnimatedImage>
        ),
      },
    },
    {
      skill: {type: 'design', name: 'UX/UI Design'},
      heading: "Filtering and sorting? No problem.",
      text: <>
        <p>With thousands of listings results and search terms, instant-feedback filtering and 
          sorting were a necessity. Based on feedback from the client, I made these features 
          accessible via the fewest clicks possible.</p>
      </>,
      image: {
        bgColor: '#F4F2FD',
        type: "desktop",
        component: (
          <AnimatedImage>
            <Image className={css.Screenshot} src={feature3Img} alt="Filtering and sorting" />
          </AnimatedImage>
        ),
      }
    },
    {
      skill: {type: 'design', name: 'UX/UI Design'},
      heading: "Analyzing search results",
      text: <>
        <p>When your daily search performs over 20,000 network requests on a wide range of 
          websites and APIs... things don’t always go as expected. The “Search results” view is a 
          window into each search, providing meta data about every network request, time elapsed, 
          and details about any errors that occurred.</p>
      </>,
      image: {
        bgColor: '#E8F5FE',
        type: "desktop",
        component: (
          <AnimatedImage>
            <Image className={css.Screenshot} src={feature4Img} alt="Search results details view" />
          </AnimatedImage>
        ),
      },
    },
    {
      skill: {type: 'design', name: 'UX/UI Design'},
      heading: "Don’t forget dark mode",
      text: <>
        <p>For a tool meant to be used on a daily basis, at any time of day, adjustable dark and 
          light color schemes can be a welcome relief on the eyes — and laptop battery.</p>
      </>,
      image: {
        bgColor: '#2D4E69',
        type: "desktop",
        component: (
          <AnimatedImage>
            <Image className={cx(css.Screenshot, css.darkShadow)} src={feature5Img} alt="Dark mode" />
          </AnimatedImage>
        ),
      }
    },
  ],
  dev: [
    {
      skill: {type: 'dev', name: 'Full-Stack Dev'},
      heading: "Choosing the tech stack",
      text: <>
        <p>While deciding how to build the app, I focused on the client’s key requirements:</p>
        <ol>
          <li>Defining and managing search queries in UI</li>
          <li>Scraping data from target sites on an automated schedule</li>
          <li>Processing and storing search results in a database</li>
          <li>Viewing, sorting, filtering, and saving listings via UI</li>
        </ol>
        <p>After researching different approaches and tech stacks, I decided to build the app as 
           a <strong>cloud-based web app</strong> using the <strong>Google Firebase</strong> platform 
           with a <strong>React front end.</strong> Firebase’s managed backend infrastructure was a 
           big time saver, freeing me to focus more on the app’s business logic and UI.</p>
        <p>To handle the searches, I used Google Cloud Functions with Node.js scripts tailored for 
           each target site. This approach worked well with a Firestore DB and made it easy to 
           reliably automate over 20,000 daily network requests and process and store the collected 
           data, all with minimal config.</p>
        <p>For the browser-based frontend, I used React to implement the high level of
           interactivity and customization needed for the UI. I reached for TanStack Query and 
           React Router to help simplify tasks like data fetching, state management, and 
           navigation, and Vite for development and bundling.</p>
      </>,
      image: {
        aspectRatio: 'unset',
        component: (
          <AnimatedImage>
            <Image
              src="/images/work/bookfinder/dev-tech-stack.svg"
              alt="Bookfinder tech stack"
              width="672"
              height="617"
            />
          </AnimatedImage>
        ),
      },
      imagePosition: 'right',
    },
  ],
}