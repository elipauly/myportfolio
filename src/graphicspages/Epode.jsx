import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/epode_imgs/header.png";
import ml from "../assets/graphics_imgs/epode_imgs/2ml.png";
import ad from "../assets/graphics_imgs/epode_imgs/ad.png";
import ad2 from "../assets/graphics_imgs/epode_imgs/ad2.png";
import ad3 from "../assets/graphics_imgs/epode_imgs/ad3.png";
import bottle from "../assets/graphics_imgs/epode_imgs/bottle.png";
import candle from "../assets/graphics_imgs/epode_imgs/candle.png";
import candlebox from "../assets/graphics_imgs/epode_imgs/candlebox.png";
import cart from "../assets/graphics_imgs/epode_imgs/cart.png";
import homepage from "../assets/graphics_imgs/epode_imgs/homepage.png";
import line from "../assets/graphics_imgs/epode_imgs/line.png";
import signage from "../assets/graphics_imgs/epode_imgs/signage.png";
import socials from "../assets/graphics_imgs/epode_imgs/socials.png";
import street from "../assets/graphics_imgs/epode_imgs/street.png";

function Epode() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                epode
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
                2025
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                epode is the fragrance brand identity I designed. It is the source of the squiggle behind this text.
            </p>

            <p className="title-left">
                Kill yr darlings,
            </p>

            <a
                className="link"
                href="https://drive.google.com/file/d/1l6dJofzNelLSknqQmo93pU_lWxPls-di/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                full identity guide →
            </a>

        </Col>

    </Row>

</Container>


<Container className="container container-works">
    <br />
    <Row className="row-home">
        <Col>
            <GalleryImage
                src={street}
                className="full-row-img epode-fill"
                alt="epode ad for Google"
                caption="epode ad for Google"
            />
            <hr/>
        </Col>
    </Row>

</Container>


{/* =========================================
    2nd row
========================================= */}

<Container fluid className="project-image-grid-container px-0">
    <br />
    <div className="project-image-grid">

        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={homepage}
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
                    src={bottle}
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
                    src={line}
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
                    src={cart}
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



        {/* =========================================
            whatever 3rd bit
        ========================================= */}

        <Container className="container container-works">
            <br /> <br /> {/* i know br is lazy */}
            <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                development
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                epode was created as a personal exploration into what I could accomplish with design in an esoteric and
                personal expression, while maintaining the identity and confines of a brand. I found the result to be minimal and
                undefined, it resonates with the roughness of human identity and the evasive simplicities we seek.
                I created epode as something emotional and distant. It is vague, yet overtly defined. 
            </p>

            <p className="title-left">
                Every aspect of epode is connected within itself, as every piece of design and illustration is attached to its primary idea.
                Within this project, I learned the
                meanings of brand identity, and how to convey emotion, to imbue attachments into a brand.
            </p>
        </Col>
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={ad3}
                        className="masonry-img"
                        alt="epode Google format web ad"
                        caption="epode Google format web ad"
                    />
                    <GalleryImage
                        src={candlebox}
                        className="masonry-img"
                        alt="epode candle within box packaging"
                        caption="epode candle within box packaging"
                    />
                    <GalleryImage
                        src={candle}
                        className="masonry-img"
                        alt="epode candle packaging"
                        caption="epode candle packaging"
                    />
                    <GalleryImage
                        src={ml}
                        className="full-row-img"
                        alt="epode 2mL bottle design"
                        caption="epode 2mL bottle design"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={ad}
                        className="masonry-img"
                        alt="epode collaged advertisement"
                        caption="epode collaged advertisement"
                    />

                    <GalleryImage
                        src={signage}
                        className="masonry-img"
                        alt="epode store signage"
                        caption="epode store signage"
                    />

                </Col>

            </Row>

        </Container>

        {/* =========================================
            full ad2
        ========================================= */}
<Container fluid className="project-image-grid-container px-0">

    <div className="project-image-grid">

        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={socials}
                    className="project-image-grid-image"
                    alt="epode social media trio"
                    caption="epode social media trio"
                />

                <p className="project-image-grid-caption title-right">
                    epode social media trio
                </p>

            </div>

        </div>


        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={ad2}
                    className="project-image-grid-image project-image-grid-image-contain epode-fill"
                    alt="epode online browser ad"
                    caption="epode online browser ad"
                />

                <p className="project-image-grid-caption title-left">
                    online browser ad
                </p>

            </div>

        </div>

    </div>

</Container>

<Container className="container container-works">
    <Row>

        <Col>
            <h2 className="title title-left">
                “Kill yr darlings,” spoke the mud.
            </h2>

            <a
                className="link"
                href="https://drive.google.com/file/d/1l6dJofzNelLSknqQmo93pU_lWxPls-di/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                full identity guide →
            </a>

        </Col>

    </Row>

</Container>

    </>
  );
}

export default Epode;