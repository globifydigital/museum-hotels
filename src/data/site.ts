/**
 * Home page content, copied verbatim from the Figma frame (museum-hotel › accepted › 213:23).
 * Entries marked `placeholder: true` have no content in the design yet.
 */

export type Link = { label: string; href: string };

export const NAV_LINKS: Link[] = [
  { label: "Home", href: "/" },
  { label: "about", href: "/about" },
  { label: "stay", href: "/stay" },
  { label: "offers", href: "/stay#offer" },
  { label: "destinations", href: "/destinations" },
  { label: "attractions", href: "/destinations#attractions" },
  { label: "restaurant", href: "/restaurant" },
  { label: "events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

/** Set NEXT_PUBLIC_BOOKING_URL to the booking engine URL to make "Book now" submit to it. */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const MANAGE_RESERVATIONS_URL = process.env.NEXT_PUBLIC_MANAGE_RESERVATIONS_URL ?? "#";

export type Room = {
  id: string;
  name: string;
  /** Badge on the photo; empty for no badge. */
  floor: string;
  image: string;
  imageAlt: string;
  description: string;
  sleeps: string;
  /** Omitted where the hotel has not published a size. */
  size?: string;
  bed: string;
};

/*
 * King’s Chamber is the design’s copy. The other rooms come from the hotel’s current site
 * (museumhotel.co.in/stay and the room pages): every room sleeps 3 and has a king-sized bed; the
 * eight rooms other than King’s Chamber are on the mezzanine floor. Long descriptions are clamped
 * to the panel in CSS.
 */
const KINGS_CHAMBER: Room = {
  id: "kings-chamber",
  name: "KING'S CHAMBER",
  floor: "Ground floor",
  image: "/images/room-kings-chamber.jpg",
  imageAlt: "King's Chamber: a carved teak four-poster bed, antique furniture and a painting in an arched niche",
  description:
    "The teakwood door is guarded by baby tuskers carved from teakwood with camel bone inlay. A Raja Ravi Varma painting welcomes you. The patio opens to a garden with relics. The bathroom is opulent, including a wall […]",
  sleeps: "2",
  size: "20 m²",
  bed: "Super king",
};

const room = (r: Omit<Room, "sleeps" | "bed"> & Partial<Pick<Room, "sleeps" | "bed">>): Room => ({
  sleeps: "3",
  bed: "King",
  ...r,
});

/** The eight rooms in the design’s tab list (King’s Chamber first). */
export const ROOMS: Room[] = [
  KINGS_CHAMBER,
  room({
    id: "lotus-sea-view",
    name: "LOTUS SEA VIEW",
    floor: "Mezzanine floor",
    image: "/images/room-lotus-sea-view.jpg",
    imageAlt: "Lotus Sea View: a coffered teak ceiling, a carved bed and wide doors opening to the balcony",
    description:
      "The exquisitely carved teakwood door is an example of the rich aesthetic sense of Kerala culture. The custom designed teakwood ceiling with numerous lotuses complements the dark wood floors. Floor-to-ceiling wide doors open onto a long balcony that offers views of the Vembanad, Kerala’s largest lake.",
  }),
  room({
    id: "moon-honey-sea-view",
    name: "MOON & HONEY SEA VIEW",
    floor: "Mezzanine floor",
    image: "/images/room-moon-honey-sea-view.jpg",
    imageAlt: "Moon & Honey Sea View: a carved four-poster bed beneath a mirrored teak ceiling, with a balcony over the water",
    description:
      "The Honeymoon Suite of the Ginger House Museum Hotel is all about romance and opulence. The mirror-framed teakwood ceiling reflects the large bed seductively. An intricately carved wooden frame opens to a gorgeous balcony that overlooks the blue waters of Vembanad, Kerala’s largest lake.",
  }),
  room({
    id: "travancore-palace",
    name: "TRAVANCORE PALACE",
    floor: "Mezzanine floor",
    image: "/images/room-travancore-palace.jpg",
    imageAlt: "Travancore Palace: an ornate carved wooden ceiling with a chandelier over a period bed",
    description:
      "Last, but certainly not least. Period glamor is evident in the ornate doors, entryway ceiling, and the bed space ceiling. Along with the incredible antique furniture, this room stands as a fine prototype of Kerala architecture.",
  }),
  room({
    id: "rhythm-of-malabar-deluxe",
    name: "RHYTHM OF MALABAR DELUXE",
    floor: "Mezzanine floor",
    image: "/images/room-rhythm-of-malabar-deluxe.jpg",
    imageAlt: "Rhythm of Malabar Deluxe: a teak four-poster bed under a sloping wooden ceiling",
    description:
      "Traditional Malabar masonry is best exemplified in this room. The legendary “Manichithrathazhu”, literally “the ornate lock”, is featured on the solid teakwood door, which once stood proudly in a mansion in Malabar. Decorated with rare antiques, the room radiates a serene Dravidian ambiance.",
  }),
  room({
    id: "chettinad-mansion-deluxe",
    name: "CHETTINAD MANSION DELUXE",
    floor: "Mezzanine floor",
    image: "/images/room-chettinad-mansion-deluxe.jpg",
    imageAlt: "Chettinad Mansion Deluxe: a carved four-poster bed, antique wardrobe and wooden floor",
    description:
      "The splendor of a bygone Chettinad era is intricately curated and reproduced here. The Chettinad style door is a masterpiece of fine craftsmanship. The large room with a wooden floor is graced with carefully selected and well-restored antiques.",
  }),
  room({
    id: "crown-of-queen-deluxe",
    name: "CROWN OF QUEEN DELUXE",
    floor: "Mezzanine floor",
    image: "/images/room-crown-of-queen-deluxe.jpg",
    imageAlt: "Crown of Queen Deluxe: a brass canopy bed against golden-yellow walls beneath a crystal chandelier",
    description:
      "With its extravagantly ornate motifs and scroll works, the striking Baroque style is the main theme of this room, from the beautiful door to the rolled ceiling. The bright golden hued yellow and white walls compliment the dark wood flooring. The crystal chandelier adds shimmer to the room.",
  }),
  room({
    id: "art-deco-deluxe",
    name: "ART DECO DELUXE",
    floor: "Mezzanine floor",
    image: "/images/room-art-deco-deluxe.jpg",
    imageAlt: "Art Deco Deluxe: a turned-post bed and cane furniture under a light wood-panelled ceiling",
    description:
      "Posh but never pompous; cosmopolitan without being showy. This is a bright room with pink walls and a light wood paneled ceiling, complementing the dark wood floor. The modest, sophisticated decor includes a turn post bed, an antique Indian chest bench and cane-woven furniture.",
  }),
];

/** The two suites shown when “View All” expands the list. */
export const MORE_ROOMS: Room[] = [
  room({
    id: "royal-presidential-suite",
    name: "ROYAL PRESIDENTIAL SUITE",
    floor: "",
    image: "/images/room-royal-presidential-suite.jpg",
    imageAlt: "Royal Presidential Suite: a king bed with red cushions, a carved wooden headboard and patterned tile floor",
    description:
      "Indulge in unparalleled luxury at the Royal Presidential Suite, a perfect blend of regal elegance and modern comfort. Featuring lavish interiors, exquisite furnishings, and personalized amenities, this suite promises a truly majestic stay.",
  }),
  room({
    id: "royal-tharavad-suite",
    name: "ROYAL THARAVAD SUITE",
    floor: "",
    image: "/images/room-royal-tharavad-suite.jpg",
    imageAlt: "Royal Tharavad Suite: a draped four-poster bed against warm ochre walls",
    // The hotel’s page repeats the Presidential Suite copy; adapted here with this suite’s name.
    description:
      "Indulge in unparalleled luxury at the Royal Tharavad Suite, a perfect blend of regal elegance and modern comfort. Featuring lavish interiors, exquisite furnishings, and personalized amenities, this suite promises a truly majestic stay.",
  }),
];

export const FOOD_IMAGES = [
  { src: "/images/food-1.jpg", alt: "Grilled prawns with lime and green chilli on the waterfront terrace" },
  { src: "/images/food-2.jpg", alt: "A layered iced cooler garnished with lime and flowers" },
  { src: "/images/food-3.jpg", alt: "Crisp fried onion fritters on a white plate" },
  { src: "/images/food-4.jpg", alt: "Kerala prawn curry served with parottas" },
];

export const RESTAURANT_PARAGRAPHS = [
  "While you are here; you can not only enjoy a royal stay but also tuck into lip-smacking authentic Kerala cuisine at our in-house Ginger House Restaurant. Visitors as well as in-house guests are warmly welcomed at the Restaurant. It is a place one must spend some time in. Being seemed as an architectural marvel, completely made up fold-age antique furniture and providing the visitors the great view of Kochi bay waters, the ambience is perfect. The fresh good food and quirky arty ambience attracts the foreigners from around the world.",
  "The Heritage Arts antique showroom which is an extension of the Restaurant allows the guests or visitors to explore Indian heritage along with their meal. The interiors of the antique showroom are opulent and mesmerizing. And the best part is that all of the antique pieces in the showroom are for sale.",
  "The Restaurant is owned by Mr. N B Majnu and he has been inventing ingenious concepts with antiques ever since he started it. Every bit of the Restaurant including the chairs, dining areas, ceiling are built with antique material. The furniture is being designed in the production house of Heritage Arts showroom.",
  "At the Restaurant, we give you the chance to spice up your aesthetic taste with the best of dishes. Our specialties range from a wide range of ginger products to authentic Kerala cuisine.The well-preserved mixture of colonial architectural styles, lakeview location and laidback atmosphere are the reasons why countless people love the place.",
];

export const SETTINGS = [
  {
    title: "SEATING TO ENJOY THE SUN",
    body: "The seating on the greenery makes the perfect place to enjoy the sun with your favo.rite book or laptop. There is no better enjoyment in the hot summer days than relaxing in this seating enjoying the sun.",
    image: "/images/setting-sun-seating.jpg",
    alt: "A guest working on a laptop on a wooden lounger on the lawn beside the red heritage building",
  },
  {
    title: "THE GREAT DINING",
    body: "Our in-house restaurant, completely made up of antique furniture, awaits to delight you with a diversity of cuisines and the best of hospitality. It is sure to treat you with an unforgettable dining experience.",
    image: "/images/setting-great-dining.jpg",
    alt: "The gilded restaurant hall with chandeliers, carved pillars and tables laid for dinner",
  },
  {
    title: "TAKE A LEISURELY SWIM",
    body: "The swimming pool in this luxury stay in Kochi is perfect for a leisure swimming and is the right place to surrender yourself to the calm surroundings, which indeed rejuvenate the mind and spirit.",
    image: "/images/setting-swim.jpg",
    alt: "The pool beside a green living wall, looking out over the Kochi waterfront",
  },
];

export const DESTINATIONS = [
  {
    title: "FORT KOCHI",
    body: "FORT KOCHI Fort Kochi is a jewel in the crown of Kerala with its European heritage and true cosmopolitan temperament. A leisurely walk through its streets is one of the best ways to discoverwhat the city has to offer.",
    image: "/images/destination-fort-kochi.jpg",
    alt: "Chinese fishing nets silhouetted against an orange sunset in Fort Kochi",
  },
  {
    title: "SANTA CRUZ CATHEDRAL BASILICA",
    body: "It is one of the eight Basilicas in Kerala. Counted as one of the heritage edifices of Kerala, this church is one of the finest and most impressive churches, and visited by tourists.",
    image: "/images/destination-santa-cruz.jpg",
    alt: "The white twin-spired facade of Santa Cruz Cathedral Basilica under a blue sky",
  },
  {
    title: "KERALA KATHAKALI",
    body: "Kerala Kathakali Centre is popularly known as school of traditional arts. It is the only authentic theatrewhere all dance forms are demonstrated in traditional style with its real sense and reality.",
    image: "/images/destination-kathakali.jpg",
    alt: "Two Kathakali performers in elaborate costume and makeup on stage",
  },
];

export const WELLNESS = [
  { label: "AYURVEDA", image: "/images/wellness-ayurveda.jpg", alt: "Ayurvedic herbs, spices and a bowl of herbal paste" },
  { label: "YOGA", image: "/images/wellness-yoga.jpg", alt: "A woman meditating cross-legged on a yoga mat in a sunlit garden" },
  {
    label: "REJUVENATION THERAPY",
    image: "/images/wellness-rejuvenation.jpg",
    alt: "Shirodhara: warm oil poured onto the forehead during an Ayurvedic treatment",
  },
];

export type Faq = { question: string; answer: string; placeholder?: boolean };

export const FAQS: Faq[] = [];

export const FOOTER_LINKS: Link[] = [
  { label: "Home", href: "/" },
  { label: "Accommodation", href: "/stay" },
  { label: "Dining", href: "/restaurant" },
  { label: "Wellness", href: "/wellness" },
  { label: "Offers", href: "/stay#offer" },
  { label: "Destinations", href: "/destinations" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

