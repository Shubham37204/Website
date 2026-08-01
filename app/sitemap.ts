import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shubham-dev.vercel.app";

  const staticRoutes = [
    "",
    "/projects",
    "/experience",
    "/skills",
    "/about",
    "/credentials",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: project.isFlagship ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
