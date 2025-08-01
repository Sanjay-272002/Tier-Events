import { supabase } from '@/lib/supabase'
import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Tier to rank mapping
const tierMap: Record<string, number> = {
  free: 1,
  silver: 2,
  gold: 3,
  platinum: 4,
}

// GET: Fetch events for logged-in user's tier or lower
export async function GET(req: Request) {
  const { userId } = await auth()
 const user = await currentUser()
  if (!userId || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const userTier = user.publicMetadata?.tier as string | undefined

  if (!userTier || !(userTier in tierMap)) {
    return NextResponse.json({ error: 'Invalid or missing tier in metadata' }, { status: 400 })
  }
 
  const tierRank = tierMap[userTier.toLowerCase()]

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .lte('tier_rank', tierRank)
    .order('tier_rank', { ascending: false })
    .order('event_date', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
   console.log("Fetched Events:", data)
  return NextResponse.json(data)
}

// POST: Create new event (admin only — optional check)
export async function POST(req: Request) {
  
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  
  // Normalize to array
  const events = Array.isArray(body) ? body : [body];
 
 


  for (const event of events) {
    const { title, event_date, tier } = event;
    if (!title || !event_date || !tier || !(tier in tierMap)) {
      return NextResponse.json({ error: 'Missing or invalid fields in one of the events' }, { status: 400 });
    }
  }

 
  const eventsToInsert = events.map((event) => ({
    ...event,
    tier_rank: tierMap[event.tier],
  }));

  const { data, error } = await supabase.from('events').insert(eventsToInsert);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Events created successfully'}, { status: 201 });
}
