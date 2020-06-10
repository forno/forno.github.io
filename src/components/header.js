import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "./link";

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const headerTitle = siteTitle || data.site.siteMetadata.title;

  return (
    <AppBar position="static">
      <Container maxWidth="sm">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/" color="inherit">
          <Typography component="h1" variant="h6">
            {headerTitle}
          </Typography>
        </Link>
      </Toolbar>
      </Container>
    </AppBar>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
