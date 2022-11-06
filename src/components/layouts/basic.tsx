import React from "react"
import Footer from "../organisms/footer";
import Header from "../organisms/header";

type Basic_Layout_Props = {
  page?: string
  children: React.ReactNode
}

const Basic_Layout = ({ page, children }: Basic_Layout_Props) => {
  return (
    <>
      <Header></Header>
      <main className={page}>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Basic_Layout;