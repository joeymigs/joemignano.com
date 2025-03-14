import type { ReactNode } from "react"
import type { StaticImageData } from "next/image"

/* Pages */
export type PageData = {
  headerMode: SiteHeaderMode;
  backButtonUrl?: string;
  transitionDelay?: number;
}
export type PageSettings = Record<string, PageData>

/* Site Header */
export type SiteHeaderMode = 'light' | 'dark'

/* Skills */
export type SkillType = 'design' | 'dev' | 'dnd'
export type Skill = {
  type: SkillType;
  name: string;
}

/* Case Studies */
export type CaseStudyHero = {
  title: ReactNode;
  desc: ReactNode;
  skills: Skill[];
  image: ReactNode;
}

export type CaseStudySummary = {
  sections: {
    heading: ReactNode;
    content: ReactNode;
    isProse?: boolean; 
  }[];
  side?: ReactNode;
}

/* Case Study Features */
export type CaseStudyFeatureImage = {
  type?: 'mobile' | 'desktop'; 
  bgColor?: `#${string}`;
  bg?: string;
  bgImage?: StaticImageData;
  verticalOnMobile?: boolean;
  caption?: ReactNode;    
  additionalContent?: ReactNode;
  justify?: 'start' | 'center' | 'end';
  aspectRatio?: string;
  mobileMarginBreakout?: boolean;
} & (
  | { slides: CaseStudyFeatureImageSlide[]; component?: never }
  | { component: ReactNode; slides?: never }
);

export type CaseStudyFeatureImageSlide = {
  component: ReactNode;
  bgColor?: `#${string}`;
  bg?: string;
  bgImage?: StaticImageData;
  caption?: ReactNode;
}

export type CaseStudyFeature = {
  skill?: Skill;
  heading: ReactNode;
  text: ReactNode;
  textAlign?: 'center' | 'top';
  image: CaseStudyFeatureImage;
  imagePosition?: 'left' | 'right' | 'bottom';
}
export type CaseStudyFeatureContentOnly = {
  content: ReactNode;
}
export type CaseStudySkillType = 'design' | 'dev'
export type CaseStudyFeatureSet = (CaseStudyFeature | CaseStudyFeatureContentOnly)[]
export type CaseStudyFeaturesBySkill = Record<CaseStudySkillType, CaseStudyFeatureSet>