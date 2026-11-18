import Image from "next/image";
import { enquiryHref } from "@/data/contact";
import { OFFER } from "@/data/stay";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import Icon from "./Icon";
import styles from "./Offer.module.css";

/* The current package: a dark card with the inclusions, beside the welcome drink. */
export default function Offer() {
  return (
    <section className={s.section} id="offer" aria-labelledby="offer-title">
      <div className={`${s.wrap} ${styles.card}`}>
        <div className={`${styles.copy} ${s.dark}`}>
          <p className={`${s.eyebrow} reveal`}>{OFFER.eyebrow}</p>
          <h2 className={`${styles.title} blur-text`} id="offer-title" style={delay(100)}>
            {OFFER.title}
          </h2>
          <p className={`${s.body} reveal`} style={delay(200)}>
            {OFFER.intro}
          </p>
          <ul className={`${styles.list} reveal-stagger`}>
            {OFFER.inclusions.map((item) => (
              <li key={item}>
                <Icon name="check" className={styles.tick} />
                {item}
              </li>
            ))}
          </ul>
          <div className="reveal" style={delay(300)}>
            <a href={enquiryHref("Booking enquiry: 2 nights & 3 days package")} className={s.buttonGold}>
              Enquire about this offer <span className={s.arrow}>→</span>
            </a>
          </div>
        </div>

        <div className={`${styles.photo} reveal-img`} style={delay(150)}>
          <Image
            src="/images/stay-welcome-drink.jpg"
            alt="A tall iced drink held up against the backwaters"
            fill
            sizes="(max-width: 899px) 100vw, 40vw"
          />
          <p className={styles.stamp}>
            <span>Welcome</span> drink on arrival
          </p>
        </div>
      </div>
    </section>
  );
}
