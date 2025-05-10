import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Anadolu'nun Hikayelerini Keşfedin
          </h1>
          <p className="text-lg text-muted-foreground">
            Yerel üreticilerin hikayelerini dinleyin, emeklerinin meyvelerini tadın. Her ürünün arkasında bir hikaye,
            her hikayenin arkasında bir Anadolu insanı var.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/urunler">Ürünleri Keşfet</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ureticiler">Üreticileri Tanı</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=800"
            alt="Anadolu Hikayeleri"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg" />
    </section>
  )
}
