"use client";
import { useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);      // 할 일 목록
  const [input, setInput] = useState("");      // 입력값

  // 입력값 상태 가져오기 target.value
  const handleChange = (e) => setInput(e.target.value);

  // 추가(add)
  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // 빈값 방지
    setTodos([...todos, input]); // 새로운 값 배열에 추가
    setInput(""); // 입력창 초기화
  };

  // 삭제(remove)
  const handleRemove = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // index 제외하고 다시 배열 구성
  };

  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Day6 - Add/Remove 이벤트</h1>

        {/* 입력 폼 */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="할 일 입력"
              className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            추가
          </button>
        </form>

        {/* 목록 */}
        <ul className="space-y-2 w-72">
          {todos.map((todo, index) => (
              <li
                  key={index}
                  className="flex justify-between items-center bg-white px-4 py-2 rounded-md shadow"
              >
                <span>{todo}</span>
                <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </li>
          ))}
        </ul>
      </main>
  );
}
