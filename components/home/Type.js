import React from 'react';

import Typewriter from 'typewriter-effect';
import { useTranslation } from 'next-i18next';

function Type() {
  const { t } = useTranslation('home');
  return (
    <Typewriter
      options={{
        strings: [t('javaDeveloper'), t('engineer'), t('reactDeveloper')],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
