"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { debounce } from 'lodash'

// ======================================================
// CONFIGURATION - EDIT THIS SECTION TO ADD/MODIFY PROJECTS
// ======================================================

type Project = {
  id: string
  name: string
  description: string
  featured?: boolean
  completionDate: string
}

type GalleryImage = {
  id: number
  title: string
  description: string
  projectId: string
  imageUrl: string
  featured?: boolean
}

// Projects data - Add your projects here
const PROJECTS: Project[] = [
  {
    id: "project-1",
    name: "Luxury Barndo'",
    featured: true,
    completionDate: "February 2025",
  },
  {
    id: "project-2",
    name: "Sharp Residence",
    completionDate: "May 2025",
  },
  // Add more projects by copying the structure above
]

// Gallery images - Add your images here
const GALLERY_IMAGES: GalleryImage[] = [
  // Barndominium Project Images
    {
    id: 1,
    projectId: "project-1",
    imageUrl: "/images/gallery/bathroom-main.png",
  },
  {
    id: 2,
    projectId: "project-1",
    imageUrl: "/images/gallery/bathroom-tub.png",
  },
  {
    id: 3,
    projectId: "project-1",
    imageUrl: "/images/gallery/bathroom-shower.png",
  },
  {
    id: 4,
    projectId: "project-1",
    imageUrl: "/images/gallery/kitchen.png",
  },
  {
    id: 5,
    projectId: "project-1",
    imageUrl: "/images/gallery/living-room.png",
  },
  {
    id: 6,
    projectId: "project-1",
    imageUrl: "/images/gallery/screened-porch.png",
  },
  {
    id: 7,
    projectId: "project-1",
    imageUrl: "/images/gallery/garage.png",
  },
  {
    id: 8,
    projectId: "project-1",
    imageUrl: "/images/gallery/front-entrance.png",
  },
  {
    id: 9,
    projectId: "project-1",
    imageUrl: "/images/gallery/aerial-view.png",
  },
  {
    id: 10,
    projectId: "project-1",
    imageUrl: "/images/gallery/rear-view.png",
  },

  // Sharp Home Project 2 Home Images
  {
    id: 20,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/1.jpg",
    featured: true,
  },
  {
    id: 21,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/2.jpg",
  },
  {
    id: 22,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/3.jpg",
  },
  {
    id: 23,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/4.jpg",
  },
  {
    id: 24,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/5.jpg",
  },
  {
    id: 25,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/6.jpg",
  },
  {
    id: 26,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/7.jpg",
  },
  {
    id: 27,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/8.jpg",
  },
  {
    id: 28,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/9.jpg",
  },
  {
    id: 29,
    projectId: "project-2",
    imageUrl: "/images/gallery/sharp/10.jpg",
  },

  // Add more images by copying the structure above
]

// ======================================================
// COMPONENT IMPLEMENTATION - YOU SHOULDN'T NEED TO MODIFY BELOW
// ======================================================

export default function GalleryClientPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Debounced function to handle lightbox open/close actions
  const debounceSetIsLightboxOpen = useRef(
    debounce((open: boolean) => {
      setIsLightboxOpen(open)
    }, 300)
  ).current

  // Filter images based on selected project
  const filteredImages = selectedProject
    ? GALLERY_IMAGES.filter((img) => img.projectId === selectedProject)
    : GALLERY_IMAGES

  const getProject = (projectId: string) => {
    return PROJECTS.find((p) => p.id === projectId)
  }

  const sortedProjects = [...PROJECTS].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return a.name.localeCompare(b.name)
  })

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= filteredImages.length) newIndex = 0
    if (newIndex < 0) newIndex = filteredImages.length - 1
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Gallery Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of completed projects and see our craftsmanship in action.
          </p>
        </div>

        {/* Project Selection */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Projects</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <Button variant={selectedProject === null ? "default" : "outline"} onClick={() => setSelectedProject(null)}>
              All Projects
            </Button>
            {sortedProjects.map((project) => (
              <Button
                key={project.id}
                variant={selectedProject === project.id ? "default" : "outline"}
                onClick={() => setSelectedProject(project.id)}
              >
                {project.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-lg cursor-pointer group ${image.featured ? "sm:col-span-2 sm:row-span-2" : ""}`}
              onClick={() => {
                setSelectedImage(image)
                debounceSetIsLightboxOpen(true)
              }}
            >
              <div className="relative aspect-[4/3] w-full h-full">
                <Image
                  src={image.imageUrl || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"  // Adjust placeholder as per your image setup
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                    <p className="text-sm opacity-90 mt-1">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl font-medium mb-2">No images found</p>
            <Button onClick={() => setSelectedProject(null)}>View All Projects</Button>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={debounceSetIsLightboxOpen}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          {selectedImage && (
            <div className="flex flex-col">
              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedImage.imageUrl || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 text-foreground hover:bg-background/80"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 text-foreground hover:bg-background/80"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>

              <div className="p-4 bg-background">
                <p className="text-muted-foreground mt-1">Project: {getProject(selectedImage.projectId)?.name}</p>

                {selectedImage.projectId && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    <span> </span>
                    {getProject(selectedImage.projectId)?.completionDate}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
