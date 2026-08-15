import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

import { Link } from 'react-router';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import hausblend from "./assets/images_homepage/hausblendLogo.png";
import amplication from "./assets/amplication_imgs/amp_header.png";  
import summer from "./assets/images_homepage/summerjobs.png";
import beers from "./assets/images_homepage/beers_mainheader.png";  

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
        <Link to="/hausblend" className="page-link">
          <img src={hausblend} alt="hausblend logo" className="home-image-fit left-image" style={{ backgroundColor: "#d0da5f"}}/>
          <h2>hausblend</h2>
          <p>Techno-inspired Mobile Coffee App Design</p>
        </Link>
        </Col>
        <Col>
          <Link to="/amplication" className="page-link">
          <img src={amplication} alt="hausblend logo" className="home-image right-image"/>
          <h2>Amplication</h2>
          <p>AI-integrated Job Application Interface</p>
          </Link>
        </Col>
      </Row>
      <Row gx-2 className="row-home">
        <Col>
          <Link to="/summerjobs" className="page-link">
          <img src={summer} alt="hausblend logo" className="home-image left-image"/>
          <h2>SummerJobs</h2>
          <p>Student Job Application Website</p>
          </Link>
        </Col>
        <Col>
          <Link to="/beers" className='page-link'>
          <img src={beers} alt="hausblend logo" className="home-image right-image"/>
          <h2>Beers Meant Life to Me</h2>
          <p>iPad Video Game Prototype</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Home