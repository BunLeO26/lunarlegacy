import Link from "next/link"
import { QrCode, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  explore: [
    { name: "Heritage Library", href: "#heritage" },
    { name: "Craft Categories", href: "#" },
    { name: "Featured Artisans", href: "/artisans" },
    { name: "Gratitude Wall", href: "/gratitude" },
  ],
  support: [
    { name: "How It Works", href: "#" },
    { name: "Partner With Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-serif font-bold text-lg">LL</span>
              </div>
              <span className="font-serif text-xl font-semibold">Lunar Legacy</span>
            </Link>
            <p className="text-sidebar-foreground/70 mb-6 max-w-sm leading-relaxed">
              Connecting consumers with traditional craft villages through the power of 
              storytelling and technology. Preserving cultural heritage for future generations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-sidebar-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Hanoi, Vietnam</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-sidebar-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@lunarlegacy.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-sidebar-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+84 24 1234 5678</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-sidebar-foreground/70 mb-4">
              Stay updated with new craft discoveries and artisan stories.
            </p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
              />
              <Button className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sidebar-foreground/60">
            2026 Lunar Legacy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
