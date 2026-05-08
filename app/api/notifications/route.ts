import { NextRequest, NextResponse } from 'next/server'

interface NotificationData {
  userId: string
  applicationId?: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  email?: string
}

// Mock email sending function
async function sendEmail(to: string, subject: string, body: string) {
  // In a real application, you would use a service like SendGrid, Nodemailer, etc.
  console.log('Sending email:', { to, subject, body })
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    success: true,
    messageId: `msg_${Date.now()}`
  }
}

export async function POST(request: NextRequest) {
  try {
    const notificationData: NotificationData = await request.json()
    
    // Validate required fields
    const requiredFields: (keyof NotificationData)[] = ['userId', 'type', 'title', 'message']
    for (const field of requiredFields) {
      if (!notificationData[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Generate email content based on notification type
    let emailSubject = ''
    let emailBody = ''

    switch (notificationData.type) {
      case 'success':
        emailSubject = `✅ ${notificationData.title}`
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">DC Office Portal</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px;">
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 20px;">
                  <div style="background: #10b981; color: white; width: 50px; height: 50px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 24px;">
                    ✓
                  </div>
                </div>
                <h2 style="color: #059669; margin-bottom: 10px;">${notificationData.title}</h2>
                <p style="color: #374151; line-height: 1.6;">${notificationData.message}</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px;">Best regards,</p>
                  <p style="color: #374151; font-weight: bold;">DC Office Team</p>
                </div>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 20px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        `
        break

      case 'info':
        emailSubject = `ℹ️ ${notificationData.title}`
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">DC Office Portal</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px;">
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 20px;">
                  <div style="background: #3b82f6; color: white; width: 50px; height: 50px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 24px;">
                    ℹ
                  </div>
                </div>
                <h2 style="color: #1d4ed8; margin-bottom: 10px;">${notificationData.title}</h2>
                <p style="color: #374151; line-height: 1.6;">${notificationData.message}</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px;">Best regards,</p>
                  <p style="color: #374151; font-weight: bold;">DC Office Team</p>
                </div>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 20px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        `
        break

      case 'warning':
        emailSubject = `⚠️ ${notificationData.title}`
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">DC Office Portal</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px;">
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 20px;">
                  <div style="background: #f59e0b; color: white; width: 50px; height: 50px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 24px;">
                    ⚠
                  </div>
                </div>
                <h2 style="color: #d97706; margin-bottom: 10px;">${notificationData.title}</h2>
                <p style="color: #374151; line-height: 1.6;">${notificationData.message}</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px;">Best regards,</p>
                  <p style="color: #374151; font-weight: bold;">DC Office Team</p>
                </div>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 20px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        `
        break

      case 'error':
        emailSubject = `❌ ${notificationData.title}`
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">DC Office Portal</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px;">
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 20px;">
                  <div style="background: #ef4444; color: white; width: 50px; height: 50px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 24px;">
                    ✕
                  </div>
                </div>
                <h2 style="color: #dc2626; margin-bottom: 10px;">${notificationData.title}</h2>
                <p style="color: #374151; line-height: 1.6;">${notificationData.message}</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px;">Best regards,</p>
                  <p style="color: #374151; font-weight: bold;">DC Office Team</p>
                </div>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 20px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        `
        break

      default:
        emailSubject = notificationData.title
        emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">DC Office Portal</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px;">
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #374151; margin-bottom: 10px;">${notificationData.title}</h2>
                <p style="color: #374151; line-height: 1.6;">${notificationData.message}</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px;">Best regards,</p>
                  <p style="color: #374151; font-weight: bold;">DC Office Team</p>
                </div>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 20px; text-align: center;">
              <p style="color: #6b7280; font-size: 12px;">
                This is an automated message. Please do not reply to this email.
              </p>
            </div>
          </div>
        `
    }

    // Send email if email is provided
    let emailResult = null
    if (notificationData.email) {
      emailResult = await sendEmail(notificationData.email, emailSubject, emailBody)
    }

    // Store notification (in real app, save to database)
    const notification = {
      id: `notif_${Date.now()}`,
      userId: notificationData.userId,
      applicationId: notificationData.applicationId,
      type: notificationData.type,
      title: notificationData.title,
      message: notificationData.message,
      isRead: false,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: {
        notification,
        emailSent: emailResult?.success || false,
        messageId: emailResult?.messageId
      },
      message: 'Notification sent successfully'
    })
  } catch (error) {
    console.error('Notification error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send notification' },
      { status: 500 }
    )
  }
}

// GET /api/notifications - Get notifications for a user
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const unreadOnly = searchParams.get('unreadOnly') === 'true'

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Mock notifications (in real app, fetch from database)
    const mockNotifications = [
      {
        id: 'notif_1',
        userId: 'user-1',
        applicationId: 'app-1',
        type: 'success',
        title: 'Application Approved',
        message: 'Your domicile certificate application has been approved. Please visit the DC office to collect your certificate.',
        isRead: false,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
      },
      {
        id: 'notif_2',
        userId: 'user-1',
        applicationId: 'app-2',
        type: 'info',
        title: 'Application Processing',
        message: 'Your driving license application is currently under review. You will be notified of any updates.',
        isRead: true,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // 1 day ago
      }
    ]

    let notifications = mockNotifications.filter(n => n.userId === userId)
    if (unreadOnly) {
      notifications = notifications.filter(n => !n.isRead)
    }

    return NextResponse.json({
      success: true,
      data: notifications,
      count: notifications.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch notifications' },
      { status: 500 }
    )
  }
}
