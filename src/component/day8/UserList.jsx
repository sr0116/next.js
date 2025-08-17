"use client"
import Link from "next/link";

export default function UserList() {
  const users = [
    {id: "kim", name: "김철수", age: 25},
    {id: "lee", name: "이영희", age: 30},
    {id: "park", name: "박민수", age: 28},
  ];
return (
    <ul>
      {users.map((user) => (
          <li
          key={user.id}>
            <Link href={`/day8/${user.id}`}>{user.name} 상세보기</Link>
          </li>
      ))}
    </ul>
)
  
}