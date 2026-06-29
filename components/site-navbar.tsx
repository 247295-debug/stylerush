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

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  )
}

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
            
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          
            href="https://pinterest.com/stylerushofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Pinterest"
            className="flex size-9 items-center justify-center rounded-full bg-white/60 text-[#E60023] transition-colors hover:bg-white"
          >
            <PinterestIcon className="size-4" />
          </a>

          
            href="#trending"
            className="hidden items-center gap-1.5 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white sm:flex"
          >
            <Heart className="size-4 text-primary" />
            Saved
          </a>

          
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
            
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/50"
            >
              {link.label}
            </a>
          ))}
          
            href="https://pinterest.com/stylerushofficial"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-[#E60023] transition-colors hover:bg-white/50"
          >
            <PinterestIcon className="size-4" />
            Follow on Pinterest
          </a>
          
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
