import Link from "next/link";

export default function Menu3() {
  return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-sm bg-white rounded-2xl shadow-lg">
          {/* 이미지 */}
          <div className="h-40 bg-gray-100 flex items-center justify-center">
            <span className="text-6xl">🍗</span>
          </div>

          {/* 내용 */}
          <div className="p-4 text-center">
            <h1 className="text-2xl font-extrabold mb-2">크리스피 치킨 세트</h1>
            <p className="mb-2 text-gray-500">바삭한 치킨 + 감자튀김 + 콜라</p>
            <p className="text-lg font-bold text-gray-400">₩ 13,500</p>
          </div>

          {/* 버튼 */}
          <div className="p-4 border-t bg-gray-50">
            <button className="w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 transition">
              주문하기
            </button>
          </div>
          <button className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-400 transition">
            <Link href="/day9">처음으로 돌아가기</Link>
          </button>
        </div>
      </div>
  );
}
