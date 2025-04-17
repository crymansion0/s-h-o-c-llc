import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Playfair_Display as FontSerif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "900"],
});

// Note: We can't load Helvetica directly from Google Fonts as it's not available there
// We'll use the system Helvetica font via CSS in globals.css

export const metadata: Metadata = {
  title: "Signature Homes of Carolina LLC - Custom Home Builder in Beaufort County",
  description: "Expert custom home builder, barndominium construction, and home renovation services in Beaufort County, South Carolina. Quality craftsmanship with over 40 years of experience.",
  keywords: ["custom homes", "barndominiums", "home renovation", "Beaufort County", "South Carolina", "David Johnson", "builder"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}
