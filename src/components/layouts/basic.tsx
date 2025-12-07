import React from "react"
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Head from "next/head";

type Basic_Layout_Props = {
  page?: string
  pageTitle?: string | string[]
  children: React.ReactNode
}

const Basic_Layout = ({page, pageTitle, children}: Basic_Layout_Props) => {
  const normalizedTitle =
    typeof pageTitle === "string"
      ? pageTitle
      : Array.isArray(pageTitle)
      ? pageTitle.filter((part): part is string => typeof part === "string").join(" ")
      : undefined

  const fullTitle = normalizedTitle
    ? `${normalizedTitle} - Pedro H. Valladao`
    : undefined

  return (
    <>
      {fullTitle && (
        <Head>
          <title>{fullTitle}</title>
        </Head>
      )}
      <Header></Header>
      <main className={page}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Basic_Layout;
