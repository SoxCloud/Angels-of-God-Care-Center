import { motion } from 'framer-motion'

const milestones = [
  { year: 2012, event: 'Angels of God Care Centre opened its doors with 8 children.' },
  { year: 2015, event: 'Expanded to include a dedicated learning centre and outdoor play area.' },
  { year: 2018, event: 'Achieved full registration and accreditation from the Department of Education.' },
  { year: 2021, event: 'Introduced technology-assisted learning and music programs.' },
  { year: 2024, event: 'Celebrated over 150 enrolled children and 15 dedicated staff members.' },
]

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-grass rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Angels of God Care Centre was founded in 2012 with a simple mission: to provide a 
              safe, loving, and faith-centered environment where every child feels valued and inspired 
              to learn. What started as a small home-based daycare has grown into one of Palmridge's 
              most trusted early childhood education centres.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our approach blends structured learning with creative play, guided by Christian values 
              of love, respect, and kindness. We believe every child is a unique gift from God, and 
              we nurture their individual talents in a warm, family-like atmosphere.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-sky-light/50 rounded-lg text-sm font-semibold text-gray-700">✨ Registered & Accredited</div>
              <div className="px-4 py-2 bg-sunshine-light/50 rounded-lg text-sm font-semibold text-gray-700">❤️ Faith-Based Curriculum</div>
              <div className="px-4 py-2 bg-grass-light/50 rounded-lg text-sm font-semibold text-gray-700">👩‍🏫 Qualified Educators</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-light via-sunshine-light to-grass-light rounded-3xl opacity-30" />
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-6 text-center">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-sky rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {m.year.toString().slice(2)}
                      </div>
                      {i < milestones.length - 1 && <div className="w-0.5 h-full bg-sky-light mt-1" />}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-bold text-sky-dark">{m.year}</span>
                      <p className="text-gray-600 text-sm">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
