import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import FeaturedProducers from "@/components/featured-producers"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="my-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Üretici Hikayeleri</h2>
          <Link href="/ureticiler">
            <Button variant="outline">Tüm Hikayeleri Gör</Button>
          </Link>
        </div>
        <FeaturedProducers />
      </section>

      <section className="my-16 bg-muted/50 py-12 px-6 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Anadolu'nun Hikayesi</h2>
          <p className="text-lg mb-6">
            Anadolu Hikayeleri, yerel üreticilerin emeklerini ve hikayelerini ön plana çıkararak, sürdürülebilir tarımı
            destekleyen bir platformdur. Her ürünün arkasında bir hikaye, her hikayenin arkasında bir Anadolu insanı
            vardır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/hakkimizda">Hikayemizi Keşfet</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/nasil-calisir">Nasıl Çalışır?</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Öne Çıkan Ürünler</h2>
          <Link href="/urunler">
            <Button variant="outline">Tüm Ürünleri Gör</Button>
          </Link>
        </div>
        <FeaturedProducts />
      </section>

      <section className="my-16 grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Üretici Kooperatifi"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Üretici Kooperatifi</h3>
              <p className="mb-4">
                Platforma kayıtlı üreticilerimiz bir kooperatif çatısı altında birleşerek güçlerini birleştiriyor.
              </p>
              <Button variant="outline" asChild>
                <Link href="/kooperatif">Detaylı Bilgi</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tüketici Kooperatifi"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Tüketici Kooperatifi</h3>
              <p className="mb-4">
                Sadakat programımızla sık alışveriş yapanlar için %10 geri ödeme veya ücretsiz ürün fırsatları.
              </p>
              <Button variant="outline" asChild>
                <Link href="/sadakat-programi">Detaylı Bilgi</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
