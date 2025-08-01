import { FaUser, FaMedal, FaCrown, FaGem } from "react-icons/fa";

const tiers = [
  {
    name: "Free",
    icon: <FaUser className="text-purple-400 text-3xl mb-2" />,
    price: "₹0 / month",
    features: [
      "✓ Community events",
      "✓ Basic workshops",
      "✓ Email updates",
    ],
    highlight: false,
  },
  {
    name: "Silver",
    icon: <FaMedal className="text-gray-300 text-3xl mb-2" />,
    price: "$19 / month",
    features: [
      "✓ All Free tier events",
      "✓ Premium workshops",
      "✓ Priority booking",
    ],
    highlight: false,
  },
  {
    name: "Gold",
    icon: <FaCrown className="text-yellow-400 text-3xl mb-2" />,
    price: "$49 / month",
    features: [
      "✓ All Silver tier events",
      "✓ Exclusive shows",
      "✓ VIP seating",
    ],
    highlight: true,
  },
  {
    name: "Platinum",
    icon: <FaGem className="text-purple-500 text-3xl mb-2" />,
    price: "$99 / month",
    features: [
      "✓ All Gold tier events",
      "✓ Private events",
      "✓ Meet & greet",
    ],
    highlight: false,
  },
];

export default function MembershipTiers() {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 text-center">Membership Tiers</h2>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Choose your level of access to exclusive events
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col items-center bg-black rounded-xl shadow-lg p-8 border-2 ${
              tier.highlight
                ? "border-yellow-400"
                : "border-gray-800"
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow border border-yellow-500">
                Popular
              </span>
            )}
            {tier.icon}
            <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
            <div className="text-purple-400 font-semibold text-lg mb-4">{tier.price}</div>
            <ul className="text-gray-200 text-sm space-y-2">
              {tier.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}