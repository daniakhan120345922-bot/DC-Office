import Link from 'next/link'
import { Car, Clock, CheckCircle, AlertCircle, ArrowRight, BookOpen, Users, Shield, MapPin } from 'lucide-react'

export default function DrivingLicensePage() {
  const licenseTypes = [
    {
      type: "Learner License",
      description: "Temporary license for learning driving with valid instructor",
      age: "18+ years",
      validity: "6 months",
      fee: "Rs. 500"
    },
    {
      type: "Permanent License",
      description: "Full driving license for authorized vehicle operation",
      age: "21+ years",
      validity: "5 years",
      fee: "Rs. 1000"
    },
    {
      type: "International License",
      description: "International driving permit for foreign travel",
      age: "21+ years",
      validity: "1 year",
      fee: "Rs. 2000"
    }
  ]

  const requirements = [
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: "CNIC Copy",
      description: "Valid Computerized National Identity Card"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      title: "Learner Permit (if applicable)",
      description: "Previous learner driving permit"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: "Medical Certificate",
      description: "Medical fitness certificate from authorized doctor"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      title: "Photographs",
      description: "Recent passport-sized photographs"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      title: "Form Filled",
      description: "Completely filled license application form"
    }
  ]

  const steps = [
    { step: "1", title: "Choose License Type", description: "Select Learner, Permanent, or International license" },
    { step: "2", title: "Medical Examination", description: "Get medical fitness certificate from authorized center" },
    { step: "3", title: "Prepare Documents", description: "Gather all required documents and photographs" },
    { step: "4", title: "Book Theory Test", description: "Schedule and pass the written driving theory test" },
    { step: "5", title: "Practical Test", description: "Pass the practical driving test with examiner" },
    { step: "6", title: "Submit Application", description: "Submit complete application with test results" }
  ]

  const testPreparation = [
    {
      title: "Theory Test Preparation",
      description: "Study traffic rules, signs, and regulations",
      topics: ["Traffic Rules", "Road Signs", "Vehicle Maintenance", "Safety Guidelines"]
    },
    {
      title: "Practical Test Preparation",
      description: "Practice driving skills with certified instructor",
      topics: ["Vehicle Control", "Parking Skills", "Traffic Navigation", "Emergency Procedures"]
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
                <Car className="h-12 w-12 text-blue-200" />
                <h1 className="text-4xl font-bold">Driving License</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Apply for Learner, Permanent, and International driving licenses through our 
                streamlined online process. Book tests and track your application status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services/license#apply"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Apply Now
                </Link>
                <Link 
                  href="/track"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
                >
                  Track Application
                </Link>
              </div>
            </div>
            <div className="lg:w-96">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">License Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>3 License Types</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-yellow-300" />
                    <span>15-20 Days Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-300" />
                    <span>Online Test Booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">License Types & Fees</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the appropriate license type based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {licenseTypes.map((license, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{license.type}</h3>
                <p className="text-gray-600 mb-4">{license.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Age Requirement:</span>
                    <span className="text-sm font-medium">{license.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Validity:</span>
                    <span className="text-sm font-medium">{license.validity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Processing Fee:</span>
                    <span className="text-sm font-medium">{license.fee}</span>
                  </div>
                </div>
                <Link 
                  href="/services/license#apply"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mt-4"
                >
                  Apply for {license.type}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure you have all the following documents ready before applying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  {req.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{req.title}</h3>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these steps to obtain your driving license
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Preparation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Preparation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resources and guidelines to help you pass your driving tests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testPreparation.map((prep, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{prep.title}</h3>
                <p className="text-gray-600 mb-6">{prep.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {prep.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Convenient online services for driving license applicants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Theory Test Booking</h3>
              <p className="text-gray-600 mb-4">Book your theory test slot online</p>
              <Link 
                href="/services/license#theory-test"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <Car className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Test</h3>
              <p className="text-gray-600 mb-4">Take online practice tests</p>
              <Link 
                href="/services/license#practice-test"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>Start Practice</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">License Renewal</h3>
              <p className="text-gray-600 mb-4">Renew your license online</p>
              <Link 
                href="/services/license#renewal"
                className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <span>Renew Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Drive?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your driving license application today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/license#apply"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              Start Application
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
