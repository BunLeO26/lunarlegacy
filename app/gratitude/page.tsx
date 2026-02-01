import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GratitudeWall } from "@/components/gratitude-wall"
import { GratitudeForm } from "@/components/gratitude-form"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

export const metadata = {
  title: "Gratitude Wall | Lunar Legacy",
  description: "Share your appreciation for Vietnamese artisans and the cultural heritage they preserve.",
}

export default function GratitudePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary/5 py-16 lg:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <Badge variant="secondary" className="mb-4">Gratitude Wall</Badge>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Messages of Appreciation
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                A collection of heartfelt messages from visitors around the world, 
                honoring the artisans who keep Vietnamese traditions alive.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <GratitudeForm />
          </div>
        </section>

        {/* Wall Section */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <GratitudeWall />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
