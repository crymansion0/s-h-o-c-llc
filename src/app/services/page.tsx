import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services - Custom Homes, Barndominiums & Renovations",
  description:
    "Signature Homes of Carolina offers custom home building, barndominium construction, and home renovation services in Beaufort County. Quality craftsmanship with over 40 years of experience.",
  keywords: [
    "services",
    "custom homes",
    "barndominiums",
    "home renovations",
    "home additions",
    "kitchen remodeling",
    "bathroom renovation",
    "construction services",
  ],
  path: "/services",
})

export default function ServicesPage() {
  return <ServicesPageClient />
}
