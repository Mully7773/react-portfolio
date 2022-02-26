import React from 'react';
import './style.css';
import resume from "./Mullenmeister_Resume.pdf";
import {Container, Row, Col} from "react-bootstrap";

function Resume() {
  return (
    
    <div>
      <h2 className='text-center mt-3'>
        View my <a href={resume}>resume</a>
        </h2>
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