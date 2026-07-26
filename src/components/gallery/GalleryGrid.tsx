import { useState } from 'react'
import { motion } from 'framer-motion'
import type { GalleryImage } from '../../types'
import Lightbox from './Lightbox'

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null)
  const goNext = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % images.length : null)

  return (
    <>
      <div className="masonry-grid">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.src}
              alt="Gallery image"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  )
}
