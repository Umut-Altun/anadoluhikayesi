import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

// Bu bileşen normalde Supabase'den veri çekecek, şimdilik örnek veri kullanıyoruz
const producers = [
  {
    id: 1,
    name: "Ayşe Teyze",
    location: "Muğla, Fethiye",
    image: "/placeholder.svg?height=300&width=300",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Zeytinyağı",
    story: "40 yıldır aynı zeytinlikten el emeği ile zeytinyağı üretiyor.",
  },
  {
    id: 2,
    name: "Mehmet Amca",
    location: "Rize, Çayeli",
    image: "/placeholder.svg?height=300&width=300",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Çay",
    story: "Üç kuşaktır aile çiftliğinde organik çay yetiştiriyor.",
  },
  {
    id: 3,
    name: "Fatma Hanım",
    location: "Gaziantep",
    image: "/placeholder.svg?height=300&width=300",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "El İşi",
    story: "Geleneksel yöntemlerle Antep işi el sanatlarını yaşatıyor.",
  },
  {
    id: 4,
    name: "Ali Dayı",
    location: "Kars, Sarıkamış",
    image: "/placeholder.svg?height=300&width=300",
    avatar: "/placeholder.svg?height=100&width=100",
    category: "Peynir",
    story: "Yüksek yaylalarda beslenen hayvanlardan elde edilen sütlerle peynir yapıyor.",
  },
]

export default function FeaturedProducers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {producers.map((producer) => (
        <Link href={`/ureticiler/${producer.id}`} key={producer.id}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image src={producer.image || "/placeholder.svg"} alt={producer.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src={producer.avatar || "/placeholder.svg"} alt={producer.name} />
                      <AvatarFallback>{producer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{producer.name}</h3>
                      <p className="text-xs opacity-90">{producer.location}</p>
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-4 right-4">{producer.category}</Badge>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{producer.story}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
