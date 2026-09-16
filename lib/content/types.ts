import type { z } from "zod";
import type {
  ProjectCategorySchema,
  ProjectSchema,
  PublicationSchema,
  AchievementSchema,
  TimelineItemSchema,
  SkillGroupSchema,
  ExperimentSchema,
  TeachingExperienceSchema,
  AcademicReferenceSchema,
  NavigationItemSchema,
  ProfileSchema,
} from "./schema";

export type ProjectCategory = z.infer<typeof ProjectCategorySchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Publication = z.infer<typeof PublicationSchema>;
export type Achievement = z.infer<typeof AchievementSchema>;
export type TimelineItem = z.infer<typeof TimelineItemSchema>;
export type SkillGroup = z.infer<typeof SkillGroupSchema>;
export type Experiment = z.infer<typeof ExperimentSchema>;
export type TeachingExperience = z.infer<typeof TeachingExperienceSchema>;
export type AcademicReference = z.infer<typeof AcademicReferenceSchema>;
export type NavigationItem = z.infer<typeof NavigationItemSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
