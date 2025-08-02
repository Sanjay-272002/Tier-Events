import { supabase } from "./supabase"


export async function getEventBySlug(slug: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', slug)
    .single()

  if (error) {
    console.error('Failed to fetch event:', error.message)
    return null
  }

  return data
}
