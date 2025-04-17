"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClockHour8,
  IconBrandFacebook,
  IconBrandInstagram,
  IconCheck
} from "@tabler/icons-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the form to a backend
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      // Reset form fields
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24 mb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next construction or renovation project?
              Get in touch with our team for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a project type</option>
                        <option value="custom-home">Custom Home</option>
                        <option value="barndominium">Barndominium</option>
                        <option value="renovation">Home Renovation</option>
                        <option value="kitchen-bath">Kitchen & Bathroom Remodeling</option>
                        <option value="additions">Additions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                You can reach us through any of the methods below. We look forward to discussing your project.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoItem
                icon={IconMapPin}
                title="Address"
                details={["Beaufort County, South Carolina"]}
              />
              <ContactInfoItem
                icon={IconPhone}
                title="Phone"
                details={["843-592-1881"]}
              />
              <ContactInfoItem
                icon={IconMail}
                title="Email"
                details={["signaturehomesofcarolina2023@gmail.com"]}
              />
              <ContactInfoItem
                icon={IconClockHour8}
                title="Hours"
                details={["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: By appointment"]}
              />
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                >
                  <IconBrandFacebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                >
                  <IconBrandInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-bold mb-6">Our Location</h2>
          <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden relative">
            {/* In a real implementation, you'd use a proper map component/iframe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <IconMapPin className="h-12 w-12 text-primary mb-4 mx-auto" />
                <p className="text-lg font-medium">Beaufort County, South Carolina</p>
                <p className="text-muted-foreground">
                  Serving the Beaufort County area with quality custom home building services
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-serif font-bold mb-6">Service Area</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We provide custom home building, barndominium construction, and renovation services throughout
            Beaufort County, South Carolina. Contact us to discuss your project and schedule a consultation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ContactInfoItem({
  icon: Icon,
  title,
  details
}: {
  icon: React.FC<{ className?: string }>;
  title: string;
  details: string[];
}) {
  return (
    <div className="flex items-start">
      <div className="p-3 bg-primary/10 rounded-lg mr-4">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="text-muted-foreground space-y-1 mt-1">
          {details.map((detail) => (
            <p key={`${title}-${detail.replace(/\s+/g, '-').toLowerCase()}`}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
