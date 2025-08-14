
export default function Page({params}) {
  return (
      <main>
        <h1>
          Day {params.day} 페이지</h1>
        <p> 이 페이지는 동적 라우팅으로 생성되었습니다.</p>
      </main>
  );
}
