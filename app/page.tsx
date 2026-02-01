import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HeritageLibrary } from "@/components/heritage-library"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HeritageLibrary />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
