import type { ReactNode } from "react"
import type { StaticImageData, ImageProps } from "next/image"

import type { PhoneFrameProps } from "@/components/PhoneFrame";
import type { BrowserFrameProps } from "@/components/BrowserFrame";
import type { VideoProps } from "@/components/Video/Video";

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
export type CaseStudyFeatureFigure = {
  bgColor?: `#${string}`;
  bg?: string;
  bgImage?: StaticImageData;
  verticalOnMobile?: boolean;
  caption?: ReactNode;    
  additionalContent?: ReactNode;
  aspectRatio?: string;
  mobileMarginBreakout?: boolean;
} & (
  | { slides: CaseStudyFeatureSlide[]; content?: never; }
  | { content: CaseStudyFeatureFigureContent; slides?: never; }
)

export type CaseStudyFeatureFigureType = 'phone' | 'browser' | 'screenshot';

export type CaseStudyFeatureImage = {
  type?: CaseStudyFeatureFigureType;
  alt: string;
  frameProps?: Partial<PhoneFrameProps | BrowserFrameProps>;
  imageClassName?: string;
  imageProps?: Omit<Partial<ImageProps>, 'src' | 'alt'>;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'end';
} & (
  | { imageData: StaticImageData; imageSrc?: never }
  | { imageSrc: string; imageData?: never }
)

export type CaseStudyFeatureVideo = {
  type?: CaseStudyFeatureFigureType;
  alt: string;
  frameProps?: Partial<PhoneFrameProps | BrowserFrameProps>;
  videoSrc: string;
  videoProps?: Omit<Partial<VideoProps>, 'src' | 'alt'>;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'end';
}

export type CaseStudyFeatureCustomFigure = {
  content: ReactNode;
};

export type CaseStudyFeatureFigureContent =
  | CaseStudyFeatureImage
  | CaseStudyFeatureVideo
  | CaseStudyFeatureCustomFigure;

export type CaseStudyFeatureSlide = {
  content: CaseStudyFeatureFigureContent;
  bgColor?: `#${string}`;
  bg?: string;
  bgImage?: StaticImageData;
  preloadBgImage?: StaticImageData;
  preloadMainAsset?: StaticImageData | string;
  caption?: ReactNode;
}

export type CaseStudyFeature = {
  skill?: Skill;
  heading: ReactNode;
  text: ReactNode;
  textAlign?: 'center' | 'top';
  image: CaseStudyFeatureFigure;
  imagePosition?: 'left' | 'right' | 'bottom';
}
export type CaseStudyFeatureContentOnly = {
  content: ReactNode;
}
export type CaseStudySkillType = 'design' | 'dev'
export type CaseStudyFeatureSet = (CaseStudyFeature | CaseStudyFeatureContentOnly)[]
export type CaseStudyFeaturesBySkill = Record<CaseStudySkillType, CaseStudyFeatureSet>