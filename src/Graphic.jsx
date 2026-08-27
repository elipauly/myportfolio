import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

import { Link } from 'react-router';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import kaffee from "./assets/graphics_homepage/KAFFEE.png";
import epode from "./assets/graphics_homepage/EPODE.png";
import krui from "./assets/graphics_homepage/KRUI.png";
import modmos from "./assets/graphics_homepage/MODMOS.png";
import program from "./assets/graphics_homepage/PROGRAM.png";
import tweaks from "./assets/graphics_homepage/TWEAKS.png";


function Graphic() {
  return (
    <Container className="container container-home">
      <Row gx-2>
        <Col>
        <h1 className='title title-right'>graphic</h1>
        </Col>
        <Col>
        <h1 className='title title-left'>design</h1>
        </Col>
      </Row>
      <Row gx-2 className="row-home">
        <Col>
        <Link to="/KRUI-socials" className="page-link">
          <img src={program} alt="KRUI social media graphics" className="home-image home-image-fit left-image" style={{ backgroundColor: "#d35549"}}/>
          <h2>KRUI Socials</h2>
          <p>Media graphics for student radio</p>
        </Link>
        </Col>
        <Col>
          <Link to="/modest-mouse" className="page-link">
          <img src={modmos} alt="Modest Mouse album cover" className="home-image right-image"/>
          <h2>Modest Mouse</h2>
          <p>Alt-rock album cover and tour design</p>
          </Link>
        </Col>
      </Row>
      <Row gx-2 className="row-home">
        <Col>
          <Link to="/epode" className="page-link">
          <img src={epode} alt="epode fragrance brand" className="home-image home-image-fit left-image" style={{ backgroundColor: "#111313"}}/>
          <h2>epode</h2>
          <p>Fragrance branding guide</p>
          </Link>
        </Col>
        <Col>
          <Link to="/twin-peaks-zine" className='page-link'>
          <img src={tweaks} alt="Twin Peaks zine spread" className="home-image right-image"/>
          <h2>Twin Peaks Zine</h2>
          <p>David Lynch inspired zine</p>
          </Link>
        </Col>
      </Row>
      <Row gx-2 className="row-home">
        <Col>
          <Link to="/kaffee" className="page-link">
          <img src={kaffee} alt="Kaffee coffee packaging" className="home-image home-image-fit left-image" style={{ backgroundColor: "#ffffff"}}/>
          <h2>Käffee</h2>
          <p>Packaged coffee brand</p>
          </Link>
        </Col>
        <Col>
          <Link to="/KRUI-online" className='page-link'>
          <img src={krui} alt="KRUI website graphics" className="home-image home-image-fit right-image" style={{ backgroundColor: "#d94127"}}/>
          <h2>KRUI Web</h2>
          <p>Editor-in-chief & graphic production for web</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Graphic