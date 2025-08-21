"use client"
import Link from "next/link";
import styles from "@/app/styles/day11.module.css";


export default function DayList ({days}) {


  return (
      <div className={styles.container}>
        <h1 className={styles.title}> day11 학습 목록 </h1>
        <ul className={styles.list}>
            {days.map( d => { // 중괄호에선 무조건 리턴 필요 안할거면 () 사용
             return <li className={styles.listItem} key={d.id}>
            <Link href={`/day10/day11/${d.id}`}> {d.title}</Link>
          </li>
            })}
        </ul>
      </div>
  )
}