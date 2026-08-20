export type ProjectCategory =
  | "web"
  | "software"
  | "ai"
  | "computer-vision"
  | "tool"
  | "university"
  | "research";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: number;
  status: string;
  featured: boolean;
  displayOrder: number;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  problem: string;
  features: string[];
  architecture?: string;
  challenges: string[];
  lessons: string[];
  relatedProjects?: string[];
};

export type Experiment = {
  slug: string;
  title: string;
  summary: string;
  rationale: string;
  technology: string[];
  outcome: string;
  learned: string;
  github?: string;
  year: number;
  category: string;
};

export type TimelineItem = {
  year: number;
  title: string;
  headline: string;
  description: string;
  projects: { title: string; slug?: string; category: string }[];
  focus: string;
};

export type Achievement = {
  title: string;
  category: "Academic" | "Technical" | "Leadership" | "University Activity";
  year: number;
  description: string;
  organization?: string;
};

export type SkillGroup = {
  category: string;
  skills: {
    name: string;
    usedInSlugs: string[];
  }[];
};

export type NavigationItem = {
  label: string;
  href: string;
  shortLabel?: string;
};
