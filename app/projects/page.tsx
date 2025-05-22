import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = generatePageMetadata({
  title: "Our Projects - Custom Homes & Barndominiums",
  description:
    "Explore our portfolio of custom homes, barndominiums, and renovation projects in Beaufort County, South Carolina. See our quality craftsmanship in action.",
  keywords: [
    "projects",
    "portfolio",
    "custom homes",
    "barndominiums",
    "home renovations",
    "construction projects",
    "Beaufort County projects",
  ],
  path: "/projects",
})

function ProjectsPage() {
  return <ProjectsPageClient />
}

export default ProjectsPage
