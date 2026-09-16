import rawAchievements from "@/data/achievements.json";
import { AchievementsSchema, parseWithZod } from "./schema";
import type { Achievement } from "./types";

export const achievements: Achievement[] = parseWithZod(AchievementsSchema, rawAchievements, "achievements.json");
