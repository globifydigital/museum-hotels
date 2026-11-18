/** Events page content, adapted from museumhotel.co.in/events. */

export const EVENTS_INTRO = {
  eyebrow: "Ginger House events",
  title: "Celebrate in a museum",
  lead: "Weddings, receptions, corporate meetings, parties and family gatherings, set against a heritage backdrop and made picture-perfect.",
  paragraphs: [
    "We believe ambience is essential to every successful gathering. The hotel prides itself on an idealised setting, a magical atmosphere and exquisite banqueting, with the latest audio-visual equipment and the facilities needed for a flawless occasion.",
    "Our team takes care of the details so you can enjoy the day. Tell us about your event and see what the house can do for you.",
  ],
};

export type Occasion = { name: string; note: string; image: string; alt: string };

export const OCCASIONS: Occasion[] = [
  {
    name: "Weddings",
    note: "Packages with catering and more, in a setting made for photographs.",
    image: "/images/event-bridal-1.jpg",
    alt: "A bride in a cream sari and gold jewellery beside a carved wooden pillar",
  },
  {
    name: "Receptions",
    note: "Evening celebrations in the garden by the water.",
    image: "/images/event-garden.jpg",
    alt: "The garden walkway with plants and antique pillars, looking toward the water",
  },
  {
    name: "Birthday parties",
    note: "From children’s parties to milestone birthdays.",
    image: "/images/event-birthday.jpg",
    alt: "A birthday cake and cupcakes on a dessert table",
  },
  {
    name: "Anniversaries",
    note: "An intimate dinner or a gathering of everyone you love.",
    image: "/images/event-couple.jpg",
    alt: "A couple posing in front of a carved antique door",
  },
  {
    name: "Meetings & seminars",
    note: "Audio-visual equipment and a hall with a difference.",
    image: "/images/event-banquet-hall.jpg",
    alt: "The long gilded hall with chandeliers and a polished floor",
  },
  {
    name: "Family events",
    note: "Room for every generation, with food to match.",
    image: "/images/event-kids-party.jpg",
    alt: "Children gathered for a party in the decorated hall",
  },
];

export const EVENT_CATEGORIES = [
  "Wedding",
  "Reception",
  "Birthday party",
  "Wedding anniversary",
  "Meeting",
  "Seminar",
  "Family event",
];

export const WEDDINGS = {
  eyebrow: "Weddings",
  title: "A day planned for months, held somewhere unforgettable",
  body: "A wedding is celebrated after so much planning and preparation. We make sure yours is held in a setting worthy of it, with packages that include catering. Carved doors, gilded halls and a garden by the water provide the ideal backdrop, before and after the vows.",
};

export const EVENT_SERVICES = [
  { title: "Banqueting", note: "Exquisite banquet service from our kitchen." },
  { title: "Audio-visual", note: "The latest equipment for speeches, music and presentations." },
  { title: "Heritage settings", note: "Gilded halls, a courtyard and a garden on the water." },
  { title: "A dedicated team", note: "Our team services every detail, start to finish." },
];

/* "Throwback treasures": photos of past events from the old Events page. */
export const PAST_EVENTS = [
  { src: "/images/event-hero.jpg", alt: "An evening celebration in the garden, lit with lights beside the water" },
  { src: "/images/event-bridal-2.jpg", alt: "A bride in a cream sari with a pearl necklace" },
  { src: "/images/event-kathakali-figure.jpg", alt: "A Kathakali figure in full costume in the courtyard" },
  { src: "/images/event-terrace.jpg", alt: "The terrace and gardens of the hotel under a blue sky" },
  { src: "/images/event-bridal-3.jpg", alt: "A bride in a cream lehenga against a painted wall" },
  { src: "/images/event-kids-party.jpg", alt: "Children gathered for a party in the decorated hall" },
  { src: "/images/event-couple.jpg", alt: "A couple posing in front of a carved antique door" },
];
