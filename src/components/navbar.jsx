import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="w-100" sticky="top">
      <Container className="whole-navbar">
        <Navbar.Brand href="/">pauly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-evenly">
            <Nav.Link href="/">works</Nav.Link>
            <Nav.Link href="/research">research</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;