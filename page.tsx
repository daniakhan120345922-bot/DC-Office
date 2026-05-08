'use client'

import { useState } from 'react'
import { Search, Phone, Mail, MapPin, Clock, FileText, Users, Calendar, ChevronRight, Star, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'domicile',
    title: 'Domicile Certificate',
    description: 'Apply for domicile certificate to prove your residence in a specific district',
    icon: '🏠',
    category: 'Certificates',
    processingTime: '15-20 working days',
    fee: 'PKR 500',
    status: 'available',
    rating: 4.8,
    reviews: 245,
    features: [
      'Online application process',
      'Document verification',
      'Fast processing',
      'Home delivery available'
    ],
    requirements: [
      'CNIC (Front & Back)',
      'Recent Photograph',
      'Proof of Residence',
      'Father\'s CNIC'
    ],
    benefits: [
      { title: 'Legal Recognition', description: 'Official proof of residence for all legal purposes' },
      { title: 'Educational Benefits', description: 'Required for admission to educational institutions' },
      { title: 'Employment Verification', description: 'Essential for government job applications' },
      { title: 'Property Rights', description: 'Required for property transactions in your district' }
    ],
    process: [
      { title: 'Online Application', description: 'Fill out the application form with personal details', duration: '10 minutes' },
      { title: 'Document Upload', description: 'Upload required documents and photographs', duration: '5 minutes' },
      { title: 'Fee Payment', description: 'Pay the processing fee online or at designated bank', duration: '1-2 days' },
      { title: 'Verification', description: 'Your documents will be verified by the authorities', duration: '10-15 days' },
      { title: 'Certificate Issuance', description: 'Receive your domicile certificate', duration: '2-3 days' }
    ],
    faqs: [
      { question: 'How long does it take to get a domicile certificate?', answer: 'The process typically takes 15-20 working days after document verification.' },
      { question: 'Can I apply for domicile in a district where I don\'t reside?', answer: 'No, you must be a permanent resident of the district for at least 6 months.' },
      { question: 'What documents are required for domicile?', answer: 'CNIC, recent photographs, proof of residence, and father\'s CNIC are required.' }
    ]
  },
  {
    id: 'driving-license',
    title: 'Driving License',
    description: 'Apply for new driving license or renew your existing license',
    icon: '🚗',
    category: 'Licenses',
    processingTime: '20-30 working days',
    fee: 'PKR 1,500',
    status: 'available',
    rating: 4.6,
    reviews: 189,
    features: [
      'Learner permit available',
      'Theory test preparation',
      'Practical test scheduling',
      'License renewal service'
    ],
    requirements: [
      'CNIC (Front & Back)',
      'Recent Photograph',
      'Medical Certificate',
      'Learner Permit (if applicable)'
    ]
  },
  {
    id: 'birth-certificate',
    title: 'Birth Certificate',
    description: 'Apply for birth certificate for newborns or obtain certified copy',
    icon: '👶',
    category: 'Certificates',
    processingTime: '7-10 working days',
    fee: 'PKR 200',
    status: 'available',
    rating: 4.9,
    reviews: 312,
    features: [
      'Same-day registration',
      'Certified copies',
      'Online verification',
      'Multiple language support'
    ],
    requirements: [
      'Birth Proof',
      'Parents\' CNIC',
      'Hospital Records',
      'Application Form'
    ]
  },
  {
    id: 'death-certificate',
    title: 'Death Certificate',
    description: 'Apply for death certificate for legal and official purposes',
    icon: '📋',
    category: 'Certificates',
    processingTime: '5-7 working days',
    fee: 'PKR 300',
    status: 'available',
    rating: 4.7,
    reviews: 98,
    features: [
      'Urgent processing',
      'Legal documentation',
      'Insurance claims support',
      'Family records update'
    ],
    requirements: [
      'Death Proof',
      'Deceased CNIC',
      'Applicant CNIC',
      'Medical Report'
    ]
  },
  {
    id: 'marriage-certificate',
    title: 'Marriage Certificate',
    description: 'Apply for marriage certificate for legal recognition of marriage',
    icon: '💍',
    category: 'Certificates',
    processingTime: '10-15 working days',
    fee: 'PKR 800',
    status: 'available',
    rating: 4.8,
    reviews: 156,
    features: [
      'Legal registration',
      'International recognition',
      'Name change service',
      'Family documentation'
    ],
    requirements: [
      'CNIC of Both Spouses',
      'Marriage Proof',
      'Photographs',
      'Witnesses Information'
    ]
  },
  {
    id: 'character-certificate',
    title: 'Character Certificate',
    description: 'Apply for character certificate for employment or immigration purposes',
    icon: '👤',
    category: 'Certificates',
    processingTime: '7-10 working days',
    fee: 'PKR 400',
    status: 'available',
    rating: 4.5,
    reviews: 87,
    features: [
      'Police verification',
      'Background check',
      'International format',
      'Fast processing'
    ],
    requirements: [
      'CNIC (Front & Back)',
      'Recent Photograph',
      'Proof of Residence',
      'Purpose Letter'
    ]
  }
]

const categories = ['All', 'Certificates', 'Licenses']

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.reviews - a.reviews
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return parseInt(a.fee.replace(/[^\d]/g, '')) - parseInt(b.fee.replace(/[^\d]/g, ''))
      case 'price-high':
        return parseInt(b.fee.replace(/[^\d]/g, '')) - parseInt(a.fee.replace(/[^\d]/g, ''))
      default:
        return 0
    }
  })

  const getStatusColor = (status: string) => {
    return status === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Certificates': 'bg-blue-100 text-blue-800',
      'Licenses': 'bg-purple-100 text-purple-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Access all government services online. Apply for certificates, licenses, and more with ease.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                        {service.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Processing Time:</span>
                      <span className="text-sm font-medium">{service.processingTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Fee:</span>
                      <span className="text-sm font-bold text-blue-600">{service.fee}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/apply/${service.id}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Application?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you with any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Contact Support
            </Link>
            <Link
              href="/track"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
            >
              Track Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
