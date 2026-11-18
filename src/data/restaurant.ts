/**
 * Restaurant page content, adapted from museumhotel.co.in/restaurant (also in RESTAURANT_PARAGRAPHS in site.ts) and
 * the guest reviews on the hotel's home page. Wording tightened; facts unchanged.
 */

export const RESTAURANT_INTRO = {
  eyebrow: "Ginger House Restaurant",
  title: "Kerala on a plate, the bay at your table",
  lead: "Tuck into lip-smacking, authentic Kerala cuisine in a dining hall made entirely of antiques, with the waters of Kochi bay beside you.",
  paragraphs: [
    "Visitors and in-house guests alike are warmly welcomed. It is a place to linger: fresh, good food, a quirky, arty ambience and a view of the bay that draws travellers from around the world.",
    "Our specialities range from a wide selection of ginger creations to authentic Kerala cuisine, served amid a well-preserved mix of colonial architecture and a laid-back lakeside atmosphere.",
  ],
};

export const RESTAURANT_FACTS = [
  { label: "Open to", value: "Visitors & hotel guests" },
  { label: "Cuisine", value: "Authentic Kerala" },
  { label: "Setting", value: "On Kochi bay" },
  { label: "Signature", value: "Ginger tea" },
];

export type Dish = { name: string; note: string; image: string; alt: string };

/* Dishes shown in the hotel's own food photography. */
export const DISHES: Dish[] = [
  {
    name: "Grilled prawns",
    note: "Charred with lime and green chilli, served on the waterfront terrace.",
    image: "/images/food-1.jpg",
    alt: "Grilled prawns with lime and green chilli on the waterfront terrace",
  },
  {
    name: "Kerala prawn curry",
    note: "A rich Kerala curry, best mopped up with flaky parottas.",
    image: "/images/food-4.jpg",
    alt: "Kerala prawn curry served with parottas",
  },
  {
    name: "Onion fritters",
    note: "Crisp, golden and made for the hour before sunset.",
    image: "/images/food-3.jpg",
    alt: "Crisp fried onion fritters on a white plate",
  },
  {
    name: "House coolers",
    note: "Layered iced drinks for warm Kochi afternoons.",
    image: "/images/food-2.jpg",
    alt: "A layered iced cooler garnished with lime",
  },
  {
    name: "Teatime by the water",
    note: "Fritters, tall glasses and a long view across the bay.",
    image: "/images/restaurant-snacks.jpg",
    alt: "Onion fritters and two tall glasses on a table by the water",
  },
];

/* Ginger specialities guests mention in their reviews. */
export const GINGER_SIGNATURES = [
  { name: "Ginger tea", note: "The house signature, and the reason many visitors stop by." },
  { name: "Ginger lemon soda", note: "The fresh welcome drink for hotel guests." },
  { name: "Ginger cookies", note: "Baked to go with the tea." },
];

export const ANTIQUE_HALL = {
  eyebrow: "An architectural marvel",
  title: "Built from antiques",
  paragraphs: [
    "The restaurant is owned by Mr N B Majnu, who has been inventing ingenious concepts with antiques ever since he started it. Every part of it, from the chairs and dining areas to the ceiling, is built from antique material.",
    "The furniture is designed in the production house of the Heritage Arts showroom, so the room you dine in is itself part of the collection.",
  ],
};

export const SHOWROOM = {
  eyebrow: "Heritage Arts showroom",
  title: "Dessert, then a little history",
  body: "The Heritage Arts antique showroom is an extension of the restaurant, letting guests explore Indian heritage along with their meal. Its interiors are opulent and mesmerising, and the best part: every piece in the showroom is for sale.",
};

export const DINING_QUOTE = {
  quote: "Serene, right by the water… The food was good… Tea was amazing!",
  name: "Abinav Jain",
};
