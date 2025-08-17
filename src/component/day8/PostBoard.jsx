"use client";
import { useState } from "react";

export default function PostBoard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setPosts([...posts, { title, content, open: false }]);
    setTitle("");
    setContent("");
  };

  const handleToggle = (index) => {
    setPosts(
        posts.map((post, i) =>
            i === index ? { ...post, open: !post.open } : post
        )
    );
  };

  const handleRemove = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
      <div>
        <form onSubmit={handleAdd} className="flex flex-col gap-2 mb-4">
          <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목 입력"
              className="border px-3 py-2 rounded"
          />
          <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용 입력"
              className="border px-3 py-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            저장
          </button>
        </form>

        <ul className="space-y-2">
          {posts.map((post, index) => (
              <li
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span onClick={() => handleToggle(index)}>{post.title}</span>
                  <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500 hover:text-red-700"
                  >
                    삭제
                  </button>
                </div>
                {post.open && (
                    <p className="mt-2 text-gray-700">{post.content}</p>
                )}
              </li>
          ))}
        </ul>
      </div>
  );
}
