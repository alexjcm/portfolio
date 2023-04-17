import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Aboutcard from '../components/about/AboutCard';
import Github from '../components/about/Github';
import TagsCloud from '../components/about/TagsCloud';
import Techstack from '../components/about/Techstack';
import Toolstack from '../components/about/Toolstack';
import styles from '../components/about/styles.module.css';

export default function About() {
  return (
    <Container fluid className={styles.aboutSection}>
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
              Who <strong className={styles.purple}>I&apos;M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6} style={{ paddingLeft: '0' }}>
            <TagsCloud />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <h1 className={styles.projectHeading}>
            <strong className={styles.purple}>Skills</strong>
          </h1>
        </Row>
        <Techstack />
        <h1 className={styles.projectHeading}>
          <strong className={styles.purple}>Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
        <br />
      </Container>
    </Container>
  );
}