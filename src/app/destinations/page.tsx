import type { Metadata } from "next";
import Attractions from "@/components/destinations/Attractions";
import FortKochi from "@/components/destinations/FortKochi";
import PlaceIndex from "@/components/destinations/PlaceIndex";
import Footer from "@/components/Footer";
import EnquiryBand from "@/components/page/EnquiryBand";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Destinations & Attractions | Ginger House Museum Hotel, Fort Kochi",
  description:
    "Fort Kochi and Mattancherry from Ginger House: the Dutch Palace, Santa Cruz Basilica, Kathakali, Chinese fishing nets, sunset boat rides and Jew Town on the doorstep.",
};

export default function DestinationsPage() {
  return (
    <>
      <main>
        <PageHero
          page="Destinations"
          eyebrow="Fort Kochi · Mattancherry"
          title={["Discover", "Fort Kochi"]}
          intro="Basilicas and palaces, Kathakali and Chinese fishing nets: Kerala’s most storied town begins at our front door."
          image="/images/dest-hero-fishing-nets.jpg"
          alt="Chinese fishing nets silhouetted against a dramatic sunset over the sea"
          position="50% 60%"
        />
        <FortKochi />
        <PlaceIndex />
        <Attractions />
        <EnquiryBand
          eyebrow="Travel desk"
          title="Plan your days with us"
          body="Our travel desk is here to help you plan your sightseeing around Kochi. Tell us what you would like to see."
          subject="Travel desk enquiry"
          action="Ask our travel desk"
          image="/images/dest-jew-town.jpg"
        />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
