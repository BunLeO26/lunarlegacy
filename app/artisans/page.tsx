import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { artisans } from "@/lib/data"
import { ArtisanCard } from "@/components/artisan-card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Artisans | Lunar Legacy",
  description: "Meet the master craftspeople preserving Vietnamese cultural heritage through generations of skill and dedication.",
}

export default function ArtisansPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">Our Artisans</Badge>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Meet the Masters of Heritage
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Discover the skilled craftspeople who dedicate their lives to preserving 
                centuries of Vietnamese tradition and artisanal excellence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artisans.map((artisan) => (
                <ArtisanCard key={artisan.id} artisan={artisan} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
