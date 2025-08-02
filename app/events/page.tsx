import { Suspense } from "react";
import { getEvents } from "./getEvents";
import EventsClient from "@/components/organisms/EventsClient";
import { cookies } from "next/headers";

export default async function EventsDashboardPage() {
   const cookievalue = cookies()
    const cookieHeader = (await cookievalue)
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ')
  const events = await getEvents(cookieHeader);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pb-40">
      <div className="w-full max-w-6xl mx-auto mt-10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Available Events
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Events available for your tier
        </p>
        <Suspense fallback={<div className="text-center py-10">Loading events...</div>}>
          <EventsClient events={events} />
        </Suspense>
      </div>
    </div>
  );
}
