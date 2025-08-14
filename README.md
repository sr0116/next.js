# 🚀 Next.js 첫 시작 — 1일차

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)

---

## 🌱 Day 1 — Next.js 첫 시작


- **"use client" - 클라이언트 컴포넌트(Client Component)**  
  ↳ Next.js 13+에서 기본은 서버 컴포넌트이므로, 브라우저에서 동적 기능(이벤트, 상태 관리, 브라우저 API) 사용 시 파일 최상단에 `"use client"` 선언 필요.

- **리액트 내에선 import React from "react"; 작성하지 않고도 사용 가능**  
  ↳ 자동 JSX 변환 기능이 활성화돼 있어 필수 아님. 필요하면 명시적으로 작성 가능.

- **card와 count 연결하는 법(경로 및 페이지 전환 연결 - Link import 해서 사용해야 함)**  
  ↳ 고정된 페이지 이동은 `<Link>`로 가능하고, 코드 기반 동적 이동은 `useRouter`를 사용해야 함 (`"use client"` 필요).

- **테일윈드, axios, fetch 문법 개념 이해**  

  ↳ Tailwind는 클래스 기반 유틸리티 CSS 프레임워크, axios/fetch는 API 호출용. fetch는 내장, axios는 설치 필요.

- **동적 라우팅  [] 패키지 이용해서 사용**  
  ↳ 파일명에 대괄호(`[ ]`)를 사용하면 해당 경로를 변수처럼 처리 가능. `/product/[id]` → `id` 값을 URL에서 직접 받음.

- **동적 라우팅 user 정보 가져오기**
      ↳ api user route 에서 먼저 유저 정보 입력 후, 
      export async function GET(req) { } 여기에서 mno 값을 가져 오기 위해 먼저 const {searchParams}= new URL(req.url)로 새 URL 지정해줘야 함



- **next.js 에서 리액트 변환하기**  
  ↳ CRA(React)에서 Next.js로 옮길 때는 폴더 구조, 라우팅 방식, API 호출 경로를 Next.js에 맞게 조정해야 함.




📌 **추가 개념 정리**
- `"use client"`는 성능을 위해 꼭 필요한 컴포넌트에만 적용.
- 동적 라우팅은 `[param].js` 파일명 패턴으로 구현.
- Tailwind 적용 시 `tailwind.config.js`에서 경로(content) 설정 필수.
- axios/fetch 사용 시 비동기 처리(`async/await`) 구조를 익히는 게 중요.
- React → Next.js 변환 시 **정적 페이지(SSR/SSG)**와 **클라이언트 컴포넌트** 개념을 구분해야 함.
