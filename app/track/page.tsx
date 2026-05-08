'use client'

import { useState, useEffect } from 'react'
import { Search, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import TrackingTimeline from '@/components/TrackingTimeline'

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedTracking, setSelectedTracking] = useState<string | null>(null)

  // Get tracking number from URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const tracking = urlParams.get('tracking')
    if (tracking) {
      setTrackingNumber(tracking)
      setSelectedTracking(tracking)
    }
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setIsSearching(true)
    setSelectedTracking(trackingNumber)

    try {
      const response = await fetch(`/api/applications/track/${trackingNumber}`)
      const result = await response.json()

      if (result.success) {
        setSearchResults([result.data])
      } else {
        setSearchResults([])
      }
    } catch (error) {
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleQuickTrack = (trackingNum: string) => {
    setTrackingNumber(trackingNum)
    setSelectedTracking(trackingNum)
  }

  const recentTrackings = [
    { trackingNumber: 'APP-2024-001234', service: 'Domicile Certificate', status: 'Processing' },
    { trackingNumber: 'APP-2024-001235', service: 'Driving License', status: 'Completed' },
    { trackingNumber: 'APP-2024-001236', service: 'Birth Certificate', status: 'Pending' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Track Application
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Monitor the status of your government service applications in real-time. 
              Get updates on processing and delivery status.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Application</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enter your application ID or search by service type
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter Tracking Number (e.g., APP-2024-001234)"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSearching}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSearching ? (
                  <>
                    <Clock className="h-5 w-5 mr-2 animate-spin" />
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    <span>Track Application</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Track Examples */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Track Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentTrackings.map((tracking, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickTrack(tracking.trackingNumber)}
                    className="bg-white rounded-lg p-4 text-left hover:shadow-md transition-shadow border border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-blue-600">{tracking.trackingNumber}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tracking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        tracking.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {tracking.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{tracking.service}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {selectedTracking && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <TrackingTimeline 
              trackingNumber={selectedTracking}
              onDataUpdate={(data) => {
                // Handle real-time updates
                console.log('Tracking data updated:', data)
              }}
            />
          </div>
        </section>
      )}

      {/* Help Section */}
      {!selectedTracking && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can&apos;t find your application? Contact our support team for assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Track by Email</h3>
                <p className="text-gray-600 mb-4">
                  Send your tracking number to support@dc.gov.pk
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Email Support
                </button>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Office</h3>
                <p className="text-gray-600 mb-4">
                  Visit your nearest DC office with your CNIC
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Find Office
                </button>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Helpline</h3>
                <p className="text-gray-600 mb-4">
                  Call our helpline for immediate assistance
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  1234-567890
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Status Information */}
      {!selectedTracking && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Status Updates</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn what each application status means
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending</h3>
                <p className="text-gray-600">
                  Your application has been received and is waiting to be processed
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
                <p className="text-gray-600">
                  Your application is currently under review by our officers
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Approved</h3>
                <p className="text-gray-600">
                  Your application has been approved and is being processed for completion
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rejected</h3>
                <p className="text-gray-600">
                  Your application was not approved. Please check the requirements
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
