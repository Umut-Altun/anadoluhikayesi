import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Anadolu Hikayeleri</h3>
            <p className="text-sm text-muted-foreground">
              Yerel üreticilerle tüketicileri buluşturan, hikaye odaklı bir e-ticaret ve sosyal platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-sm text-muted-foreground hover:text-primary">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/ureticiler" className="text-sm text-muted-foreground hover:text-primary">
                  Üreticilerimiz
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-sm text-muted-foreground hover:text-primary">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/hikayeler" className="text-sm text-muted-foreground hover:text-primary">
                  Hikayeler
                </Link>
              </li>
              <li>
                <Link href="/kooperatif" className="text-sm text-muted-foreground hover:text-primary">
                  Kooperatif
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Yardım</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sss" className="text-sm text-muted-foreground hover:text-primary">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/teslimat" className="text-sm text-muted-foreground hover:text-primary">
                  Teslimat Bilgileri
                </Link>
              </li>
              <li>
                <Link href="/iade" className="text-sm text-muted-foreground hover:text-primary">
                  İade Politikası
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="text-sm text-muted-foreground hover:text-primary">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-muted-foreground hover:text-primary">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Bülten</h3>
            <p className="text-sm text-muted-foreground mb-4">
              En yeni ürünler ve hikayelerden haberdar olmak için bültenimize abone olun.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="E-posta adresiniz" />
              <Button>Abone Ol</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anadolu Hikayeleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
