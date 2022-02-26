import React from 'react';
import './style.css';
import resume from "./Mullenmeister_Resume.pdf";
import {Container, Row, Col} from "react-bootstrap";

function Resume() {
  return (
    
    <div className='mb-5'>
      <h1 className='text-center mt-4'>
         <a id="resume-text" href={resume}>Résumé</a>
        </h1>
    <Container fluid>
      <Row>
      <Col>
      <div className="my-auto mt-5 text-center">
        <h2 className='proficiencies'>My Front-end Proficiencies</h2>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        </div>
        </Col>
        
        
       
      
        

          <Col>
          <div className='my-auto mt-5 text-center'>
        <h2 className='proficiencies'>My Back-end Proficiencies</h2>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        </div>
        </Col>
        </Row>
        </Container>
        </div>
   
   
  );
}

export default Resume;