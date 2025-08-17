"use client";

export default function UserDetail({ params }) {
  const { id } = params;
  const users = {
    kim: { name: "김철수", age: 25 },
    lee: { name: "이영희", age: 30 },
    park: { name: "박민수", age: 28 },
  };

  const user = users[id];

  if (!user) return <p>존재하지 않는 사용자입니다.</p>;

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">사용자 상세</h1>
        <p>아이디: {id}</p>
        <p>이름: {user.name}</p>
        <p>나이: {user.age}</p>
      </div>
  );
}
