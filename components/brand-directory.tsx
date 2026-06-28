'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { brands } from '@/lib/stylerush-data'
import { cn } from '@/lib/utils'

const categories = ['All', 'Womenswear', 'Menswear', 'Unisex']

export function BrandDirectory() {
  const [cat, setCat] = useState('All')

  const visible = useMemo(
    () => (cat === 'All' ? brands : brands.filter((b) => b.category === cat)),
    [cat],
  )

  return (
    <section id="brands" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Brand directory
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Soft brands worth following
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            A curated little black book of the dreamiest pastel labels on your
            radar.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                cat === c
                  ? 'gradient-brand text-primary-foreground shadow-lg shadow-primary/30'
                  : 'border border-border bg-white/60 text-muted-foreground hover:bg-white hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((brand) => (
            <a
              key={brand.name}
              href="#trending"
              className="group relative flex flex-col gap-4 overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl gradient-brand font-heading text-xl font-bold text-primary-foreground">
                  {brand.initial}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  {brand.name}
                </p>
                <p className="text-sm text-muted-foreground">{brand.vibe}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3 text-xs">
                <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
                  {brand.category}
                </span>
                <span className="font-medium text-muted-foreground">
                  {brand.followers} followers
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
