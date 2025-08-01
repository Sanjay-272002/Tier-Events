import FinalCTA from "@/components/organisms/FinalCTA";
import HomeHero from "@/components/organisms/HomeHero";
import MembershipTiers from "@/components/organisms/MembershipTiers";
import UpcomingEvents from "@/components/organisms/UpcomingEvents";
import WhyChooseEventTier from "@/components/organisms/WhyChooseEventTier";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <MembershipTiers />
     <UpcomingEvents />
      <WhyChooseEventTier />
      <FinalCTA />
    </>
  );
}
