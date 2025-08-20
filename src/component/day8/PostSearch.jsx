"use client"

export default function PostSearch({ keyword, onChange }){
  return (
      <div className="mb-4">
        <input
          className="rounded-lg p-3 border"
          placeholder="검색 : 제목 또는 내용"
          value={keyword}
          onChange={e => onChange(e.target.value)}
        />
      </div>
  )
}