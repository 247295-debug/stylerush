'use client'

import { useEffect, useState } from 'react'
import { Heart, Menu, Sparkles, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Trending', href: '#trending' },
  { label: 'Style Quiz', href: '#quiz' },
  { label: 'Outfit Builder', href: '#builder' },
  { label: 'Brands', href: '#brands' },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-3xl border border-white/40 px-4 py-3 transition-all duration-500 sm:px-6',
          scrolled ? 'glass shadow-[0_8px_40px_-12px_rgba(216,120,180,0.4)]' : 'bg-white/20',
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-2xl gradient-brand text-primary-foreground">
            <Sparkles className="size-5" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            STYLE<span className="gradient-text">RUSH</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#trending"
            className="hidden items-center gap-1.5 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white sm:flex"
          >
            <Heart className="size-4 text-primary" />
            Saved
          </a>
          <a
            href="#quiz"
            className="hidden rounded-full gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 md:block"
          >
            Find your vibe
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex size-9 items-center justify-center rounded-full bg-white/60 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl border border-white/40 p-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quiz"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-2xl gradient-brand px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Find your vibe
          </a>
        </div>
      )}
    </header>
  )
}
