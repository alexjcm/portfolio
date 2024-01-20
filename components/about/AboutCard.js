import React from 'react';
import Card from 'react-bootstrap/Card';

import styles from './styles.module.css';

import { useTranslation } from 'next-i18next';

export default function AboutCard() {
  const { t } = useTranslation('about');

  return (
    <Card className={styles.quoteCardView}>
      <Card.Body className={styles.cardBodyText}>
        <blockquote className={`blockquote mb-0 ${styles.aboutCardTextSize}`}>
          <p style={{ textAlign: 'justify' }}>
            {t('iam')} <span className={styles.purple}>Alex John Chamba</span>.&nbsp;
            {t('iamSummary')}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
