import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

import Image from 'next/image';

import versionControl from '../../public/assets/home/undraw_version_control.svg';
import styles from './styles.module.css';

export default function SecondaryHome() {
  return (
    <Container fluid className={styles.homeAboutSection} id="about">
      <Container>
        <Row>
          <Col md={7} className={styles.homeAboutDescription}>
            <h1 style={{ fontSize: '2.5em' }}>
              LET ME <span className={styles.purple}> INTRODUCE </span> MYSELF
            </h1>
            <p className={styles.homeAboutBody}>
              My favorite programming languages are the classic
              <i>
                <b className={styles.purple}> Java and Javascript. </b>
              </i>
              Among my favorite frameworks are
              <i>
                <b className={styles.purple}> Spring Boot and Node.js. </b>
              </i>
              My field of interest is building web-based software solutions.
            </p>
          </Col>
          <Col md={5} className={styles.myAvtar}>
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
            <h1>FIND ME ON</h1>
            <p className={styles.homeAboutSocialTextSize}>
              Feel free to <span className={styles.purple}>connect </span>with me
            </p>
            <ul className={styles.homeAboutSocialLinks}>
              <li className={styles.socialIcons}>
                <a
                  href="https://github.com/alexjcm"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
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
