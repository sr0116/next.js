"use client"

export default function PostStatus ({posts}) {
  const total = posts.length;
  const totalChars = posts.reduce(
      (sum, p) => sum + (p.title?.length || 0 ) + (p.content?.length || 0),
      0
  );

  const avgChars = total === 0 ? 0 : Math.round(totalChars/ total);

  return (
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
        <span  className="px-3 py-1 rounded-full bg-gray-100">총 게시글 수 : {total}</span>
        <span  className="px-3 py-1 rounded-full bg-gray-100">총 글자 수 : {totalChars}</span>
        <span className="px-3 py-1 rounded-full bg-gray-100">평균 글자 수: {avgChars}</span>
      </div>
  )
}