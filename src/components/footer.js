import React from "react";
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
