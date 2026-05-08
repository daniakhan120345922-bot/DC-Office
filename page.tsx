'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Users, Building, Calendar, CheckCircle, AlertCircle } from 'lucide-react'

const offices = [
  {
    id: 1,
    name: 'DC Office Main Complex',
    address: 'Civil Lines, District Headquarters',
    city: 'Lahore',
    phone: '+92-42-99212345',
    email: 'dc.lahore@dc.gov.pk',
    hours: '9:00 AM - 5:00 PM',
    services: ['All Services', 'Emergency Processing', 'Senior Citizen Support'],
    coordinates: '31.5204° N, 74.3587° E'
  },
  {
    id: 2,
    name: 'Citizen Facilitation Center',
    address: 'Gulberg Main Boulevard',
    city: 'Lahore',
    phone: '+92-42-99212346',
    email: 'cfc.lahore@dc.gov.pk',
    hours: '9:00 AM - 8:00 PM',
    services: ['Application Submission', 'Document Verification', 'Payment Collection'],
    coordinates: '31.5100° N, 74.3500° E'
  },
  {
    id: 3,
    name: 'Sub-Divisional Office',
    address: 'Model Town Extension',
    city: 'Lahore',
    phone: '+92-42-99212347',
    email: 'sdo.modeltown@dc.gov.pk',
    hours: '9:00 AM - 4:00 PM',
    services: ['Local Applications', 'Residence Verification', 'Community Services'],
    coordinates: '31.5300° N, 74.3700° E'
  }
]

const departments = [
  {
    name: 'Revenue Department',
    head: 'Mr. Ahmed Hassan',
    phone: '+92-42-99212348',
    email: 'revenue.dc@dc.gov.pk',
    services: ['Land Records', 'Property Tax', 'Domicile Certificates']
  },
  {
    name: 'Registration Department',
    head: 'Ms. Sara Ahmed',
    phone: '+92-42-99212349',
    email: 'registration.dc@dc.gov.pk',
    services: ['Birth/Death Certificates', 'Marriage Registration', 'NADRA Services']
  },
  {
    name: 'License Department',
    head: 'Mr. Omar Farooq',
    phone: '+92-42-99212350',
    email: 'license.dc@dc.gov.pk',
    services: ['Driving Licenses', 'Business Licenses', 'Vehicle Registration']
  },
  {
    name: 'IT Department',
    head: 'Mr. Bilal Khan',
    phone: '+92-42-99212351',
    email: 'it.support@dc.gov.pk',
    services: ['Online Portal Support', 'Technical Issues', 'Digital Services']
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Send notification (in real app, this would be an actual API call)
      const response = await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'contact-form',
          type: 'info',
          title: 'New Contact Form Submission',
          message: `From: ${formData.name} (${formData.email}) - Subject: ${formData.subject}`,
          email: 'support@dc.gov.pk'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          department: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get in touch with our team for any questions, support, or assistance with your applications.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Helpline</h3>
              <p className="text-gray-600 mb-4">24/7 Support Available</p>
              <a href="tel:1234-567890" className="text-blue-600 hover:text-blue-800 font-medium">
                1234-567890
              </a>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Quick Response</p>
              <a href="mailto:support@dc.gov.pk" className="text-blue-600 hover:text-blue-800 font-medium">
                support@dc.gov.pk
              </a>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Office</h3>
              <p className="text-gray-600 mb-4">In-Person Support</p>
              <a href="/districts" className="text-blue-600 hover:text-blue-800 font-medium">
                Find Locations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Offices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-800">Failed to send message. Please try again.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+92-300-1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept.name} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Office Locations</h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.id} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{office.name}</h3>
                        <p className="text-gray-600">{office.address}, {office.city}</p>
                      </div>
                      <div className="bg-blue-100 rounded-full p-2">
                        <Building className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-800">
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-800">
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{office.hours}</span>
                      </div>

                      <div className="flex items-start text-sm">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                        <span className="text-gray-600">{office.coordinates}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-medium text-gray-900 mb-2">Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {office.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                    <p className="text-sm text-gray-600">{dept.head}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-800">
                      {dept.phone}
                    </a>
                  </div>

                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-800">
                      {dept.email}
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">Services:</p>
                  <ul className="mt-1 space-y-1">
                    {dept.services.map((service, idx) => (
                      <li key={idx} className="text-xs text-gray-700">• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does it take to process applications?</h3>
              <p className="text-gray-600">Processing times vary by service type. Most certificates take 7-20 working days, while licenses may take 20-30 days. You can track your application status online.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What documents do I need for my application?</h3>
              <p className="text-gray-600">Required documents vary by service. Generally, you'll need your CNIC, recent photographs, and service-specific documents. Check the service page for detailed requirements.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I apply online for all services?</h3>
              <p className="text-gray-600">Yes, most services are available online. Some services may require in-person verification for certain documents. Check individual service pages for specific requirements.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I track my application status?</h3>
              <p className="text-gray-600">You can track your application using the tracking number provided after submission. Visit the track page or use your application ID to get real-time updates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
