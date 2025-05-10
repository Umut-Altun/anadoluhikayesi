import { createClient } from "@supabase/supabase-js"

// Ortam değişkenlerini kontrol et ve varsayılan değerler kullan
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pxgmufujuocduiymopwc.supabase.co"
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4Z211ZnVqdW9jZHVpeW1vcHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODYxODgsImV4cCI6MjA2MjQ2MjE4OH0.nS2FbmZiOWxxlZ8Pw44ZMKoCCbkqI1hguB0q34MaZhQ"

// Supabase istemcisini oluştur
export const supabase = createClient(supabaseUrl, supabaseKey)

// URL ve anahtarı dışa aktar
export { supabaseUrl, supabaseKey }
