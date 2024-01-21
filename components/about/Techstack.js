import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DiAngularSimple, DiJava, DiNodejs, DiReact } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';

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
          <DiAngularSimple />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiSpringboot />
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
    </Row>
  );
}
