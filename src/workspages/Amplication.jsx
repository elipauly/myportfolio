import "./Works.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import project1_img from "../assets/amplication_imgs/hausblendLogo.png";
import project2_img from "../assets/amplication_imgs/hausblendLogo.png";
import project3_img from "../assets/amplication_imgs/hausblendLogo.png";
import project4_img from "../assets/amplication_imgs/hausblendLogo.png";

function Amplication() {
    return (
    <Container className="container wrapper-container">
    <Container className="container container-works">
        <Row>
            <Col>
            <h1 className='title title-left'>Amplication</h1>
            </Col>
        </Row>
        <Row className="row-home">
            <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="primary-img-works"/>
        </Row>
        <Row>
            <Col>
                <h1 className="title title-left">overview</h1>
            </Col>
            <Col>
                <p className="title-right"> AI Job Application Interface AI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application Interfce </p>
            </Col>
        </Row>
    </Container>

    {   //FULL WIDTH ROW 1
    }
        <Row>
            <Col className="full-row-left">
                <img src={project1_img} className="full-row-img" alt="" />
                <p className="title-right">these images are the full width row</p>
            </Col>
            <Col className="full-row-right">
                <img src={project1_img} className="full-row-img" alt="" />
                <p className="title-left">second</p>
            </Col>
        </Row>

    <Container className="container container-works">
        <Row>
            <Col>
                <Row>
                    <p className="title-left">
                        AI Job Application Interface AI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application Interfa
                    </p>
                </Row>
                <Row>
                    <img src={project1_img} className="full-row-img" alt="" />
                </Row>
            </Col>
            <Col className="">
                <Row>
                    <img src={project1_img} className="full-row-img" alt="" />
                    <p>this should be the big long image</p>
                </Row>
            </Col>
        </Row>

        <Row>
            <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="primary-img-works"/>
            <p className="title-left">About</p>
        </Row>

        <Row>
            <p className="title-left">
                AI Job Application Interface AI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application InterfaceAI Job Application Interfa
            </p>
        </Row>

        <Row>
            <Col>
                <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="full-row-img"/>
                <p className="title-left">about</p>
            </Col>

            <Col>
                <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="full-row-img"/>
                <p className="title-left">about</p>
            </Col>
        </Row>

    </Container>

    {   //FULL WIDTH ROW 2  
    }
        <Row>
            <Col className="full-row-left">
                <img src={project1_img} className="full-row-img" alt="" />
                <p className="title-right">these images are the full width row</p>
            </Col>
            <Col className="full-row-right">
                <img src={project1_img} className="full-row-img" alt="" />
                <p className="title-left">second</p>
            </Col>
        </Row>

    </Container>
  );
}

export default Amplication;