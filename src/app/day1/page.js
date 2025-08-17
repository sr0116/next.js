import Counter from "@/component/day1/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Counter />
      <Link href={"/day2"}>카드</Link>
      <Link href={"/"}>메인페이지</Link>
    </div>
  );
}

