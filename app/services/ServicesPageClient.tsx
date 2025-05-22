"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  IconHome2,
  IconBuildingWarehouse,
  IconTools,
  IconChecks,
  IconArrowRight,
  IconUserShield,
} from "@tabler/icons-react"
import { useInView } from "react-intersection-observer"

// Define service data
const services = [
  {
    id: "custom-homes",
    title: "Custom Homes",
    description:
      "Your home should be as unique as you are. Whether you’re drawn to the charm of a Lowcountry cottage or the bold lines of a modern build, we create fully custom homes designed around your vision. Choose from traditional stick-built construction or explore the strength and style of metal builds.",
    icon: IconHome2,
    image: "/images/37.jpg",
    benefits: [
      "Fully customized floor plans and designs",
      "High-quality materials and craftsmanship",
      "Energy-efficient construction methods",
      "Transparent pricing and project management",
    ],
  },
  {
    id: "barndominiums",
    title: "Barndominiums",
    description:
      "Blending rustic appeal with modern efficiency, our barndominiums are a smart, durable choice — especially in hurricane-prone areas. Built with metal framing and sustainable materials, these structures are low-maintenance, energy-efficient, and fully customizable for any lifestyle.",
    icon: IconBuildingWarehouse,
    image: "/images/barn.jpg",
    benefits: [
      "Open floor plans with flexible living spaces",
      "Durable metal and steel frame construction",
      "Modern amenities and custom finishes",
      "Cost-effective building solutions",
    ],
  },
  {
    id: "renovations",
    title: "Renovations & Additions",
    description:
      "Love where you live but want to make it better? From kitchen makeovers to whole-home renovations, we transform outdated spaces into beautiful, functional living environments — always with an eye on quality, craftsmanship, and comfort.",
    icon: IconTools,
    image: "/images/39.jpg",
    benefits: [
      "Complete kitchen and bathroom remodels",
      "Interior and exterior upgrades",
      "Structural modifications and additions",
      "Custom cabinetry and built-ins",
    ],
  },
]

function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-2xl md:text-x1 text-muted-foreground max-w-3xl mx-auto mb-12">
              What We Build, We Build to Last
            </p>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-4">
              Every project starts with a conversation — and ends with a home that’s tailor-made for the way you live.
              Whether you're building from the ground up or reimagining the space you're in, we bring craftsmanship,
              care, and decades of experience to every square foot.
            </p>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              From custom homes to barndominiums, renovations to hurricane-ready builds, our services are designed to
              meet your needs today and stand strong for tomorrow. We specialize in low-maintenance, sustainable
              materials and partner with you every step of the way — ensuring your vision is not only built, but built
              right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="container space-y-32">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} isReversed={index % 2 !== 0} id={service.id} />
        ))}
      </div>

      {/* Our Expertise Section */}
      <section className="mt-32 py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-helvetica font-bold mb-6">Our Construction Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With over 40 years of experience, David Johnson brings exceptional expertise to every project, ensuring
              the highest standards of quality and craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard
              title="Pre-Construction"
              items={["Design Consultation", "Project Planning", "Budgeting & Cost Estimation"]}
            />
            <ExpertiseCard
              title="Construction"
              items={["Quality Materials & Methods", "Expert Craftsmanship", "Project Management"]}
            />
            <ExpertiseCard
              title="After Completion"
              items={["Walk-through Inspection", "Warranty Coverage", "Customer Satisfaction Follow-up"]}
            />
          </div>
        </div>
      </section>

      {/* About Builder Section */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-primary/10 rounded-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-helvetica font-bold mb-6">Ready to Start Your Dream Project?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation and bring your vision to life with our expert craftsmanship.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

function ServiceSection({
  service,
  isReversed,
  id,
}: {
  service: (typeof services)[0]
  isReversed: boolean
  id: string
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} id={id} className="scroll-mt-24">
      <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${isReversed ? "md:grid-flow-dense" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-helvetica font-bold">{service.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground">{service.description}</p>
          <div className="pt-6 space-y-4">
            <h3 className="text-xl font-semibold">Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <motion.li
                  key={`benefit-${service.id}-${benefit.replace(/\s+/g, "-").toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <IconChecks className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="mt-4">
              <Link href="/contact">
                Request A Quote
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`${isReversed ? "md:order-first" : ""}`}
        >
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2">
                <IconUserShield className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Expert Craftsmanship</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExpertiseCard({ title, items }: { title: string; items: string[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-background rounded-lg p-6 shadow-sm border border-border"
    >
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <motion.li
            key={`${title.toLowerCase().replace(/\s+/g, "-")}-item-${item.replace(/\s+/g, "-").toLowerCase()}`}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start"
          >
            <IconChecks className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
