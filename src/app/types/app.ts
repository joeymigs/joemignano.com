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
  title: React.ReactNode;
  desc: React.ReactNode;
  skills: Skill[];
  image: React.ReactNode;
}

export type CaseStudySummary = {
  sections: {
    heading: React.ReactNode;
    content: React.ReactNode;
    isProse?: boolean; 
  }[];
  side?: React.ReactNode;
}

export type CaseStudyFeature = {
  skill?: Skill;
  heading: React.ReactNode;
  text: React.ReactNode;
  textAlign?: 'center' | 'top';
  image: {
    component: React.ReactNode;
    type?: 'mobile' | 'desktop'; 
    bgColor?: `#${string}`;
    bg?: string;
    verticalOnMobile?: boolean;
    caption?: React.ReactNode;    
    additional?: React.ReactNode;
    align?: 'left' | 'right' | 'bottom';
    justify?: 'start' | 'center' | 'end';
    mobileMarginBreakout?: boolean;
  };
  imagePosition?: 'left' | 'right' | 'bottom';
}
export type CaseStudyFeatureContentOnly = {
  content: React.ReactNode;
}
export type CaseStudySkillType = 'design' | 'dev'
export type CaseStudyFeatureSet = (CaseStudyFeature | CaseStudyFeatureContentOnly)[]
export type CaseStudyFeaturesBySkill = Record<CaseStudySkillType, CaseStudyFeatureSet>