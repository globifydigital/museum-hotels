/**
 * Gallery photos, from the hotel's current site (gallery, rooms, restaurant, events and destinations pages).
 * Sizes are the files' real dimensions, so the masonry grid reserves the right space before images load.
 */

export const GALLERY_CATEGORIES = ["All", "Rooms", "Spaces", "Dining", "Events", "Kochi"] as const;

export type GalleryCategory = Exclude<(typeof GALLERY_CATEGORIES)[number], "All">;

export type GalleryImage = { src: string; category: GalleryCategory; width: number; height: number; alt: string };

export const GALLERY: GalleryImage[] = [
  { src: "/images/stay-hero.jpg", category: "Rooms", width: 2000, height: 1333, alt: "A carved four-poster bed beneath an ornate teak ceiling" },
  { src: "/images/about-hero.jpg", category: "Spaces", width: 1800, height: 1180, alt: "A guest on the carved wooden balcony, looking over the garden to the water" },
  { src: "/images/restaurant-dining-room.jpg", category: "Dining", width: 1672, height: 941, alt: "The gilded dining room with chandeliers and carved pillars" },
  { src: "/images/dest-hero-fishing-nets.jpg", category: "Kochi", width: 1600, height: 780, alt: "Chinese fishing nets against a dramatic sunset sky" },
  { src: "/images/event-bridal-1.jpg", category: "Events", width: 820, height: 1024, alt: "A bride in a cream sari and gold jewellery beside a carved pillar" },
  { src: "/images/room-kings-chamber.jpg", category: "Rooms", width: 2065, height: 761, alt: "King's Chamber: a carved teak four-poster bed and antique furniture" },
  { src: "/images/stay-infinity-pool.jpg", category: "Spaces", width: 2400, height: 1600, alt: "The infinity pool beside a green living wall, overlooking the lake" },
  { src: "/images/food-1.jpg", category: "Dining", width: 1219, height: 1290, alt: "Grilled prawns with lime and green chilli on the terrace" },
  { src: "/images/room-moon-honey-sea-view.jpg", category: "Rooms", width: 674, height: 473, alt: "Moon & Honey Sea View: a four-poster bed beneath a mirrored teak ceiling" },
  { src: "/images/gallery-r1.jpg", category: "Spaces", width: 500, height: 333, alt: "A guest photographing the courtyard veranda" },
  { src: "/images/dest-synagogue.jpg", category: "Kochi", width: 768, height: 495, alt: "Chandeliers and blue-and-white tiles inside the synagogue" },
  { src: "/images/event-banquet-hall.jpg", category: "Events", width: 819, height: 1024, alt: "The long gilded hall with chandeliers and a polished floor" },
  { src: "/images/about-carving.jpg", category: "Spaces", width: 900, height: 1250, alt: "Close-up of an antique carved wooden figure" },
  { src: "/images/food-4.jpg", category: "Dining", width: 1219, height: 1290, alt: "Kerala prawn curry with parottas" },
  { src: "/images/room-crown-of-queen-deluxe.jpg", category: "Rooms", width: 674, height: 503, alt: "Crown of Queen Deluxe: a brass canopy bed against golden walls" },
  { src: "/images/setting-sun-seating.jpg", category: "Spaces", width: 1553, height: 1013, alt: "A guest on a wooden lounger on the lawn" },
  { src: "/images/about-jew-town.jpg", category: "Kochi", width: 1536, height: 1024, alt: "A Mattancherry lane covered in colourful murals" },
  { src: "/images/event-hero.jpg", category: "Events", width: 1280, height: 853, alt: "An evening celebration in the garden beside the water" },
  { src: "/images/gallery-r15.jpg", category: "Rooms", width: 500, height: 333, alt: "A guest reading in bed beneath a carved headboard" },
  { src: "/images/setting-great-dining.jpg", category: "Dining", width: 1552, height: 1013, alt: "Tables laid for dinner in the gilded hall" },
  { src: "/images/gallery-r24.jpg", category: "Spaces", width: 500, height: 279, alt: "The pool and courtyard at dusk" },
  { src: "/images/room-lotus-sea-view.jpg", category: "Rooms", width: 675, height: 453, alt: "Lotus Sea View: a lotus-carved teak ceiling over a carved bed" },
  { src: "/images/destination-kathakali.jpg", category: "Kochi", width: 1170, height: 1344, alt: "Two Kathakali performers on stage" },
  { src: "/images/gallery-r13.jpg", category: "Spaces", width: 500, height: 333, alt: "Brass lamps glowing against a red wall" },
  { src: "/images/restaurant-terrace.jpg", category: "Dining", width: 767, height: 1024, alt: "Grilled prawns served on the terrace by the water" },
  { src: "/images/event-couple.jpg", category: "Events", width: 720, height: 1010, alt: "A couple posing in front of a carved antique door" },
  { src: "/images/room-chettinad-mansion-deluxe.jpg", category: "Rooms", width: 675, height: 453, alt: "Chettinad Mansion Deluxe: a four-poster bed and an antique wardrobe" },
  { src: "/images/about-courtyard.jpg", category: "Spaces", width: 500, height: 333, alt: "The courtyard veranda lined with plants and urns" },
  { src: "/images/destination-santa-cruz.jpg", category: "Kochi", width: 1170, height: 1344, alt: "Santa Cruz Cathedral Basilica" },
  { src: "/images/food-2.jpg", category: "Dining", width: 1219, height: 1290, alt: "A layered iced cooler garnished with lime" },
  { src: "/images/gallery-r3.jpg", category: "Rooms", width: 500, height: 332, alt: "A guest at a granite washbasin with a carved brass mirror" },
  { src: "/images/event-birthday.jpg", category: "Events", width: 1024, height: 682, alt: "A birthday cake and cupcakes on a dessert table" },
  { src: "/images/setting-swim.jpg", category: "Spaces", width: 1552, height: 1013, alt: "The pool and the Kochi waterfront under a blue sky" },
  { src: "/images/room-travancore-palace.jpg", category: "Rooms", width: 675, height: 453, alt: "Travancore Palace: an ornate carved ceiling and chandelier" },
  { src: "/images/about-gilded-hall.jpg", category: "Dining", width: 840, height: 460, alt: "Carved gilded pillars and chandeliers in the dining hall" },
  { src: "/images/dest-jew-town.jpg", category: "Kochi", width: 1200, height: 675, alt: "A lively street of shops in Jew Town" },
  { src: "/images/gallery-r6.jpg", category: "Spaces", width: 500, height: 332, alt: "A guest working on a laptop on the lawn" },
  { src: "/images/room-art-deco-deluxe.jpg", category: "Rooms", width: 672, height: 447, alt: "Art Deco Deluxe: a turned-post bed under a wood-panelled ceiling" },
  { src: "/images/event-bridal-2.jpg", category: "Events", width: 822, height: 1024, alt: "A bride in a cream sari with a pearl necklace" },
  { src: "/images/food-3.jpg", category: "Dining", width: 1219, height: 1290, alt: "Crisp onion fritters" },
  { src: "/images/gallery-r21.jpg", category: "Spaces", width: 500, height: 333, alt: "A guest on the veranda among flowering plants" },
  { src: "/images/dest-dutch-palace.jpg", category: "Kochi", width: 506, height: 426, alt: "The façade of the Mattancherry Dutch Palace" },
  { src: "/images/room-royal-presidential-suite.jpg", category: "Rooms", width: 672, height: 447, alt: "Royal Presidential Suite: a king bed with red cushions" },
  { src: "/images/event-kathakali-figure.jpg", category: "Events", width: 767, height: 1024, alt: "A Kathakali figure in full costume in the courtyard" },
  { src: "/images/gallery-r22.jpg", category: "Dining", width: 500, height: 308, alt: "A table set with drinks and a Kerala meal" },
  { src: "/images/about-corridor.jpg", category: "Spaces", width: 500, height: 333, alt: "The long red-walled veranda" },
  { src: "/images/room-royal-tharavad-suite.jpg", category: "Rooms", width: 647, height: 503, alt: "Royal Tharavad Suite: a draped four-poster bed against ochre walls" },
  { src: "/images/dest-art-hub.jpg", category: "Kochi", width: 944, height: 531, alt: "Visitors outside a building covered in street art" },
  { src: "/images/event-kids-party.jpg", category: "Events", width: 1024, height: 683, alt: "Children gathered for a party in the decorated hall" },
  { src: "/images/gallery-r10.jpg", category: "Spaces", width: 500, height: 333, alt: "Hanging lamps along a dark corridor at night" },
  { src: "/images/room-rhythm-of-malabar-deluxe.jpg", category: "Rooms", width: 672, height: 447, alt: "Rhythm of Malabar Deluxe: a teak four-poster under a sloping ceiling" },
  { src: "/images/restaurant-snacks.jpg", category: "Dining", width: 767, height: 1024, alt: "Fritters and tall glasses on a table by the water" },
  { src: "/images/about-sunset.jpg", category: "Kochi", width: 1500, height: 1001, alt: "Fishing nets and a boat silhouetted against a golden sunset" },
  { src: "/images/event-bridal-3.jpg", category: "Events", width: 1080, height: 1349, alt: "A bride in a cream lehenga against a painted wall" },
  { src: "/images/gallery-hero.jpg", category: "Spaces", width: 1800, height: 1000, alt: "A guest walking through the green-walled courtyard" },
];
