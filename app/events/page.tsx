'use client';

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import EventCard from "@/components/organisms/EventCard";
import { EventCardProps } from "@/types/tier";

const TIER_ORDER = ["free", "silver", "gold", "platinum"];

const EVENTS_PER_PAGE = 9;

export default function EventsDashboard() {
  const { user } = useUser();
  const [events, setEvents] = useState<EventCardProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventCardProps[]>([]);
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("All");
  const [page, setPage] = useState(1);


  const userTierRaw = user?.publicMetadata?.tier as string | undefined;

  const userTierIndex = TIER_ORDER.indexOf(userTierRaw ?? "");


  useEffect(() => {
    const fetchevents=async () => {
      const res = await fetch("/api/events");
      if (!res.ok) {
        console.error("Failed to fetch events");
        return;
      } 
      const data = await res.json();
      setEvents(data || []);
    }  
    fetchevents();
  }, [userTierRaw]);

 
  useEffect(() => {
    let filtered = events;

    
    if (tierFilter !== "All") {
      
         filtered = filtered.filter((e) => e.tier === tierFilter);
     
    }

    // Filter by search
    if (search.trim()) {
      filtered = filtered.filter(
        (e) =>
          e.title?.toLowerCase().includes(search.toLowerCase()) ||
          e.description?.toLowerCase().includes(search.toLowerCase()) ||
          e.location?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
    setPage(1); 
  }, [events, search, tierFilter]);




  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (page - 1) * EVENTS_PER_PAGE,
    page * EVENTS_PER_PAGE
  );

  // Dropdown options: All + tiers up to user's tier
  const tierOptions = ["All", ...TIER_ORDER.slice(0, userTierIndex + 1)];
 return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pb-40">
      <div className="w-full max-w-6xl mx-auto mt-10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Available Events
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Events available for your tier
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black"
          />
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black"
          >
            {tierOptions.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedEvents.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-10">
              No events found.
            </div>
          ) : (
            paginatedEvents.map((event) => (
              <EventCard
                key={event.id}
                image_url={event.image_url}
                tier={(event.tier?.toLowerCase() || "Free") as "Free" | "Silver" | "Gold" | "Platinum"}
                event_date={event.event_date}
                title={event.title}
                description={event.description}
                location={event.location} id="event.id"/>
            ))
          )}
        </div>
       
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200 text-black hover:bg-purple-100"
                } transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
