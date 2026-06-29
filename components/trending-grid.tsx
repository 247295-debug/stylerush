'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all',            label: 'All Looks',       emoji: '✨' },
  { id: 'pakistani',      label: 'Pakistani',        emoji: '🌸' },
  { id: 'tops',           label: 'Tops',             emoji: '👚' },
  { id: 'dresses',        label: 'Dresses',          emoji: '👗' },
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
  all:              ['Trending Look', 'OOTD', 'Style Inspo', 'Aesthetic Fit'],
  pakistani:        ['Lawn Season', 'Desi Aesthetic', 'Eid Vibes', 'Pakistani OOTD'],
  tops:             ['Chic Top', 'Blouse Goals', 'Shirt Aesthetic', 'Top of the Day'],
  dresses:          ['Dress Moment', 'Frock Vibes', 'Elegant Era', 'Dress OOTD'],
  skirts:           ['Skirt Aesthetic', 'Mini Mood', 'Midi Moment', 'Skirt OOTD'],
  'shalwar-qameez': ['Lawn Vibes', 'Desi Chic', 'Qameez Goals', 'Eastern Aesthetic'],
  shoes:            ['Shoe Goals', 'Heel Moment', 'Sneaker Vibes', 'Footwear OOTD'],
  accessories:      ['Accessory Inspo', 'Jewelry Goals', 'Bag Moment', 'Style Details'],
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
  const
