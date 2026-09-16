import rawTimeline from "@/data/timeline.json";
import { TimelineSchema, parseWithZod } from "./schema";
import type { TimelineItem } from "./types";

export const timeline: TimelineItem[] = parseWithZod(TimelineSchema, rawTimeline, "timeline.json");
