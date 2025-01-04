import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Aboutcard from '../components/about/AboutCard';
import Github from '../components/about/Github';
import TagsCloud from '../components/about/TagsCloud';
import Techstack from '../components/about/Techstack';
import Toolstack from '../components/about/Toolstack';
import styles from '../components/about/styles.module.css';

function About() {
  const { t } = useTranslation('about');

  return (
    <Container fluid className={styles.aboutSection}>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col md={6} className={styles.aboutParagraphOne}>
            <h1 className={styles.aboutTitleOne}>
              {t('whoQ')} <strong className={styles.purple}>{t('iamQ')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6} style={{ paddingLeft: '0' }}>
            <TagsCloud />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <h1 className={styles.projectHeading}>
            <strong className={styles.purple}>{t('skills')}</strong>
          </h1>
        </Row>
        <Techstack />
          <h1 className={styles.toolsTitle}>
            <strong className={styles.purple}>{t('tools')}</strong>&nbsp;{t('iUse')}
          </h1>
        <Toolstack />
        <Github />
        <br />
      </Container>
    </Container>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', [
      'common',
      'about',
    ])),
  },
});

export default About;
