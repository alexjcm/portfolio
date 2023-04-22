import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiJava, DiJavascript1, DiNodejs, DiPython, DiReact } from 'react-icons/di';

import styles from './styles.module.css';

export default function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <DiJava />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <DiNodejs />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <DiReact />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <DiPython />
        </div>
      </Col>
    </Row>
  );
}
