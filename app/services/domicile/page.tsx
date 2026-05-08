import Link from 'next/link'
import { FileText, Clock, CheckCircle, AlertCircle, ArrowRight, Upload, Users, Shield, MapPin } from 'lucide-react'

export default function DomicileCertificatePage() {
  const requirements = [
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Application Form",
      description: "Completely filled domicile application form with accurate information"
    },
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: "CNIC Copy",
      description: "Valid Computerized National Identity Card of the applicant"
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Proof of Residence",
      description: "Utility bills, rent agreement, or property ownership documents"
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Birth Certificate",
      description: "Original birth certificate or Form B"
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Father's CNIC",
      description: "CNIC copy of the applicant's father"
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Mother's CNIC",
      description: "CNIC copy of the applicant's mother"
    }
  ]

  const steps = [
    { step: "1", title: "Download Form", description: "Download the domicile application form from our portal" },
    { step: "2", title: "Fill Application", description: "Complete the form with accurate and complete information" },
    { step: "3", title: "Attach Documents", description: "Upload all required documents in specified format" },
    { step: "4", title: "Submit Application", description: "Submit the application online or at CFC center" },
    { step: "5", title: "Pay Fee", description: "Pay the processing fee through available payment methods" },
    { step: "6", title: "Track Status", description: "Monitor your application status online" }
  ]

  const faqs = [
    {
      question: "What is the processing time for domicile certificate?",
      answer: "The standard processing time is 7-10 working days after submission of complete application."
    },
    {
      question: "What is the fee for domicile certificate?",
      answer: "The processing fee is Rs. 200 for regular domicile certificate."
    },
    {
      question: "Can I apply online?",
      answer: "Yes, you can apply online through our portal or visit the Citizen Facilitation Center."
    },
    {
      question: "Is domicile certificate required for educational admissions?",
      answer: "Yes, domicile certificate is mandatory for admissions in educational institutions."
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
                <FileText className="h-12 w-12 text-blue-200" />
                <h1 className="text-4xl font-bold">Domicile Certificate</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Official residence certificate for citizens. Required for various government services, 
                educational admissions, and employment verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services/domicile#apply"
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
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-300" />
                    <span>7-10 Working Days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-300" />
                    <span>Rs. 200 Fee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Online Application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-300" />
                    <span>Digital Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
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
      <section id="apply" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to obtain your domicile certificate
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

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent and affordable fee structure for domicile certificate
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Type</th>
                    <th className="px-6 py-4 text-left">Processing Fee</th>
                    <th className="px-6 py-4 text-left">Processing Time</th>
                    <th className="px-6 py-4 text-left">Delivery Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">Regular Domicile</td>
                    <td className="px-6 py-4 text-gray-600">Rs. 200</td>
                    <td className="px-6 py-4 text-gray-600">7-10 working days</td>
                    <td className="px-6 py-4 text-gray-600">Digital + Physical</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">Urgent Processing</td>
                    <td className="px-6 py-4 text-gray-600">Rs. 500</td>
                    <td className="px-6 py-4 text-gray-600">3-5 working days</td>
                    <td className="px-6 py-4 text-gray-600">Digital + Physical</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">Home Delivery</td>
                    <td className="px-6 py-4 text-gray-600">Rs. 300</td>
                    <td className="px-6 py-4 text-gray-600">7-10 working days</td>
                    <td className="px-6 py-4 text-gray-600">At your doorstep</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about domicile certificate application
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your domicile certificate application today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/domicile#apply"
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
