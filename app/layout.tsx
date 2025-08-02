import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";
import Header from "@/components/organisms/Header";
import HeaderConditional from "@/components/organisms/HeaderConditional";
import Footer from "@/components/organisms/Footer";
import FooterConditional from "@/components/organisms/FooterConditional";
import { Toaster } from "react-hot-toast";
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

  return (
    <ClerkProvider>

    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <HeaderConditional />
         <Toaster position="top-center" />
        {children}
       
        <FooterConditional />
        </body>
    </html>
    </ClerkProvider>
  );
}
