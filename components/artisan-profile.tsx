"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, 
  Clock, 
  Award, 
  Heart, 
  Share2, 
  Play, 
  ShoppingBag,
  ChevronRight,
  QrCode
} from "lucide-react"
import Link from "next/link"
import type { Artisan } from "@/lib/data"

interface ArtisanProfileProps {
  artisan: Artisan
}

export function ArtisanProfile({ artisan }: ArtisanProfileProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name}'s workshop`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        
        {/* Video Play Button Overlay */}
        {artisan.videoUrl && !isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <div className="w-20 h-20 rounded-full bg-card/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-primary ml-1" />
            </div>
          </button>
        )}
        
        {/* QR Badge */}
        <div className="absolute top-6 right-6 bg-card/90 backdrop-blur rounded-xl p-3 flex items-center gap-2">
          <QrCode className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-card-foreground">QR Landing</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-24 relative z-10 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card className="overflow-visible">
              <CardContent className="pt-0 pb-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="-mt-16 sm:-mt-20">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl border-4 border-card overflow-hidden bg-muted shadow-lg">
                      <img
                        src={artisan.image || "/placeholder.svg"}
                        alt={artisan.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-4 sm:pt-8">
                    <Badge variant="secondary" className="mb-2">{artisan.craft}</Badge>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-card-foreground mb-1">
                      {artisan.name}
                    </h1>
                    <p className="text-lg text-primary font-medium mb-4">{artisan.title}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {artisan.village}, {artisan.region}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {artisan.experience} experience
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 sm:self-start sm:mt-8">
                    <Button variant="outline" size="icon" aria-label="Share">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Link href="/gratitude">
                      <Button className="gap-2">
                        <Heart className="h-4 w-4" />
                        <span className="hidden sm:inline">Send Gratitude</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story Tabs */}
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="w-full justify-start h-auto p-1 bg-muted rounded-xl">
                <TabsTrigger value="story" className="rounded-lg">Story</TabsTrigger>
                <TabsTrigger value="techniques" className="rounded-lg">Techniques</TabsTrigger>
                <TabsTrigger value="awards" className="rounded-lg">Awards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="story" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">The Artisan's Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-neutral max-w-none">
                      {artisan.story.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="techniques" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Traditional Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {artisan.techniques && artisan.techniques.length > 0 ? (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {artisan.techniques.map((technique, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <span className="text-primary font-serif font-bold">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                            <span className="font-medium text-card-foreground">{technique}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Techniques information coming soon.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="awards" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Recognition & Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {artisan.awards && artisan.awards.length > 0 ? (
                      <div className="space-y-4">
                        {artisan.awards.map((award, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20"
                          >
                            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                              <Award className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <span className="font-medium text-card-foreground">{award}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Awards information coming soon.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Products */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Featured Products
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {artisan.products.map((product) => (
                  <div 
                    key={product.id}
                    className="group flex gap-4 p-3 rounded-xl border border-border hover:border-primary/20 hover:bg-muted/50 transition-all cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-card-foreground truncate group-hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                        {product.description}
                      </p>
                      <p className="text-primary font-semibold">${product.price}</p>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  View All Products
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Village Info */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Village Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={`/artisans?village=${artisan.villageId}`}>
                  <div className="group p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {artisan.village}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Discover more artisans from this historic craft village
                    </p>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Share Gratitude CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <Heart className="h-8 w-8 mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">
                  Share Your Gratitude
                </h3>
                <p className="text-primary-foreground/80 mb-4 text-sm">
                  Leave a message of appreciation for {artisan.name} and help preserve 
                  their craft legacy.
                </p>
                <Link href="/gratitude">
                  <Button variant="secondary" className="w-full">
                    Write a Message
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
