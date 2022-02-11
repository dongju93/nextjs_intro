// default export 일 경우에만 페이지에 랜더함
// 컴포넌트 명은 상관 없음
import { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        // async/await 사용하여 json 형태로 object 반환
        (async () => {
            // next.config.js에 rewrites()로 작성한 source 주소를 fetch에 대입
            const { results } = await (await fetch(`/api/movies`)).json();
            setMovies(results);
        })();
    }, [])
    // const [counter, setCounter] = useState(0);
    return (
        <div className="container">
            <Seo title="Home" />
            {/* Loading 구현 */}
            {!movies && <h4>Loading...</h4>}
            {/* empty array일 경우 아무것도 하지않기 및 map 에러 방지용 "?" 삽입 */}
            {movies?.map(movie => (
                // id와 original_title은 api의 속성자
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
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
