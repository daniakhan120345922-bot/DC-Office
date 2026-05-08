// Database schema for DC Office Portal

export interface User {
  id: string
  name: string
  email: string
  cnic: string
  phone: string
  address: string
  role: 'citizen' | 'admin' | 'officer'
  createdAt: Date
  updatedAt: Date
}

export interface Application {
  id: string
  userId: string
  serviceType: 'domicile' | 'driving-license' | 'birth-certificate' | 'death-certificate' | 'marriage-certificate' | 'character-certificate'
  status: 'pending' | 'processing' | 'approved' | 'rejected' | 'completed'
  submittedDate: Date
  estimatedCompletion: Date
  completedDate?: Date
  documents: Document[]
  personalInfo: PersonalInfo
  serviceDetails: ServiceDetails
  trackingNumber: string
  notes?: string
  officerId?: string
  createdAt: Date
  updatedAt: Date
}

export interface PersonalInfo {
  fullName: string
  fatherName: string
  cnic: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  address: string
  district: string
  tehsil: string
  phone: string
  email: string
}

export interface ServiceDetails {
  [key: string]: any
  // Domicile Certificate
  residenceProof?: string
  reasonForDomicile?: string
  // Driving License
  licenseType?: 'learner' | 'permanent' | 'international'
  vehicleType?: 'car' | 'motorcycle' | 'commercial'
  // Birth Certificate
  placeOfBirth?: string
  hospitalName?: string
  // Death Certificate
  dateOfDeath?: string
  placeOfDeath?: string
  causeOfDeath?: string
  // Marriage Certificate
  spouseName?: string
  marriageDate?: string
  marriagePlace?: string
  // Character Certificate
  purpose?: string
  duration?: string
}

export interface Document {
  id: string
  applicationId: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  documentType: 'cnic-front' | 'cnic-back' | 'photo' | 'proof-of-address' | 'birth-proof' | 'death-proof' | 'marriage-proof' | 'other'
  uploadedAt: Date
}

export interface District {
  id: string
  name: string
  capital: string
  area: string
  population: string
  dcName: string
  dcPhone: string
  dcEmail: string
  services: string[]
  offices: Office[]
  createdAt: Date
  updatedAt: Date
}

export interface Office {
  id: string
  name: string
  type: 'dc-office' | 'cfc' | 'court' | 'other'
  address: string
  phone: string
  email: string
  coordinates: {
    lat: number
    lng: number
  }
  workingHours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
}

export interface Notification {
  id: string
  userId: string
  applicationId?: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  isRead: boolean
  createdAt: Date
}

export interface AuditLog {
  id: string
  userId: string
  action: string
  resource: string
  resourceId: string
  details: any
  ipAddress: string
  userAgent: string
  createdAt: Date
}

// Mock data for development
export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    cnic: '12345-6789012-3',
    phone: '+92-300-1234567',
    address: '123 Main Street, Central District',
    role: 'citizen',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@dc.gov.pk',
    cnic: '98765-4321098-7',
    phone: '+92-300-9876543',
    address: 'DC Office Complex',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

export const mockApplications: Application[] = [
  {
    id: 'app-1',
    userId: 'user-1',
    serviceType: 'domicile',
    status: 'processing',
    submittedDate: new Date('2024-01-15'),
    estimatedCompletion: new Date('2024-01-25'),
    documents: [],
    personalInfo: {
      fullName: 'Ahmed Hassan',
      fatherName: 'Hassan Khan',
      cnic: '12345-6789012-3',
      dateOfBirth: '1990-01-01',
      gender: 'male',
      address: '123 Main Street, Central District',
      district: 'Central District',
      tehsil: 'City Center',
      phone: '+92-300-1234567',
      email: 'ahmed@example.com'
    },
    serviceDetails: {
      residenceProof: 'utility-bills',
      reasonForDomicile: 'employment'
    },
    trackingNumber: 'APP-2024-001234',
    officerId: 'officer-1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: 'app-2',
    userId: 'user-1',
    serviceType: 'driving-license',
    status: 'approved',
    submittedDate: new Date('2024-01-10'),
    estimatedCompletion: new Date('2024-01-20'),
    completedDate: new Date('2024-01-18'),
    documents: [],
    personalInfo: {
      fullName: 'Ahmed Hassan',
      fatherName: 'Hassan Khan',
      cnic: '12345-6789012-3',
      dateOfBirth: '1990-01-01',
      gender: 'male',
      address: '123 Main Street, Central District',
      district: 'Central District',
      tehsil: 'City Center',
      phone: '+92-300-1234567',
      email: 'ahmed@example.com'
    },
    serviceDetails: {
      licenseType: 'permanent',
      vehicleType: 'car'
    },
    trackingNumber: 'APP-2024-001235',
    officerId: 'officer-2',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18')
  }
]

export const mockDistricts: District[] = [
  {
    id: 'district-1',
    name: 'Central District',
    capital: 'City Center',
    area: '450 km²',
    population: '2.5 Million',
    dcName: 'Mr. Ahmed Khan',
    dcPhone: '1234-567890',
    dcEmail: 'central@dc.gov.pk',
    services: ['All Services', 'CFC Center', 'Court House'],
    offices: [
      {
        id: 'office-1',
        name: 'Central DC Office',
        type: 'dc-office',
        address: 'DC Office Complex, Main Road',
        phone: '1234-567890',
        email: 'central@dc.gov.pk',
        coordinates: { lat: 33.6844, lng: 73.0479 },
        workingHours: {
          monday: '9:00 AM - 5:00 PM',
          tuesday: '9:00 AM - 5:00 PM',
          wednesday: '9:00 AM - 5:00 PM',
          thursday: '9:00 AM - 5:00 PM',
          friday: '9:00 AM - 5:00 PM',
          saturday: '9:00 AM - 1:00 PM',
          sunday: 'Closed'
        }
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]
