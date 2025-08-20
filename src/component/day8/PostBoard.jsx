// 전체 게시판
"use client"
import {useMemo, useState} from "react";
import PostList from "@/component/day8/PostList";
import PostForm from "@/component/day8/PostForm";
import PostStats from "./PostStats"
import { v4 as uuidv4 } from "uuid";
import PostSearch from "@/component/day8/PostSearch";

export default function PostBoard() {
  const [posts, setPosts] = useState([
    { id: uuidv4(), title: "첫 글", content: "React & Next.js 연습" },
    { id: uuidv4(), title: "둘째 글", content: "map / filter / find" },
    { id: uuidv4(), title: "셋째 글", content: "reduce로 통계 뽑기" },
  ]);

  const [keyword, setKeyword] = useState("");
  const [openId, setOpenId] = useState(null);

  //  글 추가
  const handleAdd = (title, content) => {
    setPosts( (prev) =>  [
      ...prev, {id: uuidv4(), title, content },
  ]);
  };

  // 글 삭제 핸들러
  const handleDelete = id => {
    setPosts(
        prev => prev.filter( p => p.id !== id)
    );
  };

  // 글 조회
  const handleView = id => {
    const post = posts.find(p => p.id === id );
    alert(post ? `제목: ${post.title}\n내용: ${post.content}` : "글이 존재하지 않습니다.")
  };

  // 토글 형태
  const handleToggle = id => {
    setOpenId( prev => prev === id ? null : id );
  };

  // 검색
  const filtered = useMemo( () => {
    const q = keyword.trim().toLowerCase();
    if(!q) return posts; // 없으면 전체 보여줌
    // 검색어가 있을시 필터링
      return posts.filter(
          p =>
              p.title.toLowerCase().includes(q) ||
              p.content.toLowerCase().includes(q)
      );
    }, [posts, keyword]);

  return (
      <div className="mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2"> 게시판 </h1>

        <PostStats posts={filtered} />

        <PostSearch keyword={keyword} onChange={setKeyword} />
        <PostForm onAdd={handleAdd}/>
        <PostList posts={filtered} openId={openId} onToggle={handleToggle} onDelete={handleDelete} onView={handleView} />
      </div>
  )
}