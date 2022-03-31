import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";
// Gotrue-js auth 예시 실습
import GoTrue from "gotrue-js";

auth = new GoTrue({
    APIUrl: 'http://localhost/.netlify/identity',
    audience: '',
    setCookie: false,
});

export default function About() {
    return (
    <div>
        <Seo title="About" />
        <h1>this is about!</h1>
    </div>
)};
