import React, { FC } from "react"

const Basic_Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Basic_Layout;