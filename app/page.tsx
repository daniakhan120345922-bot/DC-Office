import Link from 'next/link'
import { Search, FileText, Smartphone, Car, Building, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  const services = [
    {
      title: 'Dastak App',
      description: 'Mobile service for home delivery of government documents. Apply for certificates and receive them at your doorstep.',
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      href: '/services/dastak',
      features: [
        'Home delivery service',
        'Mobile app tracking',
        'Multiple document types',
        'Digital payment options'
      ],
      processingTime: '3-5 working days',
      fee: 'Rs. 100-500',
      popular: true
    },
    {
      title: 'Domicile Certificate',
      description: 'Official residence certificate for citizens. Required for various government services and educational purposes.',
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      href: '/services/domicile',
      features: [
        'Online application',
        'Document verification',
        'Fast processing',
        'Digital certificate'
      ],
      processingTime: '7-10 working days',
      fee: 'Rs. 200'
    },
    {
      title: 'Driving License',
      description: 'Apply for Learner, Permanent, and International driving licenses through our streamlined process.',
      icon: <Car className="h-6 w-6 text-blue-600" />,
      href: '/services/license',
      features: [
        'Learner license',
        'Permanent license',
        'International license',
        'Online test booking'
      ],
      processingTime: '15-20 working days',
      fee: 'Rs. 500-2000'
    },
    {
      title: 'Citizen Facilitation Center',
      description: 'Physical help desks providing in-person assistance for all government services and applications.',
      icon: <Building className="h-6 w-6 text-blue-600" />,
      href: '/services/cfc',
      features: [
        'In-person assistance',
        'Document submission',
        'Query resolution',
        'Priority services'
      ],
      processingTime: 'Same day',
      fee: 'Free assistance'
    }
  ]

  const stats = [
    { label: 'Services Available', value: '25+', icon: <FileText className="h-8 w-8" /> },
    { label: 'Applications Processed', value: '10K+', icon: <CheckCircle className="h-8 w-8" /> },
    { label: 'Happy Citizens', value: '50K+', icon: <ArrowRight className="h-8 w-8" /> },
    { label: 'Average Processing Time', value: '3 Days', icon: <Clock className="h-8 w-8" /> }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DC Office Online Services Desk
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Access government services conveniently from your home. Apply for certificates, licenses, and more through our digital platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar 
                placeholder="Search for services, documents, or information..."
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/70"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of government services designed to make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to access government services online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Service', description: 'Browse and select the service you need' },
              { step: '2', title: 'Fill Application', description: 'Complete the online application form' },
              { step: '3', title: 'Submit Documents', description: 'Upload required documents securely' },
              { step: '4', title: 'Track Status', description: 'Monitor your application progress online' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our support team is available to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Support
            </Link>
            <Link 
              href="/track"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Track Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
