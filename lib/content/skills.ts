import rawSkills from "@/data/skills.json";
import { SkillGroupsSchema, parseWithZod } from "./schema";
import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = parseWithZod(SkillGroupsSchema, rawSkills, "skills.json");
