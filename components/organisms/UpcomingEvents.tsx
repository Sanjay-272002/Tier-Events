import { EventCardProps } from "@/types/tier";
import EventCard from "./EventCard";





const events: EventCardProps[] = [
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/046/070/611/small/inside-a-dimly-lit-jazz-club-the-smooth-sounds-of-saxophones-and-pianos-fill-the-room-as-singers-croon-on-stage-the-intimate-setting-creates-a-cozy-and-classy-atmospher-photo.jpg",
    tier: "Gold",
    date: "Aug 12, 2025",
    name: "VIP Jazz Night",
    description: "An exclusive jazz concert for Gold and above members.",
    location: "Downtown Arena, NY",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXxyD-35OFFhOIPK6eGXkAetYQ8jRW_bjVA&s",
    tier: "Silver",
    date: "Aug 20, 2025",
    name: "Premium Coding Workshop",
    description: "Hands-on workshop with industry experts for Silver+ members.",
    location: "Tech Hub, SF",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuceqiR7lR0juKupGkwWrAXQTE-d92AsYHg&s",
    tier: "Platinum",
    date: "Sep 2, 2025",
    name: "Platinum Gala Dinner",
    description: "A luxury dining experience with celebrity guests.",
    location: "Grand Palace, LA",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 text-center">Upcoming Events</h2>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Preview of exclusive events by tier
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </section>
  );
}