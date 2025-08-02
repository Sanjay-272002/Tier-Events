"use client";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Header from "./Header";

const HIDE_HEADER_PATHS = ["/sign-in", "/sign-up", "/onboarding"];

export default function HeaderConditional() {
  const pathname = usePathname();
  const { user } = useUser();
  const isRootPage = !HIDE_HEADER_PATHS.some((path) => pathname.startsWith(path));

  // Prepare user props for Header
  const headerUser = user
    ? {
        username: user.username || user.firstName || user.emailAddresses?.[0]?.emailAddress || "User",
        tierName: typeof user.publicMetadata?.tier === "string" ? user.publicMetadata.tier : "Member",
        imageUrl: user.imageUrl,
      }
    : undefined;

  return isRootPage ? <Header user={headerUser} /> : null;
}