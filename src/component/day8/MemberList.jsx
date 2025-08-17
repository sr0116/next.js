"use client";
import { useState } from "react";

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMembers([...members, input]);
    setInput("");
  };

  const handleRemove = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
      <div>
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="회원 이름 입력"
              className="border px-3 py-2 rounded"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            등록
          </button>
        </form>

        {members.length === 0 ? (
            <p className="text-gray-500">등록된 회원이 없습니다.</p>
        ) : (
            <ul className="space-y-2">
              {members.map((name, index) => (
                  <li
                      key={index}
                      className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
                  >
                    <span>{name}</span>
                    <button
                        onClick={() => handleRemove(index)}
                        className="text-red-500 hover:text-red-700"
                    >
                      삭제
                    </button>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}
