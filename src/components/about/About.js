import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomParticles from "../CustomParticles";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
//import TagCloud from 'TagCloud/dist/TagCloud.min';
import TagCloud from 'TagCloud';
import Toolstack from "./Toolstack";

function About() {
  const textsTC = [
  'Python', 'Flask', 'Javascript',
  'CSS', 'Java', 'HTML', 'ReactJS', 'MongoDB',
  'Git', 'REST', 'JSON', 'Webpack', 'Express',
  'Bootstrap', 'SQL', 'npm', 'Jest'
    ];
  const optionsTC = {
    radius:250, 
    maxSpeed:'slow',
    initSpeed: 'slow'
  };
  TagCloud('.tags-cloud', textsTC, optionsTC);

  return (
    <Container fluid className="about-section">
      <CustomParticles />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", paddingBottom: "100px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >

            <div className="tags-cloud-bg">
               <div className='tags-cloud'></div>   
            </div>	                

          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
        </Row>  

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />        
       
      </Container>
    </Container>
  );
}

export default About;