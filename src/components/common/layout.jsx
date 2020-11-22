import React from "react";
import Header from "./header";

const Layout = ({ props, children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
