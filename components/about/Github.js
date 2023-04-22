import React from 'react';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip'

import styles from './styles.module.css';

export default function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className={styles.projectHeading} style={{ paddingBottom: '20px' }}>
        Days I <strong className={styles.purple}>Code</strong>
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
