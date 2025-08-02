

import { getEventBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'

interface EventPageProps {
  params: {
    slug: string
  }
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug)

  if (!event) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-white text-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white text-black rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-purple-800">{event.title}</h1>
        <p className="text-sm text-gray-500">{new Date(event.event_date).toLocaleDateString()}</p>
        <p className="text-lg text-gray-700">{event.description}</p>
        {event.image_url && (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full rounded-xl shadow-md border border-purple-200"
          />
        )}
      </div>
    </div>
  )
}
