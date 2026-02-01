export interface Artisan {
  id: string
  name: string
  title: string
  village: string
  villageId: string
  region: string
  craft: string
  experience: string
  bio: string
  image: string
  coverImage: string
  story: string
  products: Product[]
  videoUrl?: string
  awards?: string[]
  techniques?: string[]
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  artisanId: string
}

export interface GratitudeMessage {
  id: string
  author: string
  location: string
  message: string
  artisanId?: string
  artisanName?: string
  date: string
  featured?: boolean
}

export interface Village {
  id: string
  name: string
  region: string
  category: string
  heritage: string
  description: string
  image: string
  artisans: number
  featured: boolean
}

export const villages: Village[] = [
  {
    id: "bat-trang",
    name: "Bat Trang Ceramics",
    region: "Hanoi",
    category: "ceramics",
    heritage: "1000+ years",
    description: "Renowned for blue and white pottery, glazed ceramics, and traditional Vietnamese patterns.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
    artisans: 45,
    featured: true,
  },
  {
    id: "van-phuc",
    name: "Van Phuc Silk",
    region: "Hanoi",
    category: "silk",
    heritage: "1200+ years",
    description: "Famous for luxurious silk fabrics with intricate traditional Vietnamese designs.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
    artisans: 32,
    featured: true,
  },
  {
    id: "ha-thai",
    name: "Ha Thai Lacquerware",
    region: "Hanoi",
    category: "lacquer",
    heritage: "400+ years",
    description: "Traditional lacquer art with natural materials and centuries-old techniques.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=400&fit=crop",
    artisans: 28,
    featured: false,
  },
  {
    id: "dong-ky",
    name: "Dong Ky Woodcarving",
    region: "Bac Ninh",
    category: "wood",
    heritage: "600+ years",
    description: "Exquisite wood furniture and carvings with traditional motifs and natural finishes.",
    image: "https://images.unsplash.com/photo-1452457750107-cd084dce177d?w=600&h=400&fit=crop",
    artisans: 52,
    featured: true,
  },
]

export const artisans: Artisan[] = [
  {
    id: "nguyen-van-minh",
    name: "Nguyen Van Minh",
    title: "Master Ceramicist",
    village: "Bat Trang Village",
    villageId: "bat-trang",
    region: "Hanoi",
    craft: "Traditional Ceramics",
    experience: "35 years",
    bio: "Third-generation ceramicist preserving ancient Bat Trang techniques while innovating for modern aesthetics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    story: "Born into a family of potters, Master Minh learned the art of ceramics from his grandfather at age 8. For over three decades, he has dedicated his life to preserving the traditional blue and white pottery techniques that made Bat Trang famous throughout Asia.\n\nHis workshop, nestled in the heart of the village, still uses wood-fired kilns that have been operating for over a century. Each piece he creates carries the essence of generations of knowledge, from the careful selection of clay from the Red River to the precise application of cobalt glazes.\n\nMaster Minh has trained over 50 apprentices, ensuring that these precious techniques continue to live on. His work has been displayed in museums across Vietnam and has earned him the title of Nghệ nhân (Master Artisan) from the Vietnamese government.",
    products: [
      {
        id: "ceramic-vase-1",
        name: "Blue Dragon Vase",
        price: 450,
        description: "Hand-painted traditional dragon motif on white porcelain",
        image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop",
        artisanId: "nguyen-van-minh",
      },
      {
        id: "ceramic-bowl-1",
        name: "Lotus Bowl Set",
        price: 180,
        description: "Set of 4 hand-painted lotus pattern bowls",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
        artisanId: "nguyen-van-minh",
      },
    ],
    awards: ["National Artisan Award 2018", "UNESCO Heritage Craftsperson 2020"],
    techniques: ["Wood-fired kiln", "Cobalt blue glazing", "Hand-throwing", "Traditional patterns"],
  },
  {
    id: "tran-thi-lan",
    name: "Tran Thi Lan",
    title: "Silk Weaving Master",
    village: "Van Phuc Village",
    villageId: "van-phuc",
    region: "Hanoi",
    craft: "Traditional Silk Weaving",
    experience: "28 years",
    bio: "Renowned silk weaver specializing in traditional ao dai fabrics and ceremonial textiles.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&h=600&fit=crop",
    story: "Madame Lan began her journey with silk at age 12, learning from her mother on wooden looms that had been in her family for five generations. The rhythmic clatter of the shuttle became the soundtrack of her childhood in Van Phuc village.\n\nToday, she is one of the few remaining masters who can create the intricate 'van' patterns that give Van Phuc silk its distinctive shimmer. Her hands move with practiced grace, each thread carefully placed to create fabrics that have adorned brides, diplomats, and cultural ceremonies.\n\nHer dedication to preserving these techniques while creating contemporary designs has made her workshop a destination for those seeking authentic Vietnamese silk. She believes that each piece of silk tells a story of patience, precision, and profound respect for tradition.",
    products: [
      {
        id: "silk-scarf-1",
        name: "Phoenix Silk Scarf",
        price: 120,
        description: "Pure silk scarf with traditional phoenix embroidery",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
        artisanId: "tran-thi-lan",
      },
    ],
    awards: ["Vietnam Craft Excellence 2019"],
    techniques: ["Jacquard weaving", "Natural silk dyeing", "Traditional loom work"],
  },
  {
    id: "le-duc-thanh",
    name: "Le Duc Thanh",
    title: "Lacquer Artist",
    village: "Ha Thai Village",
    villageId: "ha-thai",
    region: "Hanoi",
    craft: "Traditional Lacquerware",
    experience: "22 years",
    bio: "Contemporary lacquer artist blending 400-year-old techniques with modern artistic expression.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&h=600&fit=crop",
    story: "Master Thanh's path to lacquerware began at the Hanoi University of Fine Arts, where he discovered the meditative process of applying layer upon layer of natural lacquer. Unlike quick modern finishes, traditional Vietnamese lacquerware requires up to 20 coats, each taking weeks to cure.\n\nHe trained under the masters of Ha Thai village, learning to harvest and process sap from lacquer trees, create colors from natural minerals, and apply gold and silver leaf with microscopic precision. His pieces take months to complete, but the result is art that will last for centuries.\n\nToday, Master Thanh creates both traditional and contemporary works, from ceremonial boxes to large-scale art installations. His gallery in Ha Thai welcomes visitors to witness the painstaking beauty of this ancient craft.",
    products: [
      {
        id: "lacquer-box-1",
        name: "Mother of Pearl Box",
        price: 380,
        description: "Inlaid mother of pearl lacquerware jewelry box",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop",
        artisanId: "le-duc-thanh",
      },
    ],
    techniques: ["Natural lacquer extraction", "Gold leaf application", "Mother of pearl inlay"],
  },
]

export const gratitudeMessages: GratitudeMessage[] = [
  {
    id: "1",
    author: "Sarah Chen",
    location: "San Francisco, USA",
    message: "Meeting Master Minh and watching him create pottery was the highlight of our Vietnam trip. The patience and precision in every movement was humbling. We treasure our vase and the story behind it.",
    artisanId: "nguyen-van-minh",
    artisanName: "Nguyen Van Minh",
    date: "2025-12-15",
    featured: true,
  },
  {
    id: "2",
    author: "Jean-Pierre Dubois",
    location: "Paris, France",
    message: "The silk from Madame Lan is extraordinary. My wife wore it for our daughter's wedding, and everyone asked about its origin. Thank you for preserving such beautiful traditions.",
    artisanId: "tran-thi-lan",
    artisanName: "Tran Thi Lan",
    date: "2025-11-28",
    featured: true,
  },
  {
    id: "3",
    author: "Tanaka Yuki",
    location: "Tokyo, Japan",
    message: "The lacquerware box I purchased is a masterpiece. Knowing the months of work and centuries of tradition behind it makes it priceless to our family.",
    artisanId: "le-duc-thanh",
    artisanName: "Le Duc Thanh",
    date: "2025-10-20",
    featured: true,
  },
  {
    id: "4",
    author: "Maria Santos",
    location: "Lisbon, Portugal",
    message: "Scanning the QR code on my ceramic bowl and learning about Bat Trang village made my souvenir so much more meaningful. This platform is wonderful!",
    date: "2025-09-12",
    featured: false,
  },
  {
    id: "5",
    author: "David Kim",
    location: "Seoul, South Korea",
    message: "As someone who values craftsmanship, discovering these artisan stories through Lunar Legacy has been incredible. It connects us to the human hands behind beautiful objects.",
    date: "2025-08-05",
    featured: true,
  },
  {
    id: "6",
    author: "Emma Thompson",
    location: "London, UK",
    message: "Brought my students here to learn about Vietnamese heritage. The educational content is fantastic. Thank you for making cultural preservation accessible.",
    date: "2025-07-18",
    featured: false,
  },
]

export function getArtisanById(id: string): Artisan | undefined {
  return artisans.find(a => a.id === id)
}

export function getArtisansByVillage(villageId: string): Artisan[] {
  return artisans.filter(a => a.villageId === villageId)
}

export function getVillageById(id: string): Village | undefined {
  return villages.find(v => v.id === id)
}

export function getFeaturedGratitudeMessages(): GratitudeMessage[] {
  return gratitudeMessages.filter(m => m.featured)
}
