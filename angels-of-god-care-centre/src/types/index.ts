export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

export interface FormData {
  childName: string
  dateOfBirth: string
  age: string
  gender: string
  fatherName: string
  fatherEmployer: string
  fatherWorkAddress: string
  motherName: string
  motherEmployer: string
  motherWorkAddress: string
  custodyArrangement: string
  custodyDetails: string
  physicalAddress: string
  postalAddress: string
  siblings: string
  siblingNames: string
  familyDoctor: string
  doctorPhone: string
  churchName: string
  churchAddress: string
  pastorName: string
  reason: string
  declaration: boolean
}

export type FormSection = 'child' | 'parent' | 'custody' | 'address' | 'family' | 'church' | 'reason' | 'documents' | 'declaration'
