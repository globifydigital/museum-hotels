import type { Metadata } from "next";
import EventEnquiry from "@/components/events/EventEnquiry";
import EventsIntro from "@/components/events/EventsIntro";
import Occasions from "@/components/events/Occasions";
import PastEvents from "@/components/events/PastEvents";
import Weddings from "@/components/events/Weddings";
import Footer from "@/components/Footer";
import PageHero from "@/components/page/PageHero";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Weddings & Events | Ginger House Museum Hotel, Fort Kochi",
  description:
    "Weddings, receptions, birthdays, meetings and family events at a heritage hotel on the Kochi waterfront, with banqueting, audio-visual equipment and a dedicated team.",
};

export default function EventsPage() {
  return (
    <>
      <main>
        <PageHero
          page="Events"
          eyebrow="Weddings · Celebrations · Meetings"
          title={["Gather", "at Ginger House"]}
          intro="Weddings, receptions, parties and meetings with a heritage backdrop, exquisite banqueting and a team that takes care of every detail."
          image="/images/event-hero.jpg"
          alt="An evening celebration in the hotel garden, strung with lights beside the water"
          position="50% 55%"
        />
        <EventsIntro />
        <Occasions />
        <Weddings />
        <PastEvents />
        <EventEnquiry />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
