import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

export default function Copyright({ created_year, author }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <MuiLink color="inherit" href="https://twitter.com/forno_recsys">
        {author}
      </MuiLink>{" "}
      {created_year}
      {"."}
    </Typography>
  );
}
