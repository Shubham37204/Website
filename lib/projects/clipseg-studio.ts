import { Project } from "../types";

export const clipsegStudio: Project = {
  slug: "clipseg-studio",
  title: "CLIPSeg Studio",
  tagline: "Zero-shot image segmentation studio",
  description: "Created a computer vision segmentation tool that isolates image regions using natural-language text prompts or visual scribbles.",
  category: "aiml",
  isFlagship: false,
  problem: "Manual image masking and object isolation in photo editing is slow and labor intensive.",
  details: [
    "Integrated CLIPSeg zero-shot segmentation model with interactive canvas prompts.",
    "Built UI controls for confidence thresholds and fine-grained mask refinement.",
    "Supported export of masked alpha layers for downstream processing."
  ],
  tech: ["TypeScript", "Computer Vision", "CLIPSeg", "Image Segmentation", "UI"],
  tags: ["Computer Vision", "Zero-shot", "Segmentation", "Interactive Tool"],
  keywords: ["CLIPSeg Studio", "Computer Vision", "Segmentation", "Zero-shot", "TypeScript", "UI"],
  impact: "Enables instant text-guided object masking and segmentation",
  github: "https://github.com/Shubham37204/Clipseg",
  accent: "#ec4899",
  date: "May 2026"
};
