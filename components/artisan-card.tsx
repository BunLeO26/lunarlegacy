import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Artisan } from "@/lib/data"

interface ArtisanCardProps {
  artisan: Artisan
}

export function ArtisanCard({ artisan }: ArtisanCardProps) {
  return (
    <Link href={`/artisans/${artisan.id}`}>
      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={artisan.coverImage || "/placeholder.svg"}
              alt={`${artisan.name}'s workshop`}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-10 left-5">
            <div className="w-20 h-20 rounded-full border-4 border-card overflow-hidden bg-muted">
              <img
                src={artisan.image || "/placeholder.svg"}
                alt={artisan.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <CardContent className="pt-14 pb-6 px-5">
          <Badge variant="secondary" className="mb-2">{artisan.craft}</Badge>
          
          <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
            {artisan.name}
          </h3>
          
          <p className="text-sm text-primary font-medium mb-3">{artisan.title}</p>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {artisan.bio}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {artisan.region}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {artisan.experience}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
