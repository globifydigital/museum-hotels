import { FOOTER_LINKS } from "@/data/site";
import { delay } from "@/lib/reveal";
import styles from "./Footer.module.css";

/* Figma node 213:231 and the footer text layers around it — black, 739 tall, giant wordmark at the bottom. */
export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`${styles.contact} reveal`}>
        <p className={`${styles.heading} ${styles.name}`}>GINGER HOUSE MUSEUM HOTEL</p>
        <p className={`${styles.heading} ${styles.location}`}>LOCATION :</p>
        <p className={`${styles.heading} ${styles.reservations}`}>Reservations</p>
        <a href="tel:+6676342130" className={`${styles.gold} ${styles.phone}`}>
          Phone: Telephone : +66 76 342 130
        </a>
        <a href="mailto:gingerhouse@gmai.com" className={`${styles.gold} ${styles.email}`}>
          gingerhouse@gmai.com
        </a>
        <a href="#" className={styles.map}>
          Visit us on GOOGLE MAP
        </a>
        <a href="#" className={styles.signUp}>
          Sign up here
        </a>
      </div>

      <div className={`${styles.links} reveal`} style={delay(120)}>
        <p className={`${styles.heading} ${styles.about}`}>About</p>
        <ul className={styles.list}>
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <p className={`${styles.rewards} reveal`} style={delay(240)}>
        SIGNUP TO IHG® ONE REWARDS FOR EXCLUSIVE{" "}
        <br />
        MEMBER RATES AND OFFERS, PLUS EARN POINTS FOR{" "}
        <br />
        REWARDS NIGHTS.
      </p>

      <p className={`${styles.wordmark} play-in-view`} data-text="GINGER HOUSE" aria-hidden="true">
        GINGER HOUSE
      </p>
    </footer>
  );
}
