import rawProfile from "@/data/profile.json";
import { ProfileSchema, parseWithZod } from "./schema";
import type { NavigationItem, Profile } from "./types";

const validatedProfile: Profile = parseWithZod(ProfileSchema, rawProfile, "profile.json");

export const profile = validatedProfile;
export const navigationItems: NavigationItem[] = validatedProfile.navigationItems;
export const mobileNavigationItems: NavigationItem[] = validatedProfile.mobileNavigationItems;
