"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

const HIDE_HEADER_PATHS = ["/sign-in", "/sign-up", "/onboarding"];

export default function HeaderConditional({ user }: { user: any }) {
  const pathname = usePathname();
  const isRootPage = !HIDE_HEADER_PATHS.some((path) => pathname.startsWith(path));
  return isRootPage ? <Header user={user} /> : null;
}