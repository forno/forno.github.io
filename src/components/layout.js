/** @jsx jsx */
import React from 'react'
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, createdAt = new Date().getFullYear(), title = '' }) => {
  const now = new Date().getFullYear();

  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <React.Fragment>{/* ESLint print warn for React. disable it with explicit React.Fragment */}
      <Header siteTitle={`${title || site.siteMetadata?.title || `Title`}`} />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          paddingTop: 100,
        }}
      >
        <main>{children}</main>
        <footer sx={{
          marginTop: `2rem`
        }}>
          © {createdAt}{createdAt !== now && ` - ${now}`} {site.siteMetadata?.author || `FORNO`}
        </footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  createdAt: PropTypes.number,
}

export default Layout
