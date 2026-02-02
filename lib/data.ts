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
    id: "dao-ba-vay",
    name: "Đào Bá Vây",
    title: "Nghệ nhân ",
    village: "Làng Đại An khê",
    villageId: "bat-trang",
    region: "Quảng Trị",
    craft: "",
    experience: "66 tuổi",
    bio: "Ông Đào Bá Vây là người làng Đại An Khê (Quảng Trị), gắn bó lâu năm với nghề làm bánh truyền thống. Ông được xem là người tiên phong khôi phục và phát triển bánh tét mặt trăng, góp phần đưa đặc sản địa phương vươn ra thị trường trong và ngoài nước.",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/17/1139124/Banh-Tet-Mat-Trang-1-01.jpg",
    coverImage: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c807854033292237517b4619ada7860481e8174d1a3a68a2f88f2fc6bf7dbd430123d3cdb57feb901aea868e56e8a402356a73/banh_tet1_1.jpg",
    story: "Ông Đào Bá Vây là người con của làng Đại An Khê, tỉnh Quảng Trị, gắn bó lâu năm với nghề làm bánh truyền thống của địa phương. Ông được xem là một trong những người tiên phong trong việc khôi phục, gìn giữ và phát triển nghề làm bánh tét mặt trăng – loại bánh độc đáo mang đậm bản sắc văn hóa của vùng đất Đại An Khê. Không chỉ bảo tồn cách gói bánh cổ truyền, ông còn sáng tạo trong việc sử dụng nguyên liệu tự nhiên, tạo nên màu sắc và hương vị riêng biệt cho sản phẩm. Những năm gần đây, ông mạnh dạn mở rộng sản xuất, ứng dụng mạng xã hội trong kinh doanh, đưa bánh tét mặt trăng vươn ra thị trường trong và ngoài nước, góp phần tạo việc làm cho người dân địa phương và xây dựng thương hiệu đặc sản Quảng Trị.",
    products: [
      {
        id: "banhtet-thuong",
        name: "Bánh tét thường",
        price: 50000,
        description: "Hand-painted traditional dragon motif on white porcelain",
        image: "https://file.hstatic.net/200000868155/file/1489-post-cach-goi-banh-tet-truyen-thong-nam-bo-dep-don-gian-1.jpg",
        artisanId: "nguyen-van-minh",
      },
      {
        id: "ceramic-bowl-1",
        name: "Bánh tét mặt trăng",
        price: 75000,
        description: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCNeJ4PVXuT9AEtM7Gtm3GWK1hGGZ7FgPJQ&s",
        artisanId: "dao-ba-vay",
      },
    ],
    awards: [" ", " "],
    techniques: [" ", " ", " ", ""],
  },
  {
    id: "lethidiem ",
    name: " Bà Lê Thị Diễm",
    title: "Nghệ nhân",
    village: "Làng Đại An Khê",
    villageId: "dai-an-khe",
    region: "Quảng Trị",
    craft: "",
    experience: "46 tuổi",
    bio: "Bà Lê Thị Diễm là nghệ nhân làm bánh tét mặt trăng tại làng Đại An Khê (xã Hải Thượng, huyện Hải Lăng, tỉnh Quảng Trị). Gắn bó nhiều năm với nghề truyền thống, bà luôn gìn giữ cách làm thủ công và hương vị đặc trưng của bánh tét mặt trăng, góp phần bảo tồn nét văn hóa ẩm thực độc đáo của quê hương.",
    image: "./lethidiem.jpg",
    coverImage: "https://media.daidoanket.vn/w1200/uploaded/images/2025/09/08/68063a9f-e250-4aa2-9d15-079e2945ef7b.jpg",
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
    awards: [""],
    techniques: [" ", " ", "Traditional loom work"],
  },
  {
    id: "nguyen-thi-nguu",
    name: "Nguyễn Thị Ngưu",
    title: "Nghệ nhân",
    village: "Làng Đại An Khê",
    villageId: "dai-an-khe",
    region: "Quảng Trị",
    craft: "",
    experience: "65 tuổi",
    bio: "Nghệ nhân Nguyễn Thị Ngưu có hơn 30 năm gắn bó với nghề làm bánh tét mặt trăng truyền thống. Bằng sự khéo léo và tâm huyết, bà đã gìn giữ hương vị đặc trưng của quê hương, tạo ra những sản phẩm được nhiều người tin yêu và góp phần bảo tồn giá trị ẩm thực dân gian.",
    image: "./hinhbanguu.png",
    coverImage: "./hinhbanguu2.jpg",
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
    author: "Bà Nguyễn Thị Ngưu",
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
