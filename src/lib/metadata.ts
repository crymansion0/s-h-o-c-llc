import type { Metadata } from "next"

// Base URL for the website (change this to your production URL when deployed)
export const siteConfig = {
  name: "Signature Homes of Carolina LLC",
  description:
    "Expert custom home builder, barndominium construction, and home renovation services in Beaufort County, South Carolina.",
  url: "https://signaturehomesofcarolina.com",
  ogImage: "/og-image.jpg",
  links: {
    facebook: "https://facebook.com/signaturehomesofcarolina",
    instagram: "https://instagram.com/signaturehomesofcarolina",
  },
  contact: {
    phone: "843-592-1881",
    email: "signaturehomesofcarolina2023@gmail.com",
    address: "Beaufort County, South Carolina",
  },
}

// Shared keywords for SEO
export const sharedKeywords = [
  "custom homes",
  "barndominiums",
  "home renovation",
  "Beaufort County",
  "South Carolina",
  "David Johnson",
  "builder",
  "construction",
  "custom home builder",
  "barndominium construction",
  "home remodeling",
  "luxury homes",
  "residential construction",
  "home additions",
  "kitchen remodeling",
  "bathroom renovation",
]

// Base metadata that will be used across the site
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Custom Home Builder in Beaufort County`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: sharedKeywords,
  authors: [{ name: "David Johnson", url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@signaturehomesofcarolina",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8B0000", // Burgundy color to match the theme
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your Google verification code
  },
}

// Helper function to generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = siteConfig.ogImage,
  path = "",
}: {
  title: string
  description: string
  keywords?: string[]
  image?: string
  path?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    keywords: [...sharedKeywords, ...keywords],
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}
