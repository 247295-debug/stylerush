import { AtSign, Camera, Heart, Sparkles } from 'lucide-react'

const groups = [
  { title: 'Explore', links: ['Trending', 'Style Quiz', 'Outfit Builder', 'Brands'] },
  { title: 'Aesthetics', links: ['Cottagecore', 'Y2K', 'Coquette', 'Balletcore'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
]

export function SiteFooter() {
  return (
    <footer className="relative px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-brand px-6 py-12 text-center shadow-2xl shadow-primary/30 sm:px-12">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 size-44 rounded-full bg-white/20 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -right-6 size-52 rounded-full bg-white/15 blur-2xl"
          />
          <h2 className="relative font-heading text-3xl font-bold text-balance text-primary-foreground sm:text-4xl">
            Join the rush. Find your aesthetic.
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-pretty text-primary-foreground/85">
            Get fresh looks, drops, and style edits delivered to your inbox.
          </p>
          <form className="relative mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              className="w-full rounded-full border border-white/40 bg-white/90 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* links */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-2xl gradient-brand text-primary-foreground">
                <Sparkles className="size-5" />
              </span>
              <span className="font-heading text-xl font-bold text-foreground">
                STYLE<span className="gradient-text">RUSH</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              The soft little corner of fashion where your aesthetic comes
              alive.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#top"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white/70 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Camera className="size-5" />
              </a>
              <a
                href="#top"
                aria-label="X"
                className="flex size-10 items-center justify-center rounded-full bg-white/70 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <AtSign className="size-5" />
              </a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} STYLERUSH. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="size-4 fill-primary text-primary" /> for
            soft girls everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
