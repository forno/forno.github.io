import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import SEO from "./seo";
import Header from "./header";
import Copyright from "./copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Layout = ({ children, pageTitle, createdYear }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
	const classes = useStyles();

  return (
    <>
      <SEO title={pageTitle} />
			<div className={classes.root}>
				<CssBaseline />
      	<Header siteTitle={data.site.siteMetadata.title} />
				<Container component="main" className={classes.main} maxWidth="sm">
					{children}
				</Container>
				<footer className={classes.footer}>
					<Container maxWidth="sm">
          	<Copyright createdYear={createdYear} />
					</Container>
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
