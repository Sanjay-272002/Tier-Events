'use client'

import { EventCardProps, tierStyles } from "@/types/tier";
import { JSX } from "react";
import { FaCrown, FaMedal, FaGem, FaUser } from "react-icons/fa";

const tierIcons: Record<string, JSX.Element> = {
  Free: <FaUser className="text-purple-400" />,
  Silver: <FaMedal className="text-gray-400" />,
  Gold: <FaCrown className="text-yellow-400" />,
  Platinum: <FaGem className="text-purple-500" />,
};




export default function EventCard({
  image_url,
  tier,
  event_date,
  title,
  description,
  location,
  onClick,
}: EventCardProps) {
  return (
    <div onClick={onClick} className={`rounded-xl overflow-hidden shadow-lg border ${tierStyles[tier]} flex flex-col`}>
      <img src={image_url} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-1 font-semibold text-sm">
            {tierIcons[tier]}
            <span className="capitalize text-black" >{tier}</span>
          </span>
          <span className="text-xs text-gray-500">{event_date}</span>
        </div>
        <h3 className="text-lg font-bold text-black mb-1">{title}</h3>
        <p className="text-sm text-gray-700 mb-2 flex-1">{description}</p>
        <div className="text-xs text-purple-700 font-semibold">{location}</div>
      </div>
    </div>
  );
}