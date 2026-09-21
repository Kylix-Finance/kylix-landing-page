import type { Metadata } from "next";
import { merge } from "lodash-es";

const FALLBACK_METADATA_BASE = "https://www.kylix.finance";
const PLACEHOLDER_HOSTS = new Set([
  "google.com",
  "www.google.com",
  "google.come",
  "www.google.come",
]);

export function resolveMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_FRONTEND_URL;
  if (raw) {
    try {
      const url = new URL(raw);
      if (!PLACEHOLDER_HOSTS.has(url.hostname)) return url;
    } catch {
      // The configured value is not a URL. Use the public site.
    }
  }
  return new URL(FALLBACK_METADATA_BASE);
}

const baseMetadata = (siteName = "Kylix"): Metadata => {
  return {
    metadataBase: resolveMetadataBase(),
    alternates: {
      canonical: "./",
    },
    openGraph: {
      url: "./",
      siteName,
      images: {
        url: "/cover.png",
      },
    },
    twitter: {
      card: "summary_large_image",
      images: "/cover.png",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
};

export const mergeMetadata = (
  metadata: Metadata = {},
  siteName?: string
): Metadata => {
  const { title, description } = metadata;

  const sharedMetadata = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: { title, description },
  };

  const mergedMetadata = merge(
    {},
    baseMetadata(siteName),
    metadata,
    sharedMetadata
  );
  return mergedMetadata;
};
