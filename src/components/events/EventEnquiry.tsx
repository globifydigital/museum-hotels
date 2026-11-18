import { CONTACT } from "@/data/contact";
import { EVENT_CATEGORIES } from "@/data/events";
import { delay } from "@/lib/reveal";
import MailForm, { type Field } from "../page/MailForm";
import s from "../page/Section.module.css";
import styles from "./EventEnquiry.module.css";

const FIELDS: Field[] = [
  { name: "category", label: "Type of event", type: "select", options: EVENT_CATEGORIES, required: true, half: true },
  { name: "date", label: "Preferred date", type: "date", half: true },
  { name: "name", label: "Your name", required: true, half: true, autoComplete: "name" },
  { name: "guests", label: "Number of guests", type: "number", half: true },
  { name: "email", label: "E-mail", type: "email", required: true, half: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
  { name: "message", label: "Tell us about your event", type: "textarea" },
];

/* "Register now" from the old site, as a two-column enquiry: invitation on the left, form on the right. */
export default function EventEnquiry() {
  return (
    <section className={`${s.section} ${s.cream}`} id="enquire" aria-labelledby="enquire-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>Plan your event</p>
          <h2 className={`${s.title} blur-text`} id="enquire-title" style={delay(100)}>
            Tell us what you have in mind
          </h2>
          <p className={`${s.body} reveal`} style={delay(200)}>
            Share a few details and our events team will get back to you with ideas, availability and packages.
          </p>
          <p className={`${styles.call} reveal`} style={delay(300)}>
            Prefer to talk? <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </p>
        </div>

        <div className={`${styles.card} reveal`} style={delay(200)}>
          <MailForm fields={FIELDS} subject="Event enquiry: {category}" submitLabel="Send enquiry" />
        </div>
      </div>
    </section>
  );
}
