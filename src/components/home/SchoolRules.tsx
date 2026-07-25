import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { schoolRules } from '../../data/gallery'

export default function SchoolRules() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-light/30 via-white to-grass-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-3">
              School Guidelines
            </h2>
            <div className="w-20 h-1 bg-sunshine rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6">
              To ensure a safe, happy, and organized environment for all our children, we kindly ask
              parents and guardians to follow these simple guidelines.
            </p>
            <div className="space-y-3">
              {schoolRules.map((rule, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-grass shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{rule}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-4 text-center">
                Fees Reminder
              </h3>
              <div className="bg-sunshine-light/40 rounded-2xl p-6 text-center mb-6">
                <p className="text-gray-500 text-sm mb-2">Monthly Tuition</p>
                <p className="text-4xl font-extrabold font-poppins text-gray-800">
                  Contact Us
                </p>
                <p className="text-gray-500 text-sm mt-2">for current fee structure</p>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span>Registration Fee</span>
                  <span className="font-semibold">Contact Us</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span>Payment Due</span>
                  <span className="font-semibold">By 7th of each month</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span>Late Payment Penalty</span>
                  <span className="font-semibold">R50 per day</span>
                </div>
                <div className="flex justify-between">
                  <span>Notice Period (Withdrawal)</span>
                  <span className="font-semibold">2 weeks</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-sky-light/30 rounded-xl text-sm text-gray-600">
                <p className="font-semibold text-gray-800 mb-1">💳 Bank Details</p>
                <p>FNB | Account: 63058615065</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
