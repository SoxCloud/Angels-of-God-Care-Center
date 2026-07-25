import { motion } from 'framer-motion'
import { Heart, GraduationCap, Shield, Sparkles, Users, Apple } from 'lucide-react'
import { whyChooseUs } from '../../data/gallery'
import AnimatedSection from '../ui/AnimatedSection'

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Apple: <Apple className="w-6 h-6" />,
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 text-center mb-3">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover what makes Angels of God Care Centre the perfect place for your child's early learning journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-gray-700 mb-4`}>
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-bold font-poppins text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
