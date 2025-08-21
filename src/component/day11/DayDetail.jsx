"use client"
import styles from "@/app/styles/day11.module.css";
import DayHighlight from "@/component/day11/DayHighlight";
import DayButton from "@/component/day11/DayButton";
import DayCard from "@/component/day11/DayCard";
import DayListLayout from "@/component/day11/DayListLayout";
import DayText from "@/component/day11/DayText";

export default function DayDetail ({id}) {
  const renderContent = () => {
    switch (id) {
      case "1":
        return<DayText text="CSS Module 기초 실습 = 스타일 파일 불러오기" variant="basic" />;

      case "2":
        return (
            <>
              <DayHighlight text="중요한 문장은 강조!" />
              <DayButton label="클릭해보기" type="primary" />
            </>
        );

      case "3":
        return<DayCard title="카드 레이아웃" desc="hover 시 커지는 효과 적용" />;


      case "4":
        return<DayListLayout items={["아이템 A", "아이템 B", "아이템 C"]} />;

      case "5":
        return (
            <div className={styles.mission}>
              <h2 className={styles.missionTitle}>실습 미션! </h2>
              <ul className={styles.missionList}>
                <li>CSS Module 수정해서 배경 및 폰트 바꿔보기</li>
                <li>버튼 hover 효과 추가하기</li>
                <li>리스트에 애니메이션 넣기</li>
              </ul>
            </div>
        );
      default:
        return <p>아직 준비되지 않은 Day입니다.</p>
    }
  };
  return <div className={styles.container}>{renderContent()}</div>;
}
// renderContent() 이건 함수 실행 결과
// renderContent이건 함수 그 자체라 JSX 안에 함수 자체가 들어오면 "Functions are not valid as a React child"
