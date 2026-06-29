import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query') || 'fashion outfit'
  const perPage = request.nextUrl.searchParams.get('per_page') || '12'

  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&orientation=portrait`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY || '',
      },
      next: { revalidate: 3600 },
    }
  )

  if (!res.ok) {
    return NextResponse.json({ photos: [] }, { status: 500 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
