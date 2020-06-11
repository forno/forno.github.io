import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, pageTitle, createdYear }) => (
  <>
    <SEO title={pageTitle} />
    <Header pageTitle={pageTitle} />
    <Container component="main" maxWidth="sm">
      {children}
    </Container>
    <Footer createdYear={createdYear} />
  </>
);

Layout.defaultProps = {
  createdYear: new Date().getFullYear(),
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
};

export default Layout;
