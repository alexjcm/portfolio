import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Aboutcard from './AboutCard';
import Github from './Github';
import './styles.css';
import TagsCloud from './TagsCloud';
import Techstack from './Techstack';
import Toolstack from './Toolstack';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={6}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingRight: '40px',
            }}
          >
            <h1
              style={{
                fontSize: '2.1em',
                paddingTop: '20px',
                paddingBottom: '20px',
                paddingLeft: '20px',
              }}
            >
              Who <strong className="purple">I`&apos;M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6} style={{ paddingLeft: '0' }}>
            <TagsCloud />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <h1 className="project-heading">
            <strong className="purple">Skills</strong>
          </h1>
        </Row>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
        <br />
      </Container>
    </Container>
  );
}

export default About;
