"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquareHeart, 
  Check, 
  X, 
  Star,
  StarOff,
  MapPin,
  Calendar,
  User
} from "lucide-react"
import { gratitudeMessages } from "@/lib/data"
import type { GratitudeMessage } from "@/lib/data"

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<GratitudeMessage[]>(gratitudeMessages)

  const toggleFeatured = (id: string) => {
    setMessages(prev => prev.map(m => 
      m.id === id ? { ...m, featured: !m.featured } : m
    ))
  }

  const pendingCount = messages.filter(m => !m.featured).length
  const featuredCount = messages.filter(m => m.featured).length

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground mt-1">
            Review and manage gratitude messages from visitors.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquareHeart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-card-foreground">
                  {messages.length}
                </p>
                <p className="text-sm text-muted-foreground">Total Messages</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-card-foreground">
                  {featuredCount}
                </p>
                <p className="text-sm text-muted-foreground">Featured</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-card-foreground">
                  {pendingCount}
                </p>
                <p className="text-sm text-muted-foreground">Regular</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messages List */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">All Messages</CardTitle>
          <CardDescription>Review, feature, or remove gratitude messages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`p-5 rounded-xl border transition-colors ${
                  message.featured 
                    ? 'bg-accent/5 border-accent/20' 
                    : 'bg-background border-border'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-card-foreground">
                          {message.author}
                        </h3>
                        {message.featured && (
                          <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {message.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(message.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFeatured(message.id)}
                      className="gap-1"
                    >
                      {message.featured ? (
                        <>
                          <StarOff className="h-4 w-4" />
                          Unfeature
                        </>
                      ) : (
                        <>
                          <Star className="h-4 w-4" />
                          Feature
                        </>
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive gap-1">
                      <X className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground italic mb-3">
                  "{message.message}"
                </p>

                {message.artisanName && (
                  <Badge variant="secondary">
                    For: {message.artisanName}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
