import React, { useState } from 'react';
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

export default function NavBar(props) {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const router = useRouter();
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
      <Navbar.Brand
        as={Link}
        href="/"
        onClick={() => {
          setExpand(false);
        }}
        aria-label='Link to home'
        className={styles.navbarBrandLink}
      >
        <Image
          src={props.theme === 'light' ? logoLight : logoDark}
          className={`${styles.imgFluid} ${styles.logo}`}
          alt="brand"
        />
      </Navbar.Brand>

      {/* Toggle for small screens */}
      <Navbar.Toggle
        aria-controls="navbarScroll"
        className={styles.navbarToggleCustom}
        onClick={() => setExpand(expand ? false : 'expanded') }
      >
      </Navbar.Toggle>

      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto"
          navbarScroll
        >
          <Nav.Link
            className={`${navColour ? styles.myLightNavLink : ''}
              ${router.pathname === '/' ? styles.activeLink : ''}`}
            as={Link}
            href="/"
            onClick={() => setExpand(false)}
            aria-label='Link to home'
          >
            {t('navbar.home')}
          </Nav.Link>
          <Nav.Link
            className={`${navColour ? styles.lightNavLink : ''}
            ${router.pathname === '/about' ? styles.activeLink : ''}`}
            as={Link}
            href="/about"
            onClick={() => setExpand(false)}
            aria-label='Link to about'
          >
            {t('navbar.about')}
          </Nav.Link>
          <Nav.Link
            className={`${navColour ? styles.lightNavLink : ''}
            ${router.pathname === '/projects' ? styles.activeLink : ''}`}
            as={Link}
            href="/projects"
            onClick={() => setExpand(false)}
            aria-label='Link to projects'
          >
            {t('navbar.projects')}
          </Nav.Link>
          <Nav.Link
            className={`${navColour ? styles.lightNavLink : ''}
            ${router.pathname === '/contact' ? styles.activeLink : ''}`}
            as={Link}
            href="/contact"
            onClick={() => setExpand(false)}
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
