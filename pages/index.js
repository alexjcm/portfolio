import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import SecondaryHome from '../components/home/SecondaryHome';
import styles from '../components/home/styles.module.css';
import Type from '../components/home/Type';
import progressiveApp from '../public/assets/home/undraw_progressive_app.svg';

function MainHome() {
  const { t } = useTranslation('home');

  const fetchApiRef = useRef();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && !fetchApiRef.current) {
      fetchApiRef.current = fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/incrementVisit`)
            .then((response) => response.json())
        .catch((error) => logger.error(error));
    }
  }, []);

  return (
    <section className={styles.mainSection}>
      <Container fluid className={styles.homeSection} id="home">
        <Container className={styles.homeContent}>
          <Row>
            <Col md={7} className={styles.homeHeader}>
              <h1 style={{ paddingBottom: 15 }} className={styles.heading}>
                {t('greeting')}..!!
              </h1>
              <h1 className={styles.headingName}>
                {t('iam')}
                <strong className={styles.mainName}> ALEX JOHN CHAMBA</strong>
              </h1>
              <Type />
            </Col>
            <Col className={styles.homeImg}>
              <Image src={progressiveApp} className={styles.imgFluid} alt="progressiveApp" priority/>
            </Col>
          </Row>
        </Container>
      </Container>
      <SecondaryHome />
    </section>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', [
      'common',
      'home'
    ])),
  },
});

export default MainHome;