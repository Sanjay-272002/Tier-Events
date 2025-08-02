// app/events/getEvents.ts
export async function getEvents(cookies?: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(cookies ? { Cookie: cookies } : {}),
    },
  });

  if (!res.ok || res.headers.get("Content-Type")?.includes("application/json") === false) {
    console.error("API response was not OK or not JSON:", await res.text());
    return []; 
  }

  return res.json();
}