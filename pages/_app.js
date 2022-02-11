import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function Blue({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            
            <style jsx> {`
                a {
                    color: red;
                }
            `} </style>
        </>
    )
};
