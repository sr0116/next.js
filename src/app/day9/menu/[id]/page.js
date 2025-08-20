"use client"; // 모달은 클라이언트에서 동작해야 하므로 선언 필요
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Menu1 from "@/component/day9/menu1";
import Menu2 from "@/component/day9/menu2";
import Menu3 from "@/component/day9/menu3";

export default  function Menu({ params }) {
  // const { id } = params; 오류 로그 , 18 가능
  const { id } = React.use(params); // 권장 19부터 가능
  const [showModal, setShowModal] = useState(false);

  const menuMap = {
    1: <Menu1 />,
    2: <Menu2 />,
    3: <Menu3 />,
  };
  // 첫 번째 방식 // return ( // menuMap[id] || // <h1> 관련 정보가 없습니다.</h1> 안내 문구만 뜨는 사이트로 가는

  useEffect(() => {
    if (!menuMap[id]) {
      setShowModal(true); // 번호 없을 때 모달 창 띄우기
    } // 실행할 코드
  }, [id]); // [id] 특정 값으로  바뀔때마다 실행// deps 배열(조건이라 보면 됨) -> 이 값이 변할 때만 실행해라

  if (menuMap[id]) {
    return menuMap[id]; // 있으면 이동
  }

  return (
      <div className="p-4">
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center ">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4"> 안내 사항</h2>
                <p className="mb-4">해당 메뉴는 존재하지 않습니다.<br/>처음으로 돌아가주세요.</p>
                <Link href="/day9">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    처음으로 이동
                  </button>
                </Link>
              </div>
            </div>
        )}
      </div>
  );
}
