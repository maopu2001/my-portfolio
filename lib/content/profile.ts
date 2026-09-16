import rawProfile from "@/data/profile.json";
import { ProfileSchema, parseWithZod } from "./schema";
import type { Profile } from "./types";

const validatedProfile: Profile = parseWithZod(ProfileSchema, rawProfile, "profile.json");

export const profile = validatedProfile;
