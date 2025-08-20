import Link from "next/link";

export default function Day9() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">🍔 패스트 푸드 메뉴 (동적 라우팅 연습)</h1>
        <ul className="space-y-4">
          <li>
            <Link
                href="/day9/menu/1"
                className="block px-6 py-3 bg-white shadow rounded-lg hover:bg-gray-100 transition"
            >
              버거 메뉴
            </Link>
          </li>
          <li>
            <Link
                href="/day9/menu/2"
                className="block px-6 py-3 bg-white shadow rounded-lg hover:bg-gray-100 transition"
            >
              피자 메뉴
            </Link>
          </li>
          <li>
            <Link
                href="/day9/menu/3"
                className="block px-6 py-3 bg-white shadow rounded-lg hover:bg-gray-100 transition"
            >
              치킨 메뉴
            </Link>
          </li>
          <li>
            <Link
                href="/day9"
                className="block px-6 py-3 bg-white shadow rounded-lg hover:bg-gray-100 transition"
            >
              처음으로
            </Link>
          </li>
        </ul>
      </div>
  );
}
