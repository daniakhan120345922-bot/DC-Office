import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Building } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* DC Office Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold">DC Office</h3>
                <p className="text-sm text-gray-400">District Administration</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing efficient and transparent government services to citizens through digital platforms and citizen facilitation centers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/dastak" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Dastak App
                </Link>
              </li>
              <li>
                <Link href="/services/domicile" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Domicile Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/license" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Driving License
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Track Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cfc" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Citizen Facilitation Center
                </Link>
              </li>
              <li>
                <Link href="/districts" className="text-gray-300 hover:text-white text-sm transition-colors">
                  District Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Helpline</p>
                  <p className="text-white font-medium">1234-567890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-medium">help@dc.gov.pk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Office Address</p>
                  <p className="text-white font-medium">District Complex, Main Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 DC Office Portal. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-sm text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
