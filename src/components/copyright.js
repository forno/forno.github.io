import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { useStaticQuery, graphql } from "gatsby";

export default function Copyright({ createdYear }) {
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

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <MuiLink color="inherit" href={data.site.siteMetadata.contact}>
        {data.site.siteMetadata.author}
      </MuiLink>{" "}
      {createdYear}
    </Typography>
  );
}

Copyright.defaultProps = {
  createdYear: new Date().getFullYear()
}
