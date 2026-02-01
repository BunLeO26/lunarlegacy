import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  QrCode, 
  MessageSquareHeart, 
  Package,
  TrendingUp,
  Eye,
  ArrowUpRight,
  Activity
} from "lucide-react"
import { artisans, gratitudeMessages, villages } from "@/lib/data"
import Link from "next/link"

const stats = [
  {
    name: "Total Artisans",
    value: artisans.length.toString(),
    change: "+2 this month",
    trend: "up",
    icon: Users,
    href: "/admin/artisans",
  },
  {
    name: "Active QR Codes",
    value: "156",
    change: "+12 this week",
    trend: "up",
    icon: QrCode,
    href: "/admin/qr-codes",
  },
  {
    name: "Gratitude Messages",
    value: gratitudeMessages.length.toString(),
    change: "+8 this week",
    trend: "up",
    icon: MessageSquareHeart,
    href: "/admin/messages",
  },
  {
    name: "Total Products",
    value: artisans.reduce((acc, a) => acc + a.products.length, 0).toString(),
    change: "+4 this month",
    trend: "up",
    icon: Package,
    href: "/admin/products",
  },
]

const recentActivity = [
  { type: "message", content: "New gratitude message from Sarah Chen", time: "2 hours ago" },
  { type: "artisan", content: "Nguyen Van Minh profile updated", time: "5 hours ago" },
  { type: "qr", content: "15 new QR scans from Bat Trang", time: "1 day ago" },
  { type: "product", content: "Blue Dragon Vase marked as featured", time: "2 days ago" },
]

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here is an overview of your heritage platform.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Eye className="h-4 w-4" />
            View Analytics
          </Button>
          <Link href="/admin/artisans">
            <Button className="gap-2">
              <Users className="h-4 w-4" />
              Add Artisan
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-card-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'message' ? 'bg-accent' :
                    activity.type === 'artisan' ? 'bg-primary' :
                    activity.type === 'qr' ? 'bg-chart-2' : 'bg-chart-4'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">
                      {activity.content}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/artisans" className="block">
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <Users className="h-4 w-4" />
                Manage Artisans
              </Button>
            </Link>
            <Link href="/admin/qr-codes" className="block">
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <QrCode className="h-4 w-4" />
                Generate QR Codes
              </Button>
            </Link>
            <Link href="/admin/messages" className="block">
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <MessageSquareHeart className="h-4 w-4" />
                Review Messages
              </Button>
            </Link>
            <Link href="/admin/products" className="block">
              <Button variant="outline" className="w-full justify-start gap-3 bg-transparent">
                <Package className="h-4 w-4" />
                Update Products
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Villages Overview */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="font-serif">Craft Villages Overview</CardTitle>
          <CardDescription>Performance metrics by village</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Village</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Region</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Artisans</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {villages.map((village) => (
                  <tr key={village.id} className="border-b border-border last:border-0">
                    <td className="py-4 px-4">
                      <span className="font-medium text-card-foreground">{village.name}</span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{village.region}</td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary" className="capitalize">
                        {village.category}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{village.artisans}</td>
                    <td className="py-4 px-4">
                      <Badge variant={village.featured ? "default" : "outline"}>
                        {village.featured ? "Featured" : "Active"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
