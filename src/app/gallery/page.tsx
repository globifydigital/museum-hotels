import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import EnquiryBand from "@/components/page/EnquiryBand";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Gallery | Ginger House Museum Hotel, Fort Kochi",
  description:
    "Photos of Ginger House Museum Hotel: heritage rooms, the antique-filled restaurant, the courtyard and infinity pool, celebrations and Fort Kochi.",
};

export default function GalleryPage() {
  return (
    <>
      <main>
        <PageHero
          page="Gallery"
          eyebrow="Rooms · Spaces · Dining · Events · Kochi"
          title={["Through", "the lens"]}
          intro="Carved teak and gilded halls, a courtyard of green walls, celebrations by the water and the town beyond."
          image="/images/gallery-hero.jpg"
          alt="A guest walking through the courtyard veranda lined with plants and a green living wall"
          position="50% 45%"
        />
        <GalleryGrid />
        <EnquiryBand body="Seen a room you love? Tell us your dates and our team will get back to you to plan your stay." />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
