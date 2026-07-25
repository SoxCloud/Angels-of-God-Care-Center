import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoSrc from '../../assets/images/gallery/logo.jpg'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/apply', label: 'Apply' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoSrc} alt="Angels of God Care Centre"
              className="w-10 h-10 rounded-xl object-cover group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <span className={`text-lg font-bold font-poppins ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Angels of God
              </span>
              <span className={`block text-xs -mt-1 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                Care Centre
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-nunito transition-all duration-200 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'bg-sky text-white'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                    : scrolled
                      ? 'text-gray-600 hover:bg-sky-light/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="ml-3 px-5 py-2 bg-sunshine hover:bg-sunshine-dark text-gray-800 rounded-full text-sm font-bold font-nunito transition-all hover:shadow-lg hover:scale-105"
            >
              Enrol Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold font-nunito transition-colors ${
                    location.pathname === link.path
                      ? 'bg-sky text-white'
                      : 'text-gray-600 hover:bg-sky-light/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/apply"
                className="block px-4 py-3 bg-sunshine text-gray-800 rounded-xl text-base font-bold font-nunito text-center mt-3"
              >
                Enrol Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
