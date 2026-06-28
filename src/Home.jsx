import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <Container className="container container-home">
      <Row gx-2>
        <Col>
        <h1 className='title title-right'>ui/ux</h1>
        </Col>
        <Col>
        <h1 className='title title-left'>& interface</h1>
        </Col>
      </Row>
      <Row gx-2 className="row-home">
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="home-image left-image"/>
          <h2>Amplication</h2>
          <p>Mobile App Design</p>
        </Col>
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="home-image right-image"/>
          <h2>Amplication</h2>
          <p>AI Job Application Interface</p>
        </Col>
      </Row>
      <Row gx-2 className="row-home">
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="home-image left-image"/>
          <h2>SummerJobs</h2>
          <p>Student Job Application Website</p>
        </Col>
        <Col>
          <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="home-image right-image"/>
          <h2>Beers Meant Life to Me</h2>
          <p>iPad Video Game Prototype</p>
        </Col>
      </Row>
    </Container>
  );
}


export default Home