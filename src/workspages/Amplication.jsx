import "./Works.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/amplication_imgs/amp_header.png"
import project1_img from "../assets/amplication_imgs/hausblendLogo.png";
import project2_img from "../assets/amplication_imgs/dashboard.jpg";
import project3_img from "../assets/amplication_imgs/job-search.jpg";
import project4_img from "../assets/amplication_imgs/login.jpg";
import project8_img from "../assets/amplication_imgs/interviewprep.jpg";
import project5_img from "../assets/amplication_imgs/before1.png";
import project6_img from "../assets/amplication_imgs/before2.png";
import project7_img from "../assets/amplication_imgs/beforelogin.png";

function Amplication() {
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


{/* =========================================
    FINAL PRODUCT / FULL WIDTH
========================================= */}

<Container fluid className="px-0">

    <Row className="full-width-row g-0">

        <Col md={6} className="full-row-left">

            <GalleryImage
                src={project2_img}
                className="full-row-img rightanch white-fill"
                style={{ paddingRight: "1.5rem" }}
                alt="Screenshot of the dashboard page"
                caption="My Application Journal Dashboard"
            />

            <p className="title-right">
                My Application Journal Dashboard
            </p>

        </Col>


        <Col md={6} className="full-row-right">

            <GalleryImage
                src={project3_img}
                className="full-row-img leftanch white-fill"
                style={{ paddingLeft: "1.5rem" }}
                alt="Screenshot of the job search page"
                caption="Job Search Page"
            />

            <p className="title-left">
                Job Search Page
            </p>

        </Col>

    </Row>

</Container>


<Container className="container container-works">


    {/* =========================================
        PROCESS
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                process
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                When I entered the project, the base application functionality
                had already been established with a very minimal interface.
                I saw an opportunity to rethink the experience and create an
                interface that could make a complex job-search process feel
                more manageable.
            </p>

            <p className="title-left">
                My work focused on understanding the different tasks users
                needed to accomplish, restructuring the interface around
                those tasks, and creating a visual system that could support
                additional functionality as the application developed.
            </p>

        </Col>

    </Row>

    <Row className="masonry-row">

        <Col className="masonry-col">

            <h3 className="title title-left">
                improving the experience
            </h3>

            <p className="title-left">
                The initial interface provided the basic functionality of
                the application, but it was
                difficult to understand how to navigate the product.
            </p>

            <GalleryImage
                src={project6_img}
                className="masonry-img white-fill"
                alt="Screenshot of the initial statistics page"
                caption="Early statistics interface"
            />
            <p>Early statistics interface</p>
            

        </Col>


        <Col className="masonry-col">
        <p className="title-left">
                These early screens helped identify opportunities to
                build clearer hierarchy and stronger relationships
                in the dashboard.
            </p>

            <GalleryImage
                src={project5_img}
                className="masonry-img white-fill"
                alt="Screenshot of the initial dashboard interface"
                caption="Early application tracking interface"
            />

            <p className="title-left">
                We collaborated to redefine our target requirements and prioritize the key features.
                I took responsibility to implement a new interface that would allow users to easily navigate the app easily and maintain the funcitonality.
                From this foundation, we added features while prioritizing flows that felt intuitive and efficient.
                The challenge was not just functionality, but building an experience that feels cohesive and intentional.
            </p>
        </Col>

    </Row>

    <hr className="works-divider" />


    {/* =========================================
        INTERVIEW PREP
    ========================================= */}

    <Row>

        <Col>

            <h3 className="title title-left">
                interview prep
            </h3>

            <p className="title-left">
                After establishing the job-tracking experience,
                we expanded the application with tools intended to support
                users in securing a job.
            </p>

            <GalleryImage
                src={project8_img}
                className="full-row-img white-fill"
                alt="Screenshot of the interview preparation page"
                caption="Interview Prep Page"
            />

            <p className="title-left">
                The Interview Prep tool generates questions using information
                pulled directly from Adzuna job postings. Although we did not
                ultimately implement true LLM-generated questions, the
                interface provides a visual foundation for future development.
            </p>

        </Col>

    </Row>


    {/* =========================================
        AUTHENTICATION
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                refining the interface
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                We reworked individual components throughout the
                application as the overall system became more defined.
                Small interface pieces became opportunities to clarify
                hierarchy, reduce visual noise, and make important actions
                easier to understand.
            </p>

        </Col>

    </Row>


    <Row>

        <Col>

            <GalleryImage
                src={project7_img}
                className="full-row-img white-fill"
                alt="Screenshot of the early login container"
                caption="Early login container"
            />

            <p className="title-left">
                Early login container
            </p>

        </Col>


        <Col>

            <GalleryImage
                src={project4_img}
                className="full-row-img white-fill"
                alt="Screenshot of the revised login container"
                caption="Final login container after clarifying adjustments"
            />

            <p className="title-right">
                Final login container after clarifying adjustments
            </p>

        </Col>

    </Row>



    {/* =========================================
        REFLECTION
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                reflection
            </h2>
        </Col>

        <Col>
        <p className="title-left">
                We worked with technical limitations and a tight time constraint.
                Through reflection and focusing on our clear goals, we were able
                to prioritize only the core experience, delivering a final application
                that was functional, refined, and concise.
            </p>

            <p className="title-left">
                The path to get there wasn't easy.
                My team and I struggled in the beginning with unrealistic goals, hardware incompatibilities,
                and a subpar working dynamic. Overcoming those difficulties taught me
                how to collaborate and communicate in a professional team, even in difficult or stressful situations.
            </p>

            <p className="title-left">

                I gained more experience working with file database systems, Python application
                developemnt, and a stronger understanding of APIs, routing, and testing.
                This project was a challenge in balancing the user experience
                with the realities of project and timeline constraints, and overcoming problems as a team.
            </p>

        </Col>

    </Row>

</Container>

    {
        //FLUID 2 START
    /*
    <Container fluid className="px-0">
            <Row className="full-width-row g-0">
                <Col md={6} className="full-row-left">
                    <GalleryImage src={project2_img} className="full-row-img" alt="meow" />
                    <p className="title-right">these images are the full width row</p>
                </Col>
                <Col md={6} className="full-row-right">
                    <GalleryImage src={project3_img} className="full-row-img" alt="meow" />
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

export default Amplication;