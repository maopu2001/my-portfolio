import rawProjects from "@/data/projects.json";
import { ProjectsSchema, parseWithZod } from "./schema";
import type { Project } from "./types";

export const projects: Project[] = parseWithZod(ProjectsSchema, rawProjects, "projects.json");
