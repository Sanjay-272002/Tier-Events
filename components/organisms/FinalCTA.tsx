'use client'
import { useRouter } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();
  return (
    <section className="w-full bg-purple-700 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Ready to access Exclusive events?
      </h2>
      <p className="text-lg text-purple-100 mb-8 text-center max-w-2xl">
        Join thousands of members enjoying tier-based event access.
      </p>
      <button
        onClick={() => router.push("/sign-up")}
        className="bg-black hover:bg-purple-900 text-white font-semibold px-8 py-3 rounded transition text-lg shadow"
      >
        Start Free Trial
      </button>
    </section>
  );
}