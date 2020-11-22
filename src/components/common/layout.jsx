import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ props, children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
