import "./Works.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
//square
import figma from "../assets/hausblend_imgs/figmasurvivor.jpeg";
import logo from "../assets/hausblend_imgs/hausblendLogo.png";
import wordsvg from "../assets/hausblend_imgs/hausblendWord.svg";
import logosketches from "../assets/hausblend_imgs/logo_sketches.png";
//16:9 vertical
import login from "../assets/hausblend_imgs/login.jpeg";
import search from "../assets/hausblend_imgs/search.jpeg";
import searchboxes from "../assets/hausblend_imgs/searchboxes.jpeg";
import recipe1 from "../assets/hausblend_imgs/viewrecipe1.jpeg";
import viewcomm2 from "../assets/hausblend_imgs/viewcomment2.jpeg";
import subcomm3 from "../assets/hausblend_imgs/submitcomment3.jpeg";


//gif
import homepageloopgif from "../assets/hausblend_imgs/homepage_loop.gif";
import logingif from "../assets/hausblend_imgs/log_in_video.gif";
import reviewloopgif from "../assets/hausblend_imgs/review_loop.gif";
import savedpagegif from "../assets/hausblend_imgs/savedpage.gif";

function Hausblend() {
    return (
        <>
        <Container className="container container-works">

            <Row>
                <Col>
                    <h1 className="title title-left">
                        hausblend
                    </h1>
                </Col>
            </Row>
            <Row className="row-home">
                <Col>
                    <GalleryImage
                        src={logo}
                        className="full-row-img green-fill"
                        alt="Hausblend logo"
                        caption="Hausblend branding"
                    />
                </Col>
            </Row>

            <Row>
                <Col md="auto" style={{ marginRight: "2rem" }}>
                    <h1 className="title title-left">
                        overview
                    </h1>
                </Col>

                <Col>
                    <p className="title-left">
                        Hausblend is a mobile coffee recipe app designed
                        to help coffee enthusiasts discover, save, and
                        share recipes. The project explores how a recipe
                        platform can combine discovery, customization,
                        and community interaction into a focused mobile
                        experience.
                    </p>
                    <a
                            className="github-link"
                            href="#"
                        >
                            full app walkthrough video →
                        </a>
                </Col>
            </Row>
        <hr className="works-divider" />

        </Container>


        {/* =========================================
            BRANDING
        ========================================= */}

        <Container fluid className="px-0">

            <Row className="full-width-row g-0">

                <Col
                    md={6}
                    className="full-row-left"
                >
                    
                </Col>

                

            </Row>

        </Container>


        {/* =========================================
            DESIGN PROCESS
        ========================================= */}

        <Container className="container container-works">

            <Row className="masonry-row">

                <Col className="masonry-col">

                    <GalleryImage
                        src={wordsvg}
                        className="full-row-img rightanch"
                        alt="Hausblend wordmark"
                        caption="Hausblend wordmark"
                    />
                    <p className="title-right">hausblend wordmark</p>

                    <h3 className="title title-left">
                        visual direction
                    </h3>

                    <p className="title-left">
                        The visual identity for Hausblend began with
                        exploring different approaches to representing
                        coffee, recipes, and the social aspects of the
                        app. These explorations helped establish the
                        visual language used throughout the mobile
                        interface.
                    </p>
                    <GalleryImage
                        src={logosketches}
                        className="full-row-img grey-fill"
                        alt="Early hausblend logo sketches"
                        caption="Early hausblend logo sketches"
                    />
                    <p className="title-left">Early hausblend logo sketches</p>                    

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={reviewloopgif}
                        className="masonry-img"
                        alt="Gif of Hausblend recipe page and commment flow"
                        caption="Recipe page and comment flow"
                    />
                    <p className="title-left">Recipe page and comment flow</p>
                    <p className="title-left">
                        bullshirt
                    </p>

                </Col>

            </Row>

            <hr className="works-divider" />

        </Container>

        {/* =========================================
            MOBILE SCREENSHOTS
        ========================================= */}

        <Container className="container container-works">

            <Row>
                <Col>
                    <h2 className="title title-left">
                        the mobile experience
                    </h2>

                    <p className="title-left">
                        The core experience centers around discovering
                        coffee recipes, viewing individual recipes, and
                        interacting with the coffee community. The
                        vertical screenshots are presented together here
                        to emphasize the progression through the mobile
                        interface.
                    </p>
                </Col>
            </Row>


            <Row className="mobile-gallery">

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <div className="mobile-gallery-item">
                        <GalleryImage
                            src={homepageloopgif}
                            className="mobile-gallery-img"
                            alt="gif of home page flow and interaction"
                            caption="Home page flow and interaction"
                        />
                        <p className="title-left">
                            Recipe home page flow and interaction
                        </p>
                    </div>
                </Col>
                

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <div className="mobile-gallery-item">
                        <GalleryImage
                            src={searchboxes}
                            className="mobile-gallery-img"
                            alt="hausblend search filters screenshot"
                            caption="Search page, target filter categories are featured"
                        />
                        <p className="title-left">
                            Search page, target categories are featured
                        </p>
                    </div>
                </Col>

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <div className="mobile-gallery-item">
                        <GalleryImage
                            src={search}
                            className="mobile-gallery-img"
                            alt="Hausblend search screenshot"
                            caption="Recipe Search dropdown"
                        />
                        <p className="title-left">
                            Recipe search dropdown
                        </p>
                    </div>
                </Col>

            </Row>

        </Container>


        {/* =========================================
            LOG IN
        ========================================= */}

        <Container className="container container-works">

            <Row className="masonry-row">

                <Col className="masonry-col">

                    <h3 className="title title-left">
                        Log-in & allowances
                    </h3>

                    <p className="title-left">
                        The visual identity for Hausblend began with
                        exploring different approaches to representing
                        coffee, recipes, and the social aspects of the
                        app. These explorations helped establish the
                        visual languag
                    </p>

                    <GalleryImage
                        src={figma}
                        className="masonry-img gray-fill"
                        alt="Hausblend visual design exploration"
                        caption="Early visual exploration and interface direction"
                    />
                    <p className="title-right">Figma log-in flow</p>

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={logingif}
                        className="masonry-img"
                        alt="Hausblend login screen"
                        caption="Hausblend login screen"
                    />
                    <p className="title-left">App homepage</p>

                </Col>

            </Row>

            <hr className="works-divider" />

        </Container>

        {/* =========================================
            COMMENT
        ========================================= */}

        <Container className="container container-works">

            <Row>
                <Col>
                    <h2 className="title title-left">
                        rate&comment
                    </h2>

                    <p className="title-left">
                        this is a walkthrough path of using a user-generated rating system to build repoire and trust in a recipe.
                    </p>
                </Col>
            </Row>


            <Row className="mobile-gallery">

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <GalleryImage
                        src={recipe1}
                        className="mobile-gallery-img"
                        alt="Hausblend recipe page"
                        caption="Individual coffee recipe"
                    />
                </Col>

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <GalleryImage
                        src={viewcomm2}
                        className="mobile-gallery-img"
                        alt="Hausblend recipe comments"
                        caption="Viewing recipe comments"
                    />
                </Col>

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <GalleryImage
                        src={subcomm3}
                        className="mobile-gallery-img"
                        alt="Hausblend comment submission"
                        caption="Submitting a recipe comment"
                    />
                </Col>

            </Row>
            <hr className="works-divider" />

        </Container>

        {/* =========================================
            FLOW
        ========================================= */}

        <Container className="container container-works">

            <Row className="masonry-row">

                <Col className="masonry-col">

                    <h3 className="title title-left">
                        interaction flow
                    </h3>

                    <p className="title-left">
                        The visual identity for Hausblend began with
                        exploring different approaches to representing
                        coffee, recipes, and the social aspects of the
                        app. These explorations helped establish the
                        visual language used throughout the mobile
                        interface.
                    </p>

                    <GalleryImage
                        src={reviewloopgif}
                        className="masonry-img gray-fill"
                        alt="Hausblend visual design exploration"
                        caption="Early visual exploration and interface direction"
                    />
                    <p className="title-right">Figma log-in flow</p>

                </Col>

                <Col className="masonry-col">
                    <p className="title-left">
                        The visual identity for Hausblend began with
                        exploring different approaches to representing
                        coffee, recipes, and the social aspects of the
                        app. These explorations helped establish the
                        visual language used throughout the mobile
                        interface.
                    </p>
                    <GalleryImage
                        src={homepageloopgif}
                        className="masonry-img"
                        alt="Hausblend login screen"
                        caption="Hausblend login screen"
                    />
                    <p className="title-left">App homepage</p>

                </Col>

            </Row>

            <hr className="works-divider" />

            <Row>
                <Col>
                        <a
                            className="github-link"
                            style={{ textAlign: 'left', fontSize: '24px', marginTop: '-.4em', marginBottom: '1em'}}
                            href="#"
                        >
                            full app walkthrough video →
                        </a>

                    <p className="title-left">
                        Hausblend gave me an opportunity to explore
                        designing for a mobile-first experience while
                        balancing recipe discovery, personalization,
                        and community interaction. The project also
                        allowed me to explore how branding and interface
                        design can work together to create a cohesive
                        product experience.
                    </p>

                </Col>
            </Row>

        </Container>
        </>
    );
}
export default Hausblend;