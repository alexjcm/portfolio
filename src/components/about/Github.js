import React from 'react';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

import './styles.css';

function Github() {
  // const colourTheme = {
  //   background: 'transparent',
  //   text: '#ffffff',
  //   grade4: 'rgb(235, 237, 240)',
  //   grade3: 'rgb(155, 233, 168)',
  //   grade2: 'rgb(64, 196, 99)',
  //   grade1: 'rgb(48, 161, 78)',
  //   grade0: 'rgb(33, 110, 57)',
  // };

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="alexjcm"
        blockSize={14}
        blockMargin={5}
        // theme={colourTheme}
        fontSize={16}
      >
        <ReactTooltip html />
      </GitHubCalendar>
    </Row>
  );
}

export default Github;
