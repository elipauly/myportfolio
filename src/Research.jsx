import 'bootstrap/dist/css/bootstrap.min.css';
import './Research.css'

import { Link } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//images
import reddit_img from "./assets/images_homepage/hausblendLogo.png";
import mmo_img from "./assets/images_homepage/hausblendLogo.png";  

function Research() {
  return (
    <Container className="container container-research">
        <Row>
            <Col>
                <h2 className='title title-left'>hci research</h2>
            </Col>
        </Row>  
        <Row>
            <Col>
                <Link to="/research/sports-betting-on-reddit" className="page-link">
                    <div className="research-image-wrapper">
                        <img src={reddit_img} className="research-image" alt="Reddit Gambling Image"/>
                    </div>
                    <h2>Winning Beats Everything, Except More Winning</h2>
                    <p>Warning Signs and Responses to Problem Gambling in Online Sports Betting Communities on Reddit</p>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className='title title-left'>I am a recent graduate from the University of Iowa, where I earned both my Bachelor’s and Master’s in Informatics, focused with Human-Computer Interaction and graphic design.  I am captivated by design that is odd and effective, such as street signs. I am a pleasant coworker, and open to work in NYC or Berlin. My journal is this color.</p>
            </Col>
            <Col></Col>
        </Row> 
        <Row>
            <Col>
                <Link to="/research/commercialization-of-childrens-mmo-games" className="page-link">
                    <div className="research-image-wrapper">
                        <img src={mmo_img} className="research-image" alt="Children's Virtual World MMO Games"/>
                    </div>
                    <h2>Congrats! You're a Member! Explore more ways to play.</h2>
                    <p>Commercialization of Children's Virtual World MMO Games from 2005-2015</p>
                </Link>
            </Col>
        </Row>
    </Container>
  );
}


export default Research