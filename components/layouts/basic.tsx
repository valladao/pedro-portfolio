import React, { FC } from "react"
import Header from "../organisms/header";

type Basic_Layout_Props = {
  children: React.ReactNode
}

const Basic_Layout = ({ children }: Basic_Layout_Props) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};

export default Basic_Layout;