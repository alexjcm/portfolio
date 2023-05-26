import React from 'react';
import Card from 'react-bootstrap/Card';

import styles from './styles.module.css';

export default function AboutCard() {
  return (
    <Card className={styles.quoteCardView}>
      <Card.Body className={styles.cardBodyText}>
        <blockquote className={`blockquote mb-0 ${styles.aboutCardTextSize}`}>
          <p style={{ textAlign: 'justify' }}>
            I am <span className={styles.purple}>Alex John Chamba</span>.
            I am a Software Developer and an enthusiast of new
            technologies related to the software industry.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
