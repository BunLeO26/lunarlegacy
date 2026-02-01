import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArtisanProfile } from "@/components/artisan-profile"
import { artisans, getArtisanById } from "@/lib/data"
import type { Metadata } from "next"

interface ArtisanPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ArtisanPageProps): Promise<Metadata> {
  const { id } = await params
  const artisan = getArtisanById(id)
  
  if (!artisan) {
    return { title: "Artisan Not Found | Lunar Legacy" }
  }

  return {
    title: `${artisan.name} - ${artisan.title} | Lunar Legacy`,
    description: artisan.bio,
  }
}

export function generateStaticParams() {
  return artisans.map((artisan) => ({
    id: artisan.id,
  }))
}

export default async function ArtisanPage({ params }: ArtisanPageProps) {
  const { id } = await params
  const artisan = getArtisanById(id)

  if (!artisan) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ArtisanProfile artisan={artisan} />
      </main>
      <Footer />
    </div>
  )
}
