import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Bu sayfa normalde Supabase'den veri çekecek, şimdilik örnek veri kullanıyoruz
export default function ProductPage({ params }: { params: { id: string } }) {
  // Gerçek uygulamada bu veri Supabase'den gelecek
  const product = {
    id: params.id,
    name: "Soğuk Sıkım Zeytinyağı",
    price: 350,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Fethiye'nin dağ köylerinde yetişen zeytinlerden elde edilen, soğuk sıkım yöntemiyle üretilen saf zeytinyağı. Hiçbir katkı maddesi içermez, tamamen doğaldır.",
    producer: {
      id: 1,
      name: "Ayşe Teyze",
      location: "Muğla, Fethiye",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Zeytinyağı",
    isOrganic: true,
    rating: 4.8,
    reviewCount: 124,
    stock: 15,
    gallery: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    details: {
      origin: "Muğla, Fethiye",
      harvest: "Kasım 2023",
      volume: "1 Litre",
      packaging: "Cam Şişe",
      shelfLife: "2 Yıl",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.gallery.map((image, index) => (
              <div key={index} className="relative h-20 rounded-md overflow-hidden cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} görsel ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <Link href={`/urunler?kategori=${product.category}`}>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
            </Link>
            {product.isOrganic && <Badge className="ml-2 mb-2 bg-green-600 hover:bg-green-700">Organik</Badge>}
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} değerlendirme)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href={`/ureticiler/${product.producer.id}`} className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={product.producer.avatar || "/placeholder.svg"} alt={product.producer.name} />
                <AvatarFallback>{product.producer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{product.producer.name}</p>
                <p className="text-xs text-muted-foreground">{product.producer.location}</p>
              </div>
            </Link>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="text-3xl font-bold">{product.price} ₺</div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="rounded-none">
                <Minus className="h-4 w-4" />
                <span className="sr-only">Azalt</span>
              </Button>
              <span className="w-12 text-center">1</span>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Artır</span>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">{product.stock} adet stokta</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Sepete Ekle
            </Button>
            <Button variant="outline" size="lg" className="w-12 px-0">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorilere Ekle</span>
            </Button>
            <Button variant="outline" size="lg" className="w-12 px-0">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Paylaş</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="w-full grid grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="details">Ürün Detayları</TabsTrigger>
          <TabsTrigger value="story">Hikaye</TabsTrigger>
          <TabsTrigger value="reviews">Değerlendirmeler</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Ürün Özellikleri</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Menşei</div>
                    <div>{product.details.origin}</div>
                    <div className="font-medium">Hasat Zamanı</div>
                    <div>{product.details.harvest}</div>
                    <div className="font-medium">Hacim</div>
                    <div>{product.details.volume}</div>
                    <div className="font-medium">Ambalaj</div>
                    <div>{product.details.packaging}</div>
                    <div className="font-medium">Raf Ömrü</div>
                    <div>{product.details.shelfLife}</div>
                  </div>
                  <div className="pt-4 border-t">
                    <h3 className="font-bold mb-2">Saklama Koşulları</h3>
                    <p className="text-sm text-muted-foreground">
                      Serin ve kuru bir yerde, doğrudan güneş ışığından uzakta saklayınız. Açıldıktan sonra buzdolabında
                      muhafaza ediniz ve 1 ay içinde tüketiniz.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold mb-2">Üretim Süreci</h3>
                  <p className="text-sm text-muted-foreground">
                    Bu zeytinyağı, Fethiye'nin dağ köylerinde yetişen zeytinlerden elde edilir. Zeytinler elle toplanır
                    ve hasat edildikten sonra 24 saat içinde soğuk sıkım yöntemiyle işlenir. Bu yöntem, zeytinyağının
                    tüm besin değerlerini ve aromasını korumasını sağlar.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Hiçbir kimyasal işlem görmez ve katkı maddesi içermez. Tamamen doğal ve saftır.
                  </p>
                  <div className="pt-4 border-t">
                    <h3 className="font-bold mb-2">Kullanım Önerileri</h3>
                    <p className="text-sm text-muted-foreground">
                      Salatalarda, soğuk mezelerde ve yemeklerde kullanılabilir. En iyi lezzet için çiğ tüketilmesi
                      önerilir.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="story">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Ürünün Hikayesi</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Bu zeytinyağı, Ayşe Teyze'nin 40 yıldır özenle baktığı zeytin ağaçlarından elde edilir. Dedelerinden
                    kalan zeytinlikleri büyük bir özenle koruyan Ayşe Teyze, geleneksel yöntemlerle zeytinyağı üretiyor.
                  </p>
                  <p className="text-muted-foreground">
                    Hiçbir kimyasal kullanmadan, tamamen doğal yöntemlerle yetiştirdiği zeytinlerden elde ettiği yağlar,
                    yöre halkı tarafından şifa niyetine kullanılıyor.
                  </p>
                  <p className="text-muted-foreground">
                    Zeytinliklerini her gün kendi elleriyle sulayan Ayşe Teyze, modern tarım yöntemlerini reddediyor.
                    "Dedem nasıl yapıyorsa ben de öyle yapıyorum" diyen Ayşe Teyze, zeytinlerin olgunlaşma sürecini
                    sabırla bekliyor ve tam zamanında hasat ediyor.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Zeytinlik" fill className="object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Müşteri Değerlendirmeleri</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <div className="text-lg font-bold">{product.rating}</div>
                  <div className="text-sm text-muted-foreground">{product.reviewCount} değerlendirme</div>
                </div>

                <div className="space-y-4">
                  {/* Örnek değerlendirmeler */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Mehmet K.</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Harika bir zeytinyağı! Tadı çok doğal ve aroması muhteşem. Salatalarda kullanıyorum ve farkı hemen
                      anlaşılıyor.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>AY</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Ayşe Y.</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Çok beğendim, gerçekten doğal bir tat. Ambalajı da çok şık. Tekrar alacağım.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>HT</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Hasan T.</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Yıllardır zeytinyağı kullanıyorum ama bu kadar lezzetlisini ilk defa denedim. Üreticinin hikayesi
                      de çok etkileyici. Desteklemeye devam edeceğim.
                    </p>
                  </div>
                </div>

                <Button className="w-full">Tüm Değerlendirmeleri Gör</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
