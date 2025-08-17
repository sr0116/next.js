# Next.js 첫 시작 — 1일차

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)

---

## ✔ Day 1~3 — Next.js 첫 시작

`"use client"` : 클라이언트에서 상태/이벤트 쓰려면 파일 최상단에 선언
- React는 `import React` 없이도 JSX 사용 가능
- 페이지 이동: `<Link>` / 코드 이동: `useRouter`
- Tailwind: 클래스 기반 CSS 프레임워크
- axios / fetch: API 호출용 (fetch는 기본, axios는 설치 필요)
- 동적 라우팅: `[id].js` → URL 파라미터로 값 받기
- API Route에서 `new URL(req.url)`로 `searchParams` 추출 가능

---

## ✔ Day 4~8 실습 — 간단 게시판 앱

- 부모(Board)에서 `posts`, `openIdx`를 state로 관리
- 자식(PostForm) → 제목/내용 입력 → 부모의 `onAdd` 실행
- 자식(PostList) → props로 글 목록 출력
- 제목 클릭 시 `handleOpenIdx`로 내용 펼치기/닫기
- "삭제" 버튼 클릭 시 부모의 `onRemove` 실행 → 글 제거
- 모든 컴포넌트(`Board`, `PostForm`, `PostList`)에 `"use client"` 선언 필요

  