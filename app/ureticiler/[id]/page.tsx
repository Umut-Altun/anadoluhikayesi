import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, MessageCircle, Share2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Bu sayfa normalde Supabase'den veri çekecek, şimdilik örnek veri kullanıyoruz
export default function ProducerPage({ params }: { params: { id: string } }) {
  // Gerçek uygulamada bu veri Supabase'den gelecek
  const producer = {
    id: params.id,
    name: "Ayşe Teyze",
    location: "Muğla, Fethiye",
    image: "/placeholder.svg?height=600&width=1200",
    avatar: "/placeholder.svg?height=200&width=200",
    category: "Zeytinyağı",
    story:
      "Ayşe Teyze, 40 yıldır Fethiye'nin dağ köylerinde zeytincilik yapıyor. Dedelerinden kalan zeytinlikleri büyük bir özenle koruyor ve geleneksel yöntemlerle zeytinyağı üretiyor. Hiçbir kimyasal kullanmadan, tamamen doğal yöntemlerle yetiştirdiği zeytinlerden elde ettiği yağlar, yöre halkı tarafından şifa niyetine kullanılıyor.",
    products: [
      {
        id: 1,
        name: "Soğuk Sıkım Zeytinyağı",
        price: 350,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 2,
        name: "Yeşil Zeytin",
        price: 120,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 3,
        name: "Siyah Zeytin",
        price: 140,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
        <Image src={producer.image || "/placeholder.svg"} alt={producer.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="border-2 border-white h-16 w-16">
              <AvatarImage src={producer.avatar || "/placeholder.svg"} alt={producer.name} />
              <AvatarFallback>{producer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{producer.name}</h1>
              <div className="flex items-center gap-1 text-sm opacity-90">
                <MapPin className="h-4 w-4" />
                <span>{producer.location}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-white/20 hover:bg-white/30 text-white">{producer.category}</Badge>
            <Badge className="bg-green-600 hover:bg-green-700">Organik Üretici</Badge>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="story">Hikaye</TabsTrigger>
              <TabsTrigger value="products">Ürünler</TabsTrigger>
              <TabsTrigger value="gallery">Galeri</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="space-y-6">
              <h2 className="text-2xl font-bold">Üreticinin Hikayesi</h2>
              <p className="text-muted-foreground">{producer.story}</p>
              <p className="text-muted-foreground">
                Zeytinliklerini her gün kendi elleriyle sulayan Ayşe Teyze, modern tarım yöntemlerini reddediyor. "Dedem
                nasıl yapıyorsa ben de öyle yapıyorum" diyen Ayşe Teyze, zeytinlerin olgunlaşma sürecini sabırla
                bekliyor ve tam zamanında hasat ediyor.
              </p>
              <p className="text-muted-foreground">
                Köyün eski taş değirmeninde öğütülen zeytinler, hiçbir katkı maddesi olmadan saf zeytinyağına dönüşüyor.
                Bu geleneksel yöntem, yağın tüm besin değerlerini korumasını sağlıyor.
              </p>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=1200" alt="Zeytinlik" fill className="object-cover" />
              </div>
            </TabsContent>
            <TabsContent value="products">
              <h2 className="text-2xl font-bold mb-6">Üreticinin Ürünleri</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {producer.products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <Link href={`/urunler/${product.id}`}>
                        <div className="relative h-48">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                          <p className="font-bold text-lg">{product.price} ₺</p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gallery">
              <h2 className="text-2xl font-bold mb-6">Fotoğraf Galerisi</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {producer.gallery.map((image, index) => (
                  <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${producer.name} galeri ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-lg">İletişime Geç</h3>
                <p className="text-sm text-muted-foreground">
                  Üretici ile doğrudan iletişime geçerek sorularınızı sorabilirsiniz.
                </p>
                <Button className="w-full" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Mesaj Gönder
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Ürünleri Keşfet</h3>
                <p className="text-sm text-muted-foreground">
                  Üreticinin tüm ürünlerini inceleyebilir ve sipariş verebilirsiniz.
                </p>
                <Button className="w-full">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Ürünlere Git
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Hikayeyi Paylaş</h3>
                <p className="text-sm text-muted-foreground">Bu üreticinin hikayesini arkadaşlarınızla paylaşın.</p>
                <Button className="w-full" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Paylaş
                </Button>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-bold text-lg mb-2">Konum</h3>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Harita" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{producer.location}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
