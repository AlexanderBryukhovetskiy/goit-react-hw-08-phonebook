import React from "react";
import css from "./Layout.module.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.any.isRequired).isRequired
};

export default Layout;