import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Bu bileşen normalde Supabase'den veri çekecek, şimdilik örnek veri kullanıyoruz
const products = [
  {
    id: 1,
    name: "Soğuk Sıkım Zeytinyağı",
    price: 350,
    image: "/placeholder.svg?height=300&width=300",
    producer: "Ayşe Teyze",
    location: "Muğla, Fethiye",
    category: "Zeytinyağı",
    isOrganic: true,
  },
  {
    id: 2,
    name: "Organik Yayla Balı",
    price: 280,
    image: "/placeholder.svg?height=300&width=300",
    producer: "Hasan Amca",
    location: "Antalya, Korkuteli",
    category: "Bal",
    isOrganic: true,
  },
  {
    id: 3,
    name: "El Yapımı Kilim",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300",
    producer: "Fatma Hanım",
    location: "Gaziantep",
    category: "El İşi",
    isOrganic: false,
  },
  {
    id: 4,
    name: "Eski Kaşar Peyniri",
    price: 180,
    image: "/placeholder.svg?height=300&width=300",
    producer: "Ali Dayı",
    location: "Kars, Sarıkamış",
    category: "Peynir",
    isOrganic: true,
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden h-full transition-all hover:shadow-lg">
          <CardContent className="p-0">
            <Link href={`/urunler/${product.id}`}>
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.isOrganic && (
                  <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">Organik</Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.producer} • {product.location}
                </p>
                <p className="font-bold text-lg">{product.price} ₺</p>
              </div>
            </Link>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Sepete Ekle
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
