import { Suspense } from "react";
import { getEvents } from "./getEvents";
import EventsClient from "@/components/organisms/EventsClient";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function EventsDashboardPage() {
   const cookievalue = cookies()
    const cookieHeader = (await cookievalue)
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ')
    console.warn("Cookie Header:", cookieHeader);
  const events = await getEvents(cookieHeader);
console.warn("Events fetched:", events);
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pb-40">
      <div className="w-full max-w-6xl mx-auto mt-10 mb-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className=" text-2xl md:text-4xl font-bold text-black mb-2">
          Available Events
        </h1>
          <Link
  href="/updatetier"
  className="px-2 py-1 bg-black text-white rounded hover:bg-gray-800 transition cursor-pointer @[375px]:text-sm"
>
  Update Tier
</Link>
        </div>
       
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
