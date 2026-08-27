import "./Graphics.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import header from "../assets/graphics_imgs/modest_mouse_imgs/header.png"
import bumper from "../assets/graphics_imgs/modest_mouse_imgs/bumper.png"
import poster from "../assets/graphics_imgs/modest_mouse_imgs/poster.png"
import recordf from "../assets/graphics_imgs/modest_mouse_imgs/recordf.png"
import recordb from "../assets/graphics_imgs/modest_mouse_imgs/recordb.png"
import recordboth from "../assets/graphics_imgs/modest_mouse_imgs/recordboth.png"
import sweatshirtf from "../assets/graphics_imgs/modest_mouse_imgs/sweatshirtf.png"
import sweatshirtb from "../assets/graphics_imgs/modest_mouse_imgs/sweatshirtb.png"
import ticketf from "../assets/graphics_imgs/modest_mouse_imgs/ticketf.png"
import ticketb from "../assets/graphics_imgs/modest_mouse_imgs/ticketb.png"
import stick1 from "../assets/graphics_imgs/modest_mouse_imgs/MM_Sticker1.png"
import stick2 from "../assets/graphics_imgs/modest_mouse_imgs/MM_Sticker2.png"
import stick3 from "../assets/graphics_imgs/modest_mouse_imgs/MM_Sticker3.png"

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
                Modest Mouse Campaign
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img mm-fill"
                alt="Modest Mouse sticker set"
                caption="Modest Mouse sticker set"
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


                This hypothetical music campaign celebrates the 30th anniversary of Modest Mouse’s first two albums, This Is a Long Drive
                with Nothing to Think About and The Lonesome Crowded West. I designed an album cover and tour identity that merges the
                visuals distinct to each album, and maintains the emotional qualities of each record into a visual system, including
                photography taken from their long drives through the Pacific Northwest playing DIY shows in the late 90s.
            </p>

            <p className="title-left">
                The first two albums Modest Mouse albums are merged and extended with this new retrospection.
                The campaign explores the themes of tension and isolation, reimagining the original 
                visuals and drawing on their cultural power to create new meanings and connections 
                within a system of graphics and tour materials. 
            </p>

        </Col>

    </Row>

</Container>

<Container className="container container-works">
        <Row className="aligned-image-row">
            <GalleryImage
                src={recordboth}
                className="aligned-image-tp"
                alt="Album design, vinyl record"
                caption="Album design, vinyl record"
            />
        </Row>
</Container>

<Container fluid className="project-image-grid-container px-0">
    <br />
    <div className="project-image-grid">

        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={recordf}
                    className="project-image-grid-image"
                    alt="Album design, vinyl record front"
                    caption="Album design, vinyl record front"
                />

                <p className="project-image-grid-caption title-right">
                    Album cover design, vinyl record front
                </p>

            </div>

        </div>


        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={recordb}
                    className="project-image-grid-image"
                    alt="Album design, vinyl record back"
                    caption="Album design, vinyl record back"
                />

                <p className="project-image-grid-caption title-left">
                    Album design, vinyl record back
                </p>

            </div>
            

        </div>
        

    </div>

</Container>

<Container className="container container-works">
            <br /> <br />
            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={sweatshirtf}
                        className="masonry-img"
                        alt="Tour sweatshirt in charcoal, front"
                        caption="Tour sweatshirt in charcoal, front"
                    />
                    <GalleryImage
                        src={sweatshirtb}
                        className="masonry-img"
                        alt="Tour sweatshirt in charcoal, back"
                        caption="Tour sweatshirt in charcoal, back"
                    />
                    <p className="title-right">
                        Tour sweatshirt in charcoal
                    </p>

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={bumper}
                        className="masonry-img"
                        alt="Bumper sticker design and mockup, reading 'this is a long drive for someone with nothing to think about' and 'well aren't you feeling real dirty sitting in the parking lot'"
                        caption="Bumper sticker design and mockup, quotes from album title and 'Convenient Parking'"
                    />
                    <p className="title-left">
                        Bumper stickers
                    </p>
                    <GalleryImage
                        src={poster}
                        className="masonry-img"
                        alt="Tour poster design and mockup"
                        caption="Tour poster design and mockup"
                    />
                    <p className="title-left">
                        Tour poster
                    </p>

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
                        src={stick1}
                        className="masonry-img"
                        alt="Sticker of a poorly illustrated mouse, captioned 'i am modest'"
                        caption="Scratch illustration sticker, a modest mouse"
                    />

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={stick2}
                        className="masonry-img"
                        alt="Sticker of a poorly illustrated cockroach, captioned 'modest mouse'"
                        caption="Scratch illustration sticker, based on 'Doin' the Cockroach"
                    />

                </Col>
                <Col className="masonry-col">
                    <GalleryImage
                        src={stick3}
                        className="masonry-img"
                        alt="Sticker of a poorly illustrated mouse, captioned 'god if i have to die you will have to die'"
                        caption="Scratch illustration sticker, based on 'Cowboy Dan'"
                    />

                </Col>

            </Row>
            <p>
                Scratch illustration sticker designs
            </p>

        </Container>

<Container fluid className="project-image-grid-container px-0">
    <br />
    <div className="project-image-grid">

        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={ticketf}
                    className="project-image-grid-image"
                    alt="Event ticket, front"
                    caption="Event ticket, front"
                />

                <p className="project-image-grid-caption title-right">
                    Ticket front
                </p>

            </div>

        </div>


        <div className="project-image-grid-column">

            <div className="project-image-grid-item">

                <GalleryImage
                    src={ticketb}
                    className="project-image-grid-image"
                    alt="Event ticket, back"
                    caption="Event ticket, back"
                />

                <p className="project-image-grid-caption title-left">
                    Ticket back
                </p>

            </div>
            

        </div>
        

    </div>

</Container>


    </>
  );
}

export default ModestMouse;