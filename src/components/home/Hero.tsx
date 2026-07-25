import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/hero.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-sky/60 via-sunshine/40 to-grass/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-0" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6"
        >
          🌟 Where Little Hearts Learn & Grow
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-tight mb-6"
        >
          Welcome to
          <span className="block text-sunshine-dark">Angels of God</span>
          Care Centre
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-nunito"
        >
          A nurturing, faith-based preschool where your child's potential blossoms through
          play, discovery, and love in a safe and caring environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/apply"
            className="px-8 py-4 bg-sunshine hover:bg-sunshine-dark text-gray-800 rounded-full text-lg font-bold font-nunito transition-all hover:shadow-2xl hover:scale-105"
          >
            Enrol Your Child Today
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full text-lg font-semibold font-nunito transition-all border-2 border-white/40"
          >
            Explore Our Gallery
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  )
}
