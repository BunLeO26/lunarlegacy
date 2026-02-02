import { QrCode, BookOpen, Users, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    icon: QrCode,
    title: "Quét mã QR",
    description: "Bạn có thể tìm mã QR của chúng mình trên các sản phẩm thủ công chính hãng, tại cổng làng hoặc tại các địa điểm đối tác.",
    step: "01",
  },
  {
    icon: BookOpen,
    title: "Khám phá câu chuyện",
    description: "Khám phá nội dung di sản phong phú, bao gồm video về nghệ nhân, lịch sử nghề thủ công và các truyền thống của làng nghề.",
    step: "02",
  },
  {
    icon: Users,
    title: "Kết nối với các nghệ nhân",
    description: "Gặp gỡ các nghệ nhân, tìm hiểu về kỹ thuật chế tác của họ và thấu hiểu sự tâm huyết, cống hiến trong từng sản phẩm..",
    step: "03",
  },
  {
    icon: ShoppingBag,
    title: "Hỗ trợ và chia sẻ",
    description: "Mua các sản phẩm chính hãng, gửi lời tri ân và góp phần gìn giữ, bảo tồn di sản văn hóa..",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">How It Works</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Từ quét mã tới kết nối di sản 
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our Lunar Legacy flow creates meaningful connections between you and traditional artisans 
            in just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-serif font-bold text-sm flex items-center justify-center">
                  {step.step}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
