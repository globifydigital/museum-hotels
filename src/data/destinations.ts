/**
 * Destinations & attractions, adapted from museumhotel.co.in/destinations, /attractions and the home page.
 * The old site has headings but no text for the Maritime and Indo-Portuguese museums; their one-line descriptions
 * here are general background and worth confirming with the hotel.
 */

export const FORT_KOCHI = {
  eyebrow: "Around Ginger House",
  title: "Fort Kochi, a jewel in Kerala’s crown",
  lead: "The historic town of Fort Kochi wears its European heritage and cosmopolitan temperament lightly. The best way to discover it is a leisurely walk.",
  paragraphs: [
    "Its streets lead to architectural marvels and cultural treasures, and a boat ride across the blue lagoons and backwaters offers a glimpse of Kochi’s rural life and its true beauty.",
    "The beach is a favourite hangout for locals and visitors alike. Watch fishermen raise the age-old Chinese nets against the Arabian Sea, the catch sold to passers-by within minutes, beneath a canopy of rain trees that is home to hundreds of birds.",
  ],
  landmarks: [
    "16th-century basilicas",
    "The Dutch Palace",
    "Pierce Leslie Bungalow",
    "Synagogue of Jew Town",
    "Indo-Portuguese Museum",
    "Chinese fishing nets",
    "Libraries & art galleries",
    "Cafés & curio stores",
    "Kochi’s natural harbour",
  ],
};

export type PlaceCategory = "Heritage" | "Culture" | "On the water";

export type Place = {
  id: string;
  name: string;
  category: PlaceCategory;
  summary: string;
  body: string[];
  facts?: { label: string; value: string }[];
  image: string;
  alt: string;
};

export const PLACES: Place[] = [
  {
    id: "dutch-palace",
    name: "Dutch Palace",
    category: "Heritage",
    summary: "Kerala architecture with colonial influences, and some of India’s finest murals.",
    body: [
      "The Mattancherry Palace was built by the Portuguese as a gift to King Veera Kerala Varma, and came to be known as the Dutch Palace after major repairs at the hands of the Dutch. It is one of the finest examples of Kerala-style architecture blended with colonial influences.",
      "Its long, spacious halls surround a central courtyard and hold a lovely collection of murals; the painting of Lord Vishnu reclining on a serpent is a highlight. Royal caps and coins issued by the kings are on display too. This was the royal family’s residence, and all coronations were held here.",
    ],
    facts: [
      { label: "Where", value: "Palace Road, Mattancherry" },
      { label: "Don’t miss", value: "The palace murals" },
    ],
    image: "/images/dest-dutch-palace.jpg",
    alt: "The white colonial façade of the Mattancherry Dutch Palace",
  },
  {
    id: "santa-cruz-basilica",
    name: "Santa Cruz Cathedral Basilica",
    category: "Heritage",
    summary: "One of the eight basilicas in Kerala, and among its finest churches.",
    body: [
      "Counted among the heritage edifices of Kerala, Santa Cruz is one of the eight basilicas in the state and one of its finest and most impressive churches, visited by travellers from around the world.",
    ],
    image: "/images/destination-santa-cruz.jpg",
    alt: "The white twin-spired façade of Santa Cruz Cathedral Basilica under a blue sky",
  },
  {
    id: "kathakali-centre",
    name: "Kerala Kathakali Centre",
    category: "Culture",
    summary: "Kerala’s foremost school of traditional arts, with nightly performances.",
    body: [
      "Popularly known as the school of traditional arts, the Kerala Kathakali Centre is the state’s foremost arts school and an authentic theatre where Kathakali, music, martial arts and other dance forms are performed in their traditional style.",
      "The centre, near the Santa Cruz Basilica, also nurtures new talent through dedication and discipline, and arranges hundreds of programmes each year for visitors from around the world.",
    ],
    facts: [
      { label: "Kathakali", value: "6:00 – 7:30 pm" },
      { label: "Carnatic music", value: "Around 8:30 pm" },
    ],
    image: "/images/destination-kathakali.jpg",
    alt: "Two Kathakali performers in elaborate costume and make-up on stage",
  },
  {
    id: "chinese-fishing-nets",
    name: "Chinese fishing nets",
    category: "On the water",
    summary: "Introduced over 500 years ago, and still worked by hand at the water’s edge.",
    body: [
      "The Chinese explorer Zheng He is said to have introduced these nets to Kochi’s fishermen over 500 years ago. He moved on; the nets stayed, and became one of the defining sights of the coast.",
      "Watching the fishermen raise them against the Arabian Sea can hold you for hours, especially at sunset.",
    ],
    image: "/images/dest-fishing-nets.jpg",
    alt: "Chinese fishing nets silhouetted against the setting sun",
  },
  {
    id: "boat-ride",
    name: "Sunset boat ride",
    category: "On the water",
    summary: "A harbour cruise past Marine Drive, Bolgatty Island and Willingdon Island.",
    body: [
      "Non-stop sunset cruises around Kochi harbour offer spectacular views of Marine Drive, the Chinese fishing nets, Bolgatty Island, Willingdon Island and the harbour itself. Private operators run hourly cruises from Marine Drive.",
      "The ride is a glimpse into Fort Kochi’s colonial past: old mansions and industries line one shore, the busy port the other, with fishing boats of every kind and plenty of water birds in between.",
    ],
    facts: [{ label: "Departs", value: "Marine Drive, hourly" }],
    image: "/images/dest-boat-ride.jpg",
    alt: "A white double-decker cruise boat on the harbour",
  },
  {
    id: "indo-portuguese-museum",
    name: "Indo-Portuguese Museum",
    category: "Heritage",
    summary: "Church art and artefacts from Kerala’s Portuguese era.",
    body: [
      "Set in the grounds of the Bishop’s House in Fort Kochi, the museum preserves the Indo-Portuguese Christian art heritage of the region: altar pieces, processional crosses, vestments and more.",
    ],
    image: "/images/dest-indo-portuguese-museum.jpg",
    alt: "The arched colonial building of the Indo-Portuguese Museum behind a garden",
  },
  {
    id: "maritime-museum",
    name: "Maritime Museum",
    category: "Culture",
    summary: "The story of India’s navy and Kochi’s long seafaring history.",
    body: [
      "Run by the Southern Naval Command, the museum traces the history of the Indian Navy and of Kochi’s maritime trade, with exhibits indoors and out.",
    ],
    image: "/images/dest-maritime-museum.jpg",
    alt: "The SNC Maritime Museum signboard among trees",
  },
];

export const PLACE_FILTERS: ("All" | PlaceCategory)[] = ["All", "Heritage", "Culture", "On the water"];

export type Attraction = { title: string; note: string; image: string; alt: string };

/* "On our doorstep": the neighbourhood around Jew Street, from the old Attractions page's photos. */
export const ATTRACTIONS: Attraction[] = [
  {
    title: "Jew Town",
    note: "Antique shops, spice stores and cafés, right outside the door.",
    image: "/images/dest-jew-town.jpg",
    alt: "A lively street in Jew Town lined with shops and old buildings",
  },
  {
    title: "The synagogue",
    note: "Chandeliers and hand-painted tiles in the Synagogue of Jew Town.",
    image: "/images/dest-synagogue.jpg",
    alt: "The synagogue interior with hanging glass chandeliers and blue-and-white tiled floor",
  },
  {
    title: "Mattancherry murals",
    note: "Lanes painted floor to roof in colour.",
    image: "/images/about-jew-town.jpg",
    alt: "A narrow lane in Mattancherry with walls covered in colourful murals",
  },
  {
    title: "Art galleries & cafés",
    note: "Kochi’s art scene spills out onto the street.",
    image: "/images/dest-art-hub.jpg",
    alt: "Visitors outside a building covered in blue street art",
  },
  {
    title: "Sunset at the nets",
    note: "End the day where the fishermen do.",
    image: "/images/about-sunset.jpg",
    alt: "Chinese fishing nets and a boat silhouetted against a golden sunset",
  },
];
