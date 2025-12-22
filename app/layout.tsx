import type { Metadata, Viewport } from "next";
import "./globals.css";

// Global layout components (use relative imports, no @)
import TopBar from "../src/components/TopBar";
import MainHeader from "../src/components/MainHeader";
import Footer from "../src/components/FooterSection";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#989e35",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phogoleresources.co.za"),
  title: {
    default: "Phogole Resources | Mining support services",
    template: "%s | Phogole Resources",
  },
  description:
    "Phogole Resources provides groundwater monitoring, minerals exploration support, and underground secondary support—delivered safely, professionally, and on time.",
  applicationName: "Phogole Resources",

  keywords: [
    // Core
    "mining support services",
    "mining services South Africa",
    "mine compliance reporting",
    "site-ready mining teams",
    "field execution mining",
    "safety-first mining services",

    // Water / groundwater / compliance
    "groundwater monitoring",
    "water quality monitoring",
    "borehole water sampling",
    "mine water compliance",
    "environmental monitoring services",

    // Exploration
    "minerals exploration support",
    "exploration sampling",
    "geological field services",
    "sample collection and preparation",
    "field sampling services",

    // Beneficiation / processing
    "minerals beneficiation",
    "mineral processing",
    "processing plant support",

    // Underground support
    "underground secondary support",
    "underground support services",
    "ground support",
    "shotcrete support",
    "rock support",
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

  // Makes favicon more reliable across browsers
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },

  // Optional but good for mobile experience
  appleWebApp: {
    title: "Phogole Resources",
    statusBarStyle: "default",
    capable: true,
  },

  // Prevents Safari from auto-linking phone numbers (can mess with design)
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  // Add this after you verify the domain in Google Search Console
  // verification: { google: "PASTE_GOOGLE_VERIFICATION_CODE_HERE" },

  openGraph: {
    type: "website",
    url: "https://www.phogoleresources.co.za",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#4a4746]">
        <TopBar />
        <MainHeader />

        {/* Page content */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
