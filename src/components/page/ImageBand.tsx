import Image from "@/components/ui/Img";
import { delay } from "@/lib/reveal";
import s from "./Section.module.css";
import styles from "./ImageBand.module.css";

type Props = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body?: string;
  id?: string;
};

/* Full-bleed photo band with parallax: a visual pause between sections, its caption set over the photo. */
export default function ImageBand({ image, alt, eyebrow, title, body, id }: Props) {
  return (
    <section className={styles.band} id={id} aria-label={title}>
      <div className={`${styles.frame} reveal-img`}>
        <div className="parallax-layer">
          <Image src={image} alt={alt} fill sizes="100vw" className={styles.image} />
        </div>
      </div>

      <div className={`${s.wrap} ${styles.caption}`}>
        <p className={`${s.eyebrow} ${s.eyebrowLight} reveal`} style={delay(200)}>
          {eyebrow}
        </p>
        <h2 className={`${styles.title} blur-text`} style={delay(300)}>
          {title}
        </h2>
        {body && (
          <p className={`${styles.body} reveal`} style={delay(450)}>
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
