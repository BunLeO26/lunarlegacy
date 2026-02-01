"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  QrCode, 
  Plus, 
  Download, 
  Copy,
  Eye,
  BarChart3,
  ExternalLink
} from "lucide-react"
import { artisans, villages } from "@/lib/data"

interface QRCodeItem {
  id: string
  name: string
  type: "artisan" | "village" | "product"
  target: string
  scans: number
  created: string
  status: "active" | "inactive"
}

const qrCodes: QRCodeItem[] = [
  { id: "qr-1", name: "Nguyen Van Minh Profile", type: "artisan", target: "nguyen-van-minh", scans: 234, created: "2025-10-15", status: "active" },
  { id: "qr-2", name: "Bat Trang Village", type: "village", target: "bat-trang", scans: 567, created: "2025-09-20", status: "active" },
  { id: "qr-3", name: "Tran Thi Lan Profile", type: "artisan", target: "tran-thi-lan", scans: 189, created: "2025-11-01", status: "active" },
  { id: "qr-4", name: "Blue Dragon Vase", type: "product", target: "ceramic-vase-1", scans: 98, created: "2025-11-10", status: "active" },
  { id: "qr-5", name: "Van Phuc Silk Village", type: "village", target: "van-phuc", scans: 321, created: "2025-08-15", status: "active" },
]

export default function AdminQRCodesPage() {
  const [showGenerator, setShowGenerator] = useState(false)

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">QR Codes</h1>
          <p className="text-muted-foreground mt-1">
            Generate and manage QR codes for artisans, villages, and products.
          </p>
        </div>
        <Button className="gap-2" onClick={() => setShowGenerator(!showGenerator)}>
          <Plus className="h-4 w-4" />
          Generate QR Code
        </Button>
      </div>

      {showGenerator && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif">Generate New QR Code</CardTitle>
            <CardDescription>Create a QR code that links to heritage content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>QR Code Name</Label>
                <Input placeholder="e.g., Artisan Profile QR" />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="artisan">Artisan Profile</SelectItem>
                    <SelectItem value="village">Village Page</SelectItem>
                    <SelectItem value="product">Product Page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Target</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target" />
                  </SelectTrigger>
                  <SelectContent>
                    {artisans.map((artisan) => (
                      <SelectItem key={artisan.id} value={artisan.id}>
                        {artisan.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full gap-2">
                  <QrCode className="h-4 w-4" />
                  Generate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-card-foreground">
                  {qrCodes.length}
                </p>
                <p className="text-sm text-muted-foreground">Active QR Codes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-card-foreground">
                  {qrCodes.reduce((acc, qr) => acc + qr.scans, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Scans</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-card-foreground">
                  {Math.round(qrCodes.reduce((acc, qr) => acc + qr.scans, 0) / qrCodes.length)}
                </p>
                <p className="text-sm text-muted-foreground">Avg. Scans/Code</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QR Codes List */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">All QR Codes</CardTitle>
          <CardDescription>Manage and track your QR code performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Scans</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Created</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {qrCodes.map((qr) => (
                  <tr key={qr.id} className="border-b border-border last:border-0">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <QrCode className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <span className="font-medium text-card-foreground">{qr.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="secondary" className="capitalize">
                        {qr.type}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-primary">{qr.scans}</span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {new Date(qr.created).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={qr.status === "active" ? "default" : "outline"}>
                        {qr.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" title="Download">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Copy Link">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="View">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
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
