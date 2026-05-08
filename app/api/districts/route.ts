import { NextRequest, NextResponse } from 'next/server'
import { mockDistricts } from '@/lib/database'

// GET /api/districts - Get all districts or filter by query params
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const service = searchParams.get('service')

    let filteredDistricts = [...mockDistricts]

    if (name) {
      filteredDistricts = filteredDistricts.filter(district => 
        district.name.toLowerCase().includes(name.toLowerCase())
      )
    }

    if (service) {
      filteredDistricts = filteredDistricts.filter(district => 
        district.services.some(s => 
          s.toLowerCase().includes(service.toLowerCase())
        )
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredDistricts,
      count: filteredDistricts.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch districts' },
      { status: 500 }
    )
  }
}

// POST /api/districts - Create new district (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'capital', 'dcName', 'dcPhone', 'dcEmail']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const newDistrict = {
      id: `district-${Date.now()}`,
      name: body.name,
      capital: body.capital,
      area: body.area || 'N/A',
      population: body.population || 'N/A',
      dcName: body.dcName,
      dcPhone: body.dcPhone,
      dcEmail: body.dcEmail,
      services: body.services || ['All Services'],
      offices: body.offices || [],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // In a real app, this would save to database
    mockDistricts.push(newDistrict)

    return NextResponse.json({
      success: true,
      data: newDistrict,
      message: 'District created successfully'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create district' },
      { status: 500 }
    )
  }
}
