import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";
import MapSection from "@/components/contact/MapSection";
import Footer from "@/components/Footer";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Contact Us | Ginger House Museum Hotel, Fort Kochi",
  description:
    "Ginger House Museum Hotel, Jew Street, Mattancherry, Kochi 682 002. Call +91 95262 13400 or e-mail museumhotelkochi@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          page="Contact"
          eyebrow="Jew Street · Mattancherry · Kochi"
          title={["Contact us"]}
          intro="Questions about a stay, a table, a treatment or an event? Call, write or drop by. We are on Jew Street."
          image="/images/dest-jew-town.jpg"
          alt="A lively street in Jew Town lined with shops and old buildings"
          position="50% 60%"
          compact
        />
        <ContactDetails />
        <MapSection />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
