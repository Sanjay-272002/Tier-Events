'use client';

import { useRouter } from "next/navigation";
import { FaCrown, FaMedal, FaGem, FaUser } from "react-icons/fa";

export default function HomeHero() {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-400 text-center">
        Exclusive Events For Every Tier
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 text-center max-w-2xl">
        Access premium shows and events based on your membership level. From free community events to platinum exclusive experiences.
      </p>
      <button
        onClick={() => router.push("/sign-up")}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded transition text-lg shadow cursor-pointer"
      >
        Join Now
      </button>
    </section>
  );
}