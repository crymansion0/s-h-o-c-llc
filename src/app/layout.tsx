import type React from "react"
import { Mona_Sans as FontSans, Young_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { baseMetadata } from "@/lib/metadata"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400", // Young_Serif only supports weight 400
})

// Note: We can't load Helvetica directly from Google Fonts as it's not available there
// We'll use the system Helvetica font via CSS in globals.css

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable, fontSerif.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  )
}
