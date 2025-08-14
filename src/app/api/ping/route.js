export async function GET() {
  return new Response(JSON.stringify({ok:true, ts: new Date(), name:"사랑"})
    , {headers:{"content-type" : "applicationJson"}} // next.js는 스프링처럼 비동기로 요청 가능
  );
}