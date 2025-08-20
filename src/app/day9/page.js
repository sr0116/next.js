import Link from "next/link";

export default function Day9() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">동적 라우팅 연습</h1>
        <ul>
          <li>
            <Link
                href="/day9/menu"
                className="block px-6 py-3 bg-white shadow rounded-lg hover:bg-gray-100 transition"
            >
              메뉴 목록 보기
            </Link>
          </li>
        </ul>
      </div>
  );
}
