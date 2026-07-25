import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className={`text-3xl md:text-4xl font-bold font-poppins mb-3 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
