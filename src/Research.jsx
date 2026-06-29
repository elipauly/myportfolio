import 'bootstrap/dist/css/bootstrap.min.css';
import './Research.css'

import { Link } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Research() {
  return (
    <Container className="container container-research">
        <Row gx-2>
            <Col>
                <h2 className='title title-left'>hci research</h2>
            </Col>
        </Row>  
        <Row gx-2>
            <Col>
                <Link to="/research/sports-betting-on-reddit">
                <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="research-image"/>
                <h2>Winning Beats Everything, Except More Winning</h2>
                <p>Warning Signs and Responses to Problem Gambling in Online Sports Betting Communities on Reddit</p>
                </Link>
            </Col>
        </Row>
        <Row gx-2>
            <Col>
                <p className='title title-left'>I am a recent graduate from the University of Iowa, where I earned both my Bachelor’s and Master’s in Informatics, focused with Human-Computer Interaction and graphic design.  I am captivated by design that is odd and effective, such as street signs. I am a pleasant coworker, and open to work in NYC or Berlin. My journal is this color.</p>
            </Col>
            <Col></Col>
        </Row> 
        <Row gx-2>
            <Col>
                <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="research-image"/>
                <h2>Congrats! You're a Member! Explore more ways to play.</h2>
                <p>Commercialization of Children's Virtual World MMO Games from 2005-2015</p>
            </Col>
        </Row>
    </Container>
  );
}


export default Research