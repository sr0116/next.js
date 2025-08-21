import styles from "@/app/styles/day11.module.css";

export default function DayHighlight ({text}) {
  return <p className={styles.highlight}>{text}</p>;
}