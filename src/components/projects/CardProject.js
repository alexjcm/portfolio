import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {BiLinkExternal} from 'react-icons/bi';

function CardProject(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{textAlign: 'justify'}}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CardProject;
