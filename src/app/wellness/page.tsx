import type { Metadata } from "next";
import Footer from "@/components/Footer";
import EnquiryBand from "@/components/page/EnquiryBand";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";
import Pillars from "@/components/wellness/Pillars";
import Restore from "@/components/wellness/Restore";
import SpaMenu from "@/components/wellness/SpaMenu";
import WellnessIntro from "@/components/wellness/WellnessIntro";

export const metadata: Metadata = {
  title: "Ayurveda & Wellness | Ginger House Museum Hotel, Fort Kochi",
  description:
    "Ayurveda, yoga and rejuvenation therapy, with a spa menu of massages, facials and body treatments, at a heritage hotel on the Kochi waterfront.",
};

export default function WellnessPage() {
  return (
    <>
      <main>
        <PageHero
          page="Wellness"
          eyebrow="Ayurveda · Yoga · Spa"
          title={["Wellness", "& Ayurveda"]}
          intro="Age-old Kerala therapies, yoga and a full spa menu, to restore you between heritage walks and lakeside sunsets."
          image="/images/wellness-banner.jpg"
          alt="Brass oil lamps glowing in a dim, red-walled treatment corridor"
          position="50% 50%"
        />
        <WellnessIntro />
        <Pillars />
        <SpaMenu />
        <Restore />
        <EnquiryBand
          eyebrow="Spa reservations"
          title="Book a treatment"
          body="Tell us which therapy you would like and when. We will arrange it around your stay, or around your visit if you are joining us for the day."
          subject="Spa enquiry"
          action="Book a treatment"
          image="/images/wellness-rejuvenation.jpg"
        />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
