import React from 'react';
import "./style.css"
import {Container, Row, Col} from "react-bootstrap";



const Contact = () => {
    return (
        <div className="contact mt-4">
            <h1 className='mb-4 text-center' >Contact Me</h1>

            <Container fluid>
      <Row>
      <Col>
            <div className="social text-center">
                <h2>LinkedIn</h2>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nick-mullenmeister-b7a62078">
                        LinkedIn
                </a>
                </p>

                <h2>GitHub</h2>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mully7773">
                        GitHub
                </a>
                </p>

                <h2>Email</h2>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:mully7773@gmail.com">
                        Email Me
                </a>
                </p>

                <h2>Phone</h2>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:612-567-3542">
                    (612) 567-3542
                </a>
                </p>
            </div>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Contact;