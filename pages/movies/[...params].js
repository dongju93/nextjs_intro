import { useRouter } from "next/router";
import Seo from "../../components/Seo";

// 변수를 수용할 페이지의 url을 '[##]'으로 이름을 특정하여 페이지 파일을 생성
// 컴포넌트 내부에 있는 router는 client 사이드에서만 실행됨
export default function Detail({ params }) {
    const router = useRouter();
    // const [title, id] = params || [];
    const [title, id] = params || [];
    console.log(router)
    return (
        <div>
            <Seo title={title} />
            {/* "router.query.title"은 유저가 홈페이지에서 상세페이지를 클릭했을때만 넘어오는 값임 */}
            <h4>{title}</h4>
        </div>
    );
}

// url에서 정보(param)를 catch 하여 본문의 export default에 파라미터로 넘겨줌
// 이 페이지만 바로 접속한다면 API의 정보를 가져오는 back-end 작업없이
// client 사이드에서 error 없이 출력이 가능함
export function getServerSideProps({ params: { params } }) {
    return {
        props: { params },
    };
}
