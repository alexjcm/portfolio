import React from 'react';

import {Col, Row} from 'react-bootstrap';
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from 'react-icons/di';

import './styles.css';

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <DiJava />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <DiNodejs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <DiReact />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <DiPython />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
