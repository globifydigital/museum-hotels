import { Fragment, type CSSProperties } from "react";
import styles from "./MaskedTitle.module.css";

type Props = {
  /** One entry per line. */
  lines: string[];
  className?: string;
  id?: string;
  /** Delay before the first word, in seconds. */
  start?: number;
};

/* An h1 whose words rise one after another out of their own masks on page load. */
export default function MaskedTitle({ lines, className, id, start = 0.35 }: Props) {
  let word = 0;
  return (
    <h1 className={className} id={id} style={{ "--start": `${start}s` } as CSSProperties}>
      {lines.map((line) => (
        <span key={line} className={styles.line}>
          {line.split(" ").map((w, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className={styles.word}>
                <span style={{ "--i": word++ } as CSSProperties}>{w}</span>
              </span>
            </Fragment>
          ))}
        </span>
      ))}
    </h1>
  );
}
