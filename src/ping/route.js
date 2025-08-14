export async function  Get() {
  return new Response(JSON.stringify({ok:true, ts: Date.now()})
    , {headers:{"content-type" : "applicationJson"}}
  );
}