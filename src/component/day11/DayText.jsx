import styles from "@/app/styles/day11.module.css";

export default function DayText ({text, variant}) {

  return (
      <p
          className={`${styles.text} ${
          variant === "basic" ? styles.basic : styles.italic
          }`}
          >
        {text}
      </p>
  );
}