import "./Works.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import wordmark from "../assets/summerjobs_imgs/summerjobs-wordmark.png";
import wireframe from "../assets/summerjobs_imgs/search-wireframe.png";
import jobcard from "../assets/summerjobs_imgs/job-card.jpeg";
import alljobs from "../assets/summerjobs_imgs/searchjobs.jpeg";
import homepage from "../assets/summerjobs_imgs/homepage.jpeg";
import wireloginframe from "../assets/summerjobs_imgs/sj-alljobs.png";
import filters from "../assets/summerjobs_imgs/filterjobs.jpeg";
import profile from "../assets/summerjobs_imgs/sj-profile.png";
import search from "../assets/summerjobs_imgs/sj-seach.png";
import signup from "../assets/summerjobs_imgs/sj-signup.png";
import searchjobs from "../assets/summerjobs_imgs/searchjobs.jpeg";
import savedjobs from "../assets/summerjobs_imgs/savedjobs.jpeg";

function SummerJobs() {
    return (
        <>
            {/* =========================================
                HEADER / OVERVIEW
            ========================================= */}

            <Container className="container container-works">

                <Row>
                    <Col>
                        <h1 className="title title-left">
                            SummerJobs
                        </h1>
                    </Col>
                </Row>


                <Row className="row-home">
                    <Col>
                        <GalleryImage
                            src={wordmark}
                            className="full-row-img"
                            alt="SummerJobs wordmark"
                            caption="SummerJobs"
                        />
                    </Col>
                </Row>


                <Row>

                    <Col
                        md="auto"
                        style={{ marginRight: "2rem" }}
                    >
                        <h2 className="title title-left">
                            overview
                        </h2>
                    </Col>

                    <Col>

                        <p className="title-left">
                            SummerJobs was my senior capstone project,
                            completed as part of my B.A. in 2025. This team project
                            focused on building a job-search web application for students to discover summer jobs and internships within their academic fields.
                        </p>

                        <p className="title-left">
                            With this project, we worked with external APIs, AWS
                            hosting, full-scale authentication, CRUD database functions, and the technical
                            infrastructure necessary to support a web application.
                        </p>

                        <a
                            className="github-link"
                            href="https://final.d3p1kpnoho0cyj.amplifyapp.com/"
                        >
                            full live app on amplify→
                        </a>

                    </Col>

                </Row>


                <hr className="works-divider" />

            </Container>


            {/* =========================================
                PRODUCT OVERVIEW
            ========================================= */}

            <Container fluid className="container container-works">

                <Row className="g-0">

                    <Col
                        md={6}
                        className="full-row-left"
                    >
                        <GalleryImage
                            src={homepage}
                            className="full-row-img rightanch"
                            alt="SummerJobs homepage"
                            caption="SummerJobs homepage"
                        />
                    </Col>

                    <Col
                        md={6}
                        className="full-row-right"
                    >
                        <GalleryImage
                            src={alljobs}
                            className="full-row-img leftanch"
                            alt="SummerJobs job listings"
                            caption="All jobs view"
                        />
                    </Col>

                </Row>

            </Container>


            {/* =========================================
                DESIGN PROCESS
            ========================================= */}

            <Container className="container container-works">

                <Row className="masonry-row">

                    <Col className="masonry-col">

                        <h3 className="title title-left">
                            designing the experience
                        </h3>

                        <GalleryImage
                            src={wireframe}
                            className="masonry-img"
                            alt="SummerJobs search wireframe"
                            caption="Early search wireframe, made in Balsamiq"
                        />
                        <p className="mobile-gallery-caption">Early search wireframe</p>

                    </Col>


                    <Col className="masonry-col">

                        <p className="title-left">
                            We began by defining our requirements, and planning what challenges
                            currently face students searching for hands-on experience in their field.
                        </p>

                        <p className="title-left">
                            Ease of access and legibility were the main issues we sought to solve with this app.
                            By gathering these job opportunities in a single place and allowing for easy search and filtering
                            friction is reduced, and a jobseeker is able to quickly decide if the position stands out.

                            
                        </p>

                        <p className="title-left">
                            Sketching rough wireframes helped establish the structure and feel
                            of the search experience before working with any code.
                        </p>

                    </Col>

                </Row>


                <hr className="works-divider" />

            </Container>


            {/* =========================================
                SEARCH / FILTERING
            ========================================= */}

            <Container className="container container-works">

                <Row>
                    <Col>

                        <h2 className="title title-left">
                            search & filtering
                        </h2>

                        <p className="title-left">
                            Searching is the core feature of SummerJobs. The interface was designed to
                            help users narrow a broad set of opportunities into a list of positions relevant to them, and quickly learn more about them.
                        </p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <GalleryImage
                            src={filters}
                            className="full-col-img"
                            alt="SummerJobs wordmark"
                            caption="SummerJobs"
                        />
                    </Col>
                </Row>

            </Container>


            {/* =========================================
                SAVED JOBS / USER FLOW
            ========================================= */}

            <Container className="container container-works">

                <Row className="masonry-row">

                    <Col className="masonry-col">

                        <h3 className="title title-left">
                            saving jobs
                        </h3>

                        <p className="title-left">
                            SummerJobs also needed to allow users to track their opportunities.
                            Authenticated users can save a job, and return to to the position later.
                        </p>

                    </Col>


                    <Col className="masonry-col">

                        <GalleryImage
                                src={savedjobs}
                                className="mobile-gallery-img"
                                alt="SummerJobs saved jobs"
                                caption="Saved opportunities"
                            />

                    </Col>

                </Row>


                <hr className="works-divider" />

            </Container>


            {/* =========================================
                AUTHENTICATION
            ========================================= */}
            <Container className="container container-works">

                <Row className="masonry-row">

                    <Col className="masonry-col">

                        <h3 className="title title-left">
                            authentication
                        </h3>

                        <p className="title-left">
                                Authentication was our most technically challenging hurdle to solve.
                                The application needed to distinguish between users while keeping the
                                interface approachable and consistent.
                            </p>
                            
                            <GalleryImage
                                src={profile}
                                className="mobile-gallery-img"
                                alt="SummerJobs profile page"
                                caption="Authenticated user profile"
                            />

                            <p className="mobile-gallery-caption">
                                User profile
                            </p>

                    </Col>


                    <Col className="masonry-col">

                        <GalleryImage
                                src={signup}
                                className="mobile-gallery-img"
                                alt="SummerJobs sign up page"
                                caption="Creating an account"
                            />

                            <p className="mobile-gallery-caption">
                                Account creation
                            </p>

                    </Col>

                </Row>


                <hr className="works-divider" />

            </Container>
            
            {/* =========================================
                TECHNICAL IMPLEMENTATION
            ========================================= */}

            <Container className="container container-works">

                <Row>

                    <Col>

                        <h2 className="title title-left">
                            technically sticky situations
                        </h2>

                        <p className="title-left">
                            Building SummerJobs was a challenge, being our first introduction
                            to real-world constraints in full application development.
                            Through many trials and many errors, we integrated API requests, authentication, AWS
                            hosting, and application state to deliver a full web app.
                        </p>


                        <p className="title-left">
                            This project strengthened my ability to connect interface decisions
                            with implementation and real constraints. My perspective of design
                            broadened from static excercise to real problems, and real interactions.
                            
                           
                        </p>

                        <a
                            className="github-link"
                            href="https://final.d3p1kpnoho0cyj.amplifyapp.com/"
                        >
                            full live app on amplify→
                        </a>

                    </Col>

                </Row>

            </Container>

        </>
    );
}

export default SummerJobs;