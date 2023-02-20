import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiApachenetbeanside,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiPostman,
  SiVisualstudiocode,
} from 'react-icons/si';

import './styles.css';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiDocker />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiGit />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiLinux />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiVisualstudiocode />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiApachenetbeanside />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-tech-color">
          <SiGithubactions />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
