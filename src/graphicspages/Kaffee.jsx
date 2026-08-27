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
                alt="Käffee variety packaging, 6-can pack"
                caption="Käffee 6-pack variety packaging"
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
                Käffee is a packaging design system for an organic, environmentally conscious canned 
                coffee brand. The visual identity combines playful typography, bright earthy colors, and hand-drawn illustrations to create a fun 
                and inviting system, yet unique from other brands spaced out on the organic market shelves. I designed this as a packaged brand 
                to make sustainability feel approachable, while maintaining a cohesive system across the product line.
            </p>

        </Col>

    </Row>

</Container>

<Container className="container container-works">
    <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={beef}
                        className="masonry-img"
                        alt="Wildflower Honey Coldbrew, Front of can"
                        caption="Wildflower Honey Coldbrew, Front of can"
                    />
                    <GalleryImage
                        src={wormf}
                        className="masonry-img"
                        alt="Apple Gingersnap Coldbrew, Front of can"
                        caption="Apple Gingersnap Coldbrew, Front of can"
                    />
                    <GalleryImage
                        src={mothf}
                        className="masonry-img"
                        alt="New Lunar Moon Coldbrew, Front of can"
                        caption="New Lunar Moon Coldbrew, Front of can"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={beeb}
                        className="masonry-img"
                        alt="Wildflower Honey Coldbrew, Back of can"
                        caption="Wildflower Honey Coldbrew, Back of can"
                    />
                    <GalleryImage
                        src={wormb}
                        className="masonry-img"
                        alt="Apple Gingersnap Coldbrew, Back of can"
                        caption="Apple Gingersnap Coldbrew, Back of can"
                    />
                    <GalleryImage
                        src={mothb}
                        className="masonry-img"
                        alt="New Lunar Moon Coldbrew, Back of can"
                        caption="New Lunar Moon Coldbrew, Back of can"
                    />

                </Col>

            </Row>

        </Container>


    </>
  );
}

export default Kaffee;