import Greeting from "@/component/day4/Greeting";
import {members} from "@/component/day4/data/members";
import Link from "next/link";

export default function Day4() {
  return (
      <div className="p-6">
        <Link href="/"> 메인 페이지 이동</Link>
        <h1 className="text-2xl font-bold"> Day 4 - Props + Static Data</h1>

        {members.map((m) => (
            <div key={m.id} className="mb-3">
              <Greeting key={m.name} age={m.age} hobby={m.hobby}/>
              <Link className="text-blue-600 underline" href={`/day4/member/${m.id}`}> 
                {/*여기서 경로 지정*/}
                상세보기
              </Link>
            </div>
        ))}

      </div>
  );
}
