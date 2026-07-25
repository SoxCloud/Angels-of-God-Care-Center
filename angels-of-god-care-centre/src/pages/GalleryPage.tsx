import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import CategoryFilter from '../components/gallery/CategoryFilter'
import GalleryGrid from '../components/gallery/GalleryGrid'
import { getGalleryImages, getAllCategories } from '../utils/images'

export default function GalleryPage() {
  const images = useMemo(() => getGalleryImages(), [])
  const categories = useMemo(() => getAllCategories(images), [images])
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-light rounded-full mb-4">
            <Camera className="w-8 h-8 text-sky-dark" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-3">
            Our Gallery
          </h1>
          <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the joyful moments, learning adventures, and special events at Angels of God Care Centre.
          </p>
        </motion.div>

        {images.length > 0 ? (
          <>
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
            />
            <GalleryGrid images={filtered} />
          </>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-nunito">No photos yet. Add images to <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/assets/images/gallery/</code></p>
          </div>
        )}
      </div>
    </div>
  )
}
