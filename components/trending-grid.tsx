'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { looks } from '@/lib/stylerush-data'
import { cn } from '@/lib/utils'

const filters = ['all', 'cottagecore', 'y2k', 'coquette', 'balletcore', 'clean girl']

const heightBySpan: Record<string, string> = {
  tall: 'h-[26rem]',
  mid: 'h-[20rem]',
  short: 'h-[15rem]',
}

export function TrendingGrid() {
  const [active, setActive] = useState('all')
  const [saved, setSaved] = useState<number[]>([])

  const visible = useMemo(
    () => (active === 'all' ? looks : looks.filter((l) => l.tag === active)),
    [active],
  )

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

        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {visible.map((look) => (
            <figure
              key={look.id}
              className="group relative break-inside-avoid overflow-hidden rounded-[1.75rem] border-4 border-white/70 shadow-lg shadow-primary/10"
            >
              <Image
                src={look.src || '/placeholder.svg'}
                alt={look.alt}
                width={400}
                height={520}
                className={cn(
                  'w-full object-cover transition-transform duration-500 group-hover:scale-105',
                  heightBySpan[look.span],
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <button
                type="button"
                onClick={() => toggleSave(look.id)}
                aria-label={saved.includes(look.id) ? 'Unsave look' : 'Save look'}
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
      </div>
    </section>
  )
}
