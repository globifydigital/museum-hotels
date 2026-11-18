import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import EnquiryBand from "@/components/page/EnquiryBand";
import RevealObserver from "@/components/RevealObserver";
import DuringStay from "@/components/room/DuringStay";
import MoreRooms from "@/components/room/MoreRooms";
import RoomHero from "@/components/room/RoomHero";
import RoomStory from "@/components/room/RoomStory";
import { ALL_STAY_ROOMS, getRoom } from "@/data/stay";
import { titleCase } from "@/lib/text";

type Props = { params: Promise<{ room: string }> };

/* One page per room, prerendered at build time; any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_STAY_ROOMS.map((r) => ({ room: r.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = getRoom((await params).room);
  if (!room) return {};
  return {
    title: `${titleCase(room.name)} | Ginger House Museum Hotel, Fort Kochi`,
    description: `${room.tagline}. ${room.story.split(". ")[0]}.`,
  };
}

export default async function RoomPage({ params }: Props) {
  const room = getRoom((await params).room);
  if (!room) notFound();
  const name = titleCase(room.name);

  return (
    <>
      <main>
        <RoomHero room={room} />
        <RoomStory room={room} />
        <DuringStay />
        <MoreRooms room={room} />
        <EnquiryBand
          title={`Stay in ${name}`}
          body="Tell us your dates and how many are travelling. Our team will get back to you to plan your stay."
          subject={`Booking enquiry: ${name}`}
          image={room.image}
        />
      </main>
      <Footer />
      <RevealObserver key={room.id} />
    </>
  );
}
