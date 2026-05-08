import { NextRequest, NextResponse } from 'next/server'
import { mockUsers } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const { email, cnic } = await request.json()

    if (!email || !cnic) {
      return NextResponse.json(
        { success: false, error: 'Email and CNIC are required' },
        { status: 400 }
      )
    }

    // Find user by email and CNIC
    const user = mockUsers.find(u => 
      u.email.toLowerCase() === email.toLowerCase() && u.cnic === cnic
    )

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // In a real app, you'd generate a JWT token here
    const token = Buffer.from(JSON.stringify({
      userId: user.id,
      email: user.email,
      role: user.role
    })).toString('base64')

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      },
      message: 'Login successful'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    )
  }
}
