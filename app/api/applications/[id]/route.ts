import { NextRequest, NextResponse } from 'next/server'
import { mockApplications, Application } from '@/lib/database'

// GET /api/applications/[id] - Get single application
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const application = mockApplications.find(app => app.id === params.id)
    
    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: application
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch application' },
      { status: 500 }
    )
  }
}

// PUT /api/applications/[id] - Update application
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const applicationIndex = mockApplications.findIndex(app => app.id === params.id)
    
    if (applicationIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      )
    }

    // Update application
    const updatedApplication = {
      ...mockApplications[applicationIndex],
      ...body,
      updatedAt: new Date()
    }

    mockApplications[applicationIndex] = updatedApplication

    return NextResponse.json({
      success: true,
      data: updatedApplication,
      message: 'Application updated successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update application' },
      { status: 500 }
    )
  }
}

// DELETE /api/applications/[id] - Delete application
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const applicationIndex = mockApplications.findIndex(app => app.id === params.id)
    
    if (applicationIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      )
    }

    mockApplications.splice(applicationIndex, 1)

    return NextResponse.json({
      success: true,
      message: 'Application deleted successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete application' },
      { status: 500 }
    )
  }
}
