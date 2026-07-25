import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SuccessModalProps {
  show: boolean
  childName?: string
}

export default function SuccessModal({ show, childName }: SuccessModalProps) {
  const name = childName || 'your child'
  const waMsg = `Good day, I have submitted an enrolment application for ${name}. I am sending the supporting documents as requested. Kindly confirm receipt. Thank you.`

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-grass-light rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-grass-dark" />
            </motion.div>
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-2">
              Application Submitted
            </h3>
            <p className="text-gray-600 mb-4">
              Thank you for applying to Angels of God Care Centre. We will review your application
              and contact you within 2–3 business days.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-6 text-left">
              <p className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Next Step — Send Your Documents
              </p>
              <p className="text-yellow-700 text-sm mb-2">
                Please send photos of your supporting documents (birth certificate, immunisation card, etc.)
                to us on WhatsApp. Make sure your child's full name is written on each document.
              </p>
              <p className="text-yellow-700 text-sm">
                <strong>Child's name:</strong> {name}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/27123456789?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold font-nunito text-lg transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Send Documents via WhatsApp
              </a>
              <Link
                to="/"
                className="block w-full px-6 py-3 bg-sky hover:bg-sky-dark text-white rounded-full font-bold font-nunito transition-colors"
              >
                Return Home
              </Link>
            </div>

            <p className="text-gray-400 text-xs mt-4">
              Your personal information will be processed in accordance with POPIA.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
