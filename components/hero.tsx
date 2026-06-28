import Image from 'next/image'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28"
    >
      {/* Animated pastel gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 animate-gradient bg-[length:200%_200%]"
        style={{
          backgroundImage:
            'linear-gradient(120deg, #ffe1ef 0%, #f8d9ff 35%, #e8dcff 70%, #ffe6f2 100%)',
        }}
      />
      {/* Floating blobs */}
      <div
        aria-hidden
        className="absolute -left-24 top-24 -z-10 size-80 animate-blob rounded-full bg-[#ffc2e2] opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-16 top-40 -z-10 size-96 animate-blob rounded-full bg-[#d9c2ff] opacity-50 blur-3xl [animation-delay:-6s]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 -z-10 size-72 animate-blob rounded-full bg-[#ffd6ec] opacity-40 blur-3xl [animation-delay:-3s]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur">
            <Sparkles className="size-4 text-primary" />
            Your aesthetic, your rush
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Where your <span className="gradient-text italic">aesthetic</span>{' '}
            comes alive
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Discover dreamy trending looks, take the style quiz, and build
            outfits that feel like you. STYLERUSH is the soft little corner of
            fashion made for your feed.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <a
              href="#quiz"
              className="group inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
            >
              Take the style quiz
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#trending"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
            >
              Explore looks
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                50k+
              </p>
              <p className="text-sm text-muted-foreground">Curated looks</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="flex items-center gap-1 font-heading text-2xl font-bold text-foreground">
                4.9 <Star className="size-4 fill-primary text-primary" />
              </p>
              <p className="text-sm text-muted-foreground">Loved by Gen Z</p>
            </div>
          </div>
        </div>

        {/* Floating image collage */}
        <div className="relative mx-auto hidden h-[34rem] w-full max-w-md lg:block">
          <div className="absolute left-0 top-6 w-52 animate-float overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-2xl shadow-primary/20">
            <Image
              src="/looks/look-4.png"
              alt="Coquette dream look"
              width={400}
              height={520}
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 w-48 animate-float-slow overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-2xl shadow-accent/20 [animation-delay:-2s]">
            <Image
              src="/looks/look-8.png"
              alt="Balletcore look"
              width={400}
              height={520}
              className="h-60 w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-10 w-56 animate-float overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-2xl shadow-primary/20 [animation-delay:-4s]">
            <Image
              src="/looks/look-2.png"
              alt="Y2K lilac look"
              width={400}
              height={520}
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
