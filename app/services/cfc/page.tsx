import Link from 'next/link'
import { Building, Clock, CheckCircle, ArrowRight, MapPin, Users, Phone, Mail, Shield } from 'lucide-react'

export default function CFCPage() {
  const services = [
    {
      title: "Document Submission",
      description: "Submit your government documents for processing without waiting in long queues",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Application Assistance",
      description: "Get help from our staff to fill out application forms correctly",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Status Tracking",
      description: "Check the status of your submitted applications in real-time",
      icon: <Clock className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Document Verification",
      description: "Quick verification of your documents before submission",
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Information Desk",
      description: "Get information about all available government services",
      icon: <Building className="h-6 w-6 text-blue-600" />
    }
  ]

  const locations = [
    {
      name: "Main CFC - District Complex",
      address: "Main Road, City Center",
      phone: "1234-567890",
      timing: "9:00 AM - 5:00 PM",
      services: ["All Services", "Document Submission", "Application Assistance"]
    },
    {
      name: "Satellite CFC - North Zone",
      address: "North Road, Sector A",
      phone: "1234-567891",
      timing: "10:00 AM - 4:00 PM",
      services: ["Document Submission", "Application Assistance"]
    },
    {
      name: "Satellite CFC - South Zone",
      address: "South Road, Sector B",
      phone: "1234-567892",
      timing: "10:00 AM - 4:00 PM",
      services: ["Document Submission", "Application Assistance"]
    },
    {
      name: "Mobile CFC Van",
      address: "Various Locations",
      phone: "1234-567893",
      timing: "Mobile Service",
      services: ["Home Delivery", "Document Collection"]
    }
  ]

  const benefits = [
    {
      title: "Save Time",
      description: "Skip long queues and get faster service at dedicated counters"
    },
    {
      title: "Expert Guidance",
      description: "Professional staff to help with complex applications"
    },
    {
      title: "Document Verification",
      description: "On-spot verification to avoid rejections"
    },
    {
      title: "Multiple Services",
      description: "Access to various government services under one roof"
    },
    {
      title: "Priority Processing",
      description: "Special counters for urgent and senior citizens"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Building className="h-12 w-12 text-blue-200" />
                <h1 className="text-4xl font-bold">Citizen Facilitation Center</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Physical help desks providing in-person assistance for all government services. 
                Get expert guidance, document verification, and priority processing at our CFC centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services/cfc#locations"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Find Location
                </Link>
                <Link 
                  href="/services/cfc#services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="lg:w-96">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">CFC Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>5+ Centers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-yellow-300" />
                    <span>50K+ Citizens Served</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-300" />
                    <span>Reduced Wait Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services available at our Citizen Facilitation Centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href="/services/cfc#services"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CFC Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the nearest Citizen Facilitation Center for in-person assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Address:</span>
                  </div>
                  <p className="text-gray-700">{location.address}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Phone:</span>
                  </div>
                  <p className="text-gray-700">{location.phone}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Timing:</span>
                  </div>
                  <p className="text-gray-700">{location.timing}</p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CFC?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Benefits of visiting our Citizen Facilitation Centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our CFC staff is ready to assist you with any questions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <Phone className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Helpline</h3>
                <p className="text-gray-700">1234-567890</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <Mail className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-700">cfc@dc.gov.pk</p>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Your Nearest CFC</h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience faster, more efficient government services at our Citizen Facilitation Centers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/cfc#locations"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              Find CFC Center
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
