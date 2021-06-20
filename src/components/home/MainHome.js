import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomParticles from "../CustomParticles";
import SecondaryHome from "./SecondaryHome";
import Type from "./Type";

function MainHome() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <CustomParticles />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ALEX JOHN CHAMBA MACAS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
  
            </Col>
          </Row>
        </Container>
      </Container> 
      <SecondaryHome />
    </section>
  );
}

export default MainHome;