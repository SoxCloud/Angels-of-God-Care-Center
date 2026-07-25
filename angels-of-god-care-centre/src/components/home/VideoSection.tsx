import { motion } from 'framer-motion'
import { Play, Video } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { getVideoSources } from '../../utils/images'

export default function VideoSection() {
  const videos = getVideoSources()

  if (videos.length === 0) return null

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4 mx-auto block">
            <Video className="w-8 h-8 text-rose" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 text-center mb-3">
            See Us in Action
          </h2>
          <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Watch moments of joy, learning, and discovery at Angels of God Care Centre.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(0, 3).map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-black"
              >
                <video
                  src={src}
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' fill='%23f0f0f0'%3E%3Crect width='640' height='360'/%3E%3Ctext x='320' y='180' text-anchor='middle' fill='%23999' font-size='24'%3EVideo Clip%3C/text%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-gray-700 ml-0.5" />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
