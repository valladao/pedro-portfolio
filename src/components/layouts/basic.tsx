import React from "react"
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Head from "next/head";

type Basic_Layout_Props = {
  page?: string
  pageTitle?: string
  children: React.ReactNode
}

const Basic_Layout = ({page, pageTitle, children}: Basic_Layout_Props) => {
  return (
    <>
      {pageTitle && (
        <Head>
          <title>{pageTitle} - Pedro H. Valladao</title></Head>
      )}
      <Header></Header>
      <main className={page}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Basic_Layout;
