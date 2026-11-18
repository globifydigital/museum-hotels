/** Reservations contact, as published on the hotel's current site (museumhotel.co.in/contact-us). */
export const CONTACT = {
  phone: "+91 95262 13400",
  phoneHref: "tel:+919526213400",
  email: "museumhotelkochi@gmail.com",
};

export const PHONES = [
  { label: "Reservations", display: "+91 95262 13400", href: "tel:+919526213400" },
  { label: "Front desk", display: "0484 221 3400", href: "tel:+914842213400" },
  { label: "Alternate", display: "+91 93884 33188", href: "tel:+919388433188" },
];

export const ADDRESS = {
  lines: ["The Ginger House Building", "Jew Street, Mattancherry", "Kochi, Kerala 682 002", "India"],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Ginger+House+Museum+Hotel%2C+Jew+Street%2C+Mattancherry%2C+Kochi",
  embedUrl:
    "https://www.google.com/maps?q=Ginger%20House%20Museum%20Hotel%2C%20Jew%20Street%2C%20Mattancherry%2C%20Kochi&z=16&output=embed",
};

/** A pre-filled enquiry e-mail, optionally for one room or service. */
export const enquiryHref = (subject = "Booking enquiry") =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
