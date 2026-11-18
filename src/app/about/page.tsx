import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import Experience from "@/components/about/Experience";
import Founder from "@/components/about/Founder";
import Reviews from "@/components/about/Reviews";
import SnakeBoat from "@/components/about/SnakeBoat";
import Footer from "@/components/Footer";
import EnquiryBand from "@/components/page/EnquiryBand";
import ImageBand from "@/components/page/ImageBand";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "About Us | Ginger House Museum Hotel, Fort Kochi",
  description:
    "A heritage boutique hotel on the Kochi waterfront: a 120-year-old snake boat in the lobby, a courtyard from a Chettinad palace, and antiques in every room.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          page="About"
          eyebrow="Our story"
          title={["The seventh", "heaven of art"]}
          intro="A heritage boutique hotel by the water in Jew Town, Fort Kochi, where every room is part museum and almost every antique is for sale."
          image="/images/about-hero.jpg"
          alt="A guest on the carved wooden balcony of Ginger House, looking over the garden to the Kochi waterfront"
          position="50% 45%"
        />
        <AboutIntro />
        <SnakeBoat />
        <Founder />
        <ImageBand
          image="/images/about-sunset.jpg"
          alt="Chinese fishing nets and a fishing boat silhouetted against a golden Fort Kochi sunset"
          eyebrow="Golden hour"
          title="Sunset, sundowner in hand"
          body="Sunset is best enjoyed from the hotel’s second-floor garden, looking out over the backwaters as the Chinese fishing nets turn to silhouettes."
        />
        <Experience />
        <Reviews />
        <EnquiryBand />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
