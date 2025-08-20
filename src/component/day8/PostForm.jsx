"use client"
import {useState} from "react";

export default function PostForm({onAdd}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert('글 작성 먼저 해주세요');
    onAdd(title, content);
    setTitle("");
    setContent("");
  };

  return (
      <form onSubmit={handleSubmit} className="mb-6">
        <input
            className="w-full p-3 border rounded-lg mb-2"
            onChange={e =>
                setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="제목"/>

        <textarea
            className="w-full p-3 border rounded-lg mb-2"
            onChange={e =>
                setContent(e.target.value)}
            value={content}
            type="text"
            placeholder="내용 작성" />
        <button type="submit"  className="w-full p-3 border rounded-lg">
          글 작성(추가)
        </button>
      </form>
  );

}