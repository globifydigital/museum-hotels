import type { StayRoom } from "@/data/stay";
import styles from "./RoomSpecs.module.css";

/* Sleeps / Bed / Size / Floor in a two-column ruled grid; missing values are left out. */
export default function RoomSpecs({ room, light = false }: { room: StayRoom; light?: boolean }) {
  const specs = [
    { term: "Sleeps", value: room.sleeps },
    { term: "Bed", value: room.bed },
    { term: "Size", value: room.size },
    { term: "Floor", value: room.floor },
  ].filter((x) => x.value);

  return (
    <dl className={`${styles.specs} ${light ? styles.light : ""}`}>
      {specs.map((x) => (
        <div key={x.term}>
          <dt>{x.term}</dt>
          <dd>{x.value}</dd>
        </div>
      ))}
    </dl>
  );
}
