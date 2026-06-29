import { NextRequest, NextResponse } from 'next/server'

const queryMap: Record<string, string> = {
  'all': 'pakistani fashion aesthetic soft pastel outfit',
  'cottagecore': 'cottagecore fashion soft aesthetic floral',
  'y2k': 'y2k fashion aesthetic pastel outfit',
  'coquette': 'coquette aesthetic soft pink feminine fashion',
  'balletcore': 'balletcore ballet aesthetic soft tulle fashion',
  'clean girl': 'clean girl aesthetic minimal outfit neutral',
  'pakistani': 'pakistani fashion lawn shalwar kameez aesthetic',
}

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('query') || 'all'
  const perPage = request.nextUrl.searchParams.get('per_page') || '12'

  const searchQuery = queryMap[tag] || `${tag} fashion aesthetic soft pastel`

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
