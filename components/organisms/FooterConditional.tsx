"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const HIDE_FOOTER_PATHS = ["/sign-in", "/sign-up", "/onboarding"];

export default function FooterConditional() {
  const pathname = usePathname();
  const showFooter = !HIDE_FOOTER_PATHS.some((path) => pathname.startsWith(path));
  return showFooter ? <Footer /> : null;
}