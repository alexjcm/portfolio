import React from 'react';

import Card from 'react-bootstrap/Card';
import './styles.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi everyone, I am <span className="purple">Alex John Chamba</span>,
            I am from <span className="purple"> Loja, Ecuador.</span>
            <br />I am a Software Developer and an enthusiast of new <br />
            technologies related to the software industry.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
