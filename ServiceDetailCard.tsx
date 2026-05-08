'use client'

import { useState } from 'react'
import { CheckCircle, Clock, DollarSign, Star, Users, FileText, Phone, Mail, MapPin, ChevronRight, Calendar, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface ServiceDetailCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
    category: string
    processingTime: string
    fee: string
    status: string
    rating: number
    reviews: number
    features: string[]
    requirements: string[]
    benefits: { title: string; description: string }[]
    process: { title: string; description: string; duration?: string }[]
    faqs: { question: string; answer: string }[]
  }
}

export default function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'process' | 'faqs'>('overview')

  const getStatusColor = (status: string) => {
    return status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{service.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h1>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
              {service.status}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">({service.reviews})</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 rounded-full p-2">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Processing Time</p>
                <p className="font-semibold text-gray-900">{service.processingTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 rounded-full p-2">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Fee</p>
                <p className="font-semibold text-gray-900">{service.fee}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 rounded-full p-2">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Applications</p>
                <p className="font-semibold text-gray-900">{Math.floor(Math.random() * 500 + 200)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-b">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/apply/${service.id}`}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center flex items-center justify-center"
          >
            <FileText className="h-5 w-5 mr-2" />
            Apply Now
          </Link>
          <Link
            href="/track"
            className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-center flex items-center justify-center"
          >
            <Clock className="h-5 w-5 mr-2" />
            Track Application
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex">
          {(['overview', 'requirements', 'process', 'faqs'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.benefits && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose This Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 rounded-full p-1 mr-2">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium text-blue-900">{benefit.title}</span>
                      </div>
                      <p className="text-sm text-blue-800">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Ahmed Hassan</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700">Excellent service! The application process was smooth and I received my certificate on time.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Sara Ahmed</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-gray-700">Very helpful staff and clear instructions. Made the whole process much easier.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-800 font-medium">Important Notes:</span>
                </div>
                <ul className="mt-2 text-sm text-yellow-800 space-y-1">
                  <li>• All documents must be clear and readable</li>
                  <li>• Photocopies should be attested</li>
                  <li>• Original documents may be required for verification</li>
                  <li>• Documents older than 6 months may not be accepted</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                {service.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <FileText className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{requirement}</p>
                      <p className="text-sm text-gray-600 mt-1">Required for all applicants</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Must be a citizen of Pakistan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Valid CNIC required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Age requirement: 18 years and above</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No criminal record</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                      {step.duration && (
                        <p className="text-sm text-blue-600 mt-1">Duration: {step.duration}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Online Payment</h4>
                  <p className="text-sm text-gray-600">Pay via credit/debit card, mobile banking, or online transfer</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">In-Person Payment</h4>
                  <p className="text-sm text-gray-600">Pay cash at designated payment counters</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection Options</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Collect from DC Office during working hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Home delivery available (additional charges apply)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Download digital copy from portal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <div className="px-4 pb-3">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="p-6 bg-gray-50 border-t">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Need Help?</h3>
            <p className="text-gray-600">Our support team is here to assist you</p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:1234-567890"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
