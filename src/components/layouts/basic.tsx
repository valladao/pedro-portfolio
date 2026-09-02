import React from "react"
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Head from "next/head";
import Sheet_Music_Archive from "../sections/sheet-music-archive"

type Basic_Layout_Props = {
  page?: string
  pageTitle?: string | string[]
  sheetMusic?: Array<Sheet_Music>
  children: React.ReactNode
}

const Basic_Layout = ({page, pageTitle, sheetMusic, children}: Basic_Layout_Props) => {
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
      {page !== "home" && page !== "contact" && sheetMusic && (
        <Sheet_Music_Archive scores={sheetMusic} />
      )}
      <Footer></Footer>
    </>
  );
};

export default Basic_Layout;
