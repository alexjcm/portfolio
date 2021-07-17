import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import TagsCloud from "./TagsCloud";
import Toolstack from "./Toolstack";
import "./styles.css";

function About() {
  return (
    <Container fluid className="about-section">    
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>

            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingLeft: "0", paddingBottom: "50px" }}>
            <TagsCloud />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
        </Row>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
