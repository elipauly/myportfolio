import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/krui_socials_imgs/bluelogo.jpeg";
import apr1 from "../assets/graphics_imgs/krui_socials_imgs/apr1.jpg";
import apr2 from "../assets/graphics_imgs/krui_socials_imgs/apr2.jpg";
import birdlabs from "../assets/graphics_imgs/krui_socials_imgs/birdlabs.jpg";
import danenglish from "../assets/graphics_imgs/krui_socials_imgs/danenglish.jpg";
import feb1 from "../assets/graphics_imgs/krui_socials_imgs/feb1.jpg";
import feb2 from "../assets/graphics_imgs/krui_socials_imgs/feb2.jpg";
import hiring from "../assets/graphics_imgs/krui_socials_imgs/hiring.jpg";
import mar1 from "../assets/graphics_imgs/krui_socials_imgs/mar1.jpg";
import mar2 from "../assets/graphics_imgs/krui_socials_imgs/mar2.jpg";
import nightmoves from "../assets/graphics_imgs/krui_socials_imgs/nightmoves.jpg";
import p1 from "../assets/graphics_imgs/krui_socials_imgs/p1.png";
import p2 from "../assets/graphics_imgs/krui_socials_imgs/p2.png";
import p3 from "../assets/graphics_imgs/krui_socials_imgs/p3.png";
import picks1 from "../assets/graphics_imgs/krui_socials_imgs/picks1.jpg";
import picks2 from "../assets/graphics_imgs/krui_socials_imgs/picks2.jpg";
import picks3 from "../assets/graphics_imgs/krui_socials_imgs/picks3.jpg";
import picks4 from "../assets/graphics_imgs/krui_socials_imgs/picks4.jpg";


function KRUISocials() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                KRUI Social Media Graphics
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img blue-fill"
                alt="KRUI 89.7FM Logo"
                caption="KRUI 89.7FM Logo"
            />
        </Col>
    </Row>


    {/* =========================================
        OVERVIEW
    ========================================= */}
    
    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                2025–26
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                I worked one year for KRUI 89.7FM student radio as the Web & Social Media Director from 2025–2026. In this role, I designed graphics and wrote copy for social media communications
                promoting DJ programming, local events, and student journalism. My work focused on 
                engaging a college-aged audience with creative, cohesive and bold visuals that 
                could communicate information quickly while maintaining KRUI’s boundary-pushing identity.
            </p>

            <p className="title-left">
                I struggled in the beginning with connecting the KRUI brand with promotional visuals, given the significant creative liberties.
                Through my work and experience, the boundary between the two became clearer, 
                and I defined the moments where brand assets could relax to fit a promotional theme like 
                local event calendars, and where they would restrict for station-specific materials like hiring announcements.
            </p>

        </Col>

    </Row>

</Container>



        <Container className="container container-works">
            <br /> <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={p1}
                        className="masonry-img"
                        alt="Programming Schedule, Mondays & Tuesdays"
                        caption="Programming Schedule, Mondays & Tuesdays. Part of 3 post series highlighting the full week schedule"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={p2}
                        className="masonry-img"
                        alt="Programming Schedule, Mondays"
                        caption="Programming Schedule, Mondays"
                    />

                </Col>
                <Col className="masonry-col">
                    <GalleryImage
                        src={p3}
                        className="masonry-img"
                        alt="Programming Schedule, Tuesdays"
                        caption="Programming Schedule, Tuesdays"
                    />

                </Col>

            </Row>

        </Container>

        {/* =========================================
           masonry
        ========================================= */}

        <Container className="container container-works">
            <br /> <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={hiring}
                        className="masonry-img"
                        alt="KRUI 26/27 hiring call promo"
                        caption="Promoting KRUI's 26/27 hiring"
                    />
                    <GalleryImage
                        src={danenglish}
                        className="masonry-img"
                        alt="Dan English live in-studio show promo"
                        caption="Dan English live in-studio show promotion"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={nightmoves}
                        className="masonry-img"
                        alt="Night Moves live in-studio show promo"
                        caption="Night Moves live in-studio show promotion"
                    />
                    <GalleryImage
                        src={birdlabs}
                        className="masonry-img"
                        alt="UIowa CLAS Welcome Party Event Promo"
                        caption="UIowa CLAS Welcome Party event promotion"
                    />

                </Col>

            </Row>

        </Container>

        {/* =========================================
            3 col
        ========================================= */}
 <Container className="container container-works">
            <br /> <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={picks1}
                        className="masonry-img"
                        alt="KRUI Picks (pt. 1), promoting our end-of-year articles"
                        caption="KRUI Picks (pt. 1), promoting our end-of-year articles"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={picks3}
                        className="masonry-img"
                        alt="KRUI Picks (pt. 3), promoting our end-of-year articles"
                        caption="KRUI Picks (pt. 3), promoting our end-of-year articles"
                    />

                </Col>
                <Col className="masonry-col">
                    <GalleryImage
                        src={picks4}
                        className="masonry-img"
                        alt="KRUI Picks (pt. 4), promoting our end-of-year articles"
                        caption="KRUI Picks (pt. 4), promoting our end-of-year articles"
                    />

                </Col>

            </Row>

        </Container>

        <Container className="container container-works">
    <Row>
        <hr className="works-divider" />

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                show cal
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                Starting in January 2026, KRUI began creating monthly Iowa City event calendars to promote local music
                and events. I designed a clear, impartial format for presenting 20-30 events across different 
                dates, venues, and artists. The February calendar increased post engagement from an average 
                of 5% to 16.8%, with March and April maintaining steady engagement at 6.5% and 6%. This 
                calendar series became one of KRUIs most significant successes of the year, achieving our 
                goal of connecting our audience with local musicians and events.
            </p>
        </Col>

    </Row>

</Container>

                <Container className="container container-works">
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={feb1}
                        className="masonry-img"
                        alt="February show calendar promo cover"
                        caption="February show calendar promo cover"
                    />
                    <GalleryImage
                        src={mar1}
                        className="masonry-img"
                        alt="March show calendar promo cover"
                        caption="March show calendar promo cover"
                    />
                    <GalleryImage
                        src={apr1}
                        className="masonry-img"
                        alt="April show calendar promo cover"
                        caption="April show calendar promo cover"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={feb2}
                        className="masonry-img"
                        alt="February show calendar information system"
                        caption="February show calendar information system"
                    />
                    <GalleryImage
                        src={mar2}
                        className="masonry-img"
                        alt="March show calendar information system"
                        caption="March show calendar information system"
                    />
                    <GalleryImage
                        src={apr2}
                        className="masonry-img"
                        alt="April show calendar information system"
                        caption="April show calendar information system"
                    />

                </Col>

            </Row>

        </Container>

    

    </>
  );
}
export default KRUISocials;