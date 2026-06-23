import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css'
import Navbar from './components/navbar.jsx'

function App() {
  return (
    <Container className="container">
      <Navbar />
      <Row className="g-4">
        <Col>
        <h1 className='title title-right'>ui/ux</h1>
        </Col>
        <Col>
        <h1 className='title title-left'>& interface</h1>
        </Col>
      </Row>
      <Row className="g-4">
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" class="home-image left-image"/>
          <h2>Amplication</h2>
          <p>Mobile App Design</p>
        </Col>
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" class="home-image right-image"/>
          <h2>Amplication</h2>
          <p>AI Job Application Interface</p>
        </Col>
      </Row>
      <Row className="g-4">
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" class="home-image left-image"/>
          <h2>SummerJobs</h2>
          <p>Student Job Application Website</p>
        </Col>
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" class="home-image right-image"/>
          <h2>Beers Meant Life to Me</h2>
          <p>iPad Video Game Prototype</p>
        </Col>
      </Row>
    </Container>
  );
}


export default App
