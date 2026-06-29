'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const filters = ['all', 'pakistani', 'cottagecore', 'y2k', 'coquette', 'balletcore', 'clean girl']

const spans = ['tall', 'mid', 'short', 'tall', 'mid', 'short', 'mid', 'tall', 'short', 'mid', 'short', 'tall']
const heightBySpan: Record<string, string> = {
  tall: 'h-[26rem]',
  mid: 'h-[20rem]',
  short: 'h-[15rem]',
}

const tagTitles: Record<string, string[]> = {
  pakistani:   ['Lawn Season', 'Desi Aesthetic', 'Eid Vibes', 'Pakistani OOTD'],
  cottagecore: ['Floral Meadow', 'Garden Dream', 'Soft Picnic', 'Wildflower Fit'],
  y2k:         ['Y2K Vibes', 'Lilac Era', 'Butterfly Fit', 'Low Rise Mood'],
  coquette:    ['Bow & Lace', 'Coquette Dream', 'Pink Ribbon', 'Soft Femme'],
  balletcore:  ['Ballet Hour', 'Tulle & Pointe', 'Studio Fit', 'Dancer Core'],
  'clean girl':['Clean Minimal', 'Glazed Look', 'Soft Neutral', 'Quiet Luxury'],
  all:         ['Trending Look', 'OOTD', 'Style Inspo', 'Aesthetic Fit'],
}

const queryMap: Record<string, string> = {
  all:         'soft pastel aesthetic fashion outfit',
  pakistani:   'pakistani fashion shalwar kameez aesthetic',
  cottagecore: 'cottagecore fashion soft floral aesthetic',
  y2k:         'y2k fashion pastel aesthetic outfit',
  coquette:    'coquette aesthetic soft pink feminine',
  balletcore:  'balletcore ballet tulle soft aesthetic',
  'clean girl':'clean girl minimal neutral outfit aesthetic',
}

interface Look {
  id: number
  src: string
  alt: string
  tag: string
  title: string
  saves: string
  span: string
}

function getSaves() {
  return `${(Math.random() * 20 + 3).toFixed(1)}k`
}

export function TrendingGrid() {
  const [active, setActive]   = useState('all')
  const [saved, setSaved]     = useState<number[]>([])
  const [looks, setLooks]     = useState<Look[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = queryMap[active] || `${active} fashion aesthetic soft`
    setLoading(true)

    fetch(`/api/images?query=${encodeURIComponent(query)}&per_page=12`)
      .then((r) => r.json())
      .then((data) => {
        const photos: any[] = data.photos || []
        const titles = tagTitles[active] || tagTitles['all']

        const mapped: Look[] = photos.map((photo, i) => ({
          id:    photo.id,
          src:   photo.src.large,
          alt:   photo.alt || `${active} fashion look`,
          tag:   active === 'all'
                   ? filters[Math.floor(Math.random() * (filters.length - 1)) + 1]
                   : active,
          title: titles[i % titles.length],
          saves: getSaves(),
          span:  spans[i % spans.length],
        }))

        setLooks(mapped)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [active])

  const toggleSave = (id: number) =>
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )

  return (
    <section id="trending" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Trending now
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Looks the feed can&apos;t stop saving
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            A dreamy, ever-scrolling board of outfits curated for soft girls,
            it-girls, and everyone in between.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium capitalize transition-all',
                active === f
                  ? 'gradient-brand text-primary-foreground shadow-lg shadow-primary/30'
                  : 'border border-border bg-white/60 text-muted-foreground hover:bg-white hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {loading && (
          <div className="mt-16 flex justify-center">
            <Loader2 className="size-8 animate-spin text-primary" />
          </div>
        )}

        {!loading && (
          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {looks.map((look) => (
              <figure
                key={look.id}
                className="group relative break-inside-avoid overflow-hidden rounded-[1.75rem] border-4 border-white/70 shadow-lg shadow-primary/10"
              >
                <Image
                  src={look.src}
                  alt={look.alt}
                  width={400}
                  height={520}
                  className={cn(
                    'w-full object-cover transition-transform duration-500 group-hover:scale-105',
                    heightBySpan[look.span],
                  )}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <button
                  type="button"
                  onClick={() => toggleSave(look.id)}
                  className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-transform hover:scale-110"
                >
                  <Heart
                    className={cn(
                      'size-4 transition-colors',
                      saved.includes(look.id)
                        ? 'fill-primary text-primary'
                        : 'text-foreground',
                    )}
                  />
                </button>

                <figcaption className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl bg-white/85 px-3 py-2 backdrop-blur">
                    <p className="font-heading text-sm font-bold text-foreground">
                      {look.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {look.saves} saves · #{look.tag.replace(' ', '')}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
