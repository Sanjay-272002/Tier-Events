// app/events/EventsClient.tsx
"use client";
import { useState, useMemo, useEffect, useRef, use } from "react";
import { useUser } from "@clerk/nextjs";
import EventCard from "@/components/organisms/EventCard";
import { EventCardProps, TIER_ORDER } from "@/types/tier";      
import { useDebounce } from "@/hooks/useDebounce";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const EVENTS_PER_PAGE = 9;

export default function EventsClient({ events }: { events: EventCardProps[] }) {
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("All");
  const [page, setPage] = useState(1);
   const debouncedSearch = useDebounce(search, 400);
  const userTierRaw = user?.publicMetadata?.tier as string | undefined;
  const userTierIndex = TIER_ORDER.indexOf(userTierRaw ?? "");
  const tierOptions = ["All", ...TIER_ORDER.slice(0, userTierIndex + 1).map(t => t.charAt(0).toUpperCase() + t.slice(1))];
  const hasShownToast = useRef(false);
  const isPlatinum = userTierRaw?.toLowerCase() === "platinum";
  const router=useRouter();
     useEffect(() => {
    if (!isPlatinum && !hasShownToast.current) {
        
    toast("Some events require Higher tier access. Upgrade to Higher tier to unlock them.", {
      icon: "🔒",
    });
    hasShownToast.current = true;
  }
  }, [isPlatinum]);
  const filteredEvents = useMemo(() => {
    let filtered = events;

    if (tierFilter !== "All") {
      filtered = filtered.filter((e) => e.tier?.toLowerCase() === tierFilter.toLowerCase());
    }

    if (debouncedSearch?.trim()) {
      filtered = filtered.filter(
        (e) =>
          e.title?.toLowerCase().includes(search.toLowerCase()) ||
          e.description?.toLowerCase().includes(search.toLowerCase()) ||
          e.location?.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered;
  }, [events, debouncedSearch, tierFilter]);

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (page - 1) * EVENTS_PER_PAGE,
    page * EVENTS_PER_PAGE
  );

  return (
    <>
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
              {tier === "All" ? "All" : tier.charAt(0).toUpperCase() + tier.slice(1)}
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
              tier={(event.tier?.charAt(0).toUpperCase() + event.tier?.slice(1)) as "Free" | "Silver" | "Gold" | "Platinum"}
              event_date={event.event_date}
              title={event.title}
              description={event.description}
              location={event.location}
              id={event.id}
             onClick={() => router.push(`/events/${event.id}`)}
            />
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
    </>
  );
}