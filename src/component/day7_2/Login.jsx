"use client";
import { useState } from "react";


export default function Login (props) {
// if 문 , 삼항, 로그인 유저
const [id, setId] = useState("");
const [pw, setPw] = useState("");
const [user, setUser] = useState(null);
const userList =[
  {id : "1", pw: "1", name : "sarang",},
  {id : "2", pw: "2", name : "minsu",},
  {id : "3", pw: "3", name : "jimin",},
];
  const foundUser = userList.find((u) => u.id === id && u.pw === pw);

const handleSubmit = (e) => {
  e.preventDefault();
  if (foundUser) {
    setUser(foundUser);
  } else {
    alert("아이디 또는 비밀 번호가 일치하지 않습니다.");
    return;
  }
}
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
    setId("");
    setPw("");
  }
  return (
    <div className="flex justify-center items-center  flex-col gap-4">
      {!user && <h2 className="text-3xl text-blue-400 font-bold">로그인 페이지</h2>}
      <div className="border border-gray-500  rounded-xl shadow-lg p-6 ">
      {user ? (
        <div className="flex flex-col items-center justify-center ">
          <h2 className="font-bold text-3xl">{user.name} 님 환영합니다!</h2>
          <button className="bg-amber-200 rounded-2xl p-3" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) :
      <form onSubmit={handleSubmit} className="gap-1 flex">
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 rounded "
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded-lg"
        >
          로그인
        </button>
      </form>}
    </div>
    </div>
  );
}