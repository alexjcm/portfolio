import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import versionControl from '../../public/assets/home/undraw_version_control.svg';
import styles from './styles.module.css';

export default function SecondaryHome() {
  const { t } = useTranslation('home');
  return (
    <Container fluid className={styles.homeAboutSection} id="about">
      <Container>
        <Row>
          <Col md={7} className={styles.homeAboutDescription}>
            <h1 style={{ fontSize: '2.5em' }}>
              {t('letMe')} <span className={styles.purple}> {t('introduce')} </span> {t('myself')}
            </h1>
            <p className={styles.homeAboutBody}>
              {t('favoriteLanguages')}
              <i>
                <b className={styles.purple}> {(t('languages'))} </b>
              </i>
              {t('favoriteFrameworks')}
              <i>
                <b className={styles.purple}> {t('frameworks')} </b>
              </i>
              {t('myInterest')}
            </p>
          </Col>
          <Col md={5} className={styles.myAvatar}>
            <Tilt reset={false} tiltReverse={true}>
              <Image src={versionControl} className={styles.imgSecondFluid} alt="avatar" priority />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className={styles.homeAboutSocial}>
            <br />
            <br />
            <br />
            <h1>{t('findMe')}</h1>
            <p className={styles.homeAboutSocialTextSize}>
              {t('feelFree')} <span className={styles.purple}>{t('contact')} </span> {t('me')}
            </p>
            <ul className={styles.homeAboutSocialLinks}>
              <li className={styles.socialIcons}>
                <a
                  href="https://github.com/alexjcm"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                  aria-label='Link to github'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/alex-john-chamba-macas/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                  aria-label='Link to linkedin'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://twitter.com/alexjhcm"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                  aria-label='Link to twitter'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
