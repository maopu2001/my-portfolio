import rawExperiments from "@/data/experiments.json";
import { ExperimentsSchema, parseWithZod } from "./schema";
import type { Experiment } from "./types";

export const experiments: Experiment[] = parseWithZod(ExperimentsSchema, rawExperiments, "experiments.json");
