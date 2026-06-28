import { SiteNavbar } from '@/components/site-navbar'
import { Hero } from '@/components/hero'
import { TrendingGrid } from '@/components/trending-grid'
import { StyleQuiz } from '@/components/style-quiz'
import { OutfitBuilder } from '@/components/outfit-builder'
import { BrandDirectory } from '@/components/brand-directory'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNavbar />
      <Hero />
      <TrendingGrid />
      <StyleQuiz />
      <OutfitBuilder />
      <BrandDirectory />
      <SiteFooter />
    </main>
  )
}
