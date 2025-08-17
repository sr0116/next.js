"use client";
import { useState } from "react";

export default function Day6() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`환영합니다, ${name}님! (정적 경로)`);
  };

  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Day6 - 정적 이벤트 처리</h1>
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-72 bg-white p-6 rounded-xl shadow-md"
        >
          <input
              type="text"
              placeholder="이름 입력"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            확인
          </button>
        </form>
        {message && <p className="mt-6 text-lg text-blue-600 font-medium">{message}</p>}
      </main>
  );
}
