import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FormSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  icon: ReactNode
}

export default function FormSection({ title, subtitle, children, icon }: FormSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-sky-light rounded-xl flex items-center justify-center text-sky-dark">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold font-poppins text-gray-800">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 font-nunito">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  )
}
