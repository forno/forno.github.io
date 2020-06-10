import React from "react";
import Container from "@material-ui/core/Container";
import Copyright from "./copyright"

const Footer = ({ createdYear }) => (
  <footer>
    <Copyright createdYear={createdYear} />
  </footer>
);

Footer.defaultProps = {
  createdYear: new Date().getFullYear(),
};

export default Footer;
