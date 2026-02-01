"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  MapPin,
  Clock
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { artisans } from "@/lib/data"
import Link from "next/link"

export default function AdminArtisansPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArtisans = artisans.filter(artisan => 
    artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artisan.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artisan.village.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Artisans</h1>
          <p className="text-muted-foreground mt-1">
            Manage artisan profiles and their content.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Artisan
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="font-serif">All Artisans</CardTitle>
              <CardDescription>{artisans.length} artisans registered</CardDescription>
            </div>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search artisans..." 
                className="pl-9 w-full sm:w-[280px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredArtisans.map((artisan) => (
              <div 
                key={artisan.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted shrink-0">
                  <img
                    src={artisan.image || "/placeholder.svg"}
                    alt={artisan.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-card-foreground truncate">
                      {artisan.name}
                    </h3>
                    <Badge variant="secondary">{artisan.craft}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                    {artisan.bio}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {artisan.village}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {artisan.experience}
                    </span>
                    <span>{artisan.products.length} products</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={`/artisans/${artisan.id}`}>
                    <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" />
                        Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}

            {filteredArtisans.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No artisans found matching your search.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
