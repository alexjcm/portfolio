import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'next/image';
import Link from 'next/link';

import logoDark from '../../public/assets/logo_dark_aj167.jpg';
import logoLight from '../../public/assets/logo_light_aj167.jpg';
import Toggle from '../dark-theme/Toggler';
import styles from './Navbar.module.css';

export default function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? styles.sticky : styles.navbar}
    >
      <Container>
        <Nav.Link
          as={Link}
          href="/"
          onClick={() => updateExpanded(false)}
        >
          <Image
            src={props.theme === 'light' ? logoLight : logoDark}
            className={`${styles.imgFluid} ${styles.logo}`}
            alt="brand"
            priority
          />
        </Nav.Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                className={navColour ? styles.myLightNavLink : styles.myLightNavLink2}
                as={Link}
                href="/"
                onClick={() => updateExpanded(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={navColour ? styles.lightNavLink : ''}
                as={Link}
                href="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={navColour ? styles.lightNavLink : ''}
                as={Link}
                href="/projects"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={navColour ? styles.lightNavLink : ''}
                as={Link}
                href="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      </Container>
    </Navbar>
  );
}
