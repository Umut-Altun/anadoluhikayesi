import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { cache } from "react"
import { supabaseUrl, supabaseKey } from "@/lib/supabase"

export const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies()
  return createServerComponentClient({
    cookies: () => cookieStore,
    supabaseUrl,
    supabaseKey,
  })
})

export async function getSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getUserDetails() {
  const supabase = createServerSupabaseClient()
  try {
    const { data: userDetails } = await supabase.from("profiles").select("*").single()
    return userDetails
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getFeaturedProducers() {
  const supabase = createServerSupabaseClient()
  try {
    const { data: producers } = await supabase
      .from("producers")
      .select(`
        *,
        profiles (*)
      `)
      .limit(4)
    return producers
  } catch (error) {
    console.error("Error:", error)
    return []
  }
}

export async function getFeaturedProducts() {
  const supabase = createServerSupabaseClient()
  try {
    const { data: products } = await supabase
      .from("products")
      .select(`
        *,
        producers (
          *,
          profiles (*)
        )
      `)
      .limit(4)
    return products
  } catch (error) {
    console.error("Error:", error)
    return []
  }
}

export async function getProductById(id: string) {
  const supabase = createServerSupabaseClient()
  try {
    const { data: product } = await supabase
      .from("products")
      .select(`
        *,
        producers (
          *,
          profiles (*)
        ),
        reviews (*)
      `)
      .eq("id", id)
      .single()
    return product
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getProducerById(id: string) {
  const supabase = createServerSupabaseClient()
  try {
    const { data: producer } = await supabase
      .from("producers")
      .select(`
        *,
        profiles (*),
        products (*)
      `)
      .eq("id", id)
      .single()
    return producer
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}
