// 게시판 한 개만 담당하는 컴포넌트
"use client"

export default function PostItem({post, isOpen, onToggle, onView, onDelete}) {
  return (<div className="border rounded-xl bg-white shadow-sm hover:shadow-md transition">
        <button
            onClick={() => onToggle(post.id)}
            className="w-full text-left p-4 flex items-center justify-between"
        >
          <span className="text-lg font-bold text-gray-900">{post.title}</span>
          <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (<div className="px-4 pb-4">
            <p className="text-gray-700">{post.content}</p>
            <div className="flex gap-2 mt-3">
              <button
                  onClick={() => onView(post.id)}
                  className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                조회
              </button>

              <button
                  onClick={() => onDelete(post.id)}
                  className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                삭제
              </button>
              <button
                  onClick={() => onToggle(post.id)}
                  className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                {isOpen ? "닫기" : "열기"}
              </button>
            </div>
          </div>
        )}
      </div>
  );
}