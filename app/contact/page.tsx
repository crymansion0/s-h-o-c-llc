import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us - Get in Touch",
  description:
    "Contact Signature Homes of Carolina for custom home building, barndominiums, and renovation services in Beaufort County. Request a consultation or quote today.",
  keywords: [
    "contact",
    "get in touch",
    "request quote",
    "home builder contact",
    "construction consultation",
    "Beaufort County builder",
  ],
  path: "/contact",
})

export default function ContactPage() {
  return <ContactPageClient />
}
