'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Upload, FileText, X, CheckCircle, AlertCircle } from 'lucide-react'

interface UploadedFile {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  uploadedAt: string
}

interface FileUploadProps {
  onFileUpload: (files: UploadedFile[]) => void
  maxFiles?: number
  maxFileSize?: number // in MB
  acceptedTypes?: string[]
  className?: string
}

export default function FileUpload({
  onFileUpload,
  maxFiles = 5,
  maxFileSize = 10,
  acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'],
  className = ''
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [error, setError] = useState('')

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFiles = useCallback(async (files: File[]) => {
    setError('')
    
    // Validate files
    for (const file of files) {
      if (!acceptedTypes.includes(file.type)) {
        setError(`File ${file.name} is not supported. Please upload JPG, PNG, or PDF files.`)
        return
      }
      
      if (file.size > maxFileSize * 1024 * 1024) {
        setError(`File ${file.name} is too large. Maximum size is ${maxFileSize}MB.`)
        return
      }
    }

    // Check max files limit
    if (uploadedFiles.length + files.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed.`)
      return
    }

    setIsUploading(true)

    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        })

        const result = await response.json()
        
        if (result.success) {
          return {
            ...result.data,
            id: Math.random().toString(36).substring(7)
          }
        } else {
          throw new Error(result.error || 'Upload failed')
        }
      })

      const newFiles = await Promise.all(uploadPromises)
      const updatedFiles = [...uploadedFiles, ...newFiles]
      setUploadedFiles(updatedFiles)
      onFileUpload(updatedFiles)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Upload failed')
    } finally {
      setIsUploading(false)
    }
  }, [acceptedTypes, maxFileSize, maxFiles, uploadedFiles, onFileUpload])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [handleFiles])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }, [handleFiles])

  const removeFile = (fileId: string) => {
    const updatedFiles = uploadedFiles.filter(file => file.id !== fileId)
    setUploadedFiles(updatedFiles)
    onFileUpload(updatedFiles)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) {
      return '🖼️'
    }
    if (mimeType === 'application/pdf') {
      return '📄'
    }
    return '📎'
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
          disabled={isUploading || uploadedFiles.length >= maxFiles}
        />
        
        <div className="flex flex-col items-center">
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Uploading files...</p>
            </>
          ) : (
            <>
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">
                Drag and drop files here, or{' '}
                <label
                  htmlFor="file-upload"
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  browse
                </label>
              </p>
              <p className="text-sm text-gray-500">
                {acceptedTypes.join(', ')} up to {maxFileSize}MB each
              </p>
              <p className="text-sm text-gray-500">
                Maximum {maxFiles} files
              </p>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <span className="text-red-800">{error}</span>
          </div>
        </div>
      )}

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Uploaded Files ({uploadedFiles.length}/{maxFiles})</h4>
          <div className="space-y-2">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <div className="flex items-center flex-1">
                  <span className="text-2xl mr-3">{getFileIcon(file.mimeType)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.originalName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(file.size)} • Uploaded {new Date(file.uploadedAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* File Preview */}
      {uploadedFiles.some(file => file.mimeType.startsWith('image/')) && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {uploadedFiles
            .filter(file => file.mimeType.startsWith('image/'))
            .map((file) => (
              <div key={file.id} className="relative group">
                <Image
                  src={file.url}
                  alt={file.originalName}
                  width={100}
                  height={96}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile(file.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Remove file"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
