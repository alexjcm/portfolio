import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import projectSample from '../../assets/projects/sample-min.png';
import markdownEditor from '../../assets/projects/markdown-editor.png';
import cryptoTracker from '../../assets/projects/crypto-tracker.png';
import covidTracker from '../../assets/projects/covid-tracker.png';
import cocomo2 from '../../assets/projects/cocomo2.png';
import mlApp from '../../assets/projects/ml-app.png';
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
            imgPath={markdownEditor}
            title="Markdown Editor"
            description="A lightweight markup language editor known as markdow that includes features such as code support, image support, mathematical symbols and formulas, and emoji chat."
            link="https://alexjcm.github.io/react-markdown-editor/"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={covidTracker}
            title="Covid-19 Global Cases Tracker"
            description="This web application includes features such as an interactive map, cases by country, cacunas deployed by country and new cases in the world."
            link="https://alexjcm.github.io/react-covid-tracker/"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={cryptoTracker}
            title="Cryptocurrency Tracker"
            description="Cryptocurrency price tracker with React.js and CoinGecko API V3 to retrieve real-time and historical data for different cryptocurrencies."
            link="https://alexjcm.github.io/cryptocurrency-tracker/"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={projectSample}
            title="Electronic Certification Module"
            description="Web solution that automates the academic certification process for students of the Systems Engineering/Computation career at the Universidad Nacional de Loja."
            link="http://34.125.81.160/bonita/"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={cocomo2}
            title="Calculating function points"
            description="Web application for software cost estimation through function points of the Cocomo 2 model."
            link="https://enigmatic-coast-86151.herokuapp.com/faces/index.xhtml"
          />
        </Col>
        <Col md={4} className="project-card">
          <CardProject
            imgPath={mlApp}
            title="Image classification of skin cancer"
            description="Web application for image classification of skin cancer through the use of supervised machine learning and a kaggle datasets."
            link="https://ml-onocology.herokuapp.com/"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
