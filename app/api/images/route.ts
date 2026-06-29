import { NextRequest, NextResponse } from 'next/server'

const queryMap: Record<string, string> = {
  'all': 'women fashion outfit style clothing',
  'pakistani': 'pakistani women fashion dress eastern wear',
  'cottagecore': 'cottagecore women fashion floral dress',
  'y2k': 'y2k fashion women outfit trendy',
  'coquette': 'feminine fashion pink women dress elegant',
  'balletcore': 'ballet fashion women tutu dress',
  'clean girl': 'minimalist women fashion neutral outfit',
}

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('query') || 'women fashion outfit style clothing'
  const perPage = request.nextUrl.searchParams.get('per_page') || '12'
  const searchQuery = queryMap[tag] || `${tag} women fashion outfit`

  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=${perPage}&orientation=portrait`,
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
