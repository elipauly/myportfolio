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
                        hausblend is a mobile coffee recipe app designed
                        to help coffee enthusiasts discover, save, and
                        share recipes. Inspired by techno aesthetics, the daily
                        coffee grind is imbued with a bolder flavor. Striking color, angular forms, 
                        and quirky layouts
                        blend into an experience that is memorable, exciting, and caffeinated.
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
                        visual identity
                    </h3>

                    <p className="title-left">
                        The visual direction for Hausblend began with 
                        researching different approaches to coffee and recipe interfaces,
                        and exploring how those could connect with a techno-inspired identity.
                        These explorations helped build the foundation for the visual language within the mobile
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
                        Balancing a striking brand identify with the clarity required for a
                        mobile application was a challenge. By maintaining the foundational
                        layouts and functions that we are familiar with in apps, I could take liberties
                        with unconventional colors and fonts without creating additional friction for a user.
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
                        
                        The app is centered around discovering
                        coffee drinks, viewing individual recipes, rating recipes, and commenting. The
                        vertical screenshots presented here display the progression through the mobile
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
                            alt="Recipe Search screenshot"
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
                        log-in & allowances
                    </h3>

                    <p className="title-left">
                        When researching mobile log-in interfaces, I became familiar with the
                        allowances that need to be accounted for in the authentication process.
                    </p>

                    <GalleryImage
                        src={figma}
                        className="masonry-img gray-fill"
                        alt="Screenshot of Figma log-in prototype"
                        caption="Figma log-in flow prototyping"
                    />
                    <p className="title-right">Figma log-in flow</p>

                </Col>

                <Col className="masonry-col">
                    <GalleryImage
                        src={logingif}
                        className="masonry-img"
                        alt="Hausblend login screen walkthrough gif"
                        caption="Hausblend login screen walkthrough"
                    />
                    <p className="title-left">Log-in walkthrough </p>
                     <p className="title-left">
                        We've all had frustrations with navigating poorly designed log-in pages, 
                        I explored how different "unallowed" actions or user errors would be called out in
                        the app, and how that information could be smoothly displayed.
                    </p>

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
                        Recipe ratings establish trust with users who may be trying
                        something new. Having a more meaningful interaction within the app
                        than solely viewing static recipes was an important
                        addition to make the app feel necessary. Without needing to handle
                        user-to-user interactions, users are able to view content produced by
                        other users and feel a community presence. 
                    </p>
                </Col>
            </Row>


            <Row className="mobile-gallery">

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <GalleryImage
                        src={recipe1}
                        className="mobile-gallery-img"
                        alt="Hausblend recipe page screenshot"
                        caption="Individual coffee recipe"
                    />
                </Col>

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <GalleryImage
                        src={viewcomm2}
                        className="mobile-gallery-img"
                        alt="Hausblend recipe comment screenshot"
                        caption="Viewing recipe comments"
                    />
                </Col>

                <Col lg={4} md={6} className="mobile-gallery-col">
                    <GalleryImage
                        src={subcomm3}
                        className="mobile-gallery-img"
                        alt="Hausblend comment submission screenshot"
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
                        app homepage
                    </h3>
                    <GalleryImage
                        src={homepageloopgif}
                        className="masonry-img"
                        alt="App homepage gif"
                        caption="App homepage walkthrough"
                    />

                </Col>

                <Col className="masonry-col">
                    <h3 className="title title-left">
                        recipe&review
                    </h3>
                    
                    <GalleryImage
                        src={reviewloopgif}
                        className="masonry-img gray-fill"
                        alt="Read and review recipe walkthrough gif"
                        caption="Read and review recipe walkthrough"
                    />
                </Col>

            </Row>

            <hr className="works-divider" />

            <Row>
                <Col md="auto" style={{ marginRight: "2rem" }}>
                    <h1 className="title title-left">
                        reflection
                    </h1>
                </Col>

                <Col>
                    <p className="title-left">
                        Hausblend was among my first projects working with Figma, and creating mobile app design.
                        Diving headfirst into such an unfamiliar project was intimidating, but approaching
                        with a learning perspective let me explore movement within design in a whole new way.
                        Since then, I've grown experienced with Figma and touch-interface principles, and it
                        was through this project that I gained my foundational experience.
                        I had the opportunity to explore how branding and interface
                        can work together to create a product that feels both
                        cohesive and exciting.
                    </p>
                    <a
                            className="github-link"
                            style={{ textAlign: 'left', fontSize: '24px', marginTop: '-.4em', marginBottom: '1em'}}
                            href="#"
                        >
                            full app walkthrough video →
                        </a>
                </Col>
            </Row>

        </Container>
        </>
    );
}
export default Hausblend;