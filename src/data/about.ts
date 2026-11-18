/**
 * About page content, adapted from the hotel's current site (museumhotel.co.in/about-us and the home page reviews).
 * Wording is tightened and typos fixed; facts are unchanged.
 */

export const ABOUT_INTRO = {
  title: "A commitment to quality",
  lead: "The Ginger House Museum Hotel is known for its old-world charm and world-class service.",
  paragraphs: [
    "With its original antique furnishings, it is the perfect retreat for a royal holiday, amidst the splendour and grandeur of classical times.",
    "Blending history and traditional values, the hotel combines luxury with the timeless appeal of heritage, its warm ambience and indigenous architecture. Its waterfront location in Kochi gives guests easy access to the city’s biggest hotspots, and every room, from the Sea View rooms to the Royal Suites, is replete with luxury amenities.",
  ],
};

export type Stat = { value: number; suffix?: string; label: string };

export const ABOUT_STATS: Stat[] = [
  { value: 12, label: "Years of experience" },
  { value: 120, label: "Year-old snake boat in the lobby" },
  { value: 108, suffix: " ft", label: "Long, the oldest in Kerala" },
  { value: 10, label: "Rooms & suites, no two alike" },
];

export const SNAKE_BOAT = {
  eyebrow: "The heart of the house",
  title: "A snake boat in the lobby",
  paragraphs: [
    "The highlight of the hotel is its wide, long lobby, home to a spectacular 108-foot snake boat, the traditional naval boat of Kerala, named for its likeness to a hooded snake. Snake boat races are still a staple of Kerala’s 400-year-old water sports tradition; with more than 100 oarsmen in each boat, it is the world’s largest team sport.",
    "This 120-year-old “Thiruvaranmula-Punnamthottam No. 5”, the oldest in Kerala, sits appropriately in a palatial courtyard, dismantled from a 120-year-old palace in the Chettinad region of Tamil Nadu and re-erected here. The courtyard’s veranda is lined with paintings from old churches, temples and palaces: South Indian aesthetics, gathered under one roof.",
  ],
};

export const FOUNDER = {
  eyebrow: "About our founder",
  title: "Majnu, collector & hotelier",
  paragraphs: [
    "Majnu, the founder-owner of the Ginger House Museum Hotel, is a connoisseur of heritage arts and artefacts. His journey from ordinary worker to antique collector, and now to hotelier, has inspired many young people in Kerala. For his innovative use of traditional artefacts in hospitality, he is considered a trailblazer in Kerala’s tourism industry.",
    "Yet he keeps his quiet humility. Visitors can be forgiven for missing the small, bespectacled man scurrying around the compound with colleagues, working out where his latest acquisition belongs, in his endless quest to build the world’s best heritage boutique hotel.",
  ],
  quote: "Do stop Majnu if you see him. The history around you will come alive through his words.",
};

export const EXPERIENCE = {
  eyebrow: "Our experience",
  title: "Days in Fort Kochi",
  intro:
    "Almost every antique in the hotel is for sale. If you like an artefact or a piece of furniture, do ask about it: the interiors are always evolving, as guests take pieces home and new ones arrive.",
  cards: [
    {
      title: "Sundowners in the garden",
      body: "Wait for sunset in the hotel’s second-floor garden, sundowner in hand, looking out over the water.",
      image: "/images/setting-sun-seating.jpg",
      alt: "A guest relaxing on a wooden lounger on the lawn beside the red heritage building",
    },
    {
      title: "Strolls through Jew Town",
      body: "Wander Jew Town’s narrow streets, popping in and out of delightful shops, murals and charming cafés.",
      image: "/images/about-jew-town.jpg",
      alt: "A narrow lane in Mattancherry with walls covered in colourful murals",
    },
    {
      title: "Dinner, appetite whetted",
      body: "After sunset, guests dine at the hotel’s restaurant, considered one of the best in Cochin.",
      image: "/images/about-restaurant.jpg",
      alt: "The gilded restaurant hall with a crystal chandelier and tables laid for dinner",
    },
  ],
};

export type Review = { quote: string; name: string };

/* Guest reviews quoted on the hotel's current home page: spelling fixed, omissions marked with an ellipsis. */
export const REVIEWS: Review[] = [
  {
    quote:
      "The most impressive hotel I ever seen… each room is very unique, special and has a different style. They have an antique store and a seaside restaurant. The welcome drink, ginger lemon soda, also fresh.",
    name: "Indotravelista Yoga Retreat",
  },
  { quote: "Hidden treasure… rooms with unique themes… luxury boutique hotel which has no comparison.", name: "Gopika M S" },
  {
    quote: "Boutique hotel with great rooms! Pool offers you one of the best views of the Cochin sea! Highly recommended.",
    name: "Tony Joseph",
  },
  {
    quote: "Very quaint place. The signature ginger tea is quite good! The staff are well behaved. The placement of the hotel is amazing… will definitely visit again.",
    name: "Zia Noor",
  },
  {
    quote: "Oh wow! Couldn’t believe I was in India… Serene, right by the water. The food was good… Tea was amazing!",
    name: "Abinav Jain",
  },
];
