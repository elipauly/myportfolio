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
                overview
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                I had the opportunity to work for KRUI 89.7FM student radio as the web & social media director from 2025-2026.
                In this role, I produced graphics and copywrighting for social media communication to promote DJ programming,
                local events, and student journalism.
            </p>

            <p className="title-left">
                Kill yr darlings,
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
                        alt="epode Google format web ad"
                        caption="epode Google format web ad"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={p2}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />

                </Col>
                <Col className="masonry-col">
                    <GalleryImage
                        src={p3}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
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
                        alt="epode Google format web ad"
                        caption="epode Google format web ad"
                    />
                    <GalleryImage
                        src={danenglish}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={nightmoves}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />
                    <GalleryImage
                        src={birdlabs}
                        className="masonry-img"
                        alt="epode 2mL bottle design"
                        caption="epode 2mL bottle design"
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
                        alt="epode Google format web ad"
                        caption="epode Google format web ad"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={picks3}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />

                </Col>
                <Col className="masonry-col">
                    <GalleryImage
                        src={picks4}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />

                </Col>

            </Row>

        </Container>

                <Container className="container container-works">
            <br /> <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={feb1}
                        className="masonry-img"
                        alt="epode Google format web ad"
                        caption="epode Google format web ad"
                    />
                    <GalleryImage
                        src={mar1}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />
                    <GalleryImage
                        src={apr1}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={feb2}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />
                    <GalleryImage
                        src={mar2}
                        className="masonry-img"
                        alt="epode 2mL bottle design"
                        caption="epode 2mL bottle design"
                    />
                    <GalleryImage
                        src={apr2}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />

                </Col>

            </Row>

        </Container>

    

    </>
  );
}
export default KRUISocials;