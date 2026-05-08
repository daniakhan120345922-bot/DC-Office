'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, AlertCircle, FileText } from 'lucide-react'
import ApplicationForm from '@/components/forms/ApplicationForm'

const serviceInfo = {
  'domicile': {
    title: 'Domicile Certificate',
    description: 'Apply for domicile certificate to prove your residence in a specific district',
    processingTime: '15-20 working days',
    fee: 'PKR 500',
    requiredDocuments: [
      'CNIC (Front & Back)',
      'Recent Photograph',
      'Proof of Residence',
      'Father\'s CNIC'
    ]
  },
  'driving-license': {
    title: 'Driving License',
    description: 'Apply for new driving license or renew your existing license',
    processingTime: '20-30 working days',
    fee: 'PKR 1,500',
    requiredDocuments: [
      'CNIC (Front & Back)',
      'Recent Photograph',
      'Medical Certificate',
      'Learner Permit (if applicable)'
    ]
  },
  'birth-certificate': {
    title: 'Birth Certificate',
    description: 'Apply for birth certificate for newborns or obtain certified copy',
    processingTime: '7-10 working days',
    fee: 'PKR 200',
    requiredDocuments: [
      'Birth Proof',
      'Parents\' CNIC',
      'Hospital Records',
      'Application Form'
    ]
  },
  'death-certificate': {
    title: 'Death Certificate',
    description: 'Apply for death certificate for legal and official purposes',
    processingTime: '5-7 working days',
    fee: 'PKR 300',
    requiredDocuments: [
      'Death Proof',
      'Deceased CNIC',
      'Applicant CNIC',
      'Medical Report'
    ]
  },
  'marriage-certificate': {
    title: 'Marriage Certificate',
    description: 'Apply for marriage certificate for legal recognition of marriage',
    processingTime: '10-15 working days',
    fee: 'PKR 800',
    requiredDocuments: [
      'CNIC of Both Spouses',
      'Marriage Proof',
      'Photographs',
      'Witnesses Information'
    ]
  },
  'character-certificate': {
    title: 'Character Certificate',
    description: 'Apply for character certificate for employment or immigration purposes',
    processingTime: '7-10 working days',
    fee: 'PKR 400',
    requiredDocuments: [
      'CNIC (Front & Back)',
      'Recent Photograph',
      'Proof of Residence',
      'Purpose Letter'
    ]
  }
}

export default function ApplyPage({ params }: { params: { service: string } }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [applicationData, setApplicationData] = useState<any>(null)

  const service = params.service as keyof typeof serviceInfo
  const info = serviceInfo[service]

  if (!info) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="text-blue-600 hover:text-blue-800">
            Go back to services
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true)
    setSubmissionStatus('idle')

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmissionStatus('success')
        setApplicationData(result.data)
        // Redirect to track page after 3 seconds
        setTimeout(() => {
          router.push(`/track?tracking=${result.data.trackingNumber}`)
        }, 3000)
      } else {
        setSubmissionStatus('error')
      }
    } catch (error) {
      setSubmissionStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submissionStatus === 'success' && applicationData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-gray-600 mb-6">
              Your application for {info.title} has been submitted successfully.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">Application Details</h3>
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tracking Number:</span>
                  <span className="font-mono font-semibold">{applicationData.trackingNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Type:</span>
                  <span>{info.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Completion:</span>
                  <span>{new Date(applicationData.estimatedCompletion).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              You will be redirected to the tracking page in a few seconds...
            </p>

            <div className="flex gap-4 justify-center">
              <Link
                href={`/track?tracking=${applicationData.trackingNumber}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Track Application
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Apply for Another Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Apply for {info.title}
                </h1>
                <p className="text-gray-600">{info.description}</p>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Processing Time:</span>
                    <span className="font-semibold">{info.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Fee:</span>
                    <span className="font-semibold">{info.fee}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <ApplicationForm
              serviceType={service}
              onSubmit={handleSubmit}
              isLoading={isSubmitting}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Required Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Required Documents
              </h3>
              <ul className="space-y-2">
                {info.requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-yellow-800">
                <li>• All documents must be clear and readable</li>
                <li>• Photographs should be recent passport size</li>
                <li>• CNIC must be valid and not expired</li>
                <li>• Processing time may vary based on workload</li>
                <li>• You can track your application status online</li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-blue-900">Helpline:</span>
                  <span className="text-blue-800 ml-2">1234-567890</span>
                </div>
                <div>
                  <span className="font-medium text-blue-900">Email:</span>
                  <span className="text-blue-800 ml-2">support@dc.gov.pk</span>
                </div>
                <div>
                  <span className="font-medium text-blue-900">Office Hours:</span>
                  <span className="text-blue-800 ml-2">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {submissionStatus === 'error' && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800">
                Failed to submit application. Please try again or contact support.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
