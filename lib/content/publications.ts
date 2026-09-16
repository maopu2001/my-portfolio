import rawPublications from "@/data/publications.json";
import { PublicationsSchema, parseWithZod } from "./schema";
import type { Publication } from "./types";

export const publications: Publication[] = parseWithZod(PublicationsSchema, rawPublications, "publications.json");
