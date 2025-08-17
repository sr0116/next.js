import { notFound } from "next/navigation";
import { members } from "@/component/day4/data/members";
import Greeting from "@/component/day4/Greeting";

// 연습 시에는 이렇게 안 쪽에 경로 넣어도 되지만
// 전역에서 사용하고 싶으면  app으로 빼야 함
export async function generateStaticParams() {
  return members.map((m) => ({ id: String(m.id) }));
}

export default function MemberDetail({ params }) {
  const memberId = Number(params.id);
  const member = members.find((m) => m.id === memberId);

  if (!member) notFound(); // 회원 번호 없을시 없다는 페이지로 이동

  return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Member Detail Page</h1>
        <Greeting name={member.name} age={member.age} hobby={member.hobby} />
      </div>
  );
}
