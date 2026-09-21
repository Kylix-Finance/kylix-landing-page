import type { MetadataRoute } from "next";
import { resolveMetadataBase } from "@repo/shared";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = resolveMetadataBase();

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl.origin,
  };
}
