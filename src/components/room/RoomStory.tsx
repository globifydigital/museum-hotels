import { CONTACT, enquiryHref } from "@/data/contact";
import type { StayRoom } from "@/data/stay";
import { delay } from "@/lib/reveal";
import { titleCase } from "@/lib/text";
import s from "../page/Section.module.css";
import Icon from "../stay/Icon";
import InRoom from "../stay/InRoom";
import RoomSpecs from "../stay/RoomSpecs";
import styles from "./RoomStory.module.css";

/** First sentence as the lead, the rest as body copy. */
const splitStory = (story: string) => {
  const m = story.match(/^([\s\S]+?[.!?])\s+([\s\S]*)$/);
  return m ? { lead: m[1], rest: m[2] } : { lead: story, rest: "" };
};

/* The room's story and highlights beside a sticky booking card, then the in-room amenities. */
export default function RoomStory({ room }: { room: StayRoom }) {
  const name = titleCase(room.name);
  const { lead, rest } = splitStory(room.story);

  return (
    <section className={s.section} id="content" aria-labelledby="story-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.story}>
          <p className={`${s.eyebrow} reveal`}>The room</p>
          <h2 className="visually-hidden" id="story-title">
            About {name}
          </h2>
          <p className={`${styles.lead} blur-text`} style={delay(100)}>
            {lead}
          </p>
          {rest && (
            <p className={`${s.body} ${styles.rest} reveal`} style={delay(200)}>
              {rest}
            </p>
          )}

          <h3 className={`${styles.subhead} reveal`}>Highlights</h3>
          <ul className={`${styles.highlights} reveal-stagger`}>
            {room.highlights.map((h, i) => (
              <li key={h}>
                <span className={styles.num}>0{i + 1}</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.aside} aria-label="Book this room">
          <div className={`${styles.card} reveal`} style={delay(250)}>
            <p className={styles.cardEyebrow}>{room.category}</p>
            <p className={styles.cardTitle}>{name}</p>
            <RoomSpecs room={room} />
            <ul className={styles.perks}>
              <li>
                <Icon name="check" className={styles.tick} />
                Breakfast included
              </li>
              <li>
                <Icon name="check" className={styles.tick} />
                Free Wi-Fi
              </li>
              <li>
                <Icon name="check" className={styles.tick} />
                Valet parking
              </li>
            </ul>
            <a href={enquiryHref(`Booking enquiry: ${name}`)} className={`${s.button} ${styles.cta}`}>
              Enquire about this room <span className={s.arrow}>→</span>
            </a>
            <p className={styles.call}>
              or call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </p>
          </div>
        </aside>
      </div>

      <div className={s.wrap}>
        <InRoom title="Also in this room" />
      </div>
    </section>
  );
}
