import React from 'react';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip'
import { useTranslation } from 'next-i18next';

import styles from './styles.module.css';

export default function Github() {
  const { t } = useTranslation('about');

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className={styles.projectHeading} style={{ paddingBottom: '20px' }}>
        {t('daysI')} <strong className={styles.purple}>{t('coded')}</strong>
      </h1>
      <GitHubCalendar
        username="alexjcm"
        blockSize={14}
        blockMargin={5}
        // theme={colourTheme}
        fontSize={16}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            'data-tooltip-id': 'my-tooltip',
            'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
          })
        }
      >
      </GitHubCalendar>
      <Tooltip id="my-tooltip" />
    </Row >
  );
}
