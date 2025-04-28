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
  IconChecks,
  IconCheck,
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
  className="relative min-h-screen text-white overflow-hidden"
>
  <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
    <div className="absolute inset-0 bg-black/75 z-10" />
    <Image
      src="/images/cover.jpg"
      alt="Luxury home exterior"
      fill
      className="object-cover"
      priority
      unoptimized
    />
  </motion.div>

  <div className="relative z-10 flex flex-col justify-center items-center text-center h-full pt-24 pb-20">
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="mb-12"
    >
      <div className="w-[200px] h-[300px] md:w-[500px] md:h-[300px] flex items-center justify-center mx-auto relative">
        <Image
          src="/logo.png"
          alt="Signature Homes of Carolina Logo"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </motion.div>

    {/* Title & Text */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="container"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-6">
        <span className="text-primary">Signature</span> Homes of <span className="text-primary">Carolina</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-3 text-white/90 font-helvetica">
        Build <span className="font-bold text-primary">Bold</span>. Live <span className="font-bold text-primary">Beautiful</span>.
      </p>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 italic text-white/80">
        At Signature Homes of Carolina, we craft more than homes — we bring your dream to life...
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
          <Link href="/projects">
            View Projects
            <IconChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 text-lg">
          <Link href="/contact">
            Contact Us
          </Link>
        </Button>
      </div>
    </motion.div>

    {/* Badge */}
    <div className="flex justify-center pt-10">
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
            At Signature Homes of Carolina, we craft more than homes — we bring your dream to life. Whether you envision a modern barndominium built to withstand the test of time. From start to finish, we’re by your side — listening, guiding, and delivering.

            </p>


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
            <div className="mr-4">
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
      description: "Your home should be as unique as you are. Whether you’re drawn to the charm of a Lowcountry cottage or the bold lines of a modern build, we create fully custom homes designed around your vision. Choose from traditional stick-built construction or explore the strength and style of metal builds.",
      icon: IconHome2,
    },
    {
      id: "barndominiums",
      title: "Barndominiums",
      description: "Blending rustic appeal with modern efficiency, our barndominiums are a smart, durable choice — especially in hurricane-prone areas. Built with metal framing and sustainable materials, these structures are low-maintenance, energy-efficient, and fully customizable for any lifestyle.",
      icon: IconBuildingWarehouse,
    },
    {
      id: "renovations",
      title: "Renovations & Additions",
      description: "Love where you live but want to make it better? From kitchen makeovers to whole-home renovations, we transform outdated spaces into beautiful, functional living environments — always with an eye on quality, craftsmanship, and comfort.",
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
  {/* Section Badge */}
  <div className="flex justify-center mb-10">
    <div className="bg-primary/80 px-6 py-2 rounded-lg shadow text-white text-sm font-semibold tracking-wider uppercase">
      ABOUT
    </div>
  </div>

{/* Main Glass Panel */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="bg-muted/70 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-16 shadow-xl"
>
  <div className="grid md:grid-cols-2 gap-12 text-left">
    {/* Left Column */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
        How We Operate
      </h2>
      <p className="text-muted-foreground mb-8 max-w-prose leading-relaxed">
        At Signature Homes of Carolina, we believe in character, not copies. No cookie-cutter builds — only thoughtful, heart-driven craftsmanship and trusted relationships.
      </p>

      <div className="space-y-6">
        {[
          {
            icon: "📋",
            title: "Initial Consultation & Homesite Selection",
            desc: "We begin by understanding your vision and budget, then help secure the ideal homesite."
          },
          {
            icon: "✍️",
            title: "Design Collaboration Within Your Budget",
            desc: "We create a home that fits your lifestyle and budget — without sacrificing quality."
          },
          {
            icon: "📑",
            title: "Transparent Contracting & Realistic Expectations",
            desc: "We’re upfront about costs and timelines to keep things clear and stress-free."
          },
          {
            icon: "🧱",
            title: "Material Selection with Expert Guidance",
            desc: "We guide you in picking durable, low-maintenance finishes that match your style."
          },
          {
            icon: "📞",
            title: "Clear Communication Throughout",
            desc: "You’ll always know what’s happening — no surprises, just consistent updates."
          },
          {
            icon: "📆",
            title: "Proactive Project Management",
            desc: "We manage every detail to keep your build on time and within budget."
          },
          {
            icon: "🏅",
            title: "Quality Craftsmanship Delivered",
            desc: "With 40+ years of experience, we deliver homes built to the highest standards."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-muted/90 border border-border/40 backdrop-blur-lg rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
        Why Are We Different
      </h2>
      <p className="text-muted-foreground mb-8 max-w-prose leading-relaxed">
        At Signature Homes of Carolina, we don’t believe in cookie-cutter homes — we believe in craftsmanship with character, homes with heart, and partnerships built on trust. Here’s what makes us stand out:
      </p>

      <div className="space-y-6">
        {[
          {
            icon: "🏆",
            title: "Built on Experience, Backed by Awards",
            desc: "Founder David Johnson brings 40+ years and multiple Lighthouse Awards to your build."
          },
          {
            icon: "🌪️",
            title: "Hurricane-Ready, Coastal Strong",
            desc: "We build with storm-resistant materials to ensure long-term coastal resilience."
          },
          {
            icon: "🌿",
            title: "Low-Maintenance, Sustainable Materials",
            desc: "We use efficient, eco-friendly materials that look great and last longer."
          },
          {
            icon: "🏗️",
            title: "Custom Homes & Barndominiums (Barndos)",
            desc: "From modern barndos to classic homes — every build is custom to your vision."
          },
          {
            icon: "🤝",
            title: "True Partnership from Start to Finish",
            desc: "We’re with you from day one — responsive, proactive, and invested in your success."
          },
          {
            icon: "📣",
            title: "Communication You Can Count On",
            desc: "We keep you in the loop, set expectations clearly, and answer every question."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-muted/90 border border-border/40 backdrop-blur-lg rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-5xl font-helvetica font-bold mb-6 mt-8">
      The <span className="text-primary">Signature</span> Difference?
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
      We build homes that are strong, smart, and sustainable — and we treat our clients like family. That’s the Signature Homes of Carolina promise.
    </p>
  </motion.div>
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
                Let’s Build <span className="text-primary">Your</span> Future Home
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to bring your vision to life? Let’s talk.
                Whether you're starting from scratch or reimagining your current home,
                 Signature Homes of Carolina is here to guide you — every step of the way.
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
      <div className="p-3  mr-4">
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