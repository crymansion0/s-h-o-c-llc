import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Photo Gallery - Our Projects",
  description:
    "Browse our gallery of custom homes, barndominiums, and renovation projects in Beaufort County. See our craftsmanship and attention to detail in action.",
  keywords: [
    "photo gallery",
    "project photos",
    "custom home gallery",
    "barndominium photos",
    "renovation before after",
    "construction portfolio",
  ],
  path: "/gallery",
})

export default function GalleryPage() {
  return <GalleryClientPage />
}
