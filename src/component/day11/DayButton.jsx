import styles from "@/app/styles/day11.module.css";

export default function DayButton({label, type}) {
  const btnClass =
      type === "primary" ? styles.btnPrimary
          : styles.btnOutline;

  return (
      <button className={`${styles.button} ${btnClass}`}>
        {label}
      </button>
  );
}