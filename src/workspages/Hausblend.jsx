import "./Works.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import project1_img from "../assets/amplication_imgs/hausblendLogo.png";
import project2_img from "../assets/amplication_imgs/dashboard.jpg";
import project3_img from "../assets/amplication_imgs/job-search.jpg";
import project4_img from "../assets/amplication_imgs/login.jpg";
import project8_img from "../assets/amplication_imgs/interviewprep.jpg";
import project5_img from "../assets/amplication_imgs/before1.png";
import project6_img from "../assets/amplication_imgs/before2.png";
import project7_img from "../assets/amplication_imgs/beforelogin.png";


function Hausblend() {
    return (
    <>
    <Container className="container container-works">
        <Row>
            <Col>
            <h1 className='title title-left'>Amplication</h1>
            </Col>
        </Row>
        <Row className="row-home">
            <Col>
            <img
                    src={project2_img}
                    className="full-row-img"
                    alt="" />
            </Col>
        </Row>
        <Row>
            <Col md="auto" style={{ marginRight: '2rem' }}>
                <h1 className="title title-left">overview</h1>
            </Col>
            <Col>
                <p className="title-left"> Amplication is a web app designed as a job application journal where users can keep track of their employment applications. In the current job market, it is not uncommon for jobseekers to apply to dozens of jobs. In this problem, we saw a need to create a tool for applicants to organize and track their job search process. We integrated AI to calculate how well an applicant’s resume applies to a job posting, and to generate practice interview questions from an existing job listing.</p>
                <a className="github-link" href="https://github.com/cspahn1695/ai-job-application-tracker/tree/main" target="_blank" rel="noopener noreferrer">
                    github →
                </a>
            </Col>
        </Row>
    </Container>

    {   //FLUID 1 START
    }
    <Container fluid className="px-0">
        <Row className="full-width-row g-0">
            <Col md={6} className="full-row-left full-row-left">
                <img src={project2_img} className="full-row-img rightanch" alt="" />
                <p className="title-right">these images are the full width row</p>
            </Col>
            <Col md={6} className="full-row-right">
                <img src={project3_img} className="full-row-img leftanch" alt="" />
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
                <h3 className='title title-left'>path of improvement</h3>
                <p className="title-left">
                    When I entered this project, the base app functionality had been created with this bare interface. I saw a need to overhaul the interface to create a functional user experience.
                </p>
                
                <img
                    src={project6_img}
                    className="masonry-img"
                    alt="" />
            </Col>
            <Col className="masonry-col">
                <img
                    src={project5_img}
                    className="masonry-img"
                    alt="" />
                <p className="title-left">
                    We collaborated to redefine our target requirements, and I took the responsibility for implementing a new interface that would allow users to easily navigate the app and design an intuitive flow for this tracking app. From this foundation, my team and I worked together to implement additional features while prioritizing user flows that are intuitive and efficient. To elevate an app from functional into a product that is easy to use and a true experience was a new challenge that I enjoyed.
                </p>
            </Col>
        </Row>
    {
        //MASONRY END
    }
    <hr className="works-divider" />
    </Container>

    <Container className="container container-works">

        <Row>
            <Col>
            <img
                    src={project8_img}
                    className="full-row-img"
                    alt="" />
            <p className="title-left">Interview Prep Tab, Questions are from rule-based generator lifting information directly from Adzuna job postings. We failed to implement true LLM question generation, but we have a visual foundation for future improvements. </p>
            </Col>
        </Row>

        <Row>
            <p className="title-left">
                With this project, I gained more experience designing for a user’s flow and working with strict technical requirements. This project taught me how to implement file database systems in Python apps, and I learned the technical foundations of APIs, routing, and testing for application development. My team and I faced a tight time constraint, and had to come together to design concessions to our original plan while completing our full product delivery. 
            </p>
        </Row>

        <Row>
            <Col>
                <img
                    src={project7_img}
                    className="full-row-img"
                    alt="" />
                <p className="title-left">Initial log-in container</p>
            </Col>

            <Col>
                <img
                    src={project4_img}
                    className="full-row-img"
                    alt="" />
                <p className="title-right">Log-in container after clarifying adjustments</p>
            </Col>
        </Row>

    </Container>

    {
        //FLUID 2 START
    /*
    <Container fluid className="px-0">
            <Row className="full-width-row g-0">
                <Col md={6} className="full-row-left">
                    <img src={project2_img} className="full-row-img" alt="" />
                    <p className="title-right">these images are the full width row</p>
                </Col>
                <Col md={6} className="full-row-right">
                    <img src={project3_img} className="full-row-img" alt="" />
                    <p className="title-left">second</p>
                </Col>
            </Row>
    </Container>
    */
        //FLUID 2 END
    }

    </>
  );
}

export default Hausblend;