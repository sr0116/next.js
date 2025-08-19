"use client";
import { useState } from "react";

export default function TodoSearch() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const handleRemove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filtered = todos.filter((todo) =>
      todo.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div>
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="할 일 입력"
              className="border px-3 py-2 rounded"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            추가
          </button>
        </form>

        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색"
            className="border px-3 py-2 rounded mb-4 w-full"
        />

        <ul className="space-y-2">
          {filtered.map((todo, index) => (
              <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
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
      </div>
  );
}
