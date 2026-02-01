"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Send, CheckCircle } from "lucide-react"
import { artisans } from "@/lib/data"

export function GratitudeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
            Thank You for Your Message!
          </h3>
          <p className="text-muted-foreground mb-6">
            Your gratitude message has been submitted and will appear on the wall after review.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mx-auto mb-4">
          <Heart className="h-6 w-6 text-accent" />
        </div>
        <CardTitle className="font-serif text-2xl">Share Your Gratitude</CardTitle>
        <CardDescription>
          Leave a message of appreciation for the artisans preserving Vietnamese heritage
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                placeholder="City, Country" 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="artisan">For a Specific Artisan (Optional)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an artisan or leave general" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Appreciation</SelectItem>
                {artisans.map((artisan) => (
                  <SelectItem key={artisan.id} value={artisan.id}>
                    {artisan.name} - {artisan.craft}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea 
              id="message" 
              placeholder="Share your experience, appreciation, or well-wishes for the artisans..."
              className="min-h-[120px] resize-none"
              required
            />
            <p className="text-xs text-muted-foreground">
              Messages are reviewed before appearing on the wall.
            </p>
          </div>

          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            {isLoading ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
