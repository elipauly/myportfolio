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
    <>
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
            <Col md="auto" style={{ marginRight: '2rem' }}>
                <h1 className="title title-left">overview</h1>
            </Col>
            <Col>
                <p className="title-left"> Amplication is a web app designed as a job application journal where users can keep track of their employment applications. In the current job market, it is not uncommon for jobseekers to apply to dozens of jobs. In this problem, we saw a need to create a tool for applicants to organize and track their job search process. We integrated AI to calculate how well an applicant’s resume applies to a job posting, and to generate practice interview questions from an existing job listing.</p>
            </Col>
        </Row>
    </Container>

    {   //FLUID 1 START
    }
    <Container fluid className="px-0">
        <Row className="full-width-row g-0">
            <Col md={6} className="full-row-left">
                <img src={project1_img} className="full-row-img" alt="" />
                <p className="title-right">these images are the full width row</p>
            </Col>
            <Col md={6} className="full-row-right">
                <img src={project1_img} className="full-row-img" alt="" />
                <p className="title-left">second</p>
            </Col>
        </Row>
    </Container>
    {
        //FLUID 1 END
    }

    
    <Container className="container container-works">

    {
        //MASONRY START
    }
        <Row className="masonry-row">
            <Col className="masonry-col">
                <p className="title-left">
                    I entered this project after the base app functionality had been created, and saw a need to overhaul the interface to create a functional user experience. From there on, my team and I worked together to implement additional features in user flows that are intuitive and efficient.
                </p>
                
                <img
                    src={project1_img}
                    className="full-row-img"
                    alt="" />
            </Col>
            <Col className="masonry-col">
                <img
                    src={project1_img}
                    className="full-row-img"
                    alt="" />
                <p>
                    this should be the big long image I entered this project after the base app functionality had been created, and s
                </p>
            </Col>
        </Row>
    {
        //MASONRY END
    }

        <Row>
            <img src="src/assets/images_homepage/hausblendLogo.png" alt="hausblend logo" className="primary-img-works"/>
            <p className="title-left">About</p>
        </Row>

        <Row>
            <p className="title-left">
                With this project, I gained more experience designing for a user’s flow and working with strict technical requirements. This project taught me how to implement file database systems in Python apps, and I learned the technical foundations of APIs, routing, and testing for application development. My team and I faced a tight time constraint, and had to come together to design concessions to our original plan while completing our full product delivery. 
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

    {
        //FLUID 2 START
    }
    <Container fluid className="px-0">
            <Row className="full-width-row g-0">
                <Col md={6} className="full-row-left">
                    <img src={project1_img} className="full-row-img" alt="" />
                    <p className="title-right">these images are the full width row</p>
                </Col>
                <Col md={6} className="full-row-right">
                    <img src={project1_img} className="full-row-img" alt="" />
                    <p className="title-left">second</p>
                </Col>
            </Row>
    </Container>
    {
        //FLUID 2 END
    }

    </>
  );
}

export default Amplication;