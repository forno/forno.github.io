/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Copyright from "./copyright";
import "./layout.css";

const Layout = ({ children, created_year }) => {
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
          <Copyright created_year={created_year} author={data.site.siteMetadata.author} />
        </footer>
      </div>
    </>
  );
};

Layout.defaultProps = {
  created_year: new Date().getFullYear()
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
