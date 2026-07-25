import { motion } from 'framer-motion'
import type { FormSection } from '../../types'

const sections: { key: FormSection; label: string; number: number }[] = [
  { key: 'child', label: 'Child Information', number: 1 },
  { key: 'parent', label: 'Parent Information', number: 2 },
  { key: 'custody', label: 'Custody', number: 3 },
  { key: 'address', label: 'Address', number: 4 },
  { key: 'family', label: 'Family Info', number: 5 },
  { key: 'church', label: 'Church Affiliation', number: 6 },
  { key: 'reason', label: 'Reason for Enrolling', number: 7 },
  { key: 'documents', label: 'Documents', number: 8 },
  { key: 'declaration', label: 'Declaration', number: 9 },
]

interface ProgressBarProps {
  current: FormSection
  onNavigate: (section: FormSection) => void
  completedSections: Set<string>
}

export default function ProgressBar({ current, onNavigate, completedSections }: ProgressBarProps) {
  const currentIndex = sections.findIndex((s) => s.key === current)
  const progress = ((currentIndex + 1) / sections.length) * 100

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-600 font-nunito">
          Step {currentIndex + 1} of {sections.length}
        </span>
        <span className="text-sm font-bold text-sky-dark font-nunito">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-sky via-sunshine to-grass rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="hidden md:flex justify-between mt-4">
        {sections.map((section) => {
          const isActive = section.key === current
          const isCompleted = completedSections.has(section.key)
          return (
            <button
              key={section.key}
              onClick={() => onNavigate(section.key)}
              className={`flex flex-col items-center gap-1 transition-all ${
                isActive ? 'scale-110' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  isCompleted
                    ? 'bg-grass text-white'
                    : isActive
                      ? 'bg-sky text-white'
                      : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isCompleted ? '✓' : section.number}
              </div>
              <span
                className={`text-[10px] font-nunito ${
                  isActive ? 'text-sky-dark font-bold' : 'text-gray-400'
                }`}
              >
                {section.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { sections }
