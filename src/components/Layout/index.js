import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { HeaderQuery } from "@/queries/HeaderQuery";
import apolloClient from "@/lib/apolloClient";
import { useQuery } from "@apollo/client";

const Layout = ({
    hideHeader = false,
    title = "MAAIA",
    description = "MAAIA",
    children,
    headerBg,
    hideFooter = false,
    headerData,
    footerData
}) => {
    // console.log("👉🏼👉🏼👉🏼 => headerData:", headerData)
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!hideHeader && (
                <header className="">
                    <Header headerBg={headerBg} data={headerData} />
                </header>
            )}

            <main className={'min-h-screen relative'}>{children}</main>

            {
                !hideFooter && (
                    <footer className="bg-black w-full sticky">
                        <Footer data={footerData} />
                    </footer>
                )
            }
        </>
    );
};

export default Layout;