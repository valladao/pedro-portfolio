import React, { FC } from "react"

type Basic_Layout_Props = {
  children: React.ReactNode
}

const Basic_Layout = ({ children }: Basic_Layout_Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Basic_Layout;