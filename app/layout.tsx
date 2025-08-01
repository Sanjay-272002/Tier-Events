import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import Header from "@/components/organisms/Header";
import HeaderConditional from "@/components/organisms/HeaderConditional";
import Footer from "@/components/organisms/Footer";
import FooterConditional from "@/components/organisms/FooterConditional";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Event Tier",
  description: "Event Tier Website which displays events based on user tier",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await currentUser();
  if (user) {
    console.log("Current User:", user.firstName, user.lastName, user.emailAddresses, user.publicMetadata?.tier);
  } else {
    console.log("Current User: null");
  }
  // Prepare user props for Header
  const headerUser = user
    ? {
        username: user.username || user.firstName || user.emailAddresses?.[0]?.emailAddress || "User",
        tierName: typeof user.publicMetadata?.tier === "string" ? user.publicMetadata.tier : "Member",
        imageUrl: user.imageUrl,
      }
    : undefined;
  console.log("Header User:", headerUser);
  return (
    <ClerkProvider>

    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <HeaderConditional user={headerUser} />
        {children}
        <FooterConditional />
        </body>
    </html>
    </ClerkProvider>
  );
}
