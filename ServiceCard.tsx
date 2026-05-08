import Link from 'next/link'
import { ArrowRight, Clock, Users, FileText } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  features?: string[]
  processingTime?: string
  fee?: string
  popular?: boolean
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  features = [],
  processingTime,
  fee,
  popular = false
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 group">
      {/* Popular Badge */}
      {popular && (
        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 text-center">
          POPULAR
        </div>
      )}
      
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Service Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {processingTime && (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Processing Time</p>
                <p className="text-sm font-medium text-gray-900">{processingTime}</p>
              </div>
            </div>
          )}
          {fee && (
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Fee</p>
                <p className="text-sm font-medium text-gray-900">{fee}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link 
          href={href}
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group-hover:shadow-lg"
        >
          <span className="font-medium">Apply Now</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
