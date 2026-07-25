import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Baby, Users, Scale, MapPin, Heart, Church, FileText, CheckSquare, Send, ArrowLeft, ArrowRight, MessageCircle
} from 'lucide-react'
import FormSection from './FormSection'
import ProgressBar, { sections } from './ProgressBar'
import SuccessModal from './SuccessModal'
import type { FormSection as FormSectionType } from '../../types'

const initialForm = {
  childName: '', dateOfBirth: '', age: '', gender: '',
  fatherName: '', fatherEmployer: '', fatherWorkAddress: '',
  motherName: '', motherEmployer: '', motherWorkAddress: '',
  custodyArrangement: '', custodyDetails: '',
  physicalAddress: '', postalAddress: '',
  siblings: '', siblingNames: '', familyDoctor: '', doctorPhone: '',
  churchName: '', churchAddress: '', pastorName: '',
  reason: '',
  declaration: false,
}

const sectionIcons: Record<FormSectionType, React.ReactNode> = {
  child: <Baby className="w-5 h-5" />,
  parent: <Users className="w-5 h-5" />,
  custody: <Scale className="w-5 h-5" />,
  address: <MapPin className="w-5 h-5" />,
  family: <Heart className="w-5 h-5" />,
  church: <Church className="w-5 h-5" />,
  reason: <FileText className="w-5 h-5" />,
  documents: <MessageCircle className="w-5 h-5" />,
  declaration: <CheckSquare className="w-5 h-5" />,
}

function validateSection(section: FormSectionType, data: typeof initialForm): boolean {
  switch (section) {
    case 'child': return !!data.childName && !!data.dateOfBirth && !!data.gender
    case 'parent': return !!data.fatherName || !!data.motherName
    case 'custody': return !!data.custodyArrangement
    case 'address': return !!data.physicalAddress
    case 'family': return !!data.familyDoctor && !!data.doctorPhone
    case 'church': return true
    case 'reason': return !!data.reason
    case 'documents': return true
    case 'declaration': return data.declaration
  }
}

export default function AdmissionForm() {
  const [currentSection, setCurrentSection] = useState<FormSectionType>('child')
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initialForm, string>>>({})
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentIndex = sections.findIndex((s) => s.key === currentSection)

  const updateField = useCallback((field: string, value: string | boolean | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const markCurrentComplete = useCallback(() => {
    if (validateSection(currentSection, form)) {
      setCompletedSections((prev) => new Set(prev).add(currentSection))
      return true
    }
    return false
  }, [currentSection, form])

  const goNext = useCallback(() => {
    if (!validateSection(currentSection, form)) {
      const newErrors: Partial<Record<string, string>> = {}
      if (currentSection === 'child') {
        if (!form.childName) newErrors.childName = 'Required'
        if (!form.dateOfBirth) newErrors.dateOfBirth = 'Required'
        if (!form.gender) newErrors.gender = 'Required'
      }
      if (currentSection === 'parent' && !form.fatherName && !form.motherName) {
        newErrors.fatherName = 'At least one parent required'
      }
      if (currentSection === 'custody' && !form.custodyArrangement) newErrors.custodyArrangement = 'Required'
      if (currentSection === 'address' && !form.physicalAddress) newErrors.physicalAddress = 'Required'
      if (currentSection === 'family' && (!form.familyDoctor || !form.doctorPhone)) {
        if (!form.familyDoctor) newErrors.familyDoctor = 'Required'
        if (!form.doctorPhone) newErrors.doctorPhone = 'Required'
      }
      if (currentSection === 'reason' && !form.reason) newErrors.reason = 'Required'
      if (currentSection === 'declaration' && !form.declaration) newErrors.declaration = 'Required'
      setErrors(newErrors as any)
      return
    }
    markCurrentComplete()
    const nextIndex = currentIndex + 1
    if (nextIndex < sections.length) {
      setCurrentSection(sections[nextIndex].key as FormSectionType)
    }
  }, [currentSection, form, currentIndex, markCurrentComplete])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      markCurrentComplete()
      setCurrentSection(sections[currentIndex - 1].key as FormSectionType)
    }
  }, [currentIndex, markCurrentComplete])

  const handleSubmit = async () => {
    if (!form.declaration) {
      setErrors({ declaration: 'Please agree to the declaration' })
      return
    }
    setIsSubmitting(true)
    markCurrentComplete()
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const renderInput = (field: string, label: string, type: string = 'text', placeholder?: string, options?: string[]) => {
    const value = (form as any)[field] || ''
    const error = (errors as any)[field]
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-nunito">{label}</label>
        {options ? (
          <select
            value={value}
            onChange={(e) => updateField(field, e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border-2 bg-white transition-colors font-nunito outline-none ${
              error ? 'border-rose' : 'border-gray-200 focus:border-sky'
            }`}
          >
            <option value="">Select...</option>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => updateField(field, e.target.value)}
            placeholder={placeholder}
            rows={3}
            className={`w-full px-4 py-3 rounded-xl border-2 bg-white transition-colors font-nunito outline-none resize-none ${
              error ? 'border-rose' : 'border-gray-200 focus:border-sky'
            }`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => updateField(field, e.target.value)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-xl border-2 bg-white transition-colors font-nunito outline-none ${
              error ? 'border-rose' : 'border-gray-200 focus:border-sky'
            }`}
          />
        )}
        {error && <p className="text-rose text-xs mt-1 font-nunito">{error}</p>}
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <ProgressBar
        current={currentSection}
        onNavigate={(s) => { markCurrentComplete(); setCurrentSection(s) }}
        completedSections={completedSections}
      />

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
        {currentSection === 'child' && (
          <FormSection title="Child Information" subtitle="Tell us about your child" icon={sectionIcons.child}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput('childName', "Child's Full Name", 'text', 'e.g. Thabo Mokoena')}
              {renderInput('dateOfBirth', 'Date of Birth', 'date')}
              {renderInput('age', 'Age', 'number', 'e.g. 3')}
              {renderInput('gender', 'Gender', 'text', '', ['Male', 'Female'])}
            </div>
          </FormSection>
        )}

        {currentSection === 'parent' && (
          <FormSection title="Parent / Guardian Information" icon={sectionIcons.parent}>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 font-poppins">Father / Guardian</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput('fatherName', 'Full Name')}
                  {renderInput('fatherEmployer', 'Employer')}
                  {renderInput('fatherWorkAddress', 'Work Address', 'textarea')}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 font-poppins">Mother / Guardian</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput('motherName', 'Full Name')}
                  {renderInput('motherEmployer', 'Employer')}
                  {renderInput('motherWorkAddress', 'Work Address', 'textarea')}
                </div>
              </div>
            </div>
          </FormSection>
        )}

        {currentSection === 'custody' && (
          <FormSection title="Custody Arrangement" icon={sectionIcons.custody}>
            <div className="grid grid-cols-1 gap-4">
              {renderInput('custodyArrangement', 'Custody Arrangement', 'text', '', [
                'Joint Custody',
                'Sole Custody (Mother)',
                'Sole Custody (Father)',
                'Other',
              ])}
              {renderInput('custodyDetails', 'Additional Details (if any)', 'textarea', 'Please provide any relevant custody details...')}
            </div>
          </FormSection>
        )}

        {currentSection === 'address' && (
          <FormSection title="Address Details" icon={sectionIcons.address}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput('physicalAddress', 'Physical Address', 'textarea', 'Street, City, Postal Code...')}
              {renderInput('postalAddress', 'Postal Address (if different)', 'textarea', 'Optional')}
            </div>
          </FormSection>
        )}

        {currentSection === 'family' && (
          <FormSection title="Family Information" icon={sectionIcons.family}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput('siblings', 'Number of Siblings', 'number')}
              {renderInput('siblingNames', 'Sibling Names & Ages', 'textarea', 'Optional')}
              {renderInput('familyDoctor', "Family Doctor's Name")}
              {renderInput('doctorPhone', "Doctor's Phone Number", 'tel')}
            </div>
          </FormSection>
        )}

        {currentSection === 'church' && (
          <FormSection title="Church Affiliation" subtitle="Optional but appreciated" icon={sectionIcons.church}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput('churchName', 'Church Name')}
              {renderInput('churchAddress', 'Church Address', 'textarea')}
              {renderInput('pastorName', "Pastor's Name")}
            </div>
          </FormSection>
        )}

        {currentSection === 'reason' && (
          <FormSection title="Reason for Enrolling" subtitle="Help us understand your needs" icon={sectionIcons.reason}>
            {renderInput('reason', 'Why would you like to enrol your child at Angels of God Care Centre?', 'textarea', 'Share your thoughts...')}
          </FormSection>
        )}

        {currentSection === 'documents' && (
          <FormSection title="Submit Your Documents" subtitle="How to send us your paperwork" icon={sectionIcons.documents}>
            <div className="bg-sky-light/20 rounded-2xl p-6 border border-sky/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="font-semibold text-gray-800">📱 Send your documents via WhatsApp</p>
                  <p>Please take clear photos or scans of the following documents and send them to us on WhatsApp:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Child's birth certificate</li>
                    <li>Immunisation / vaccination card</li>
                    <li>Court order (if applicable)</li>
                  </ul>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mt-2">
                    <p className="font-semibold text-yellow-800">✏️ Important:</p>
                    <p className="text-yellow-700">Please write your child's full name clearly on each document before taking the photo.</p>
                  </div>
                </div>
              </div>
            </div>
          </FormSection>
        )}

        {currentSection === 'declaration' && (
          <FormSection title="Declaration & Consent" subtitle="POPIA compliance — please read carefully" icon={sectionIcons.declaration}>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed mb-4 space-y-3">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Privacy Notice (POPIA)</p>
                <p>Angels of God Care Centre collects your personal information solely for processing this enrolment application, communicating with you, and administering your child's care. We do not share your data with third parties without your consent. You have the right to access, correct, or request deletion of your data at any time. Records are retained for the duration of enrolment plus 3 years as required by law.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Information Officer</p>
                <p>For data requests or complaints, contact: shabalalalungile47@gmail.com / 12302 Mkhunya Street, Palmridge.</p>
              </div>
              <div>
                <p className="mb-1 font-semibold text-gray-800">Declaration</p>
                <p>I hereby declare that the information provided is true and correct. I understand that:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>School fees must be paid by the 7th of each month</li>
                  <li>A two-week notice is required for withdrawal</li>
                  <li>The school reserves the right to terminate enrolment for non-payment</li>
                  <li>I consent to my child being photographed for school purposes</li>
                  <li>I authorize the school to seek medical attention in case of emergency</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.declaration}
                  onChange={(e) => updateField('declaration', e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-sky focus:ring-sky"
                />
                <span className="text-gray-700 text-sm font-nunito">
                  I confirm that I have read and agree to the above declaration, privacy notice, and consent terms.
                </span>
              </label>
              {(errors as any).declaration && (
                <p className="text-rose text-xs mt-1 font-nunito">Please agree to the declaration</p>
              )}
            </div>
          </FormSection>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-nunito font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentIndex < sections.length - 1 ? (
            <button
              onClick={goNext}
              className="flex items-center gap-2 px-6 py-2.5 bg-sky hover:bg-sky-dark text-white rounded-full font-bold font-nunito transition-all shadow-md hover:shadow-xl"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-grass to-grass-dark text-white rounded-full font-bold font-nunito text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          )}
        </div>
      </div>

      <SuccessModal show={submitted} childName={form.childName} />
    </div>
  )
}
