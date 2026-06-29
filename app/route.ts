import { NextRequest, NextResponse } from 'next/server'

const queryMap: Record<string, string> = {
  'all':            'women fashion outfit style clothing',
  'pakistani':      'pakistani women fashion eastern wear shalwar kameez',
  'tops':           'women fashion tops blouse shirt stylish outfit',
  'dresses':        'women dress frock elegant fashion outfit',
  'skirts':         'women skirt fashion mini midi outfit',
  'shalwar-qameez': 'pakistani shalwar kameez lawn fashion women',
  'shoes':          'women shoes heels sandals sneakers boots fashion',
  'accessories':    'women fashion jewelry accessories handbag stylish',
  'cottagecore':    'cottagecore women fashion floral dress aesthetic',
  'y2k':            'y2k fashion women outfit trendy aesthetic',
  'coquette':       'feminine coquette fashion pink women dress',
  'balletcore':     'balletcore ballet women tutu dress fashion',
  'clean girl':     'clean girl minimalist women neutral outfit fashion',
}

export async function GET(request: NextRequest) {
  const tag     = request.nextUrl.searchParams.get('query') || 'all'
  const perPage = request.nextUrl.searchParams.get('per_page') || '12'

  const searchQuery = queryMap[tag] || `${tag} women fashion outfit`

  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=${perPage}&orientation=portrait`,
    {
      headers: { Authorization: process.env.PEXELS_API_KEY || '' },
      next: { revalidate: 3600 },
    },
  )

  if (!res.ok) {
    return NextResponse.json({ photos: [] }, { status: 500 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
