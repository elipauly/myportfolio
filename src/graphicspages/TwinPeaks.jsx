import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/twin_peaks_imgs/header.png"
import spread1 from "../assets/graphics_imgs/twin_peaks_imgs/spread1.png"
import spread2 from "../assets/graphics_imgs/twin_peaks_imgs/spread2.png"
import spread3 from "../assets/graphics_imgs/twin_peaks_imgs/spread3.png"
import spread4 from "../assets/graphics_imgs/twin_peaks_imgs/spread4.png"
import spread5 from "../assets/graphics_imgs/twin_peaks_imgs/spread5.png"
import spread6 from "../assets/graphics_imgs/twin_peaks_imgs/spread6.png"
import spread7 from "../assets/graphics_imgs/twin_peaks_imgs/spread7.png"

import single1 from "../assets/graphics_imgs/twin_peaks_imgs/single1.png"
import single2 from "../assets/graphics_imgs/twin_peaks_imgs/single2.png"
import single3 from "../assets/graphics_imgs/twin_peaks_imgs/single3.png"
import single4 from "../assets/graphics_imgs/twin_peaks_imgs/single4.png"

function TwinPeaks() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                Twin Peaks Zine
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img epode-fill"
                alt="epode squiggle description"
                caption="epode Squiggle"
            />
        </Col>
    </Row>


    {/* =========================================
        OVERVIEW
    ========================================= */}
    
    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                2024
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
                view full zine →
            </a>

        </Col>

    </Row>

</Container>

<Container className="container container-works">
        <Row className="aligned-image-row">
            <GalleryImage
                src={spread7}
                className="aligned-image-tp"
                alt="Marigold web design"
                caption="Marigold web design"
            />
        </Row>
</Container>

<Container className="container container-works">
            <Row className="aligned-image-row">

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single1}
                        className="aligned-image-tp"
                        alt="Marigold web design"
                        caption="Marigold web design"
                    />
                    
                </Col>

                <Col md={8} className="aligned-image-col-tp">
                
                    <GalleryImage
                        src={spread2}
                        className="aligned-image-tp"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>
            </Row>
        </Container>

        <Container className="container container-works">
            <Row className="aligned-image-row-tp">

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single4}
                        className="aligned-image-tp"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

                <Col md={8} className="aligned-image-col-tp">
                    <GalleryImage
                        src={spread1}
                        className="aligned-image-tp"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

            </Row>

        </Container>


<Container className="container container-works">
            <Row className="aligned-image-row">

                <Col md={8} className="aligned-image-col-tp">
                
                    <GalleryImage
                        src={spread5}
                        className="aligned-image-tp"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single2}
                        className="aligned-image-tp"
                        alt="Marigold web design"
                        caption="Marigold web design"
                    />
                    
                </Col>
            </Row>
        </Container>

        <Container className="container container-works">
            <Row className="aligned-image-row-tp">

                <Col md={8} className="aligned-image-col-tp">
                    <GalleryImage
                        src={spread4}
                        className="aligned-image-tp"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single3}
                        className="aligned-image-tp"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

            </Row>

        </Container>

<Container className="container container-works">
        <Row className="aligned-image-row">
            <GalleryImage
                src={spread6}
                className="aligned-image-tp"
                alt="Marigold web design"
                caption="Marigold web design"
            />
        </Row>
</Container>

<Container className="container container-works">
    <Row>

        <Col>
            <h2 className="title title-right">
                Fire, walk with me.
            </h2>

            <a
                className="link"
                href="https://github.com/cspahn1695/ai-job-application-tracker/tree/main"
                target="_blank"
                rel="noopener noreferrer"
            >
                view full zine →
            </a>

        </Col>

    </Row>

</Container>


    </>
  );
}

export default TwinPeaks;