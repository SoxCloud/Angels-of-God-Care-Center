import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function ApplyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sunshine-light rounded-full mb-4">
            <FileText className="w-8 h-8 text-sunshine-dark" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-3">
            Enrol Your Child
          </h1>
          <div className="w-20 h-1 bg-grass rounded-full mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete the form below to begin your child's journey at Angels of God Care Centre.
            We'll review your application and get back to you within 2–3 business days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100"
        >
          <iframe
            src="https://tally.so/embed/KYNdxD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="1450"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Enrolment Form"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
