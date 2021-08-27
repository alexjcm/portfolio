import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import SecondaryHome from './SecondaryHome';
import Type from './Type';
import progressiveApp from '../../assets/home/undraw_progressive_app.svg';

import './styles.css';

function MainHome() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{paddingBottom: 15}} className="heading">
                Hi there..!!
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ALEX JOHN CHAMBA</strong>
              </h1>
              <div style={{padding: 40, textAlign: 'left'}}>
                <Type />
              </div>
            </Col>
            <Col md={4} style={{paddingTop: '80px'}}>
            <img src={progressiveApp} className="img-fluid" alt="progressiveApp" />
            </Col>
          </Row>
        </Container>
      </Container>
      <SecondaryHome />
    </section>
  );
}

export default MainHome;
