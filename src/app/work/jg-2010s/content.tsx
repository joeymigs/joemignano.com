import type { JSX, FC, SVGProps } from "react"
import type { CaseStudyHero, CaseStudySummary, CaseStudyFeaturesBySkill } from "@/types"

import BrowserFrame from "@/components/BrowserFrame"

import HeroImage from "./HeroImage"

import CaseStudyDeliverables from "@/work/components/CaseStudyDeliverables"
import DevProcess from "./DevProcess"

import Image from 'next/image'
import AnimatedImage from "@/components/AnimatedImage"

// design images
import summaryOldHp from '/public/images/work/jg-2010s/summary-old-hp-3.jpg'
import redesign1 from '/public/images/work/jg-2010s/design-feature-redesign-1.jpg'
import redesign2 from '/public/images/work/jg-2010s/design-feature-redesign-2.jpg'
import redesign3 from '/public/images/work/jg-2010s/design-feature-redesign-3.jpg'
import redesign4 from '/public/images/work/jg-2010s/design-feature-redesign-4.jpg'
import redesign5 from '/public/images/work/jg-2010s/design-feature-redesign-5.jpg'

// dev images/icons
import fullOfTables from '/public/images/work/jg-2010s/dev-full-of-tables.jpg'
import devIconPhp from '@/assets/icons/dev/php.svg'
import devMySqlPhp from '@/assets/icons/dev/mysql.svg'
import devIconCss from '@/assets/icons/dev/css.svg'
import devIconSass from '@/assets/icons/dev/sass.svg'
import devIconJs from '@/assets/icons/dev/js.svg'
import devIconJquery from '@/assets/icons/dev/jquery.svg'
import devIconDevtools from '@/assets/icons/dev/devtools.svg'
import devIconBrowserstack from '@/assets/icons/dev/browserstack.svg'
import devIconNode from '@/assets/icons/dev/node.svg'
import devIconGrunt from '@/assets/icons/dev/grunt.svg'

import css from './CaseStudy.module.css'
import typo from '@/css/typography/Typography.module.css'

type DevProcessStep = {
  heading: string;
  image: JSX.Element;
  text: JSX.Element;
  devIcons: FC<SVGProps<SVGSVGElement>>[];
}

export const hero: CaseStudyHero = {
  title: <>japan-guide.com, Welcome to the <span className={typo.Underline}>2010s</span></>,
  desc: <>My first project at JG: Redesign and rebuild a 15-year-old site, and make its 2,000+ pages 
         of content effortless to navigate.</>,
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
        <p>In 2014, japan-guide.com was at a turning point. As one of Japan’s top Google-ranked 
           English tourism sites, serving 2M+ unique visitors on average every month, JG had 
           cemented itself as a reliable and beloved brand amongst travelers to Japan.</p>
        <p>The problem? <strong>The site hadn’t seen a major design update since 2005.</strong></p>
        <p>JG had been regularly publishing up-to-date content since 1996, but the site’s design — 
           and codebase — had not kept up. For many visitors, this blast-from-the-past UX gave an 
           impression that the site was more a museum piece than a modern, trustworthy travel guide. 
           It was time for a change.</p>
      </>,
    },
    {
      heading: 'Timeline',
      content: <p>August 2014 – March 2015</p>,
    },
    {
      heading: 'Key Deliverables',
      content: <CaseStudyDeliverables items={[
        { skill: { type: 'design', name: 'Design' }, desc: 'Streamline information architecture & navigation' },
        { skill: { type: 'design', name: 'Design' }, desc: 'Refresh visual identity' },
        { skill: { type: 'design', name: 'Design' }, desc: 'Modernize site design' },
        { skill: { type: 'dev', name: 'Dev' }, desc: 'New front-end codebase with custom PHP/JS framework' },
      ]} />,
      isProse: false,
    }
  ],
  side: (
    <BrowserFrame
      wrapClass={css.SummaryImg}
      shadow={200}
      animate
      viewportOptions={{ amount: 0.05 }}
      variants={{
        initial: { x: 24, y: 0 },
        animate: { x: 0, y: 0, transition: { duration: 1, ease: 'easeOut' } },
      }}
    >
      <Image src={summaryOldHp} alt="japan-guide.com homepage, circa 2014" />
    </BrowserFrame>
  ),
}

export const features: CaseStudyFeaturesBySkill = {
  design: [
    {
      skill: {type: 'design', name: 'UX Research // Information Architecture'},
      heading: "Making 2,000+ pages effortless to navigate",
      text: <>
        <p>After studying JG’s analytics, I found that the vast majority of users were viewing 
           just one content area: <strong>travel information</strong>. But the site’s architecture 
           made this content harder to discover and cumbersome to browse.</p>
        <p>My first proposal at JG was to turn the <u>entire site</u> into the “Travel” section: 
           lifting the site’s most popular pages (Tokyo, Kyoto, When to travel...) up one level to  
           make navigation faster and more intuitive. New “Destinations,” “Interests,” and 
           “Travel Planning” sections created more discoverable, traveler-centric navigation paths, 
           and a new “News” section gave a more prominent home to business-critical sponsored 
           articles.</p>
      </>,
      imagePosition: 'right',
      image: {
        component: (
          <AnimatedImage>
            <Image
              src="/images/work/jg-2010s/design-feature-1.svg"
              alt="Redesigning japan-guide.com information architecture"
              width="704"
              height="576"
            />
          </AnimatedImage>
        ),
      },
    },
    {
      skill: {type: 'design', name: 'UX Research // Site Audit'},
      heading: "Catalog all the things",
      text: <>
        <p>With hundreds of design elements on thousands of pages to evaluate and potentially 
           redesign, a site-wide audit was in order. Page by page, I populated an enormous 
           spreadsheet with details about each template, component, and any pain points or 
           inconsistencies to address heuristically.</p>
        <p>With all pages and design elements documented, I could start <strong>analyzing the 
           data</strong>: finding sections  that could be reorganized more intuitively, 
           consolidating similar page elements, and discovering opportunities to breathe new life 
           into the site’s UX.</p>
      </>,
      imagePosition: 'left',
      image: {
        bgColor: '#EFF3F7',
        justify: 'end',
        component: (
          <AnimatedImage>
            <Image
              src="/images/work/jg-2010s/design-feature-2.svg"
              alt="Auditing all of japan-guide.com's design elements"
              width="672"
              height="672"
            />
          </AnimatedImage>
        ),
      },
    },
    {
      skill: {type: 'design', name: 'Wireframing & Design Iteration'},
      heading: "Redesigning JG",
      text: <>
        <p>Giving a nearly 20-year-old site its first design overhaul is kind of a big deal. JG’s 
           founder described the feeling like “getting a new nose.” My goal was to preserve what 
           made the site successful while bringing the design into the 21<sup>st</sup> century.</p>
        <p>I iterated designs rapidly based on continuous feedback from our founder, advertisers, 
           team members, and friends outside the company — both familiar and unfamiliar with the 
           site. Though our bandwidth didn’t allow for more formal user testing, these interviews 
           provided massive insight.</p>
      </>,
      imagePosition: 'bottom',
      image: {
        bg: 'linear-gradient(to bottom, var(--surface-bg-primary), #ECF5FC)',
        mobileMarginBreakout: true,
        component: (
          <div className={css.RedesignCollage}>
            <AnimatedImage className={css['jg2010s-redesign-img-1']}>
              <Image src={redesign1} alt="Early design sketches" />
            </AnimatedImage>
            <AnimatedImage className={css['jg2010s-redesign-img-2']}>
              <Image src={redesign2} alt="“Aquariums” page nationwide map design idea" />
            </AnimatedImage>
            <AnimatedImage className={css['jg2010s-redesign-img-3']}>
              <Image src={redesign3} alt="Miyajima page design idea" />
            </AnimatedImage>
            <AnimatedImage className={css['jg2010s-redesign-img-4']}>
              <Image src={redesign4} alt="“Autumn Leaves” page design idea" />
            </AnimatedImage>
            <AnimatedImage className={css['jg2010s-redesign-img-5']}>
              <Image src={redesign5} alt="Japanese History” timeline design idea" />
            </AnimatedImage>
          </div>
        ),
        caption: "Early design sketches and wireframes",
      },
    },
    {
      skill: {type: 'design', name: 'Brand Identity'},
      heading: "Refreshing the brand",
      textAlign: 'top',
      text: <>
        <p>Restyling a beloved brand is a job best done respectfully. My goal was to pay homage to 
           JG’s personality while evoking the traits we wanted the brand to project: <strong>authoritative, 
           reliable, authentic, inspiring</strong>.</p>
        <p>I refreshed our logo and color palette, chose new typefaces, and had the good luck to 
           discover and commission Japanese designer Nakako Hashimoto to create a bespoke 
           collection of pictograms tailored to our site’s needs.</p>
        <p>But perhaps the biggest change I made to the brand’s visual language was a much&nbsp;
           <strong>heavier emphasis on photography</strong>. The story of travel is often best told 
           in pictures, and this was the ideal opportunity to let the company’s considerable 
           collection of travel photography do more of the talking.</p>
      </>,
      imagePosition: 'left',
      image: {
        component: (
          <AnimatedImage>
            <Image
              src="/images/work/jg-2010s/design-feature-4.svg"
              alt="New logo, typefaces, color palette, and iconography for japan-guide.com"
              width="672"
              height="1111"
            />
          </AnimatedImage>
        ),
      },
    },
  ],
  dev: [
    {
      skill: {type: 'dev', name: 'Full-Stack Dev'},
      heading: "Replacing 20-year-old code with modern PHP, JS, & CSS",
      text: <>
        <p>Lifting up the hood and digging around the legacy code, it was obvious a lot of code 
           had to be rewritten from scratch. True to its ‘90s roots, the site’s layout was entirely 
           constructed of nested &lt;table&gt; tags and styled with inline style attributes — not a 
           line of CSS to be found. The site’s PHP codebase had also grown organically over the 
           years, and template code was inextricably intertwined with data fetching logic.</p>
        <p>I had my work cut out for me. And I had 3 months to get it done.</p>
      </>,
      image: {
        component: (
          <AnimatedImage>
            <Image src={fullOfTables} alt="My god... it's full of <table>s" />
          </AnimatedImage>
        ),
      },
    },
    { content: <DevProcess /> }
  ],
}

export const devProcessSteps: DevProcessStep[] = [
  {
    heading: '1. Normalize data',
    image: (
      <Image src="/images/work/jg-2010s/dev-step-1.svg" alt="Step 1" width="200" height="122" />
    ),
    text: <>
      Our first challenge was figuring out how to get all of JG’s existing data into our 
      soon-to-be new page templates. Rather than introduce new complexity with a 3rd party 
      framework, we developed an adapter around our data fetching logic that allowed me to start 
      with a normalized data structure for my new front-end codebase.
    </>,
    devIcons: [devIconPhp, devMySqlPhp],
  },
  {
    heading: '2. Build a templating framework',
    image: (
      <Image src='/images/work/jg-2010s/dev-step-2.svg' alt="Step 2" width="198" height="104" />
    ),
    text: <>
      JG’s content is largely static, but it takes a formidable amount of presentational logic to 
      organize and display it. We decided that the quickest and most flexible solution was to 
      develop a relatively simple PHP templating system of our own for our new front end, allowing 
      us to customize and optimize it to our needs.
    </>,
    devIcons: [devIconPhp, devMySqlPhp],
  },
  {
    heading: '3. Create templates',
    image: (
      <Image src="/images/work/jg-2010s/dev-step-3.svg" alt="Step 3" width="148" height="96" />
    ),
    text: <>
      With our new framework in place, I was able to relatively quickly build out the templates 
      and components for my new front-end designs. Having our own custom framework gave us the 
      high level of customizability we needed for our content.
    </>,
    devIcons: [devIconPhp],
  },
  {
    heading: '4. Style, add interactivity',
    image: (
      <Image src="/images/work/jg-2010s/dev-step-4.svg" alt="Step 4" width="184" height="123" />
    ),
    text: <>
      Writing and organizing the massive amount of CSS needed to style our new templates was one 
      of the most time-intensive steps. Introducing a modular system for reusing JavaScript 
      components across the site with the help of jQuery allowed us to quickly hook up interactive 
      elements while maintaining support for browsers as old as IE8.
    </>,
    devIcons: [devIconCss, devIconSass, devIconJs, devIconJquery],
  },
  {
    heading: '5. Test, debug, rinse, repeat',
    image: (
      <Image src="/images/work/jg-2010s/dev-step-5.svg" alt="Step 5" width="94" height="94" />
    ),
    text: <>
      Testing our new codebase was no joke. We needed to support almost any desktop browser 
      (including IE8!), and had a team of just two coders/testers (our founder and myself) to make 
      it happen. Our goal was an MVP to get over the finish line that we could patch as needed 
      after launch.
    </>,
    devIcons: [devIconDevtools, devIconBrowserstack],
  },
  {
    heading: '6. Deploy',
    image: (
      <Image src="/images/work/jg-2010s/dev-step-6.svg" alt="Step 6" width="170" height="98" />
    ),
    text: <>
      While our time and bandwidth didn’t allow for developing a sophisticated deployment system, 
      we worked out a solution that allowed me to easily build our static assets and push code 
      using a combination of helpful Node.js scripts and Grunt.js plugins.
    </>,
    devIcons: [devIconNode, devIconGrunt],    
  }
]