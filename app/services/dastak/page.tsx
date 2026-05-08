import Link from 'next/link'
import { Smartphone, Home, Clock, CheckCircle, ArrowRight, Download, Shield, Users, MapPin } from 'lucide-react'

export default function DastakAppPage() {
  const features = [
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "Home Delivery Service",
      description: "Get your documents delivered right to your doorstep without visiting government offices."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "Mobile App Tracking",
      description: "Track your application status in real-time through our dedicated mobile application."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Processing",
      description: "Your documents are processed with the highest security standards and data protection."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Customer Support",
      description: "24/7 helpline support to assist you with any queries or concerns."
    }
  ]

  const availableDocuments = [
    { name: "Domicile Certificate", fee: "Rs. 100", time: "3-5 days" },
    { name: "Birth Certificate", fee: "Rs. 50", time: "2-3 days" },
    { name: "Death Certificate", fee: "Rs. 100", time: "3-5 days" },
    { name: "Marriage Certificate", fee: "Rs. 200", time: "5-7 days" },
    { name: "Character Certificate", fee: "Rs. 150", time: "4-6 days" },
    { name: "Educational Documents", fee: "Rs. 100-500", time: "7-10 days" }
  ]

  const steps = [
    { step: "1", title: "Download App", description: "Install the Dastak App from Google Play Store or Apple App Store" },
    { step: "2", title: "Register Account", description: "Create your account with CNIC and basic information" },
    { step: "3", title: "Select Document", description: "Choose the document type you need and fill the application form" },
    { step: "4", title: "Upload Documents", description: "Upload required documents and pay the processing fee" },
    { step: "5", title: "Track & Receive", description: "Track your application and receive documents at home" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="h-12 w-12 text-blue-200" />
                <h1 className="text-4xl font-bold">Dastak App</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Revolutionary mobile service for home delivery of government documents. 
                Apply online and receive your documents at your doorstep without visiting government offices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/track"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download App
                </Link>
                <Link 
                  href="/services/dastak#apply"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium flex items-center justify-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="lg:w-96">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>25K+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>50K+ Documents Delivered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>4.8★ App Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Covering 12 Districts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of digital government services with our innovative features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Documents</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Apply for various government documents through the Dastak App
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Document Type</th>
                    <th className="px-6 py-4 text-left">Processing Fee</th>
                    <th className="px-6 py-4 text-left">Delivery Time</th>
                    <th className="px-6 py-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {availableDocuments.map((doc, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">{doc.name}</td>
                      <td className="px-6 py-4 text-gray-600">{doc.fee}</td>
                      <td className="px-6 py-4 text-gray-600">{doc.time}</td>
                      <td className="px-6 py-4">
                        <Link 
                          href="/services/dastak#apply"
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Apply
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to get your documents delivered at home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our support team is available 24/7 to assist you with the Dastak App
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Helpline: 1234-567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Available: 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
