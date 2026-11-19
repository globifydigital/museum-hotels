import Image from "@/components/ui/Img";
import { CONTACT, enquiryHref } from "@/data/contact";
import { delay } from "@/lib/reveal";
import s from "./Section.module.css";
import styles from "./EnquiryBand.module.css";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  /** Subject of the pre-filled enquiry e-mail. */
  subject?: string;
  action?: string;
  image?: string;
};

/* Closing call to action on the inner pages: enquire by e-mail or phone. */
export default function EnquiryBand({
  eyebrow = "Reservations",
  title = "Book your room now",
  body = "Tell us your dates and the room you have your eye on. Our team will get back to you to plan your stay.",
  subject = "Booking enquiry",
  action = "Booking enquiry",
  image = "/images/hero.jpg",
}: Props) {
  return (
    <section className={styles.band} aria-labelledby="enquiry-title">
      <div className={styles.media} aria-hidden="true">
        <div className="parallax-layer">
          <Image src={image} alt="" fill sizes="100vw" className={styles.image} />
        </div>
      </div>

      <div className={`${s.narrow} ${styles.inner}`}>
        <p className={`${s.eyebrow} ${s.eyebrowLight} reveal`}>{eyebrow}</p>
        <h2 className={`${styles.title} blur-text`} id="enquiry-title" style={delay(100)}>
          {title}
        </h2>
        <p className={`${styles.body} reveal`} style={delay(250)}>
          {body}
        </p>
        <div className={`${s.buttons} ${styles.buttons} reveal`} style={delay(380)}>
          <a href={enquiryHref(subject)} className={s.buttonGold}>
            {action} <span className={s.arrow}>→</span>
          </a>
          <a href={CONTACT.phoneHref} className={`${s.buttonOutline} ${styles.call}`}>
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
