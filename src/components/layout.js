import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import SEO from "./seo";
import Header from "./header";
import Copyright from "./copyright";

const Layout = ({ children, pageTitle, createdYear }) => (
  <>
    <SEO title={pageTitle} />
    <Header />
    <Container component="main" maxWidth="sm">
      {children}
    </Container>
    <footer>
      <Container maxWidth="sm">
        <Copyright createdYear={createdYear} />
      </Container>
    </footer>
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
