// default export 일 경우에만 페이지에 랜더함
// 컴포넌트 명은 상관 없음
import { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Head from "next/head";
import Link from "next/link"
import Seo from "../components/Seo";
// Gotrue-js auth 예시 실습
import GoTrue from "gotrue-js";
import { useRouter } from "next/router";

// const auth = new GoTrue({
//     APIUrl: 'http://localhost:3000/.netlify/identity',
//     audience: '',
//     setCookie: false,
// });

export default function Home({ results }) {
    const router = useRouter();
    // onClick 함수를 사용하는 
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    };
    // const [movies, setMovies] = useState();
    // useEffect(() => {
    //     // async/await 사용하여 json 형태로 object 반환
    //     (async () => {
    //         // next.config.js에 rewrites()로 작성한 source 주소를 fetch에 대입
    //         const { results } = await (await fetch(`/api/movies`)).json();
    //         setMovies(results);
    //     })();
    // }, [])
    // const [counter, setCounter] = useState(0);
    return (
        <div className="container">
            <Seo title="Home" />
            {/* Loading 구현 */}
            {/* {!movies && <h4>Loading...</h4>} */}
            {/* empty array일 경우 아무것도 하지않기 및 map 에러 방지용 "?" 삽입 */}
            {results?.map(movie => (
                // id와 original_title은 api의 속성자
                <div onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>
                        {/* movie 포스터를 onClick 했을때와 마찬가지로 h4로 기재된 title을 클릭했을 때
                        동일하게 페이지 전환 및 파라미터 넘김을 수행 */}
                        <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                            <a>{movie.original_title}</a>
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie{
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

// Next.js 핵심 SSR 기능 - Only happen in backend server
// _app.js 작동 후 SSR을 통해 Props를 반환 한 후 메인 페이지가 렌더링됌
// 서버에서 HTML로 렌더 완료한 후 보내게됌
export async function getServerSideProps() {
    // 서버에서 바라볼 url을 full로 기입해줘야 작동함
    // https://timely-gnome-6d0854.netlify.app
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        },
    };
}
