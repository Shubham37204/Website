import { Project } from "../types";
import { collabdocs } from "./collabdocs";
import { skimlit } from "./skimlit";
import { recallai } from "./recallai";
import { hybridLogClassifier } from "./hybrid-log-classifier";
import { studyAssistant } from "./study-assistant";
import { prReviewAgent } from "./pr-review-agent";
import { mygit } from "./mygit";
import { infographAi } from "./infograph-ai";
import { clipsegStudio } from "./clipseg-studio";

export const projects: Project[] = [
  collabdocs,
  skimlit,
  recallai,
  hybridLogClassifier,
  studyAssistant,
  prReviewAgent,
  mygit,
  infographAi,
  clipsegStudio,
];

export const flagshipProjects: Project[] = projects.filter((p) => p.isFlagship);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
