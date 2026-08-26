import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/epode_imgs/header.png"

function ModestMouse() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                Amplication
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img white-fill"
                alt="Amplication branding visual"
                caption="Amplication"
            />
        </Col>
    </Row>


    {/* =========================================
        OVERVIEW
    ========================================= */}
    
    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                overview
            </h2>
        </Col>

        <Col>

            <p className="title-left">


                Amplication is a web app designed as a job application journal
                where users can keep track of their employment applications.
                In the current job market, it is not uncommon for jobseekers to apply to dozens of jobs,
                creating a need for a tool that helps applicants organize and track their search process.
            </p>

            <p className="title-left">
                We integrated AI-assisted features to calculate how well an applicant's resume
                applies to a job posting, and to generate practice interview questions from an existing job listing.
            </p>

            <a
                className="github-link"
                href="https://github.com/cspahn1695/ai-job-application-tracker/tree/main"
                target="_blank"
                rel="noopener noreferrer"
            >
                project on github →
            </a>

        </Col>

    </Row>

</Container>


    </>
  );
}

export default ModestMouse;