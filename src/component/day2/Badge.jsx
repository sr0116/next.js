

export default function Badge ({color = "blue", children}) { // blue 기본값 먼저 지정
  const colorMap= {
    blue: "bg-blue-600",
    green:"bg-green-600",
    gray: "bg-gray-600",
    red:"bg-red-600",
    yellow: "bg-yellow-600"
  }; // 무조건 테일윈드 : 부트스트랩보다 더 다양하게 조절 가능
  const base = "inline-flex items-center px-2 py-1 text-xs font-medium  text-white";
  return(
      <span className={`${base} ${colorMap[color] || colorMap.blue}`}> {children}</span> //color = "blue" 로 설정 되어 있어서 블루로
  )
}
