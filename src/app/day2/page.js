import Card from "@/component/day2/Card";
import Badge from "@/component/day2/Badge";
import ProductCard from "@/component/day2/ProductCard";
import Link from "next/link";


const products = [
  {name: "기계식 키보드", price: 129000, tags: ["핫스왑", "적축"]},
  {name: "인체공학 마우스", price: 79000, tags: ["블루투스", "저소음"]},
  {name: "모니터", price: 50000, tags: ["고화질"]},
  {name: "피카츄 돈까스", price: 5000, tags: ["포켓몬", "돈까스"]}
];

export default function Page() {
  return (
      <main className="min-h-screen p-10 bg-white text-black dark:bg-black dark:text-white ">
        <h1 className="text-3xl font-bold">Day 2: JSX & 컴포넌트</h1>
        <div className="mt-6 space-y-4 ">
          <Card title="상태 배지 예시" right={<Badge color="yellow">Active</Badge>}>
            첫 카드
          </Card>
          <Card title="상품목록">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map(p => <ProductCard key={p.name}{...p}/>)}
            </div>
          </Card>
          <Link href={"/day2"}>카운트</Link>
          <Link href={"/"}>메인페이지</Link>
        </div>
      </main>
  );
}
