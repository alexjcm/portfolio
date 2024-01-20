import React from 'react';

import { func, string } from 'prop-types';
// import styled from 'styled-components';

import styles from './Toggler.module.css';

// const Button = styled.button`
//   border: 1px solid ${({ theme }) => theme.toggleBorder};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size: 0.4rem;
//   padding: 0.1rem;
//   width: 4rem;
//   height: 2.3rem;
// `;

// const Sun = styled.svg`
//   height: auto;
//   width: 1.8rem;
//   transition: all 0.5s linear;
// `;

// const Moon = styled.svg`
//   height: auto;
//   width: 1.4rem;
//   transition: all 0.5s linear;
// `;

const sunSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill="#ffd43b">
      <circle r="5" cy="12" cx="12">
      </circle>
      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z">
      </path>
    </g>
  </svg>
);

const moonSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
  </svg>
);

const Toggle = ({ theme, toggleTheme }) => {
  // return (
  //   <Button onClick={toggleTheme} aria-label="Toggler theme">
  //     {theme === 'light' ? (
  //       <Sun xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  //         <path
  //           style={{ fill: '#F6C358' }}
  //           d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0-2c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.414 1.415 1.473 1.473c.401-.537.876-1.013 1.413-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z"
  //         />
  //       </Sun>
  //     ) : (
  //       <Moon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  //         <path
  //           style={{ fill: '#F6C358' }}
  //           d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z"
  //         />
  //       </Moon>
  //     )}
  //   </Button>
  // );
  return (
    <div className={styles.pLeft}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <label htmlFor="selectCbxTheme" className={styles.switch}>
        {theme === 'light' && <span className={styles.sun}>{sunSvg}</span>}
        {theme === 'dark' && <span className={styles.moon}>{moonSvg}</span>}
        <input
          type="checkbox"
          id="selectCbxTheme"
          onChange={toggleTheme}
          checked={theme === 'dark'} // Adjust based on your default theme
          className={styles.input} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
