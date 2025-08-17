"use client";
import {useState} from "react";
import PostList from "@/component/day8_2/PostList";
import PostForm from "@/component/day8_2/PostForm";


export default function Board() {

  const [posts, setPosts] = useState([]);
  const [openIdx, setOpenIdx] = useState(null);

  const handleAdd = (title, content) => {
    setPosts((prev) => [...prev, {title, content}]);
  };

  const handleRemove = (idx) => {
    setPosts((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleOpenIdx = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
      <div>
        <h1> 게시판</h1>
        <PostForm onAdd={handleAdd} />
        <PostList
          posts={posts}
          onRemove={handleRemove}
          onToggle={handleOpenIdx}
          openIdx={openIdx}
          />
      </div>
  )
}