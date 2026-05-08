import { NextRequest, NextResponse } from 'next/server'
import { mockApplications, Application } from '@/lib/database'

// GET /api/applications - Get all applications or filter by query params
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')
    const serviceType = searchParams.get('serviceType')
    const trackingNumber = searchParams.get('trackingNumber')

    let filteredApplications = [...mockApplications]

    if (userId) {
      filteredApplications = filteredApplications.filter(app => app.userId === userId)
    }

    if (status) {
      filteredApplications = filteredApplications.filter(app => app.status === status)
    }

    if (serviceType) {
      filteredApplications = filteredApplications.filter(app => app.serviceType === serviceType)
    }

    if (trackingNumber) {
      filteredApplications = filteredApplications.filter(app => 
        app.trackingNumber.toLowerCase().includes(trackingNumber.toLowerCase())
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredApplications,
      count: filteredApplications.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

// POST /api/applications - Create new application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['userId', 'serviceType', 'personalInfo']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Generate new application
    const newApplication: Application = {
      id: `app-${Date.now()}`,
      userId: body.userId,
      serviceType: body.serviceType,
      status: 'pending',
      submittedDate: new Date(),
      estimatedCompletion: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      documents: body.documents || [],
      personalInfo: body.personalInfo,
      serviceDetails: body.serviceDetails || {},
      trackingNumber: `APP-${new Date().getFullYear()}-${String(mockApplications.length + 1).padStart(6, '0')}`,
      notes: body.notes,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // In a real app, this would save to database
    mockApplications.push(newApplication)

    return NextResponse.json({
      success: true,
      data: newApplication,
      message: 'Application submitted successfully'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create application' },
      { status: 500 }
    )
  }
}
