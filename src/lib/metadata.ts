import type { Metadata } from "next";

export const SITE_URL = "https://www.phogoleresources.co.za";

const SOCIAL_IMAGE = {
  url: "/images/hero/hero-bg.jpg",
  width: 1200,
  height: 630,
  alt: "Phogole Resources - mining support services",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const socialTitle = `${title} | Phogole Resources`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: "Phogole Resources",
      url,
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
