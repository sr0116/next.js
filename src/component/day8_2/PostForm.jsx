"use client";
import {useState} from "react";


export default function PostForm({onAdd}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAdd(title, content); // 부모
    setTitle("");
    setContent("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input placeholder="내용 입력"
               value={content}
               onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit"> 추가하기</button>
      </form>
  );
}