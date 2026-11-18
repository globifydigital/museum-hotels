import type { Metadata } from "next";
import Footer from "@/components/Footer";
import EnquiryBand from "@/components/page/EnquiryBand";
import PageHero from "@/components/page/PageHero";
import AntiqueHall from "@/components/restaurant/AntiqueHall";
import Dishes from "@/components/restaurant/Dishes";
import GingerSignatures from "@/components/restaurant/GingerSignatures";
import RestaurantIntro from "@/components/restaurant/RestaurantIntro";
import Showroom from "@/components/restaurant/Showroom";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Ginger House Restaurant | Kerala Cuisine by the Water, Fort Kochi",
  description:
    "Authentic Kerala cuisine and the signature ginger tea, served by Kochi bay in a dining hall built entirely from antiques. Open to visitors and hotel guests.",
};

export default function RestaurantPage() {
  return (
    <>
      <main>
        <PageHero
          page="Restaurant"
          eyebrow="Dining · Open to all"
          title={["Ginger House", "Restaurant"]}
          intro="Authentic Kerala cuisine and our signature ginger tea, served by the bay in a hall made entirely of antiques."
          image="/images/restaurant-dining-room.jpg"
          alt="The gilded Ginger House dining room with chandeliers, carved pillars and tables laid for dinner"
          position="50% 50%"
        />
        <RestaurantIntro />
        <Dishes />
        <GingerSignatures />
        <AntiqueHall />
        <Showroom />
        <EnquiryBand
          eyebrow="Reservations"
          title="Reserve a table"
          body="Visitors and hotel guests are always welcome. Send us your date, time and party size and we will get back to you to confirm."
          subject="Table reservation"
          action="Reserve a table"
          image="/images/setting-great-dining.jpg"
        />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
