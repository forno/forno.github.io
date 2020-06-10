import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { useStaticQuery, graphql } from "gatsby";

export default function Copyright({ createdYear, author, contact }) {
  const data = useStaticQuery(graphql`
    query SiteCopyrightQuery {
      site {
        siteMetadata {
          author
          contact
        }
      }
    }
  `);

  const linkAuthor = author || data.site.siteMetadata.author;
  const linkContact = contact || data.site.siteMetadata.contact;

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <MuiLink color="inherit" href={linkContact}>
        {linkAuthor}
      </MuiLink>{" "}
      {createdYear}
    </Typography>
  );
}

Copyright.defaultProps = {
  createdYear: new Date().getFullYear()
}
