
const user = [
  {name:"사랑",age: 20, gender : "female" , tel: "010-2222-3333" },
  {name:"현정",age: 19, gender : "female" , tel: "010-4444-5555" },
  {name:"지유",age: 22, gender : "female" , tel: "010-6666-7777" }
]

export async function GET(req) {
  const {searchParams}= new URL(req.url);
  const mno = searchParams.get("mno"); // const {mno} = await params; 여기에 있는 mno 값을 가져온다고 본다
    return new Response(JSON.stringify(user[mno - 1])
        , {headers:{"content-type" : "applicationJson"}} // next.js는 스프링처럼 비동기로 요청 가능
    );
  }
