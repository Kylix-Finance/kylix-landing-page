import type { MetadataRoute } from "next";
import { resolveMetadataBase } from "@repo/shared";
import { getAllContentSlugs } from "~/utils/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = resolveMetadataBase();
  const paths = ["/", ...getAllContentSlugs().map((slug) => `/${slug}`)];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
