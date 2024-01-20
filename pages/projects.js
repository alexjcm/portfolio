import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import CardProject from '../components/projects/CardProject';
import styles from '../components/projects/styles.module.css';

import logger from '../logger/logger'

function Projects() {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation('projects');
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => logger.error(error));
  }, []);

  return (
    <Container fluid className={styles.projectSection}>
      <h1 className={styles.projectHeading}>
        {t('myRecent')} <strong className={styles.purple}>{t('works')} </strong>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', [
      'common',
      'projects'
    ])),
  },
});

export default Projects;
