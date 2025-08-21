import DayList from "@/component/day11/DayList";

export default function Day11 () {

  // 목록 페이지

  const days = [
    {id: 1, title: "day11 - css Module 기초"},
    {id: 2, title: "day11 - 버튼 & 강조 텍스트"},
    {id: 3, title: "day11 - 카드 레이아웃"},
    {id: 4, title: "day11 - 리스트 레이아웃 & 조건부 스타일"},
    {id: 5, title: "day11 - 종합 실습"},
  ];
  return (
    <DayList days={days} />
  )
}