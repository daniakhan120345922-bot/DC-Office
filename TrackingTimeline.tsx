'use client'

import { useState, useEffect, useCallback } from 'react'
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  FileText, 
  Calendar,
  MapPin,
  User,
  Phone,
  Mail
} from 'lucide-react'

interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  status: 'completed' | 'current' | 'pending' | 'rejected'
}

interface TrackingData {
  id: string
  trackingNumber: string
  serviceType: string
  status: string
  progress: number
  submittedDate: string
  estimatedCompletion: string
  completedDate?: string
  applicantName: string
  cnic: string
  phone: string
  email: string
  district: string
  timeline: TimelineEvent[]
  estimatedDays: number
}

interface TrackingTimelineProps {
  trackingNumber: string
  onDataUpdate?: (data: TrackingData) => void
}

export default function TrackingTimeline({ trackingNumber, onDataUpdate }: TrackingTimelineProps) {
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [autoRefresh, setAutoRefresh] = useState(true)

  const fetchTrackingData = useCallback(async () => {
    try {
      const response = await fetch(`/api/applications/track/${trackingNumber}`)
      const result = await response.json()

      if (result.success) {
        setTrackingData(result.data)
        onDataUpdate?.(result.data)
        setError('')
      } else {
        setError(result.error || 'Application not found')
      }
    } catch (error) {
      setError('Failed to fetch tracking data')
    } finally {
      setLoading(false)
    }
  }, [trackingNumber, onDataUpdate])

  useEffect(() => {
    fetchTrackingData()
    
    if (autoRefresh) {
      const interval = setInterval(fetchTrackingData, 30000) // Refresh every 30 seconds
      return () => clearInterval(interval)
    }
  }, [trackingNumber, autoRefresh, fetchTrackingData])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'current':
        return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />
      case 'rejected':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50'
      case 'current':
        return 'border-blue-500 bg-blue-50'
      case 'pending':
        return 'border-gray-300 bg-gray-50'
      case 'rejected':
        return 'border-red-500 bg-red-50'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'bg-red-500'
    if (progress < 50) return 'bg-yellow-500'
    if (progress < 100) return 'bg-blue-500'
    return 'bg-green-500'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tracking information...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
        <p className="text-red-800 font-medium mb-2">Tracking Error</p>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={fetchTrackingData}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (!trackingData) {
    return null
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Application Tracking
            </h2>
            <p className="text-gray-600">Tracking Number: {trackingData.trackingNumber}</p>
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Auto Refresh</span>
            </label>
            <button
              onClick={fetchTrackingData}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Clock className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{trackingData.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(trackingData.progress)}`}
              style={{ width: `${trackingData.progress}%` }}
            />
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <FileText className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium text-blue-900">Service Type</span>
            </div>
            <p className="text-blue-800 capitalize">{trackingData.serviceType.replace('-', ' ')}</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-medium text-green-900">Est. Completion</span>
            </div>
            <p className="text-green-800">
              {new Date(trackingData.estimatedCompletion).toLocaleDateString()}
            </p>
            <p className="text-sm text-green-600">
              {trackingData.estimatedDays} days remaining
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-medium text-purple-900">District</span>
            </div>
            <p className="text-purple-800">{trackingData.district}</p>
          </div>
        </div>
      </div>

      {/* Applicant Information */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicant Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <User className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{trackingData.applicantName}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">CNIC</p>
              <p className="font-medium">{trackingData.cnic}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{trackingData.phone}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{trackingData.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Application Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div className="space-y-6">
            {trackingData.timeline.map((event, index) => (
              <div key={event.id} className="relative flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${getStatusColor(event.status)}`}>
                  {getStatusIcon(event.status)}
                </div>
                <div className="ml-6 flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Update Notification */}
      {trackingData.status === 'completed' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-900">Application Completed!</h3>
              <p className="text-green-800">
                Your application has been completed successfully. Please visit the DC office to collect your documents.
              </p>
            </div>
          </div>
        </div>
      )}

      {trackingData.status === 'rejected' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-900">Application Rejected</h3>
              <p className="text-red-800">
                Your application has been rejected. Please contact the DC office for more information.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
