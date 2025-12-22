import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.phogoleresources.co.za";

  // Add more pages here as you build them (about, services, projects, insights, contact)
  const routes = ["", "/about", "/services", "/projects", "/insights", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
