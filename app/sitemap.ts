import type { MetadataRoute } from "next";
import { SITE_URL } from "../src/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/projects", "/faq", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
