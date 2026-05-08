import { NextRequest, NextResponse } from 'next/server'
import { mockApplications } from '@/lib/database'

// GET /api/applications/track/[trackingNumber] - Track application by tracking number
export async function GET(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const application = mockApplications.find(app => 
      app.trackingNumber.toLowerCase() === params.trackingNumber.toLowerCase()
    )
    
    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      )
    }

    // Calculate progress percentage based on status
    const progressMap = {
      pending: 10,
      processing: 50,
      approved: 80,
      completed: 100,
      rejected: 0
    }

    const progress = progressMap[application.status] || 0

    // Generate timeline events
    const timeline = [
      {
        id: '1',
        title: 'Application Submitted',
        description: `Your application for ${application.serviceType.replace('-', ' ')} has been submitted successfully.`,
        date: application.submittedDate.toISOString(),
        status: 'completed'
      }
    ]

    if (application.status === 'processing') {
      timeline.push({
        id: '2',
        title: 'Under Review',
        description: 'Your application is currently being reviewed by our officers.',
        date: new Date().toISOString(),
        status: 'current'
      })
    }

    if (application.status === 'approved') {
      timeline.push({
        id: '2',
        title: 'Application Approved',
        description: 'Your application has been approved. Processing for document issuance has begun.',
        date: new Date().toISOString(),
        status: 'completed'
      })
    }

    if (application.status === 'completed') {
      timeline.push({
        id: '2',
        title: 'Application Approved',
        description: 'Your application has been approved.',
        date: new Date().toISOString(),
        status: 'completed'
      })
      timeline.push({
        id: '3',
        title: 'Document Ready',
        description: 'Your document is ready for collection.',
        date: application.completedDate?.toISOString() || new Date().toISOString(),
        status: 'completed'
      })
    }

    if (application.status === 'rejected') {
      timeline.push({
        id: '2',
        title: 'Application Rejected',
        description: 'Your application has been rejected. Please check the notes for more information.',
        date: new Date().toISOString(),
        status: 'rejected'
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        ...application,
        progress,
        timeline,
        estimatedDays: Math.ceil(
          (application.estimatedCompletion.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
        )
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to track application' },
      { status: 500 }
    )
  }
}
