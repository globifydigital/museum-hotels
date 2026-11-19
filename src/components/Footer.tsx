import Image from "@/components/ui/Img";
import Link from "next/link";
import { CONTACT, enquiryHref } from "@/data/contact";
import { FOOTER_LINKS } from "@/data/site";
import { delay } from "@/lib/reveal";
import styles from "./Footer.module.css";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Ginger+House+Museum+Hotel%2C+Jew+Street%2C+Mattancherry%2C+Kochi";

/* Black footer: brand, visit, reservations and explore columns over a ruled bottom bar, giant wordmark at the foot. */
export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.top}>
        <div className={`${styles.brand} reveal`}>
          <Link href="/" className={styles.logo} aria-label="Ginger House Museum Hotel, home">
            <Image src="/images/logo.png" alt="" fill sizes="64px" />
          </Link>
          <p className={styles.brandName}>Ginger House Museum Hotel</p>
          <p className={styles.tagline}>The seventh heaven of art</p>
          <a href={enquiryHref("Sign me up for news & offers")} className={styles.signUp}>
            Sign up for news &amp; offers <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={`${styles.col} reveal`} style={delay(100)}>
          <p className={styles.label}>Visit</p>
          <address className={styles.address}>
            The Ginger House Building
            <br />
            Jew Street, Mattancherry
            <br />
            Kochi, Kerala 682 002
          </address>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={styles.underline}>
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={`${styles.col} reveal`} style={delay(200)}>
          <p className={styles.label}>Reservations</p>
          <a href={CONTACT.phoneHref} className={styles.contactLink}>
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className={`${styles.contactLink} ${styles.email}`}>
            {CONTACT.email}
          </a>
        </div>

        <nav className={`${styles.col} reveal`} style={delay(300)} aria-label="Footer">
          <p className={styles.label}>Explore</p>
          <ul className={styles.list}>
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`${styles.bottom} reveal`} style={delay(350)}>
        <p>© {new Date().getFullYear()} Ginger House Museum Hotel</p>
        <p>Jew Town · Fort Kochi · Kerala</p>
      </div>

      <p className={`${styles.wordmark} play-in-view`} data-text="GINGER HOUSE" aria-hidden="true">
        GINGER HOUSE
      </p>
    </footer>
  );
}
