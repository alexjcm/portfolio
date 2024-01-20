import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.css';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className={styles.footer}>
      <Row className={styles.footerRow}>
        <Col md="4" className={styles.footerCopywright}>
          <h3>{t('footer.createdBy')}</h3>
        </Col>
        <Col md="4" className={styles.footerCopywright}>
          <h3>Copyright © {year} AJ</h3>
        </Col>
        <Col md="4" className={styles.footerBody}>
          <ul className={styles.footerIcons}>
            <li className={styles.socialIcons}>
              <a href="https://github.com/alexjcm"
                style={{ color: 'white' }}
                aria-label="Link to github">
                <AiFillGithub />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="https://twitter.com/alexjhcm"
                style={{ color: 'white' }}
                aria-label="Link to twitter">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/alex-john-chamba-macas/"
                style={{ color: 'white' }}
                aria-label="Link to linkedin"
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
