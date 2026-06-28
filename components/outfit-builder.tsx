'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Shuffle } from 'lucide-react'
import { outfitWardrobe } from '@/lib/stylerush-data'
import { cn } from '@/lib/utils'

type Gender = 'female' | 'male'
type Slot = 'tops' | 'bottoms' | 'shoes'

const slots: { key: Slot; label: string }[] = [
  { key: 'tops', label: 'Top' },
  { key: 'bottoms', label: 'Bottom' },
  { key: 'shoes', label: 'Shoes' },
]

export function OutfitBuilder() {
  const [gender, setGender] = useState<Gender>('female')
  const [idx, setIdx] = useState<Record<Slot, number>>({
    tops: 0,
    bottoms: 0,
    shoes: 0,
  })

  const wardrobe = outfitWardrobe[gender]

  const step = (slot: Slot, dir: 1 | -1) => {
    const len = wardrobe[slot].length
    setIdx((prev) => ({
      ...prev,
      [slot]: (prev[slot] + dir + len) % len,
    }))
  }

  const shuffle = () => {
    setIdx({
      tops: Math.floor(Math.random() * wardrobe.tops.length),
      bottoms: Math.floor(Math.random() * wardrobe.bottoms.length),
      shoes: Math.floor(Math.random() * wardrobe.shoes.length),
    })
  }

  const selected = useMemo(
    () => ({
      tops: wardrobe.tops[idx.tops],
      bottoms: wardrobe.bottoms[idx.bottoms],
      shoes: wardrobe.shoes[idx.shoes],
    }),
    [wardrobe, idx],
  )

  return (
    <section id="builder" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Outfit builder
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            Mix, match & make it yours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Swap pieces to dream up your perfect fit. Toggle the wardrobe and
            let the pastels do the talking.
          </p>
        </div>

        {/* gender toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/60 bg-white/60 p-1 backdrop-blur">
            {(['female', 'male'] as Gender[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setGender(g)
                  setIdx({ tops: 0, bottoms: 0, shoes: 0 })
                }}
                className={cn(
                  'rounded-full px-7 py-2 text-sm font-semibold capitalize transition-all',
                  gender === g
                    ? 'gradient-brand text-primary-foreground shadow-md shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {g === 'female' ? "Women's" : "Men's"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          {/* preview stack */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-b from-white/70 to-secondary/50 p-6 backdrop-blur">
            <div className="flex flex-col items-center gap-2">
              {slots.map((s) => (
                <div
                  key={s.key}
                  className="relative aspect-square w-40 overflow-hidden rounded-3xl border-2 border-white bg-white/70 shadow-md shadow-primary/10 sm:w-48"
                >
                  <Image
                    src={selected[s.key].src || '/placeholder.svg'}
                    alt={selected[s.key].name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="flex flex-col gap-4">
            {slots.map((s) => (
              <div
                key={s.key}
                className="flex items-center justify-between rounded-3xl border border-white/60 bg-white/60 p-4 backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => step(s.key, -1)}
                  aria-label={`Previous ${s.label}`}
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <div className="px-2 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {s.label}
                  </p>
                  <p className="font-heading text-lg font-bold text-foreground">
                    {selected[s.key].name}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => step(s.key, 1)}
                  aria-label={`Next ${s.label}`}
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={shuffle}
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
            >
              <Shuffle className="size-4 transition-transform group-hover:rotate-180" />
              Surprise me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
