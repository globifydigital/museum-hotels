import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import MaskedTitle from "./MaskedTitle";
import styles from "./PageHero.module.css";

type Props = {
  /** Breadcrumb label for this page. */
  page: string;
  eyebrow: string;
  /** One entry per line; each word slides up out of a mask on load. */
  title: string[];
  intro: string;
  image: string;
  alt: string;
  /** Focal point of the photo, e.g. "50% 40%". */
  position?: string;
  /** A shorter hero, for utility pages such as Contact. */
  compact?: boolean;
};

/* Inner-page hero: full-bleed photo, the same nav pill as the home page, title anchored bottom-left. */
export default function PageHero({ page, eyebrow, title, intro, image, alt, position, compact = false }: Props) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ""}`} id="top" aria-labelledby="page-title">
      <div className={styles.media}>
        <div className="parallax-layer">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className={styles.image}
            style={position ? { objectPosition: position } : undefined}
          />
        </div>
      </div>

      <Nav />

      <div className={styles.content}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page}</span>
        </nav>

        <div className={styles.main}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <MaskedTitle lines={title} className={styles.title} id="page-title" />
          </div>

          <div className={styles.aside}>
            <p className={styles.intro}>{intro}</p>
            <a href="#content" className={styles.scroll}>
              <span>Scroll</span>
              <i aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
