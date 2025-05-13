"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-muted text-white">
        <div className="container text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
          >
            About <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover how we build, what sets us apart, and the people behind your custom home.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-primary text-white text-base font-medium rounded-xl shadow-lg transition duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* Main Sections */}
      <div className="container space-y-16 mt-16">
        {/* Section Block */}
        <Card className="p-6 md:p-10 shadow-2xl rounded-2xl hover:scale-[1.01] transition-transform duration-300">
          <CardContent className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">How We Work</h2>
            <p className="text-muted-foreground text-lg text-center">
              Our process is clear, collaborative, and built around your vision.
            </p>
            <ol className="list-inside space-y-4 text-muted-foreground text-base leading-relaxed">
              <li>
                <strong>📍 Consultation & Site Selection:</strong> Share your vision. We'll help you find the perfect
                lot or build on yours.
              </li>
              <li>
                <strong>🧠 Design Within Budget:</strong> We tailor your home to fit your lifestyle and financial goals.
              </li>
              <li>
                <strong>📄 Clear Contracts:</strong> Honest pricing, realistic timelines, and no surprises.
              </li>
              <li>
                <strong>🧱 Material Guidance:</strong> Expert support choosing quality, low-maintenance materials.
              </li>
              <li>
                <strong>📞 Constant Communication:</strong> We keep you informed — always.
              </li>
              <li>
                <strong>📅 Seamless Project Management:</strong> Organized, proactive, and detail-driven from start to
                finish.
              </li>
              <li>
                <strong>🏠 Built to Last:</strong> Backed by 40+ years of experience and a commitment to quality.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Why We're Different */}
        <Card className="p-6 md:p-10 shadow-2xl rounded-2xl hover:scale-[1.01] transition-transform duration-300">
          <CardContent className="space-y-6">
            <h2 className="text-4xl font-bold text-center">Why We're Different</h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                <strong>🏆 Award-Winning Experience:</strong> Founder David Johnson brings 40+ years of expertise and
                multiple Lighthouse Awards.
              </p>
              <p>
                <strong>🌪️ Built Coastal Strong:</strong> Durable homes tailored to withstand Carolina's coastal climate.
              </p>
              <p>
                <strong>🌿 Smart Materials:</strong> Sustainable, low-maintenance, and built to impress.
              </p>
              <p>
                <strong>🏗️ Custom & Barndos:</strong> From modern barndominiums to traditional builds, we create homes
                that match your life.
              </p>
              <p>
                <strong>🤝 Real Partnership:</strong> We listen, guide, and walk with you every step of the way.
              </p>
              <p>
                <strong>💬 Reliable Communication:</strong> Clear, responsive, and always transparent.
              </p>
              <p className="font-semibold text-primary">
                The Signature Difference? We build with heart — and treat you like family.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Meet the Team */}
        <Card className="p-6 md:p-10 shadow-2xl rounded-2xl hover:scale-[1.01] transition-transform duration-300">
          <CardContent className="space-y-6">
            <h2 className="text-4xl font-bold text-center">Meet the Team</h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>Our team is more than builders — we're collaborators who care deeply about your home.</p>
              <p>
                David Johnson, our founder and builder-in-chief, leads each project hands-on with 40+ years of
                expertise.
              </p>
              <p>We work with trusted local vendors and craftsmen who share our commitment to quality and care.</p>
              <p className="font-semibold text-center text-primary">Built with purpose. Driven by passion.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
