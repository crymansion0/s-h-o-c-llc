import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = generatePageMetadata({
  title: "About Us - Our Story & Team",
  description:
    "Learn about Signature Homes of Carolina, our experienced team, our building process, and what sets us apart in custom home construction in Beaufort County.",
  keywords: [
    "about us",
    "home builder",
    "construction team",
    "David Johnson builder",
    "building process",
    "custom home experience",
  ],
  path: "/about",
})

export default function AboutPage() {
  return <AboutPageClient />
}
