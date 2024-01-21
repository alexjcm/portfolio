import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import logoDark from '../../public/assets/logo_dark_aj167.jpg';
import logoLight from '../../public/assets/logo_light_aj167.jpg';
import Toggle from '../dark-theme/Toggler';
import LocaleSwitcher from './LocaleSwitcher';
import styles from './Navbar.module.css';
import { Col, Row } from 'react-bootstrap';

export default function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const router = useRouter()
  //const { locale, defaultLocale } = router;
  //console.log(`Current locale: ${locale} - Default locale: ${defaultLocale}`);
  const { t } = useTranslation('common');

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
      className={navColour ? `${styles.sticky} ${styles.navbarLeftAndRight}` : `${styles.navbar} ${styles.navbarLeftAndRight}`}
    >
      <Nav.Link
        as={Link}
        href="/"
        onClick={() => updateExpanded(false)}
        aria-label='Link to home'
        className={styles.navbarBrandLink}
      >
        <Image
          src={props.theme === 'light' ? logoLight : logoDark}
          className={`${styles.imgFluid} ${styles.logo}`}
          alt="brand"
          priority
        />
      </Nav.Link>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        className={styles.navbarToggleCustom}
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto" defaultActiveKey="#home" navbarScroll>
          <Nav.Link
            className={navColour ? styles.myLightNavLink : styles.myLightNavLink2}
            as={Link}
            href="/"
            onClick={() => updateExpanded(false)}
            aria-label='Link to home'
          >
            {t('navbar.home')}
          </Nav.Link>
          <Nav.Link
            className={navColour ? styles.lightNavLink : ''}
            as={Link}
            href="/about"
            onClick={() => updateExpanded(false)}
            aria-label='Link to about'
          >
            {t('navbar.about')}
          </Nav.Link>
          <Nav.Link
            className={navColour ? styles.lightNavLink : ''}
            as={Link}
            href="/projects"
            onClick={() => updateExpanded(false)}
            aria-label='Link to projects'
          >
            {t('navbar.projects')}
          </Nav.Link>
          <Nav.Link
            className={navColour ? styles.lightNavLink : ''}
            as={Link}
            href="/contact"
            onClick={() => updateExpanded(false)}
            aria-label='Link to contact'
          >
            {t('navbar.contact')}
          </Nav.Link>
        </Nav>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
        <LocaleSwitcher />
      </Navbar.Collapse>
    </Navbar>
  );
}
