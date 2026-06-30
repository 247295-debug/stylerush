import { NextRequest, NextResponse } from 'next/server'

const searchTermMap: Record<string, string> = {
  'all':              'dress',
  'pakistani':        'kurta',
  'tops':             'top',
  'dresses':          'dress',
  'skirts':           'skirt',
  'shalwar-qameez':   'kurta',
  'shoes':            'shoes',
  'accessories':      'bag',
}

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('query') || 'all'
  const limit = request.nextUrl.searchParams.get('per_page') || '12'

  const searchTerm = searchTermMap[tag] || tag

  const url = `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${encodeURIComponent(searchTerm)}&country=PK&currency=PKR&store=PK&limit=${limit}&offset=0`

  const res = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'asos10.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPIDAPI_KEY || '',
    },
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return NextResponse.json({ photos: [] }, { status: 500 })
  }

  const data = await res.json()

  const products = data.products || []
  const photos = products.map((p: any) => ({
    id: p.id,
    src: { large: p.imageUrl?.startsWith('http') ? p.imageUrl : `https://${p.imageUrl}` },
    alt: p.name || 'fashion product',
    price: p.price?.current?.text || '',
    url: `https://www.asos.com/prd/${p.id}`,
  }))

  return NextResponse.json({ photos })
}
