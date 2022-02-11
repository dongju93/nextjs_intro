// 단일 글로벌 _app.js에 모든 사항을 적용시키기에 부적절함으로
// Layout.js 같은 sub 컴포넌트를 생성하여 원하는 글로벌 적용사항을
// children 이라는 변수로 불러와 적용시킴

import NavBar from "./NavBar"

export default function Layout({ children }) {
    return <>
        <NavBar />
        <div>{children}</div>
    </>
}