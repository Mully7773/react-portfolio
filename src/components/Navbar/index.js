import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import "./style.css"

const NavBar = () => {
  
  
  
  return ( 
<div>
<Navbar bg="light" variant="light">
    <Container>
    <Nav className="nav me-auto">
      <Nav.Link className="nav-item" as={Link} to="/">Home</Nav.Link>
      <Nav.Link className="nav-item"as={Link} to="/about">About</Nav.Link>
      <Nav.Link className="nav-item" as={Link} to="/projects">Projects</Nav.Link>
      <Nav.Link className="nav-item"as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link className="nav-item"as={Link} to="/resume">Résumé</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>


       
    )
};
 
export default NavBar;