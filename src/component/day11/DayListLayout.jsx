
import styles from "@/app/styles/day11.module.css";

export default function DayListLayout ({items}) {
  return (
      <ul className={styles.listLayout}>
        {items.map ((items, idx ) => (
            <li key={idx} className={styles.listItem}>
              {items}
            </li>
        ))}
      </ul>
  );
}