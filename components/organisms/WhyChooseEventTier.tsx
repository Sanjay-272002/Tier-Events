import { FaFilter, FaCalendarCheck, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaFilter className="text-purple-600 text-3xl mb-3" />,
    title: "Tier-Based Access",
    desc: "Smart filtering ensures you only see events available to your membership level.",
  },
  {
    icon: <FaCalendarCheck className="text-purple-600 text-3xl mb-3" />,
    title: "Easy Booking",
    desc: "Seamless reservation system with instant confirmation and calendar sync.",
  },
  {
    icon: <FaStar className="text-purple-600 text-3xl mb-3" />,
    title: "Premium Experience",
    desc: "Curated events and exclusive access to high-quality entertainment.",
  },
];

export default function WhyChooseEventTier() {
  return (
    <section className="w-full bg-black py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Why choose EventTier?</h2>
      <p className="text-lg text-purple-200 mb-10 text-center">
        Experience events like never before
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            {f.icon}
            <h3 className="text-xl font-bold text-black mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}