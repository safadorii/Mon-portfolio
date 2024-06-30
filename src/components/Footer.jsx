import React from "react";
import { Container } from "react-bootstrap";
import '../style.css'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container fluid>
        <h3>Copyright © {year} SD</h3>
      </Container>
    </footer>
  );
}

export default Footer;
