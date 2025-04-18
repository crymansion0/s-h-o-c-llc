"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconMenu2, IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-md py-2"
          : "bg-background border-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {/* Logo */}
            <div className="h-12 w-40 relative">
              <Image
                src="/logo.png"
                alt="Signature Homes of Carolina Logo"
                fill
                className="object-contain"
                unoptimized
              />

            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm rounded-md transition-all duration-300 relative hover:text-primary",
                    isActive
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild variant="default" size="sm" className="ml-4">
              <Link href="/contact" className="font-medium">
                <IconPhone className="mr-2 h-4 w-4" />
                Call Now
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost">
              <IconMenu2 className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <div className="h-12 w-48 relative mb-8">
              <Image
                src="/logo.jpg"
                alt="Signature Homes of Carolina Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <nav className="flex flex-col gap-6 mt-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/contact">
                  <IconPhone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
