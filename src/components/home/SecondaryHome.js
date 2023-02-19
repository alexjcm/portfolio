import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import versionControl from '../../assets/home/undraw_version_control.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import './styles.css';

function SecondaryHome() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: '2.5em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My favorite programming languages are the classic
              <i>
                <b className="purple"> Java and Javascript. </b>
              </i>
              Among my favorite frameworks are
              <i>
                <b className="purple"> React.js and Node.js. </b>
              </i>
              My field of interest is building web-based software solutions.
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={versionControl} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <br />
            <br />
            <br />
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alexjcm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alex-john-chamba-macas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/alexjhcm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
export default SecondaryHome;
