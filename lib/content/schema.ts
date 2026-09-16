import { z } from "zod";

export const ProjectCategorySchema = z.enum([
  "web",
  "software",
  "ai",
  "computer-vision",
  "tool",
  "university",
  "research",
]);

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  longDescription: z.string().optional(),
  category: ProjectCategorySchema,
  categoryLabel: z.string().min(1),
  year: z.number().int(),
  status: z.string().min(1),
  featured: z.boolean(),
  displayOrder: z.number().int(),
  technologies: z.array(z.string().min(1)),
  github: z.string().url().optional(),
  demo: z.string().url().optional(),
  image: z.string().optional(),
  problem: z.string().min(1),
  features: z.array(z.string().min(1)),
  architecture: z.string().optional(),
  challenges: z.array(z.string().min(1)),
  lessons: z.array(z.string().min(1)),
  relatedProjects: z.array(z.string()).optional(),
});

export const ProjectsSchema = z.array(ProjectSchema);

export const PublicationSchema = z.object({
  title: z.string().min(1),
  authors: z.array(z.string().min(1)),
  venue: z.string().min(1),
  year: z.number().int(),
  location: z.string().min(1),
  publisher: z.string().min(1),
  pages: z.string().optional(),
  doi: z.string().optional(),
  doiUrl: z.string().url().optional(),
  ieeeXploreUrl: z.string().url().optional(),
  abstract: z.string().optional(),
});

export const PublicationsSchema = z.array(PublicationSchema);

export const AchievementCategorySchema = z.enum([
  "Academic",
  "Technical",
  "Leadership",
  "University Activity",
  "Award",
  "Contest",
]);

export const AchievementSchema = z.object({
  title: z.string().min(1),
  category: AchievementCategorySchema,
  year: z.union([z.number().int(), z.string().min(1)]),
  description: z.string().min(1),
  organization: z.string().optional(),
  highlight: z.string().optional(),
});

export const AchievementsSchema = z.array(AchievementSchema);

export const TimelineProjectRefSchema = z.object({
  title: z.string().min(1),
  slug: z.string().optional(),
  category: z.string().min(1),
});

export const TimelineItemSchema = z.object({
  year: z.number().int(),
  title: z.string().min(1),
  headline: z.string().min(1),
  description: z.string().min(1),
  focus: z.string().min(1),
  projects: z.array(TimelineProjectRefSchema),
});

export const TimelineSchema = z.array(TimelineItemSchema);

export const SkillSchema = z.object({
  name: z.string().min(1),
  usedInSlugs: z.array(z.string()),
});

export const SkillGroupSchema = z.object({
  category: z.string().min(1),
  skills: z.array(SkillSchema),
});

export const SkillGroupsSchema = z.array(SkillGroupSchema);

export const ExperimentSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  rationale: z.string().min(1),
  technology: z.array(z.string().min(1)),
  outcome: z.string().min(1),
  learned: z.string().min(1),
  year: z.number().int(),
  category: z.string().min(1),
  github: z.string().url().optional(),
});

export const ExperimentsSchema = z.array(ExperimentSchema);

export const SecondaryEducationSchema = z.object({
  degree: z.string().min(1),
  institution: z.string().min(1),
  board: z.string().min(1),
  year: z.number().int(),
  gpa: z.string().min(1),
});

export const EducationSchema = z.object({
  institution: z.string().min(1),
  degree: z.string().min(1),
  department: z.string().min(1),
  period: z.string().min(1),
  location: z.string().min(1),
  status: z.string().min(1),
  cgpa: z.string().min(1),
  scale: z.string().min(1),
  meritStanding: z.string().min(1),
  academicHighlights: z.array(z.string().min(1)),
  secondaryEducation: z.array(SecondaryEducationSchema),
});

export const TeachingExperienceSchema = z.object({
  role: z.string().min(1),
  institution: z.string().min(1),
  location: z.string().min(1),
  period: z.string().min(1),
  topics: z.array(z.string().min(1)),
  responsibilities: z.array(z.string().min(1)),
});

export const AcademicReferenceSchema = z.object({
  name: z.string().min(1),
  designation: z.string().min(1),
  department: z.string().min(1),
  institution: z.string().min(1),
  location: z.string().min(1),
  email: z.string().email(),
  role: z.string().min(1),
});

export const NavigationItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  shortLabel: z.string().optional(),
});

export const SocialLinksSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  facebook: z.string().url().optional(),
  email: z.string().min(1),
  rawEmail: z.string().email(),
  secondaryEmail: z.string().email().optional(),
  phone: z.string().optional(),
});

export const ProfileSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  headline: z.string().min(1),
  intro: z.string().min(1),
  subIntro: z.string().min(1),
  statement: z.string().min(1),
  longTermGoal: z.string().min(1),
  socialLinks: SocialLinksSchema,
  education: EducationSchema,
  teachingExperience: z.array(TeachingExperienceSchema),
  teachingInterests: z.array(z.string().min(1)),
  references: z.array(AcademicReferenceSchema),
  navigationItems: z.array(NavigationItemSchema),
  mobileNavigationItems: z.array(NavigationItemSchema),
  cvUrl: z.string().min(1),
});

export function parseWithZod<T>(schema: z.ZodType<T>, data: unknown, name: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errorDetails = result.error.issues
      .map((issue) => `[${issue.path.join(".") || "root"}]: ${issue.message}`)
      .join(", ");
    throw new Error(`[Zod Validation Error in ${name}]: ${errorDetails}`);
  }
  return result.data;
}
