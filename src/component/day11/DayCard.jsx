import styles from "@/app/styles/day11.module.css";

export default function DayCard({title, desc}) {
  return (
      <div className={`${styles.card} ${styles.hoverScale}`}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
  );
}