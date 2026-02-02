import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <QrCode className="h-4 w-4" />
              <span>Scan. Discover. Connect.</span>
            </div>
            
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Bánh tét Mặt Trăng: Từ làng cổ Đại An Khê đến kỷ nguyên số
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Mỗi đòn bánh không chỉ là thực phẩm mà là một "hồ sơ số" duy nhất, kết nối người dùng với câu chuyện cuộc đời và đôi bàn tay của các nghệ nhân làng Đại An Khê.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#heritage">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Explore Heritage Library
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/gratitude">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 bg-transparent">
                  <Heart className="h-4 w-4" />
                  Gratitude Wall
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Vùng sản xuất</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Nghệ nhân</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary"></div>
                <div className="text-sm text-muted-foreground"></div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent z-10" />
              <img
                src="./banhtetmattrang.jpg"
                alt="Traditional Vietnamese ceramic artisan at work"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-card/95 backdrop-blur rounded-xl p-4 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>

            <h3 className="font-serif font-semibold text-card-foreground">Làng Đại An Khê</h3>
                      <p className="text-sm text-muted-foreground">Làng nghề truyền thống với lịch sử hơn 500 năm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-accent flex items-center justify-center shadow-lg">
              <QrCode className="h-12 w-12 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}