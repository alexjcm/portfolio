import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CardProject from './CardProject';
import './styles.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        {projects.map((project) => (
          <Col md={4} className="project-card" key={project.id}>
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

export default Projects;
