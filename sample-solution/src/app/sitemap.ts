import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samplesolution.example";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/policy/safety",
    "/policy/quality",
    "/services",
    "/projects",
    "/clients",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service: typeof services[0]) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
