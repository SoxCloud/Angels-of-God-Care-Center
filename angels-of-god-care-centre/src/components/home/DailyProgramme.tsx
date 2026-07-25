import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { dailyProgramme } from '../../data/gallery'

export default function DailyProgramme() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 text-center mb-3">
            Our Daily Programme
          </h2>
          <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A balanced day filled with learning, play, rest, and nutritious meals.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {dailyProgramme.map((item, i) => (
            <AnimatedSection key={item.time} delay={i * 0.05}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 p-4 rounded-xl mb-2 transition-colors ${
                  i % 2 === 0 ? 'bg-sky-light/20' : 'bg-sunshine-light/20'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-sm font-bold font-poppins text-gray-700 min-w-[140px]">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-gray-400" />
                    {item.time}
                  </span>
                  <span className="text-gray-600 font-nunito">{item.activity}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
