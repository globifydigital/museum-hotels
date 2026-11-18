import type { Metadata } from "next";
import Footer from "@/components/Footer";
import EnquiryBand from "@/components/page/EnquiryBand";
import ImageBand from "@/components/page/ImageBand";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";
import Offer from "@/components/stay/Offer";
import RoomCollection from "@/components/stay/RoomCollection";
import Services from "@/components/stay/Services";
import StayIntro from "@/components/stay/StayIntro";
import { MEZZANINE } from "@/data/stay";

export const metadata: Metadata = {
  title: "Rooms & Suites | Ginger House Museum Hotel, Fort Kochi",
  description:
    "Ten heritage rooms and suites, each with its own story: carved teak, antiques, lake-view balconies and an infinity pool over Vembanad lake.",
};

export default function StayPage() {
  return (
    <>
      <main>
        <PageHero
          page="Stay"
          eyebrow="Rooms & suites"
          title={["A room", "of your own"]}
          intro="Ten rooms and suites, each unique in character, furnished with antiques and set around a garden and an infinity pool by the lake."
          image="/images/stay-hero.jpg"
          alt="A heritage room with a carved four-poster bed beneath an ornate teak ceiling"
          position="50% 55%"
        />
        <StayIntro />
        <RoomCollection />
        <ImageBand
          image="/images/stay-infinity-pool.jpg"
          alt="The infinity pool beside a green living wall, looking out over Vembanad lake"
          eyebrow={MEZZANINE.eyebrow}
          title={MEZZANINE.title}
          body={MEZZANINE.body}
        />
        <Offer />
        <Services />
        <EnquiryBand body="Tell us your dates and which room you have your eye on. Our team will get back to you to plan your stay." />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
