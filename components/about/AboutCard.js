import React from 'react';
import Card from 'react-bootstrap/Card';

import styles from './styles.module.css';

export default function AboutCard() {
  return (
    <Card className={styles.quoteCardView}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi everyone, I am <span className={styles.purple}>Alex John Chamba</span>, I am from{' '}
            <span className={styles.purple}> Loja, Ecuador.</span>
            <br />I am a Software Developer and an enthusiast of new <br />
            technologies related to the software industry.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
