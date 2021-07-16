import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import chatify from '../../assets/projects/sample-min.png';
import CardProject from './CardProject';
import './styles.css';

function Projects() {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={chatify}
            title="Project1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            link="https://github.com/alexjcm/react-markdown-editor"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={chatify}
            title="Project2"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            link="https://github.com/alexjcm/react-covid-tracker"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={chatify}
            title="Project3"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
            link="https://github.com/alexjcm/react-markdown-editor"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
