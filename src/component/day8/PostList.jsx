"use client"

import PostItem from "@/component/day8/PostItem";

export default function PostList({posts, openId, onToggle, onView, onDelete}) {
  if (posts.length === 0) {
    return (
        <div className="text-center text-gray-500 py-8 border rounded-xl">
          결과가 없습니다.
        </div>
    );
  }
  return (
      <div className="grid gap-3 mb-2">
        <ul className="space-y-2">

          {posts.map(p => (
              <li key={p.id}>
                <PostItem key={p.id} post={p} onDelete={onDelete} isOpen={openId === p.id} onToggle={onToggle}
                          onView={onView}/>
              </li>
          ))}

        </ul>
      </div>
  );

}