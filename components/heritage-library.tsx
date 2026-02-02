"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", name: "Các sản phẩm" },
  { id: "ceramics", name: "Ceramics" },
  { id: "silk", name: "Silk Weaving" },
  { id: "lacquer", name: "Lacquerware" },
  { id: "wood", name: "Woodworking" },
  { id: "bronze", name: "Bronze Casting" },
  { id: "embroidery", name: "Embroidery" },
]

const heritageItems = [
  {
    id: "gao-nep",
    name: "Nếp thơm đã ngâm với nước lá cho ra màu xanh",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/17/1139124/Banh-Tet-Mat-Trang-7.jpg",
    featured: true,
  },
  {
    id: " ",
    name: "Lá chuối dùng để gói bánh tét mặt trăng",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/17/1139124/6.jpg",
    featured: true,
  },
  {
    id: " ",
    name: "Mẻ bánh tét mặt trăng",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/17/1139124/Banh-Tet-Mat-Trang-1-01.jpg",
    featured: false,
  },
  {
    id: " ",
    name: "Bánh tét mặt trăng nấu trong nhiều tiếng, lâu lâu phải chêm thêm nước",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/17/1139124/Banh-Tet-Mat-Trang-.jpg",
    featured: true,
  },
  {
    id: " ",
    name: "",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: "Huong-nep",
    name: " ",
    description: "Màu xanh ngọc bích của nếp làm cho món ăn tạo nên vẻ truyền thống và sang trọng",
    image: "./banhtet2.jpg",
    artisans: 36,
    featured: true,
  },
]

export function HeritageLibrary() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = activeCategory === "all" 
    ? heritageItems 
    : heritageItems.filter(item => item.category === activeCategory)

  return (
    <section id="heritage" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Heritage Library</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Khám phá quy trình làm bánh 
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            
          </p>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-background rounded-xl border border-border">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="rounded-lg"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link key={item.id} href={`/artisans/${item.id}`}>
              <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{item.village}, {item.region}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary font-medium">{item.heritage}</span>
                      <span className="text-muted-foreground">{item.artisans} artisans</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  )
}
