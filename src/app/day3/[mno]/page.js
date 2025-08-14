import axios from "axios";

export default async function Page({params}) {
  // const mno = await params.mno; // 이름을 다르게 사용하고 싶을 때 사용
  const {mno} = await params; // params 안에 있는  mno값을 찾아서  mno에 넣음

  const res = await axios.get("http://localhost:3000/api/ping");
  const res2 = await axios.get(`http://localhost:3000/api/user?mno=${mno}`);

  return (
      <main>
        <h1>Day {mno} 페이지</h1>
        <h2>{res.data.ts}</h2>
        <h2>{res.data.name} 님 안녕하세요</h2>
        <h2>이름 : {res2.data.name}</h2>
        <h2>나이 : {res2.data.age}</h2>
        <h2>성별 : {res2.data.gender}</h2>
        <h2>전화번호 : {res2.data.tel}</h2>
        <p> 이 페이지는 동적 라우팅으로 생성되었습니다.</p>
      </main>
  );
}
