import type { Metadata, Viewport } from "next";
import "./globals.css";

import TopBar from "../src/components/TopBar";
import MainHeader from "../src/components/MainHeader";
import Footer from "../src/components/FooterSection";
import { SITE_URL } from "../src/lib/metadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#989e35",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Phogole Resources | Mining support services",
    template: "%s | Phogole Resources",
  },
  description:
    "Phogole Resources provides groundwater monitoring, minerals exploration support, and underground secondary support—delivered safely, professionally, and on time.",
  applicationName: "Phogole Resources",
  keywords: [
    "mining support services",
    "mining services South Africa",
    "groundwater monitoring",
    "water quality monitoring",
    "borehole water sampling",
    "minerals exploration support",
    "sample collection and preparation",
    "minerals beneficiation",
    "underground secondary support",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  appleWebApp: {
    title: "Phogole Resources",
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    title: "Phogole Resources | Mining support services",
    description:
      "Groundwater monitoring, minerals exploration support, and underground secondary support—delivered safely, professionally, and on time.",
    siteName: "Phogole Resources",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Phogole Resources - mining support services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phogole Resources | Mining support services",
    description:
      "Groundwater monitoring, minerals exploration support, and underground secondary support—delivered safely, professionally, and on time.",
    images: ["/images/hero/hero-bg.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Phogole Resources",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/main_logo.svg`,
      email: "info@phogoleresources.co.za",
      telephone: "+27 83 712 7329",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Driekop",
        postalCode: "1129",
        addressCountry: "ZA",
      },
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27 83 712 7329",
        email: "info@phogoleresources.co.za",
        contactType: "customer service",
        areaServed: "ZA",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Phogole Resources",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-ZA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className="min-h-screen bg-white text-[#4a4746]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <TopBar />
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
