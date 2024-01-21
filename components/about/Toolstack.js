import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  SiApachenetbeanside,
  SiDigitalocean,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiLinux,
  SiPostman,
  SiVisualstudiocode,
} from 'react-icons/si';

import styles from './styles.module.css';

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiDocker />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiGit />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiVisualstudiocode />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiIntellijidea />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiApachenetbeanside />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiLinux />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiDigitalocean />
        </div>
      </Col>
    </Row>
  );
}
