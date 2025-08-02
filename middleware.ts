import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
  '/sign-up(.*)',
    "/",
])



export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentUrl = new URL(req.url);
  const isAccessingEventDashboard = currentUrl.pathname === "/events";
  const isApiRequest = currentUrl.pathname.startsWith("/api");



   console.warn("Middleware User ID:", userId);
  if (isApiRequest && !userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  
  if (userId && isPublicRoute(req) && !isAccessingEventDashboard) {
    return NextResponse.redirect(new URL("/events", req.url));
  }

  
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
 
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}