import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "./seo";
import Header from "./header";
import Copyright from "./copyright";
import "./layout.css";

const Layout = ({ children, pageTitle, createdYear }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Copyright createdYear={createdYear} author={data.site.siteMetadata.author} />
        </footer>
      </div>
    </>
  );
};

Layout.defaultProps = {
  createdYear: new Date().getFullYear(),
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
};

export default Layout;
