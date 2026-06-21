import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar.jsx'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <Container>
      <Navbar />
      <Row className="g-3">
        <Col>
          <h2>Amplication</h2>
          <p>Mobile App Design</p>
        </Col>
        <Col>
          <h2>Amplication</h2>
          <p>AI Job Application Interface</p>
        </Col>
      </Row>
      <Row className="g-3">
        <Col>
          <h2>SummerJobs</h2>
          <p>Student Job Application Website</p>
        </Col>
        <Col>
          <h2>Beers Meant Life to Me</h2>
          <p>iPad Video Game Prototype</p>
        </Col>
      </Row>
    </Container>
  );
}


export default App
