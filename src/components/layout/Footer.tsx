import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock, Landmark, Heart, Mail, Phone } from 'lucide-react'
import logoSrc from '../../assets/images/gallery/logo.jpg'
import PrivacyModal from './PrivacyModal'

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky via-sunshine to-grass" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src={logoSrc} alt="Angels of God Care Centre"
                className="w-10 h-10 rounded-xl object-cover" />
              <div>
                <span className="text-lg font-bold font-poppins">Angels of God</span>
                <span className="block text-xs text-gray-400 -mt-1">Care Centre</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Providing quality early childhood education in a warm, faith-based environment since 2012.
            </p>
            <div className="flex gap-3">
              <a href="mailto:shabalalalungile47@gmail.com" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+27838460529" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-grass transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-poppins font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sunshine" />
              Visit Us
            </h3>
            <div className="text-gray-400 text-sm leading-relaxed space-y-1">
              <p>12302 Mkhunya Street</p>
              <p>Palmridge Ext 7</p>
              <p>Palmridge 1458</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-poppins font-bold text-base mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sunshine" />
              Hours
            </h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Monday – Friday</p>
              <p className="text-white font-semibold">06:30 – 16:00</p>
              <p className="mt-2 text-gray-500">Weekends & Public Holidays</p>
              <p className="text-gray-500">Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-poppins font-bold text-base mb-4 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-sunshine" />
              Banking Details
            </h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p className="text-gray-500">Bank:</p>
              <p className="text-white font-semibold">FNB</p>
              <p className="text-gray-500 mt-1">Account Number:</p>
              <p className="text-white font-semibold font-mono">63058615065</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Angels of God Care Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            Made with <Heart className="w-3.5 h-3.5 text-rose" /> and care
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-sky transition-colors">Home</Link>
            <Link to="/gallery" className="text-gray-500 hover:text-sky transition-colors">Gallery</Link>
            <Link to="/apply" className="text-gray-500 hover:text-sky transition-colors">Apply</Link>
            <button onClick={() => setShowPrivacy(true)} className="text-gray-500 hover:text-sky transition-colors cursor-pointer">Privacy</button>
          </div>
        </div>
      </div>
      <PrivacyModal show={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </footer>
  )
}
