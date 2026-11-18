/**
 * Wellness page content, adapted from the "Our Wellness Experience" and spa blocks on museumhotel.co.in.
 * The old site lists spa prices without a currency, so prices are left out ("on request").
 */

export const WELLNESS_INTRO = {
  eyebrow: "Wellness at Ginger House",
  title: "Slow down, the Kerala way",
  lead: "Kerala is the home of Ayurveda. Between heritage walks and lakeside sunsets, give a few hours to the oldest wellness traditions of India.",
  body: "Our therapies draw on age-old Ayurvedic practice, with yoga for body and mind and a menu of spa treatments, from traditional massage to facials, to restore you after a day exploring Fort Kochi.",
};

export type Pillar = { name: string; subtitle: string; body: string; image: string; alt: string };

export const PILLARS: Pillar[] = [
  {
    name: "Ayurveda",
    subtitle: "The science of life",
    body: "Ayurveda, which means ‘the science of life’, is an age-old system of medicine from India. It sets out clear guidelines for healthy living as well as for treating ailments, through massages, therapies, exercise and a proper diet.",
    image: "/images/wellness-ayurveda.jpg",
    alt: "Ayurvedic herbs, spices and a bowl of herbal paste",
  },
  {
    name: "Yoga",
    subtitle: "Body, mind & soul",
    body: "Yoga aims to unite body, mind and soul. It builds awareness of the body’s posture, alignment and patterns of movement, bringing flexibility and calming the mind in a stress-stricken world.",
    image: "/images/wellness-yoga.jpg",
    alt: "A woman meditating cross-legged on a yoga mat in a sunlit garden",
  },
  {
    name: "Rejuvenation therapy",
    subtitle: "Rasayana Chikitsa",
    body: "Rejuvenation therapy (Rasayana Chikitsa) in Ayurveda helps tone the skin and strengthen the body’s tissues to support longevity. The body’s overall resistance rises too, by nurturing ‘Ojas’, the primary vitality, and ‘Sattva’, mental clarity.",
    image: "/images/wellness-rejuvenation.jpg",
    alt: "Shirodhara: warm oil poured onto the forehead during an Ayurvedic treatment",
  },
];

export type TreatmentGroup = { name: string; intro: string; treatments: { name: string; note: string }[] };

export const TREATMENTS: TreatmentGroup[] = [
  {
    name: "Massage",
    intro: "Hands-on therapies to release tension and restore balance.",
    treatments: [
      { name: "Traditional massage", note: "Kerala-style massage with warm herbal oils" },
      { name: "Thai massage", note: "Assisted stretching and pressure-point work" },
      { name: "Swedish massage", note: "Long, flowing strokes for deep relaxation" },
    ],
  },
  {
    name: "Face & skin",
    intro: "Treatments to cleanse, nourish and brighten.",
    treatments: [
      { name: "Premium facials", note: "Deep-cleansing, nourishing facial rituals" },
      { name: "Skin care", note: "Treatments tailored to your skin" },
      { name: "Anti-ageing treatment", note: "Firming care for tired skin" },
      { name: "LED light therapy", note: "Light-based treatment for a clear complexion" },
    ],
  },
  {
    name: "Body & rituals",
    intro: "Longer rituals for the whole body.",
    treatments: [
      { name: "Body treatments", note: "Scrubs and wraps to renew the skin" },
      { name: "Essential oils", note: "Aromatherapy with pure essential oils" },
      { name: "Water cure", note: "Hydrotherapy to refresh and revive" },
    ],
  },
  {
    name: "Practice",
    intro: "Ways to make wellness part of your stay.",
    treatments: [
      { name: "Yoga classes", note: "Guided sessions for every level" },
      { name: "Spa packages with accommodation", note: "Combine your stay with a treatment programme" },
    ],
  },
];

export const RESTORE = [
  {
    title: "Take a leisurely swim",
    body: "The infinity pool is the right place to surrender to the calm surroundings, which rejuvenate both mind and spirit.",
    image: "/images/setting-swim.jpg",
    alt: "The pool beside a green living wall, looking out over the Kochi waterfront",
  },
  {
    title: "Seating to enjoy the sun",
    body: "Loungers on the lawn make the perfect spot to enjoy the sun with a favourite book, long after your treatment.",
    image: "/images/setting-sun-seating.jpg",
    alt: "A guest relaxing on a wooden lounger on the lawn beside the red heritage building",
  },
];
