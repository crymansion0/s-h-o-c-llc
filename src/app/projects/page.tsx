"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useInView } from "react-intersection-observer";

// Project categories
const categories = [
  { id: "all", label: "All Projects" },
  { id: "custom-homes", label: "Custom Homes" },
  { id: "barndominiums", label: "Barndominiums" },
  { id: "renovations", label: "Home Renovations" },
];

// Sample construction projects - real version would use a database
const projectsData = [
  {
    id: 1,
    title: "Luxury Barndominium",
    category: "barndominiums",
    description: "Custom-built luxury waterfront home with high-end finishes and panoramic views.",
    imageUrl: "/images/barn.jpg",
    completed: "2025",
    location: "Beaufort County, SC",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<null | typeof projectsData[0]>(null);

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // Hero animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Staggered card animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="bg-muted py-16 md:py-24 mb-12"
      >
        <div className="container">
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-6 text-center"
          >
            Our <span className="text-primary">Projects</span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto"
          >
            Explore our portfolio of exceptional custom homes, barndominiums, and renovations throughout
            Beaufort County, South Carolina.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filtering */}
      <div className="container mb-12">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 text-sm md:text-base"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Projects Grid */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                    variants={cardVariant}
                  />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-helvetica">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.location} • Completed {selectedProject.completed}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-medium mb-2">Project Details</h3>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Completed:</span>
                      <span>{selectedProject.completed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Category:</span>
                      <span>
                        {categories.find(c => c.id === selectedProject.category)?.label || selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  project,
  onSelect,
  variants
}: {
  project: typeof projectsData[0];
  onSelect: () => void;
  variants: Variants;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="group"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card
            className="overflow-hidden hover-card-animation cursor-pointer border-border bg-card transition-all duration-300 hover:shadow-lg"
            onClick={onSelect}
          >
            <CardContent className="p-0">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-helvetica font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground">{project.location}</span>
                  <span className="text-xs text-primary font-medium">{project.completed}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 overflow-hidden">
          <div className="relative h-40">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-4 text-white">
              <h4 className="font-semibold">{project.title}</h4>
              <p className="text-xs opacity-80">{project.location}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm">{project.description}</p>
            <p className="text-xs mt-2 text-muted-foreground">Click to view details</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
}
