import Link from 'next/link'
import { MapPin, Phone, Clock, Users, Building, ArrowRight, Search } from 'lucide-react'

export default function DistrictsPage() {
  const districts = [
    {
      name: "Central District",
      capital: "City Center",
      area: "450 km²",
      population: "2.5 Million",
      dcName: "Mr. Ahmed Khan",
      phone: "1234-567890",
      email: "central@dc.gov.pk",
      services: ["All Services", "CFC Center", "Court House"]
    },
    {
      name: "North District",
      capital: "North Town",
      area: "380 km²",
      population: "1.8 Million",
      dcName: "Ms. Sarah Ahmed",
      phone: "1234-567891",
      email: "north@dc.gov.pk",
      services: ["All Services", "CFC Center", "Industrial Zone"]
    },
    {
      name: "South District",
      capital: "South City",
      area: "420 km²",
      population: "2.1 Million",
      dcName: "Mr. Hassan Raza",
      phone: "1234-567892",
      email: "south@dc.gov.pk",
      services: ["All Services", "CFC Center", "Agricultural Hub"]
    },
    {
      name: "East District",
      capital: "East Town",
      area: "390 km²",
      population: "1.9 Million",
      dcName: "Mr. Omar Farooq",
      phone: "1234-567893",
      email: "east@dc.gov.pk",
      services: ["All Services", "CFC Center", "Commercial Area"]
    },
    {
      name: "West District",
      capital: "West City",
      area: "410 km²",
      population: "2.0 Million",
      dcName: "Ms. Fatima Zaman",
      phone: "1234-567894",
      email: "west@dc.gov.pk",
      services: ["All Services", "CFC Center", "Educational Zone"]
    },
    {
      name: "Rural District",
      capital: "Rural Center",
      area: "680 km²",
      population: "1.2 Million",
      dcName: "Mr. Aslam Iqbal",
      phone: "1234-567895",
      email: "rural@dc.gov.pk",
      services: ["All Services", "Mobile CFC", "Agricultural Services"]
    }
  ]

  const services = [
    "Domicile Certificate",
    "Birth Certificate", 
    "Death Certificate",
    "Marriage Certificate",
    "Driving License",
    "Vehicle Registration",
    "Property Tax",
    "Business Registration",
    "Character Certificate"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              District Information Portal
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Find information about all districts, their administrations, and available services. 
              Locate your nearest DC office and Citizen Facilitation Center.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search districts by name or DC name..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-blue-100">Districts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">12.5M</div>
                <div className="text-sm text-blue-100">Total Population</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-blue-100">DC Offices</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-blue-100">CFC Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Government services available across all districts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
                <span className="text-blue-600 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Districts & Administrations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed information about each district and their DC offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districts.map((district, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{district.name}</h3>
                  <div className="flex items-center gap-2 text-blue-100">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Capital: {district.capital}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Area:</span>
                      <span className="text-sm font-medium">{district.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Population:</span>
                      <span className="text-sm font-medium">{district.population}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">District Commissioner</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{district.dcName}</div>
                          <div className="text-sm text-gray-600">District Commissioner</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{district.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Email:</span>
                          <span className="text-sm">{district.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Available Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {district.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link 
                      href={`/districts/${district.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center flex items-center justify-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact your district administration for assistance
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Helpline</h3>
                <p className="text-gray-700 mb-2">1234-567890</p>
                <p className="text-sm text-gray-600">Available 24/7 for all districts</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional Office</h3>
                <p className="text-gray-700 mb-2">Main Regional Office</p>
                <p className="text-sm text-gray-600">City Center, Main Road</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                <span>Contact Support</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
