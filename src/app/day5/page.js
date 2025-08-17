"use client"
import {useState} from "react";

export default function  Day5 () {
  const [isDark, setIsDark] = useState(false);

  return (
      <div className={`min-h-screen flex flex-col items-center justify-center
        ${isDark ? "bg-black text-white" : "bg-white text-dark"}`}>

        <h1 className="text-2xl font-bold mb-4">Day 5 - State (Dark Mode)</h1>
        <p className="mb-6">
        현재 모드 : <span>{isDark ? "다크" : "라이트"}</span>
        </p>

        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
          {isDark ? "라이트 모드로" : "다크 모드로"}
        </button>

      </div>
  )
}