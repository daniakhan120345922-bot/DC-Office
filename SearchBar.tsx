'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({ 
  placeholder = "Search services, documents, or information...", 
  onSearch,
  className = ""
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch && query.trim()) {
      onSearch(query.trim())
    }
  }

  const clearSearch = () => {
    setQuery('')
    if (onSearch) {
      onSearch('')
    }
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search 
              className={`h-5 w-5 transition-colors ${
                isFocused ? 'text-blue-600' : 'text-gray-400'
              }`} 
            />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
          />

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Search Suggestions (Optional - can be expanded) */}
        {query && isFocused && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Popular Searches:</p>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setQuery('Domicile Certificate')
                    if (onSearch) onSearch('Domicile Certificate')
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  Domicile Certificate
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('Driving License')
                    if (onSearch) onSearch('Driving License')
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  Driving License
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('Dastak App')
                    if (onSearch) onSearch('Dastak App')
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  Dastak App
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
