import { ADDRESS, CONTACT, PHONES, enquiryHref } from "@/data/contact";
import { delay } from "@/lib/reveal";
import MailForm, { type Field } from "../page/MailForm";
import s from "../page/Section.module.css";
import styles from "./ContactDetails.module.css";

const FIELDS: Field[] = [
  { name: "name", label: "Your name", required: true, half: true, autoComplete: "name" },
  { name: "email", label: "E-mail", type: "email", required: true, half: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
  {
    name: "topic",
    label: "About",
    type: "select",
    options: ["Room booking", "Restaurant table", "Spa & wellness", "Event or wedding", "Something else"],
    half: true,
  },
  { name: "message", label: "Your message", type: "textarea", required: true },
];

const SHORTCUTS = [
  { label: "Book a room", subject: "Booking enquiry" },
  { label: "Reserve a table", subject: "Table reservation" },
  { label: "Book a treatment", subject: "Spa enquiry" },
  { label: "Plan an event", subject: "Event enquiry" },
];

/* Contact details (visit, call, write, quick enquiries) beside a message form. */
export default function ContactDetails() {
  return (
    <section className={s.section} id="content" aria-labelledby="contact-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.details}>
          <p className={`${s.eyebrow} reveal`}>Get in touch</p>
          <h2 className={`${s.title} blur-text`} id="contact-title" style={delay(100)}>
            We would love to hear from you
          </h2>

          <div className={`${styles.blocks} reveal-stagger`}>
            <div className={styles.block}>
              <h3 className={styles.label}>Visit</h3>
              <address className={styles.address}>
                Ginger House Museum Hotel
                {ADDRESS.lines.map((l) => (
                  <span key={l}>
                    <br />
                    {l}
                  </span>
                ))}
              </address>
              <a href={ADDRESS.mapUrl} target="_blank" rel="noopener noreferrer" className={s.textLink}>
                Get directions ↗
              </a>
            </div>

            <div className={styles.block}>
              <h3 className={styles.label}>Call</h3>
              <ul className={styles.phones}>
                {PHONES.map((p) => (
                  <li key={p.href}>
                    <span>{p.label}</span>
                    <a href={p.href}>{p.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.block}>
              <h3 className={styles.label}>Write</h3>
              <a href={`mailto:${CONTACT.email}`} className={styles.email}>
                {CONTACT.email}
              </a>
            </div>

            <div className={styles.block}>
              <h3 className={styles.label}>Quick enquiries</h3>
              <ul className={styles.shortcuts}>
                {SHORTCUTS.map((sc) => (
                  <li key={sc.label}>
                    <a href={enquiryHref(sc.subject)}>
                      {sc.label} <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.card} reveal`} style={delay(200)}>
          <h3 className={styles.cardTitle}>Send us a message</h3>
          <MailForm fields={FIELDS} subject="Website enquiry: {topic}" submitLabel="Send message" dark />
        </div>
      </div>
    </section>
  );
}
