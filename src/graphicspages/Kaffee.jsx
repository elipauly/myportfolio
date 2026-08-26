import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/epode_imgs/header.png"
import beef from "../assets/graphics_imgs/kaffee_imgs/BEE_FRONT.png";
import beeb from "../assets/graphics_imgs/kaffee_imgs/BEE_BACK.png";
import mothf from "../assets/graphics_imgs/kaffee_imgs/MOTH_FRONT.png";
import mothb from "../assets/graphics_imgs/kaffee_imgs/MOTH_BACK.png";
import wormf from "../assets/graphics_imgs/kaffee_imgs/WORM_FRONT.png";
import wormb from "../assets/graphics_imgs/kaffee_imgs/WORM_BACK.png";
import variety from "../assets/graphics_imgs/kaffee_imgs/VARIETY_MOCKUP.png";

function Kaffee() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                Käffee
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={variety}
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

        </Col>

    </Row>

</Container>

<Container className="container container-works">
            <br /> <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={beef}
                        className="masonry-img"
                        alt="epode Google format web ad"
                        caption="epode Google format web ad"
                    />
                    <GalleryImage
                        src={wormf}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />
                    <GalleryImage
                        src={mothf}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={beeb}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />
                    <GalleryImage
                        src={wormb}
                        className="masonry-img"
                        alt="epode 2mL bottle design"
                        caption="epode 2mL bottle design"
                    />
                    <GalleryImage
                        src={mothb}
                        className="masonry-img"
                        alt="epode 2mL bottle design"
                        caption="epode 2mL bottle design"
                    />

                </Col>

            </Row>

        </Container>


    </>
  );
}

export default Kaffee;