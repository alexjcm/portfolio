import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';

import styles from './styles.module.css';

export default function CardProject(props) {
  return (
    <Card className={styles.projectCardView}>
      <Card.Img style={{ height: '15rem' }} variant="top" src={props.imgPath} />
      <Card.Body>
        <Card.Title className={styles.projectCardTitle}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
      </Card.Body>
      <Button variant="light" href={props.link} target="_blank" aria-label="View project">
        <BiLinkExternal /> &nbsp;View project
      </Button>
    </Card>
  );
}
