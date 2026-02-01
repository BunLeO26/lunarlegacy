import React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"

export const metadata = {
  title: "Admin Dashboard | Lunar Legacy",
  description: "Manage artisans, products, QR codes, and gratitude messages.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <main className="flex-1 bg-muted/30">
        {children}
      </main>
    </div>
  )
}
