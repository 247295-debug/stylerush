'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
const cats = [
  { id: 'all', label: 'All', emoji: '✨' },
  { id: 'pakistani', label: 'Pakistani', emoji: '🌸' },
  { id: 'tops', label: 'Tops', emoji: '👚' },
  { id: 'dresses', label: 'Dresses', emoji: '👗' },
  { id: 'skirts', label: 'Skirts', emoji: '🩷' },
  { id: 'shalwar-qameez', label: 'Shalwar Qameez', emoji: '🪷' },
  { id: 'shoes', label: 'Shoes', emoji: '👠' },
  { id: 'accessories', label: 'Accessories', emoji: '💍' },
]
const spans = ['tall','mid','short','tall','mid','short','mid','tall','short','mid','short','tall']
const heights: Record<string,string> = { tall:'h-[26rem]', mid:'h-[20rem]', short:'h-[15rem]' }
const titles: Record<string,string[]> = {
  all: ['Trending Look','OOTD','Style Inspo','Aesthetic Fit'],
  pakistani: ['Lawn Season','Desi Aesthetic','Eid Vibes','Pakistani OOTD'],
  tops: ['Chic Top','Blouse Goals','Shirt Aesthetic','Top of the Day'],
  dresses: ['Dress Moment','Frock Vibes','Elegant Era','Dress OOTD'],
  skirts: ['Skirt Aesthetic','Mini Mood','Midi Moment','Skirt OOTD'],
  'shalwar-qameez': ['Lawn Vibes','Desi Chic','Qameez Goals','Eastern Aesthetic'],
  shoes: ['Shoe Goals','Heel Moment','Sneaker Vibes','Footwear OOTD'],
  accessories: ['Accessory Inspo','Jewelry Goals','Bag Moment','Style Details'],
}
interface Look { id:number; src:string; alt:string; tag:string; title:string; saves:string; span:string }
export function TrendingGrid() {
  const [active, setActive] = useState('all')
  const [saved, setSaved] = useState<number[]>([])
  const [looks, setLooks] = useState<Look[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`/api/images?query=${encodeURIComponent(active)}&per_page=12`)
      .then(r => r.json())
      .then(data => {
        const t = titles[active] || titles['all']
        setLooks((data.photos || []).map((p: any, i: number) => ({
          id: p.id, src: p.src.large, alt: p.alt || 'fashion look',
          tag: active, title: t[i % t.length],
          saves: `${(Math.random()*20+3).toFixed(1)}k`,
          span: spans[i % spans.length],
        })))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [active])
  const toggleSave = (id: number) =>
    setSaved(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  return (
    <section id="trending" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Trending now</span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Looks the feed can&apos;t stop saving
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A dreamy board of outfits curated for soft girls, it-girls, and everyone in between.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map(c => (
            <button key={c.id} type="button" onClick={() => setActive(c.id)}
              className={cn('rounded-full px-4 py-2 text-sm font-medium transition-all',
                active === c.id
                  ? 'gradient-brand text-primary-foreground shadow-lg shadow-primary/30'
                  : 'border border-border bg-white/60 text-muted-foreground hover:bg-white')}>
              {c.emoji} {c.label}
            </button>
          ))}
        </div>
        {loading && <div className="mt-16 flex justify-center"><Loader2 className="size-8 animate-spin text-primary" /></div>}
        {!loading && looks.length === 0 && <p className="mt-16 text-center text-muted-foreground">No looks found.</p>}
        {!loading && looks.length > 0 && (
          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {looks.map(look => (
              <figure key={look.id} className="group relative break-inside-avoid overflow-hidden rounded-[1.75rem] border-4 border-white/70 shadow-lg shadow-primary/10">
                <Image src={look.src} alt={look.alt} width={400} height={520} unoptimized
                  className={cn('w-full object-cover transition-transform duration-500 group-hover:scale-105', heights[look.span])} />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-300/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <button type="button" onClick={() => toggleSave(look.id)}
                  className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-transform hover:scale-110">
                  <Heart className={cn('size-4 transition-colors', saved.includes(look.id) ? 'fill-primary text-primary' : 'text-foreground')} />
                </button>
                <figcaption className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl bg-white/85 px-3 py-2 backdrop-blur">
                    <p className="font-heading text-sm font-bold text-foreground">{look.title}</p>
                    <p className="text-xs text-muted-foreground">{look.saves} saves · #{look.tag.replace(' ','')}</p>
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
