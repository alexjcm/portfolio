import React from 'react';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import './styles.css';

function Github() {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: 'hsl(172, 88%, 28%)',
    grade3: 'hsl(172, 88%, 30%)',
    grade2: 'hsl(172, 88%, 40%)',
    grade1: 'hsl(172, 88%, 50%)',
    grade0: 'hsl(172, 88%, 95%)',
  };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="alexjcm"
        blockSize={14}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      >
        <Tooltip id="my-tooltip" delayShow={50} html />
      </GitHubCalendar>
    </Row>
  );
}

export default Github;
