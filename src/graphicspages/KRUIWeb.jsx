import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/krui_web_imgs/header.png";
import marig from "../assets/graphics_imgs/krui_web_imgs/marig.jpg";
import marweb from "../assets/graphics_imgs/krui_web_imgs/marweb.png";
import febig from "../assets/graphics_imgs/krui_web_imgs/febig.png";
import febweb from "../assets/graphics_imgs/krui_web_imgs/febweb.png";
import songs from "../assets/graphics_imgs/krui_web_imgs/songs25.png";
import albums from "../assets/graphics_imgs/krui_web_imgs/albums25.png";
import media from "../assets/graphics_imgs/krui_web_imgs/media_2025.png";
import songfest from "../assets/graphics_imgs/krui_web_imgs/songfest.png";
import wwwy from "../assets/graphics_imgs/krui_web_imgs/wwwy.png";
import webscroll from "../assets/graphics_imgs/krui_web_imgs/webscroll.gif";

function KRUIWeb() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                KRUI Web Graphics
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img red-fill"
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
                href="https://krui.fm"
                target="_blank"
                rel="noopener noreferrer"
            >
                krui.fm website →
            </a>
        <hr className="works-divider" />

        </Col>

    </Row>


    <Row>
        <Col>
            <GalleryImage
                src={songs}
                className="full-row-img web-fill"
                alt="Amplication branding visual"
                caption="Amplication"
            />
        </Col>
    </Row>


{/* =========================================
    2nd row
========================================= */}

<Container fluid className="project-image-grid-container px-0">
    <br />
    <div className="project-image-grid">

        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={albums}
                    className="project-image-grid-image"
                    alt="epode homepage"
                    caption="epode web homepage"
                />

                <p className="project-image-grid-caption title-right">
                    website homepage
                </p>

            </div>


            <div className="project-image-grid-item">

                <GalleryImage
                    src={wwwy}
                    className="project-image-grid-image"
                    alt="epode fragrance packaging"
                    caption="epode fragrance packaging"
                />

                <p className="project-image-grid-caption title-right">
                    fragrance packaging
                </p>

            </div>
            

        </div>
        


        <div className="project-image-grid-column">
            

            <div className="project-image-grid-item">

                <GalleryImage
                    src={media}
                    className="project-image-grid-image"
                    alt="Fragrance line web interface"
                    caption="Fragrance line web interface"
                />

                <p className="project-image-grid-caption title-left">
                    fragrance line web interface
                </p>

            </div>


            <div className="project-image-grid-item">

                <GalleryImage
                    src={songfest}
                    className="project-image-grid-image"
                    alt="E-commerce cart screen"
                    caption="epode e-commerce cart screen"
                />

                <p className="project-image-grid-caption title-left">
                    online cart interface
                </p>
            </div>
            

        </div>
        

    </div>

</Container>




    </Container>
    

        { // web v ig images
        }
        <Container className="container container-works">
            <Row className="row-home">
                
        <Col>
        <br />
        <hr className="works-divider" />
            <GalleryImage
                src={webscroll}
                className="full-row-img web-fill"
                alt="Amplication branding visual"
                caption="Amplication"
            />
        <hr className="works-divider" />
        </Col>
    </Row>

            <Row className="aligned-image-row">

                <Col md={8} className="aligned-image-col">
                
                    <GalleryImage
                        src={marweb}
                        className="aligned-image"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

                <Col md={4} className="aligned-image-col">
                    <GalleryImage
                        src={marig}
                        className="aligned-image"
                        alt="Marigold web design"
                        caption="Marigold web design"
                    />
                    
                </Col>
            </Row>
        </Container>

        <Container className="container container-works">
            <Row className="aligned-image-row">

                <Col md={8} className="aligned-image-col">
                    <GalleryImage
                        src={febweb}
                        className="aligned-image"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

                <Col md={4} className="aligned-image-col">
                    <GalleryImage
                        src={febig}
                        className="aligned-image"
                        alt="Marigold landscape"
                        caption="Marigold landscape"
                    />
                </Col>

            </Row>

        </Container>


    </>
  );
}

export default KRUIWeb;