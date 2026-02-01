"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, User, Quote, Filter } from "lucide-react"
import { gratitudeMessages, artisans } from "@/lib/data"
import Link from "next/link"

export function GratitudeWall() {
  const [filter, setFilter] = useState<string>("all")

  const filteredMessages = filter === "all" 
    ? gratitudeMessages 
    : gratitudeMessages.filter(m => m.artisanId === filter)

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Community Messages
          </h2>
          <p className="text-muted-foreground mt-1">
            {gratitudeMessages.length} messages of appreciation
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All Messages
          </Button>
          {artisans.slice(0, 3).map((artisan) => (
            <Button
              key={artisan.id}
              variant={filter === artisan.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(artisan.id)}
              className="hidden sm:inline-flex"
            >
              {artisan.name.split(' ').pop()}
            </Button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredMessages.map((message, index) => (
          <Card 
            key={message.id} 
            className={`break-inside-avoid border-border hover:shadow-lg transition-shadow ${
              message.featured ? 'bg-accent/5 border-accent/20' : ''
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-card-foreground">
                      {message.author}
                    </h3>
                    {message.featured && (
                      <Badge variant="secondary" className="text-xs">Featured</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{message.location}</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-4 mb-4">
                <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed italic">
                  {message.message}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                {message.artisanName ? (
                  <Link 
                    href={`/artisans/${message.artisanId}`}
                    className="text-sm text-primary hover:underline"
                  >
                    For {message.artisanName}
                  </Link>
                ) : (
                  <span className="text-sm text-muted-foreground">General appreciation</span>
                )}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(message.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No messages found for this filter.</p>
        </div>
      )}
    </div>
  )
}
