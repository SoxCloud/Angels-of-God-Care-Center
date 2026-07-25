import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

export default function Welcome() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-rose" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-6">
              A Warm Welcome from Our Family to Yours
            </h2>
            <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At <strong>Angels of God Care Centre</strong>, we believe that every child is a precious gift. 
              Our doors open wide to welcome your little ones into a world of discovery, creativity, 
              and faith-based learning.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From the moment you step through our gates, you'll feel the warmth of a community that 
              truly cares. Our dedicated team provides a safe, stimulating environment where children 
              develop confidence, make friends, and build a strong foundation for life.
            </p>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-grass hover:bg-grass-dark text-white rounded-full font-bold font-nunito transition-all shadow-md hover:shadow-xl"
              >
                Begin Your Journey With Us <Heart className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
