import React from 'react';
import { useRef } from 'react';

// import Typewriter from 'typewriter-effect';
import Script from 'next/script'
import { useTranslation } from 'next-i18next';

function Type() {
  const typewriterRef = useRef();
  const { t } = useTranslation('home');
  // return (
  //   <Typewriter
  //     options={{
  //       strings: [t('javaDeveloper'), t('engineer'), t('reactDeveloper')],
  //       autoStart: true,
  //       loop: true,
  //       deleteSpeed: 60,
  //     }}
  //   />
  // );
  return (
    <>
      <div ref={typewriterRef}></div>
      <Script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"
        id="typewriter-effect"
        onReady={() => {
          if (typewriterRef.current && typeof Typewriter !== 'undefined') {
            const typewriter = new Typewriter(typewriterRef.current, {
              loop: true,
              deleteSpeed: 60,
            });

            typewriter
              .typeString(t('javaDeveloper'))
              .pauseFor(1000)
              .deleteAll()
              .typeString(t('engineer'))
              .pauseFor(1000)
              .deleteAll()
              .typeString(t('reactDeveloper'))
              .start();
          }
        }}
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />
    </>
  )
}

export default Type;
