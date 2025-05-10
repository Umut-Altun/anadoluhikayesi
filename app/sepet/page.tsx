import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Bu sayfa normalde Supabase'den veri çekecek, şimdilik örnek veri kullanıyoruz
export default function CartPage() {
  // Gerçek uygulamada bu veri Supabase'den gelecek
  const cartItems = [
    {
      id: 1,
      name: "Soğuk Sıkım Zeytinyağı",
      price: 350,
      quantity: 2,
      image: "/placeholder.svg?height=200&width=200",
      producer: "Ayşe Teyze",
    },
    {
      id: 2,
      name: "Organik Yayla Balı",
      price: 280,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
      producer: "Hasan Amca",
    },
    {
      id: 3,
      name: "El Yapımı Kilim",
      price: 1200,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
      producer: "Fatma Hanım",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 30
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Alışveriş Sepeti</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Sepetinizdeki Ürünler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 border-b"
                  >
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/urunler/${item.id}`} className="font-bold hover:underline">
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">Üretici: {item.producer}</p>
                      <p className="font-bold mt-1">{item.price} ₺</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Azalt</span>
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Artır</span>
                      </Button>
                    </div>
                    <div className="text-right min-w-[80px] mt-2 sm:mt-0">
                      <div className="font-bold">{item.price * item.quantity} ₺</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Kaldır</span>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Sepetinizde ürün bulunmamaktadır.</p>
                  <Button asChild>
                    <Link href="/urunler">Alışverişe Başla</Link>
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/urunler">Alışverişe Devam Et</Link>
              </Button>
              <Button variant="ghost" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                Sepeti Temizle
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Sipariş Özeti</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ara Toplam</span>
                <span className="font-medium">{subtotal} ₺</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Kargo</span>
                <span className="font-medium">{shipping} ₺</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="font-bold">Toplam</span>
                <span className="font-bold">{total} ₺</span>
              </div>
              <div className="text-sm text-muted-foreground">*KDV dahildir</div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Ödemeye Geç
              </Button>
            </CardFooter>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Kupon Kodu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Kupon kodunuz"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button variant="outline">Uygula</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
