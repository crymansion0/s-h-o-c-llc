"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconHome2,
  IconBuildingWarehouse,
  IconTools,
  IconChevronRight,
  IconArrowRight,
  IconStarFilled,
  IconMapPin
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

// Hero Section with Parallax Effect
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(".parallax-bg");
      for (const element of parallaxElements) {
        const speed = element.getAttribute("data-speed") || "0.1";
        const offset = window.scrollY * Number.parseFloat(speed);
        (element as HTMLElement).style.setProperty(
          "--parallax-offset",
          `${offset}px`
        );
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen text-white overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/cover.jpg"
          alt="Luxury home exterior"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-12"
        >
          <div className="w-[200px] h-[300px] md:w-[500px] md:h-[300px] flex items-center justify-center mx-auto mb-5 relative">
            <Image
              src="/logo.png"
              alt="Signature Homes of Carolina Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-6 text-white">
            <span className="text-primary">Signature</span> Homes of <span className="text-primary">Carolina</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-3 text-white/90">
            Building dream homes in the Low Country of South Carolina.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary italic">
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg"
            >
              <Link href="/projects">
                View Projects
                <IconChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 text-lg"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6 bg-background/80 backdrop-blur-sm p-3 rounded-full"
          >
            <div className="flex items-center gap-2">
              <IconStarFilled className="h-5 w-5 text-yellow-500" />
              <span className="text-white font-medium">Award-Winning Builder</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <IconMapPin className="h-5 w-5 text-primary" />
              <span className="text-white font-medium">Beaufort County, SC</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section with Animation
function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary/60 px-4 py-2 rounded-lg">
              <h2 className="text-white font-medium text-sm uppercase tracking-wider">About Us</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-helvetica font-bold">
              Prioritizing Integrity and Craftsmanship.
            </h2>
            <p className="text-lg text-muted-foreground">
            At Signature Homes of Carolina we are proud to have assembled an expert team with experience spanning every aspect of the homebuilding process and
              reflect the company's core values in their everyday lives.
            </p>

              <ul className="text-lg">
                  <li>⁃ Guidance through choosing a homesite</li>
                  <li>⁃ Assist with designing a home within your budget</li>
                  <li>⁃ Draft a fair contract with transparent pricing</li>
                  <li>⁃ Set realistic expectations</li>
                  <li>⁃ Guide you through the material selection process</li>
                  <li>⁃ Designers are available to help guide you through the selections </li>
                  <li>⁃ Keep communication clear and regular</li>
                  <li>⁃ Proactively manage your project to minimize stress</li>
                  <li>⁃ Stay on budget and schedule</li>
                  <li>⁃ Deliver a quality home</li>
              </ul>

              <p className="text-2xl text-muted-foreground">
                We keep it <span className="font-bold text-white">simple</span>, and carefully <span className="font-bold text-white">manage</span> our project capacity so we are here for <span className="font-bold text-primary">YOU</span>, <span className="text-2xl">when you need us.</span>
              </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1">
                <span className="text-3xl font-bold text-primary">30+</span>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-muted-foreground">Client Satisfaction</span>
              </div>
            </div>
            <div>
              <Button asChild size="lg" className="mt-4">
                <Link href="/services">
                  Services
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/37.jpg"
                alt="Custom home construction"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -left-8 bg-background p-5 rounded-lg shadow-lg max-w-[200px]"
            >
              <div className="font-bold text-xl font-helvetica mb-2">Expert Builder</div>
              <p className="text-sm text-muted-foreground">
                Led by David Johnson, with over 30 years of experience in residential construction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      id: "custom-homes",
      title: "Custom Homes",
      description: "We design and build beautiful custom homes tailored to your unique preferences, needs, and lifestyle in Beaufort County, South Carolina.",
      icon: IconHome2,
    },
    {
      id: "barndominiums",
      title: "Barndominiums",
      description: "Experience the perfect blend of rustic charm and modern living with our custom-designed and built barndominiums, offering spacious, versatile living spaces.",
      icon: IconBuildingWarehouse,
    },
    {
      id: "renovations",
      title: "Home Renovations",
      description: "Transform your existing space with our comprehensive renovation services, from kitchen and bathroom remodels to whole-house transformations.",
      icon: IconTools,
    }
  ];

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/60 px-4 py-2 rounded-lg mb-4">
            <h2 className="text-white font-medium text-sm uppercase tracking-wider">Signature Services</h2>
          </div>
          <h2 className="text-3xl md:text-5xl font-helvetica font-bold mb-6">
           What We Do Best
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-helvetica font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <IconChevronRight className="ml-1 h-4 w-4" />
                  </Link>

                  {/* Animated border on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Projects Section
function FeaturedProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: "Project 1",
      category: "Custom Homes",
      imageUrl: "/images/39.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      category: "Barndominiums",
      imageUrl: "/images/37.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      category: "Home Renovations",
      imageUrl: "/images/47.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-primary/60 px-4 py-2 rounded-lg mb-4">
              <h2 className="text-white font-medium text-sm uppercase tracking-wider">Our Work</h2>
            </div>
            <h2 className="text-3xl md:text-5xl font-helvetica font-bold mb-6">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse through some of our recent construction projects across
              the Low Country of South Carolina, showcasing our quality craftsmanship and attention to detail.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Button asChild size="lg" variant="outline" className="mt-6 md:mt-0">
              <Link href="/projects">
                View All Projects
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="hover-card-animation"
            >
              <div className="relative h-80 rounded-lg overflow-hidden group">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <p className="text-sm font-medium text-primary/90 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-helvetica font-semibold">{project.title}</h3>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 w-fit p-0 h-auto text-white hover:text-primary hover:bg-transparent"
                  >
                    <Link href="/projects">
                      View Project
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Owner Profile Section */}
      <div className="container mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-muted rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="md:col-span-1 flex justify-center">
 <div className="w-[200px] h-[300px] md:w-[500px] md:h-[300px] flex items-center justify-center mx-auto mb-5 relative">
            <Image
              src="/logo.png"
              alt="Signature Homes of Carolina Logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-helvetica font-bold mb-4">Signature Homes Of Carolina</h2>
              <h3 className="text-xl font-medium text-primary mb-4">Low Country, SC</h3>
              <p className="text-muted-foreground mb-4">
                Signature Homes of Carolina stands as a Beacon of excellence in the custom home market, leveraging over thirty years experience to deliver unparalleled quality and craftsmanship. Our commitment to building distinctive homes that reflect the unique tastes and lifestyles of our clients sets us apart in the industry.
                </p>
                <p className="text-muted-foreground mb-4">
With a deep understanding of architectural design and construction processes, we pride ourselves on our ability to transform visions into reality.
In summary, Signature Homes of Carolina is synonymous with excellence in custom home building. Our extensive experience combined with our unwavering commitment to quality ensures that we continue to set the standard in the industry for years to come.
</p>
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Book a consultation
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      text: "David and his team at Signature Homes of Carolina delivered beyond our expectations. Their attention to detail and craftsmanship are evident in every corner of our new home.",
      author: "Antonio & Alyssa",
      role: "Custom Home Clients",
    },
    {
      id: 2,
      text: "Our barndominium project was handled with expertise and professionalism from start to finish. The unique design elements and quality construction make our home truly special.",
      author: "Terry & April",
      role: "Barndominium Client",
    },
    {
      id: 3,
      text: "The renovation of our waterfront property was a complex project, but David's experience and guidance made the process smooth. We couldn't be happier with the results.",
      author: "Jay & Pamela",
      role: "Renovation Clients",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-helvetica font-bold mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Signature Homes of Carolina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Card className={cn(
                "h-full border-border bg-background relative z-10 hover:shadow-lg transition-all duration-300",
                index === 1 ? "md:mt-8" : ""
              )}>
                <CardContent className="p-8">
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <IconStarFilled key={`star-${testimonial.id}-${i}`} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                  <div className="flex flex-col">
                    <span className="font-semibold">{testimonial.author}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                  </div>
                </CardContent>
              </Card>
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/20 rounded-br-3xl z-0 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Call-to-action Section
function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="bg-muted rounded-2xl p-8 md:p-16 relative overflow-hidden">
          {/* Background decorative pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-10">
            <div className="absolute -right-10 -top-10 w-80 h-80 bg-primary rounded-full" />
            <div className="absolute -right-20 bottom-0 w-60 h-60 bg-accent rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-bold mb-6">
                Thats our <span className="text-primary">Signature</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to schedule a consultation. Let's discuss your vision and turn it
                into reality with our expert craftsmanship and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get In Touch
                    <IconChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
