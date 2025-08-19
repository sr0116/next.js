"use client"
import Counter from "@/component/day8_3/Counter";
import MemberList from "@/component/day8_3/MemberList";
import PostBoard from "@/component/day8_3/PostBoard";
import TodoSearch from "@/component/day8_3/TodoSearch";
import UserList from "@/component/day8_3/UserList";

export default function Day8 () {
  return (
      <main className="flex flex-col gap-12 items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-8">Day8 - 이벤트 처리 종합 예제</h1>


        <section className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">문제 1. 카운터</h2>
          <Counter />
        </section>


        <section className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">문제 2. 회원 등록 리스트</h2>
          <MemberList />
        </section>


        <section className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">문제 3. 글 작성 폼</h2>
          <PostBoard />
        </section>


        <section className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">문제 4. Todo + 검색</h2>
          <TodoSearch />
        </section>


        <section className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">문제 5. 사용자 목록</h2>
          <UserList />
        </section>
      </main>
  );
}