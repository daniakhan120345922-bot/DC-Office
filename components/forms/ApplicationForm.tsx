'use client'

import { useState } from 'react'
import { Upload, FileText, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

interface PersonalInfo {
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

interface ServiceDetails {
  residenceProof?: string
  reasonForDomicile?: string
  licenseType?: 'learner' | 'permanent' | 'international'
  vehicleType?: 'car' | 'motorcycle' | 'commercial'
  placeOfBirth?: string
  hospitalName?: string
  dateOfDeath?: string
  placeOfDeath?: string
  causeOfDeath?: string
  spouseName?: string
  marriageDate?: string
  marriagePlace?: string
  purpose?: string
  duration?: string
}

interface ApplicationFormProps {
  serviceType: 'domicile' | 'driving-license' | 'birth-certificate' | 'death-certificate' | 'marriage-certificate' | 'character-certificate'
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function ApplicationForm({ serviceType, onSubmit, isLoading = false }: ApplicationFormProps) {
  const [step, setStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    fatherName: '',
    cnic: '',
    dateOfBirth: '',
    gender: 'male',
    address: '',
    district: '',
    tehsil: '',
    phone: '',
    email: ''
  })
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails>({})
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const serviceTitles = {
    'domicile': 'Domicile Certificate',
    'driving-license': 'Driving License',
    'birth-certificate': 'Birth Certificate',
    'death-certificate': 'Death Certificate',
    'marriage-certificate': 'Marriage Certificate',
    'character-certificate': 'Character Certificate'
  }

  const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceDetailsChange = (field: keyof ServiceDetails, value: string) => {
    setServiceDetails(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles(prev => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const validateStep = () => {
    if (step === 1) {
      const required = ['fullName', 'fatherName', 'cnic', 'dateOfBirth', 'address', 'district', 'phone', 'email']
      return required.every(field => personalInfo[field as keyof PersonalInfo])
    }
    if (step === 2) {
      // Service-specific validation
      switch (serviceType) {
        case 'domicile':
          return serviceDetails.residenceProof && serviceDetails.reasonForDomicile
        case 'driving-license':
          return serviceDetails.licenseType && serviceDetails.vehicleType
        case 'birth-certificate':
          return serviceDetails.placeOfBirth
        case 'death-certificate':
          return serviceDetails.dateOfDeath && serviceDetails.placeOfDeath
        case 'marriage-certificate':
          return serviceDetails.spouseName && serviceDetails.marriageDate
        case 'character-certificate':
          return serviceDetails.purpose
        default:
          return true
      }
    }
    return true
  }

  const handleSubmit = () => {
    const formData = {
      userId: 'user-1', // In real app, get from auth
      serviceType,
      personalInfo,
      serviceDetails,
      documents: uploadedFiles.map(file => ({
        filename: file.name,
        size: file.size,
        type: file.type
      }))
    }
    onSubmit(formData)
  }

  const renderPersonalInfoStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            value={personalInfo.fullName}
            onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Father&apos;s Name *</label>
          <input
            type="text"
            value={personalInfo.fatherName}
            onChange={(e) => handlePersonalInfoChange('fatherName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter father's name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CNIC Number *</label>
          <input
            type="text"
            value={personalInfo.cnic}
            onChange={(e) => handlePersonalInfoChange('cnic', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="12345-6789012-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
          <input
            type="date"
            value={personalInfo.dateOfBirth}
            onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
          <select
            value={personalInfo.gender}
            onChange={(e) => handlePersonalInfoChange('gender', e.target.value as 'male' | 'female' | 'other')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">District *</label>
          <input
            type="text"
            value={personalInfo.district}
            onChange={(e) => handlePersonalInfoChange('district', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter district"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tehsil *</label>
          <input
            type="text"
            value={personalInfo.tehsil}
            onChange={(e) => handlePersonalInfoChange('tehsil', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter tehsil"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+92-300-1234567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
          <textarea
            value={personalInfo.address}
            onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your complete address"
          />
        </div>
      </div>
    </div>
  )

  const renderServiceDetailsStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Details</h3>
      
      {serviceType === 'domicile' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Residence *</label>
            <select
              value={serviceDetails.residenceProof || ''}
              onChange={(e) => handleServiceDetailsChange('residenceProof', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select proof type</option>
              <option value="utility-bills">Utility Bills</option>
              <option value="rent-agreement">Rent Agreement</option>
              <option value="property-documents">Property Documents</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Domicile *</label>
            <textarea
              value={serviceDetails.reasonForDomicile || ''}
              onChange={(e) => handleServiceDetailsChange('reasonForDomicile', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain why you need domicile certificate"
            />
          </div>
        </div>
      )}

      {serviceType === 'driving-license' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Type *</label>
            <select
              value={serviceDetails.licenseType || ''}
              onChange={(e) => handleServiceDetailsChange('licenseType', e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select license type</option>
              <option value="learner">Learner License</option>
              <option value="permanent">Permanent License</option>
              <option value="international">International License</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type *</label>
            <select
              value={serviceDetails.vehicleType || ''}
              onChange={(e) => handleServiceDetailsChange('vehicleType', e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select vehicle type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="commercial">Commercial Vehicle</option>
            </select>
          </div>
        </div>
      )}

      {serviceType === 'birth-certificate' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth *</label>
            <input
              type="text"
              value={serviceDetails.placeOfBirth || ''}
              onChange={(e) => handleServiceDetailsChange('placeOfBirth', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter place of birth"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Name</label>
            <input
              type="text"
              value={serviceDetails.hospitalName || ''}
              onChange={(e) => handleServiceDetailsChange('hospitalName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter hospital name (if applicable)"
            />
          </div>
        </div>
      )}

      {serviceType === 'death-certificate' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Death *</label>
            <input
              type="date"
              value={serviceDetails.dateOfDeath || ''}
              onChange={(e) => handleServiceDetailsChange('dateOfDeath', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Place of Death *</label>
            <input
              type="text"
              value={serviceDetails.placeOfDeath || ''}
              onChange={(e) => handleServiceDetailsChange('placeOfDeath', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter place of death"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cause of Death</label>
            <textarea
              value={serviceDetails.causeOfDeath || ''}
              onChange={(e) => handleServiceDetailsChange('causeOfDeath', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter cause of death"
            />
          </div>
        </div>
      )}

      {serviceType === 'marriage-certificate' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Spouse Name *</label>
            <input
              type="text"
              value={serviceDetails.spouseName || ''}
              onChange={(e) => handleServiceDetailsChange('spouseName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter spouse name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Marriage Date *</label>
            <input
              type="date"
              value={serviceDetails.marriageDate || ''}
              onChange={(e) => handleServiceDetailsChange('marriageDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Marriage Place</label>
            <input
              type="text"
              value={serviceDetails.marriagePlace || ''}
              onChange={(e) => handleServiceDetailsChange('marriagePlace', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter marriage place"
            />
          </div>
        </div>
      )}

      {serviceType === 'character-certificate' && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Purpose *</label>
            <textarea
              value={serviceDetails.purpose || ''}
              onChange={(e) => handleServiceDetailsChange('purpose', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain the purpose of character certificate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration of Residence</label>
            <input
              type="text"
              value={serviceDetails.duration || ''}
              onChange={(e) => handleServiceDetailsChange('duration', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 5 years, 10 years"
            />
          </div>
        </div>
      )}
    </div>
  )

  const renderDocumentsStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Upload Documents</h3>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">Upload required documents</p>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          <Upload className="h-5 w-5 mr-2" />
          Choose Files
        </label>
        <p className="text-sm text-gray-500 mt-2">PDF, JPG, PNG up to 10MB each</p>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Uploaded Files:</h4>
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Required Documents:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• CNIC (Front & Back)</li>
          <li>• Recent Photograph</li>
          <li>• Proof of Address</li>
          {serviceType === 'domicile' && <li>• Residence Proof</li>}
          {serviceType === 'driving-license' && <li>• Medical Certificate</li>}
          {serviceType === 'birth-certificate' && <li>• Birth Proof</li>}
          {serviceType === 'death-certificate' && <li>• Death Certificate</li>}
          {serviceType === 'marriage-certificate' && <li>• Marriage Proof</li>}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Apply for {serviceTitles[serviceType]}
          </h2>
          <span className="text-sm text-gray-500">Step {step} of 3</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && renderPersonalInfoStep()}
      {step === 2 && renderServiceDetailsStep()}
      {step === 3 && renderDocumentsStep()}

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!validateStep()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            Next
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isLoading || uploadedFiles.length === 0}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <CheckCircle className="h-5 w-5 mr-2" />
                Submit Application
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
