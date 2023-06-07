// anchor 를 사용하지 않고 Link를 사용하여 웹사이트 새로고침을 하지않음
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {

    const router = useRouter();
    /* 1. xxx.module.css
    CSS를 module로 작성하여 { }으로 불러와 스타일을 적용
    Style을 JS 프로퍼티로 사용함 (HTML Render시 랜덤 이름지정) */

    /* 2. styles jsx
    html class name "jsx-123456789"화
    모듈별 독립되어 있기때문에 다른 js 컴포넌트에서 같은 프로퍼티로 선언하더라도
    영향을 주거나 받지 않음 */
    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href="/" legacyBehavior>
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
        `}</style>
        </nav>
        
    )};
