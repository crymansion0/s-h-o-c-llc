"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconCheck, // Import IconCheck for the success animation
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function SiteFooter() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle form submission to Netlify
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Netlify form submission requires a hidden field with the form name
    const formData = new FormData(form);
    const formAction = form.action;

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          form.reset();
        }, 3000);
      } else {
        alert("There was an issue with the submission. Please try again.");
      }
    } catch (error) {
      alert("There was an issue with the submission. Please try again.");
    }
  };

  return (
    <footer className="bg-muted border-t border-border overflow-hidden">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={footerAnimation}
            className="space-y-4"
          >
            <motion.div variants={itemAnimation}>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Signature Homes of Carolina LLC
              </h3>
            </motion.div>
            <motion.div variants={itemAnimation} className="flex items-start space-x-3">
              <IconMapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">
                Beaufort County, South Carolina
              </p>
            </motion.div>
            <motion.div variants={itemAnimation} className="flex items-start space-x-3">
              <IconPhone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-muted-foreground text-sm">843-592-1881</p>
              </div>
            </motion.div>
            <motion.div variants={itemAnimation} className="flex items-start space-x-3">
              <IconMail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm overflow-hidden text-ellipsis">
                signaturehomesofcarolina2023@gmail.com
              </p>
            </motion.div>
            <motion.div variants={itemAnimation} className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconBrandFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconBrandInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Site Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={footerAnimation}
            className="space-y-4"
          >
            <motion.h3 variants={itemAnimation} className="text-lg font-semibold mb-4">
              Quick Links
            </motion.h3>
            <motion.nav variants={itemAnimation} className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About
              </Link>
            </motion.nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={footerAnimation}
            className="space-y-4"
          >
            <motion.h3 variants={itemAnimation} className="text-lg font-semibold mb-4">
              Our Services
            </motion.h3>
            <motion.nav variants={itemAnimation} className="flex flex-col space-y-2">
              <Link
                href="/services#custom-homes"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Custom Homes
              </Link>
              <Link
                href="/services#barndominiums"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Barndominiums
              </Link>
              <Link
                href="/services#renovations"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home Renovations
              </Link>
            </motion.nav>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={footerAnimation}
            className="space-y-4 md:col-span-3 lg:col-span-1"
          >
            <motion.h3 variants={itemAnimation} className="text-lg font-semibold mb-4">
             Contact 
            </motion.h3>
            <motion.div variants={itemAnimation} className="space-y-3">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 p-6 rounded-lg text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                    <IconCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="message" // This is important for Netlify
                  method="POST"
                  data-netlify="true" // Enables Netlify Form handling
                  className="space-y-6"
                >
                  {/* Hidden input for Netlify form name */}
                  <input type="hidden" name="form-name" value="message" />
                  <Input type="email" placeholder="Email" name="Email:" className="bg-card border-border" />
                  <Textarea placeholder="Message" name="Message:"className="h-24 bg-card border-border" />
                  <Button className="w-full" type="submit" disabled={formSubmitted}>
                    {formSubmitted ? "Message Sent" : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 pt-6 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Signature Homes of Carolina LLC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
