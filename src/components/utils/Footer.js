import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./Footer.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Alex John</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/alexjcm" style={{ color: "white" }}>
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://twitter.com/alexjhcm" style={{ color: "white" }}>
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alex-john-chamba-macas/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
