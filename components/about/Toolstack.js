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
          <SiLinux />
        </div>
      </Col>
      <Col xs={4} md={2} className={styles.techIcons}>
        <div className={styles.iconTechColor}>
          <SiVisualstudiocode />
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
          <SiGithubactions />
        </div>
      </Col>
    </Row>
  );
}
