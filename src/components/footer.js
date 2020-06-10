import React from "react";
import Container from "@material-ui/core/Container";
import Copyright from "./copyright"

const Footer = ({ createdYear }) => (
  <footer>
    <Container maxWidth="sm">
      <Copyright createdYear={createdYear} />
    </Container>
  </footer>
);

Footer.defaultProps = {
  createdYear: new Date().getFullYear(),
};

export default Footer;
