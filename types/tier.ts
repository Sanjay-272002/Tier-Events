


export const tierStyles: Record<string, string> = {
  Free: "bg-purple-50 border-purple-200",
  Silver: "bg-gray-100 border-gray-300",
  Gold: "bg-yellow-50 border-yellow-300",
  Platinum: "bg-purple-100 border-purple-400",
};

 
export interface EventCardProps {
    id:string;
  image_url: string;
  tier: "Free" | "Silver" | "Gold" | "Platinum";
  event_date: string;
  title: string;
  description: string;
  location: string;
}
