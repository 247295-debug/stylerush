'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const brands = [
  { name: 'Khaadi',           vibe: 'Eastern · Lawn · Pret',          country: 'pakistani',     url: 'https://khaadi.com',          initial: 'K',  color: '#7C3AED' },
  { name: 'Sapphire',         vibe: 'Trendy · Modern · Pret',         country: 'pakistani',     url: 'https://sapphireonline.pk',   initial: 'S',  color: '#0EA5E9' },
  { name: 'Gul Ahmed',        vibe: 'Classic · Lawn · Formal',        country: 'pakistani',     url: 'https://gulahmedshop.com',    initial: 'G',  color: '#059669' },
  { name: 'Sana Safinaz',     vibe: 'Luxury · Formal · Bridal',       country: 'pakistani',     url: 'https://sanasafinaz.com',     initial: 'SS', color: '#BE185D' },
  { name: 'Alkaram',          vibe: 'Affordable · Lawn · Casual',     country: 'pakistani',     url: 'https://alkaramstudio.com',   initial: 'A',  color: '#D97706' },
  { name: 'Limelight',        vibe: 'Trendy · Youth · Casual',        country: 'pakistani',     url: 'https://limelightpk.com',     initial: 'L',  color: '#10B981' },
  { name: 'Bonanza Satrangi', vibe: 'Colorful · Festive · Lawn',      country: 'pakistani',     url: 'https://bonanzastore.pk',     initial: 'B',  color: '#EF4444' },
  { name: 'Zeen',             vibe: 'Contemporary · Chic · Pret',     country: 'pakistani',     url: 'https://zeenwomen.com',       initial: 'Z',  color: '#8B5CF6' },
  { name: 'Zara',             vibe: 'Minimalist · Trendy · Chic',     country: 'international', url: 'https://zara.com',            initial: 'Z',  color: '#1a1a1a' },
  { name: 'H&M',              vibe: 'Affordable · Basics · Trendy',   country: 'international', url: 'https://hm.com',              initial: 'H',  color: '#CC0000' },
  { name: 'Shein',            vibe: 'Budget · Y2K · Fast Fashion',    country: 'international', url: 'https://shein.com',           initial: 'S',  color: '#000000' },
  { name: 'Mango',            vibe: 'Elegant · Mediterranean · Chic', country: 'international', url: 'https://mango.com',           initial: 'M',  color: '#C8973A' },
  { name: 'ASOS',             vibe: 'Diverse · Youth · Trendy',       country: 'international', url: 'https://asos.com',            initial: 'A',  color: '#2C7BE5' },
  { name: 'Forever 21',       vibe: 'Y2K · Affordable · Fun',         country: 'international', url: 'https://forever21.com',       initial: 'F',  color: '#C41E3A' },
  { name: 'Uniqlo',           vibe: 'Minimal · Quality · Basics',     country: 'international', url: 'https://uniqlo.com',          initial: 'U',  color: '#E60012' },
  { name: 'Urban Outfitters', vibe: 'Boho · Vintage · Cool',          country: 'international', url: 'https://urbanoutfitters.com', initial: 'UO', color: '#5F4B8B' },
]

type Filter = 'all' | 'pakistani' | 'international'

export function BrandDirectory() {
  const [active, setActive] = useState<Filter>('all')
  const visible = active === 'all' ? brands : brands.filter((b) => b.country === active)

  return (
    <section id="brands" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Brand Directory
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Shop your favourite brands
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            From Pakistani lawn queens to international style icons — all in one place.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {(['all', 'pakistani', 'international'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all',
                active === f
                  ? 'gradient-brand text-primary-foreground shadow-lg shadow-primary/30'
                  : 'border border-border bg-white/60 text-muted-foreground hover:bg-white hover:text-foreground',
              )}
            >
              {f === 'all' ? '🌍 All Brands' : f === 'pakistani' ? '🇵🇰 Pakistani' : '🌐 International'}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((brand) => (
            
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-5 backdrop-blur transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className="flex size-12 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md"
                style={{ backgroundColor: brand.color }}
              >
                {brand.initial}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-heading text-base font-bold text-foreground">{brand.name}</p>
                  <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{brand.vibe}</p>
                <span className={cn(
                  'mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                  brand.country === 'pakistani' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700',
                )}>
                  {brand.country === 'pakistani' ? '🇵🇰 Pakistani' : '🌐 International'}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/60 pt-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Visit Site →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
