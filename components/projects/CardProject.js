import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiLinkExternal } from 'react-icons/bi';
import { useTranslation } from 'next-i18next';

import styles from './styles.module.css';

export default function CardProject(props) {
  const { t } = useTranslation('projects');
  return (
    <Card className={styles.projectCardView}>
      <Card.Img className={styles.projectCardImage} variant="top" src={props.imgPath} />
      <Card.Body className={styles.cardBodyText}>
        <Card.Title className={styles.projectCardTitle}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
      </Card.Body>
      <Button variant="light" href={props.link} target="_blank" aria-label="View project">
        <BiLinkExternal /> &nbsp;{t('viewProject')}
      </Button>
    </Card>
  );
}
