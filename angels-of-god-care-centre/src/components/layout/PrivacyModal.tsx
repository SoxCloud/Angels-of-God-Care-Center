import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function PrivacyModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-poppins text-gray-800">Privacy Policy</h2>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-3 font-nunito">
              <p><strong>1. Who we are</strong><br />Angels of God Care Centre, 12302 Mkhunya Street, Palmridge Ext 1, Palmridge 1458.</p>
              <p><strong>2. What we collect</strong><br />We collect personal information including names, contact details, medical information, and family information required for the safe care of your child.</p>
              <p><strong>3. Purpose</strong><br />Your data is used solely for enrolment processing, communication, emergency contact, and regulatory compliance.</p>
              <p><strong>4. Sharing</strong><br />We do not sell or share your data with third parties except where required by law or with your explicit consent.</p>
              <p><strong>5. Retention</strong><br />Records are kept for the duration of enrolment plus 3 years, after which they are securely destroyed.</p>
              <p><strong>6. Your rights</strong><br />You may request access to, correction of, or deletion of your data at any time by contacting our Information Officer at info@angelsofgodcare.co.za.</p>
              <p><strong>7. Complaints</strong><br />You have the right to lodge a complaint with the Information Regulator (South Africa) at enquiries@inforegulator.org.za.</p>
              <p><strong>8. Security</strong><br />We implement appropriate technical and organizational measures to protect your personal information.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
