import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.css';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className={styles.footer}>
      <Row className={styles.footerRow}>
        <Col md="4" className={styles.footerCopywright}>
          <h3>Designed and developed by Alex John</h3>
        </Col>
        <Col md="4" className={styles.footerCopywright}>
          <h3>Copyright © {year} AJ</h3>
        </Col>
        <Col md="4" className={styles.footerBody}>
          <ul className={styles.footerIcons}>
            <li className={styles.socialIcons}>
              <a href="https://github.com/alexjcm" style={{ color: 'white' }}>
                <AiFillGithub />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="https://twitter.com/alexjhcm" style={{ color: 'white' }}>
                <AiOutlineTwitter />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/alex-john-chamba-macas/"
                style={{ color: 'white' }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}