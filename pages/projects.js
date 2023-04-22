import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CardProject from '../components/projects/CardProject';
import styles from '../components/projects/styles.module.css';

import logger from '../logger/logger'

export default function Projects() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => logger.error(error));
  }, []);

  return (
    <Container fluid className={styles.projectSection}>
      <h1 className={styles.projectHeading}>
        My Recent <strong className={styles.purple}>Works </strong>
      </h1>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        {projects.map((project) => (
          <Col md={4} className={styles.projectCard} key={project.id}>
            <CardProject
              imgPath={'assets/projects/' + project.imageProjectLink}
              title={project.name}
              description={project.description}
              link={project.projectLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
