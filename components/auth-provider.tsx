"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { SupabaseClient, User } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { supabaseUrl, supabaseKey } from "@/lib/supabase"

type SupabaseContext = {
  supabase: SupabaseClient
  user: User | null
  loading: boolean
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Doğrudan createClient kullanarak Supabase istemcisini oluştur
  const supabase = createClientComponentClient({
    supabaseUrl,
    supabaseKey,
  })

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error("Auth error:", error)
      } finally {
        setLoading(false)
      }
    }

    getUser()

    try {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
        router.refresh()
      })

      return () => {
        subscription.unsubscribe()
      }
    } catch (error) {
      console.error("Auth subscription error:", error)
      setLoading(false)
      return () => {}
    }
  }, [supabase, router])

  return <Context.Provider value={{ supabase, user, loading }}>{children}</Context.Provider>
}

export const useAuth = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
