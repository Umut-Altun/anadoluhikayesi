"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [userType, setUserType] = useState("consumer")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            user_type: userType,
          },
        },
      })

      if (signUpError) throw signUpError

      // Kullanıcı profil bilgilerini kaydet
      if (data.user) {
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: data.user.id,
            full_name: name,
            user_type: userType,
          },
        ])

        if (profileError) throw profileError
      }

      router.push("/kayit-basarili")
    } catch (error: any) {
      setError(error.message || "Kayıt olurken bir hata oluştu.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Kayıt Ol</CardTitle>
          <CardDescription>Anadolu Hikayeleri'ne üye olarak alışverişe başlayın</CardDescription>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            {error && <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div>}
            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad</Label>
              <Input id="name" placeholder="Ad Soyad" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Şifreniz en az 8 karakter uzunluğunda olmalıdır.</p>
            </div>
            <div className="space-y-2">
              <Label>Hesap Türü</Label>
              <RadioGroup
                defaultValue="consumer"
                value={userType}
                onValueChange={setUserType}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="consumer" id="consumer" />
                  <Label htmlFor="consumer" className="font-normal">
                    Tüketici olarak kayıt ol
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="producer" id="producer" />
                  <Label htmlFor="producer" className="font-normal">
                    Üretici olarak kayıt ol
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Kayıt Yapılıyor..." : "Kayıt Ol"}
            </Button>
            <div className="text-center text-sm">
              Zaten bir hesabınız var mı?{" "}
              <Link href="/giris" className="text-primary hover:underline">
                Giriş Yap
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
