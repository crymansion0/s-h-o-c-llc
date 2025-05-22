import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ClientPage from "./ClientPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Custom Home Builder in Beaufort County, SC",
  description:
    "Signature Homes of Carolina builds custom homes, barndominiums, and renovations in Beaufort County, SC. Quality craftsmanship with over 40 years of experience.",
  keywords: [
    "home builder",
    "custom homes",
    "barndominiums",
    "home renovations",
    "Beaufort County",
    "South Carolina",
    "luxury homes",
  ],
  path: "/",
})

export default function Home() {
  return <ClientPage />
}
