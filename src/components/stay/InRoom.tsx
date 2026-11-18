import { IN_ROOM } from "@/data/stay";
import Icon from "./Icon";
import styles from "./InRoom.module.css";

/* What every room shares, as a ruled row of line icons (Stay page and each room page). */
export default function InRoom({ title = "In every room" }: { title?: string }) {
  return (
    <div className={styles.row}>
      <h3 className={`${styles.title} reveal`}>{title}</h3>
      <ul className={`${styles.list} reveal-stagger`}>
        {IN_ROOM.map((item) => (
          <li key={item.label} className={styles.item}>
            <Icon name={item.icon} className={styles.icon} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
