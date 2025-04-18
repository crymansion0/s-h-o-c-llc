"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Project data
const PROJECT_DATA = {
  name: "Luxury Barndominium",
  completionDate: "February 2025",
  location: "South Carolina",
  description:
    "Custom home with modern farmhouse elements featuring exposed wooden beams, stone accents, and metal roof.",
}

// Define room categories
const ROOM_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
  { id: "outdoor", label: "Outdoor Spaces" },
]

// Gallery images with metadata
const galleryImages = [
  {
    id: 1,
    title: "Master Bathroom",
    description: "Master bathroom featuring custom wooden vanity, glass shower enclosure, and freestanding tub",
    category: "bathroom",
    imageUrl: "/images/gallery/bathroom-main.png",
    order: 1,
    featured: true,
  },
  {
    id: 2,
    title: "Freestanding Tub",
    description: "Elegant freestanding tub with matte black fixtures",
    category: "bathroom",
    imageUrl: "/images/gallery/bathroom-tub.png",
    order: 2,
  },
  {
    id: 3,
    title: "Walk-in Shower",
    description: "Spacious walk-in shower with decorative tile accent strip",
    category: "bathroom",
    imageUrl: "/images/gallery/bathroom-shower.png",
    order: 3,
  },
  {
    id: 4,
    title: "Kitchen",
    description: "Modern kitchen with exposed wooden beams, custom island, and pendant lighting",
    category: "kitchen",
    imageUrl: "/images/gallery/kitchen.png",
    order: 4,
    featured: true,
  },
  {
    id: 5,
    title: "Living Room",
    description: "Open concept living area with vaulted ceiling and wooden beams",
    category: "interior",
    imageUrl: "/images/gallery/living-room.png",
    order: 5,
    featured: true,
  },
  {
    id: 6,
    title: "Screened Porch",
    description: "Screened porch with wooden decking and stone column accents",
    category: "outdoor",
    imageUrl: "/images/gallery/screened-porch.png",
    order: 6,
  },
  {
    id: 7,
    title: "Garage",
    description: "Two-car garage with stone accents and metal roof",
    category: "exterior",
    imageUrl: "/images/gallery/garage.png",
    order: 7,
  },
  {
    id: 8,
    title: "Front Entrance",
    description: "Welcoming front entrance with wooden beam accents and stone columns",
    category: "exterior",
    imageUrl: "/images/gallery/front-entrance.png",
    order: 8,
    featured: true,
  },
  {
    id: 9,
    title: "Aerial View",
    description: "Aerial view of the property showcasing the metal roof and surrounding landscape",
    category: "exterior",
    imageUrl: "/images/gallery/aerial-view.png",
    order: 9,
    featured: true,
  },
  {
    id: 10,
    title: "Rear View",
    description: "Rear view of the home showing the screened porch and backyard",
    category: "exterior",
    imageUrl: "/images/gallery/rear-view.png",
    order: 10,
  },
]

// Sort options
const SORT_OPTIONS = [
  { id: "featured", label: "Featured First" },
  { id: "order", label: "Project Flow" },
  { id: "name-asc", label: "Name (A-Z)" },
  { id: "name-desc", label: "Name (Z-A)" },
]

// View options
const VIEW_OPTIONS = [
  { id: "grid", label: "Grid View" },
  { id: "masonry", label: "Masonry View" },
]

export default function GalleryPage() {
  // State
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("masonry")
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter and sort images
  useEffect(() => {
    let result = [...galleryImages]

    // Apply category filter
    if (activeCategory !== "all") {
      result = result.filter((image) => image.category === activeCategory)
    }

    // Apply sorting
    switch (sortBy) {
      case "featured":
        result = result.sort((a, b) => {
          if (a.featured === b.featured) {
            return a.order - b.order
          }
          return a.featured ? -1 : 1
        })
        break
      case "order":
        result = result.sort((a, b) => a.order - b.order)
        break
      case "name-asc":
        result = result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name-desc":
        result = result.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    setFilteredImages(result)
  }, [activeCategory, sortBy])

  // Set current image index when selected image changes
  useEffect(() => {
    if (selectedImage) {
      const index = filteredImages.findIndex((img) => img.id === selectedImage.id)
      if (index !== -1) {
        setCurrentImageIndex(index)
      }
    }
  }, [selectedImage, filteredImages])

  // Navigate to next image in lightbox
  const goToNextImage = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1])
    } else {
      setSelectedImage(filteredImages[0]) // Loop back to first image
    }
  }

  // Navigate to previous image in lightbox
  const goToPrevImage = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1])
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]) // Loop to last image
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-muted py-16 md:py-24 mb-12"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-helvetica font-bold mb-6">GALLERY</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              extended project gallery
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-primary font-medium">
              <span>Test</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Controls Section */}
      <div className="container mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {ROOM_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">View:</span>
              <div className="flex rounded-md border border-input overflow-hidden">
                {VIEW_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setViewMode(option.id)}
                    className={cn(
                      "px-3 py-2 text-sm",
                      viewMode === option.id ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="mb-8 p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-2">{PROJECT_DATA.name}</h2>
          <p className="text-muted-foreground mb-2">{PROJECT_DATA.description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span>
              Completed: <strong>{PROJECT_DATA.completionDate}</strong>
            </span>
            <span>
              Location: <strong>{PROJECT_DATA.location}</strong>
            </span>
            <span>
              Photos: <strong>{filteredImages.length}</strong>
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "image-grid-masonry",
          )}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={cn(
                "relative overflow-hidden rounded-lg cursor-pointer group",
                image.featured && viewMode === "masonry" ? "row-span-2" : "",
              )}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] w-full h-full">
                <Image
                  src={image.imageUrl || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 8v6" />
                    <path d="M8 11h6" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium">{image.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-1">
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No images found</h3>
            <p className="text-muted-foreground mb-4">Try selecting a different category</p>
            <Button onClick={() => setActiveCategory("all")}>View All Photos</Button>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          <DialogClose className="absolute right-4 top-4 z-10">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>

          {selectedImage && (
            <div className="flex flex-col">
              <div className="relative h-[80vh] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedImage.imageUrl || "/placeholder.svg"}
                      alt={selectedImage.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="sr-only">Next</span>
                </button>
              </div>

              {/* Image info */}
              <div className="p-4 bg-background">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium">{selectedImage.title}</h3>
                    <p className="text-muted-foreground mt-1">{selectedImage.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {PROJECT_DATA.name} • {PROJECT_DATA.completionDate}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Download
                    </Button>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <span className="hidden sm:inline">
                        {currentImageIndex + 1} of {filteredImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
