/**
 * Stay page content, adapted from the hotel's current site (museumhotel.co.in/stay, the room pages and the home page's
 * offer and facilities blocks). Room names, photos and specs come from `ROOMS` / `MORE_ROOMS` in site.ts.
 */
import { MORE_ROOMS, ROOMS, type Room } from "./site";

export const STAY_INTRO = {
  title: "Staying with us",
  lead: "The splendid teakwood door, inlaid with stained glass in the Ottoman alleyway, opens into a world of vintage vogue.",
  paragraphs: [
    "The hotel’s decor is inspired by the early history of South India, from Chettinad to Malabar architecture: some pieces ruins, some intact, some beautifully restored to their original glory.",
    "Every room is unique in character, yet all share the same lovely high ceilings and an unprecedented level of comfort. Among the unexpected delights are the sensor-equipped, state-of-the-art Japanese toilets.",
  ],
};

export const IN_ROOM = [
  { icon: "ceiling", label: "High ceilings" },
  { icon: "snow", label: "Air-conditioning" },
  { icon: "glass", label: "Mini-bar" },
  { icon: "bed", label: "King-sized beds" },
  { icon: "leaf", label: "Herbal toiletries" },
  { icon: "spark", label: "Smart Japanese toilets" },
] as const;

export type InRoomIcon = (typeof IN_ROOM)[number]["icon"];

export type RoomCategory = "Signature" | "Sea View" | "Deluxe" | "Royal Suite";

export type StayRoom = Room & {
  category: RoomCategory;
  tagline: string;
  /** The full description from the hotel's room page. */
  story: string;
  highlights: string[];
};

type Details = Omit<StayRoom, keyof Room>;

const DETAILS: Record<string, Details> = {
  "kings-chamber": {
    category: "Signature",
    tagline: "The most illustrious room of the hotel",
    story:
      "The room’s teakwood door is guarded by baby tuskers carved out of teakwood and inlaid with camel bone. A painting by Raja Ravi Varma, one of India’s greatest artists, greets you as you enter. The room has a patio that opens into a garden filled with relics. The bathroom is unashamedly opulent, including a wall studded with Art Deco tiles made of 24-carat gold.",
    highlights: ["Raja Ravi Varma painting", "Garden patio with relics", "24-carat gold Art Deco tiles"],
  },
  "lotus-sea-view": {
    category: "Sea View",
    tagline: "A teak ceiling blooming with lotuses",
    story:
      "The exquisitely carved teakwood door is an example of the rich aesthetic sense of Kerala culture. The custom-designed teakwood ceiling with numerous lotuses complements the dark wood floors. Floor-to-ceiling wide doors open onto a long balcony with views of the Vembanad, Kerala’s largest lake. The bathrooms are generously sized, with a walk-in shower and impressive doors.",
    highlights: ["Long balcony over Vembanad lake", "Carved lotus teak ceiling", "Walk-in shower"],
  },
  "moon-honey-sea-view": {
    category: "Sea View",
    tagline: "The honeymoon suite",
    story:
      "The Honeymoon Suite of the Ginger House Museum Hotel is all about romance and opulence. The mirror-framed teakwood ceiling reflects the large bed seductively. The vista is even more irresistible: an intricately carved wooden frame opens to a balcony overlooking the blue waters of Vembanad, Kerala’s largest lake. The bathroom’s designer-chic style is something many guests seek to replicate at home.",
    highlights: ["Mirror-framed teak ceiling", "Balcony over the lake", "Designer bathroom"],
  },
  "travancore-palace": {
    category: "Deluxe",
    tagline: "A fine prototype of Kerala architecture",
    story:
      "Last, but certainly not least. Period glamour is evident in the ornate doors, the entryway ceiling and the bed-space ceiling. Along with the incredible antique furniture, this room stands as a fine prototype of Kerala architecture.",
    highlights: ["Ornate carved doors", "Carved bed-space ceiling", "Antique furniture"],
  },
  "rhythm-of-malabar-deluxe": {
    category: "Deluxe",
    tagline: "Behind the legendary ornate lock",
    story:
      "Traditional Malabar masonry is best exemplified in this room. The legendary “Manichithrathazhu”, literally “the ornate lock”, is featured on the solid teakwood door, which once stood proudly in a mansion in Malabar. Decorated with rare antiques, the room radiates a serene Dravidian ambience. The granite-clad bathroom is warm and welcoming.",
    highlights: ["Door from a Malabar mansion", "Rare antiques", "Granite-clad bathroom"],
  },
  "chettinad-mansion-deluxe": {
    category: "Deluxe",
    tagline: "The splendour of a bygone era",
    story:
      "The splendour of a bygone Chettinad era is intricately curated and reproduced here. The Chettinad-style door is a masterpiece of fine craftsmanship. The large room with a wooden floor is graced with carefully selected, well-restored antiques, and the wooden-framed mirrors on a large antique wardrobe show clear Chettinad influences. The bathroom’s Marrakesh motif, with granite floors and walls, gives a warm setting for the walk-in shower.",
    highlights: ["Chettinad-style door", "Antique mirrored wardrobe", "Marrakesh-motif bathroom"],
  },
  "crown-of-queen-deluxe": {
    category: "Deluxe",
    tagline: "Rococo, a quirk of colonial history",
    story:
      "The 18th-century rococo art of Continental Europe is a quirk of India’s colonial history. With its extravagantly ornate motifs and scrollwork, the striking Baroque style is the theme of this room, from the beautiful door to the rolled ceiling. Golden-yellow and white walls complement the dark wood floor, and a crystal chandelier adds shimmer. The walk-in shower, set in a gorgeous granite bathroom, has state-of-the-art sensor fittings.",
    highlights: ["Baroque rolled ceiling", "Crystal chandelier", "Granite walk-in shower"],
  },
  "art-deco-deluxe": {
    category: "Deluxe",
    tagline: "Posh but never pompous",
    story:
      "Posh but never pompous; cosmopolitan without being showy. This sums up the living quarters behind the elegant teakwood double door: a bright room with pink walls and a light wood-panelled ceiling, complementing the dark wood floor. The modest, sophisticated decor includes a turn-post bed, an antique Indian chest bench and cane-woven furniture.",
    highlights: ["Turn-post bed", "Antique Indian chest bench", "Cane-woven furniture"],
  },
  "royal-presidential-suite": {
    category: "Royal Suite",
    tagline: "Regal elegance, modern comfort",
    story:
      "Indulge in unparalleled luxury at the Royal Presidential Suite, a perfect blend of regal elegance and modern comfort. Featuring lavish interiors, exquisite furnishings and personalised amenities, this suite promises a truly majestic stay.",
    highlights: ["Lavish interiors", "Exquisite furnishings", "Personalised amenities"],
  },
  "royal-tharavad-suite": {
    category: "Royal Suite",
    tagline: "A truly majestic stay",
    story:
      "Indulge in unparalleled luxury at the Royal Tharavad Suite, a perfect blend of regal elegance and modern comfort. Featuring lavish interiors, exquisite furnishings and personalised amenities, this suite promises a truly majestic stay.",
    highlights: ["Lavish interiors", "Exquisite furnishings", "Personalised amenities"],
  },
};

const toStay = (room: Room): StayRoom => ({ ...room, ...DETAILS[room.id] });

/** King's Chamber, shown on its own as the featured room. */
export const FEATURED_ROOM = toStay(ROOMS[0]);

/** Every other room, for the filterable collection. */
export const COLLECTION: StayRoom[] = [...ROOMS.slice(1), ...MORE_ROOMS].map(toStay);

/** Every room, King's Chamber first: the order of the room pages and their previous / next links. */
export const ALL_STAY_ROOMS: StayRoom[] = [FEATURED_ROOM, ...COLLECTION];

export const getRoom = (id: string) => ALL_STAY_ROOMS.find((r) => r.id === id);

export const roomHref = (id: string) => `/stay/${id}`;

export const ROOM_FILTERS: ("All" | RoomCategory)[] = ["All", "Sea View", "Deluxe", "Royal Suite"];

export const MEZZANINE = {
  eyebrow: "The mezzanine",
  title: "A garden, a pool and the lake",
  body: "Most rooms sit on a mezzanine floor beside a calming garden and an infinity pool overlooking Vembanad, Kerala’s largest lake. The stairway up is watched over by a larger-than-life Lord Nataraja, Hinduism’s ecstatic dancer, symbolising the hotel’s ethos of mixing spirituality and fun.",
};

export const OFFER = {
  eyebrow: "Special package",
  title: "2 nights & 3 days",
  intro: "Settle in for a long weekend of heritage, waterfront sunsets and Kerala hospitality.",
  inclusions: [
    "Transfers to and from Cochin International Airport",
    "Traditional welcome drink on arrival",
    "Fruit basket and cookies every day",
    "No additional charge for children below 12 years",
    "Free Wi-Fi",
  ],
};

export const SERVICES = {
  intro:
    "From the moment our doormen greet you on arrival, you will see that we pride ourselves on personal service in a relaxing setting, with a dedicated Guest Relations team for anything you need.",
  complimentary: [
    "Indian & Continental breakfast",
    "Bottled mineral water",
    "Free internet access",
    "Daily newspaper of your choice",
    "Coffee maker",
    "Hair dryer",
    "Iron & ironing board",
    "Bath, shaving & dental kits",
    "Electronic safe deposit locker",
    "Valet parking",
    "Left luggage",
    "Wheelchair",
  ],
  onRequest: ["Travel desk", "Doctor on call", "Multi-cuisine restaurant", "Event hall", "Laundry", "Telephone"],
};
