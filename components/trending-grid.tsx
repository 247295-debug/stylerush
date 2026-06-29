'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all',            label: 'All Looks',       emoji: '✨' },
  { id: 'pakistani',      label: 'Pakistani',        emoji: '🌸' },
  { id: 'tops',           label: 'Tops',             emoji: '👚' },
  { id: 'dresses',        label: 'Dresses & Frocks', emoji: '👗' },
  { id: 'skirts',         label: 'Skirts',           emoji: '🩷' },
  { id: 'shalwar-qameez', label: 'Shalwar Qameez',  emoji: '🪷' },
  { id: 'shoes',          label: 'Shoes',            emoji: '👠' },
  { id: 'accessories',    label: 'Accessories',      emoji: '💍' },
]

const spans = ['tall','mid','short','tall','mid','short','mid','tall','short','mid','short','tall']
const heightBySpan: Record<string, string> = {
  tall: 'h-[26rem]',
  mid: 'h-[20rem]',
  short: 'h-[15rem]',
}

const tagTitles: Record<string, string[]> = {
  all:              ['Trending Look',   'OOTD',           'Style Inspo',    'Aesthetic Fit'],
  pakistani:        ['Lawn Season',     'Desi Aesthetic', 'Eid Vibes',      'Pakistani OOTD'],
  tops:             ['Chic Top',        'Blouse Goals',   'Shirt Aesthetic','Top of the Day'],
  dresses:          ['Dress Moment',    'Frock Vibes',    'Elegant Era',    'Dress OOTD'],
  skirts:           ['Skirt Aesthetic', 'Mini Mood',      'Midi Moment',    'Skirt OOTD'],
  'shalwar-qameez': ['Lawn Vibes',      'Desi Chic',      'Qameez Goals',   'Eastern Aesthetic'],
  shoes:            ['Shoe Goals',      'Heel Moment',    'Sneaker Vibes',  'Footwear OOTD'],
  accessories:      ['Accessory Inspo', 'Jewelry Goals',  'Bag Moment',     'Style Details'],
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
  const [active, setActive] = useState('all')
  const [saved, setSaved] = useState<number[]>([])
  const [looks, setLooks] = useState<Look[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/images?query=${encodeURIComponent(active)}&per_page=12`)
      .then((r) => r.json())
      .then((data) => {
        const photos: any[] = data.photos || []
        const titles = tagTitles[active] || tagTitles['all']
        const mapped: Look[] = photos.map((photo, i) => ({
          id: photo.id,
          src: photo.src.large,
          alt: photo.alt || `${active} fashion look`,
          tag: active,
          title: titles[i % titles.length],
          saves: getSaves(),
          span: spans[i % spans.length],
        }))
        setLooks(mapped)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [active])

  const toggleSave = (id: number) =>
    setSaved((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])

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
