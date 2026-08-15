import "./Works.css";
import GalleryImage from "../components/GalleryImage";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import house from "../assets/beers_imgs/house.png";
import header from "../assets/beers_imgs/header.png";

//in-game screenshots
import talktocameron from "../assets/beers_imgs/camerontalk.png";
import cards_in_hands from "../assets/beers_imgs/cardhands-removebg-preview.png";
import cards_on_table from "../assets/beers_imgs/cardtable.png";
import open_area from "../assets/beers_imgs/openarea.png";

//early sketches
import card_prototype1 from "../assets/beers_imgs/card_sketch.png";
import card_prototype2 from "../assets/beers_imgs/card_sketch2.png";

//assets
import homepage_select_box from "../assets/beers_imgs/homepage_no_bg.gif";
import map_png from "../assets/beers_imgs/map.png";
import savegame_menu from "../assets/beers_imgs/savegame.png";

//character assets
import main_char from "../assets/beers_imgs/chars/mc_talk.gif";
import holy_ghost from "../assets/beers_imgs/chars/holy_ghost.gif";
import sorority_ghost from "../assets/beers_imgs/chars/sorority.gif";
import polski_kirby from "../assets/beers_imgs/chars/kirby_neut.gif";
import waterboy from "../assets/beers_imgs/chars/waterboy_neut.gif";
//early character sketches
import main_char_sketch from "../assets/beers_imgs/chars/dog_sketch.jpg";
import sorority_ghost_sketch from "../assets/beers_imgs/chars/cameronsketch.jpg";

//gifs
import cardgame_gif from "../assets/beers_imgs/cardgame_gif.gif";
import loadin_gif from "../assets/beers_imgs/load_in.gif";
import menu_gif from "../assets/beers_imgs/menu_gif.gif";


function Beers() {
    return (
    <>

    <Container className="container container-works">

    {/* =========================================
        HEADER
    ========================================= */}

    <Row>
        <Col>
            <h1 className="title title-left">
                Beers Meant Life to Me
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img"
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
                Beers Meant Life to Me is a first-person click iPad role playing game featuring a young Midwestern emo dog
                as he explores the world around him, interacts with characters, and completes card battles to collect
                beers on his mission to save emo.
            </p>

            <p className="title-left">
                Midwest emo is a rock subgenre born out of late 90s Midwest with a small, but dedicated
                fanbase. People like to argue about it on Reddit. 
                I knew I wanted this game to speak to this target audience,
                and created meaningful imagery within a tactile touch interface.
            </p>
            <a
                className="github-link"
                href="https://vimeo.com/1218469667?fl=ip&fe=ec"
            >
                full game walkthrough video →
            </a>
        </Col>

    </Row>

</Container>


{/* =========================================
    GAMEPLAY
========================================= */}

<Container fluid className="px-0">

    <Row className="full-width-row g-0">

        <Col md={6} className="full-row-left">

            <GalleryImage
                src={loadin_gif}
                className="full-row-img rightanch"
                alt="Game load-in and introduction gif"
                caption="Load-in and introduction"
            />

            <p className="title-right">
                Load-in and introduction
            </p>

        </Col>


        <Col md={6} className="full-row-right">

            <GalleryImage
                src={cards_on_table}
                className="full-row-img leftanch"
                alt="Card game interface screenshot"
                caption="Card game interface"
            />

            <p className="title-left">
                Card game interface
            </p>

        </Col>

    </Row>

</Container>


<Container className="container container-works">


    {/* =========================================
        CONCEPT
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                concept
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                I made a game that is deeply tied to the
                people it is made for. Rather than creating a game
                with a broader appeal, I built this world for players
                who connect with the imagery, emotions
                and humors, strange as they all are.
            </p>

            <p className="title-left">
                
            </p>

        </Col>

    </Row>


    {/* =========================================
        EARLY EXPLORATION
    ========================================= */}

    <Row className="masonry-row">

        <Col className="masonry-col">

            <h3 className="title title-left">
                worldbuilding
            </h3>

            <p className="title-left">
                The distorted real world setting became more than just
                a background. I pulled Google street view images of Midwestern
                church parking lots, and called it Philadephia to build this
                familiar, nostalgic environment for our characters.
            </p>

            <GalleryImage
                src={map_png}
                className="masonry-img"
                alt="Map of the town from the player menu"
                caption="Map of the town from the player menu"
            />

        </Col>


        <Col className="masonry-col">

            <GalleryImage
                src={talktocameron}
                className="masonry-img"
                alt="Conversation with a character screenshot"
                caption="Conversation with a character"
            />

            <p className="title-left">
                Cartoon characters are living in this distorted version of our world.
                Some are direct album references, others are just Polish versions of
                licensed Nintendo characters, one is you. Beyond the flannel, there's not
                much special about the dog, he's probably just a version of your teenage self.
            </p>

        </Col>

    </Row>
    <br />


    {/* =========================================
        GAME FLOW
    ========================================= */}


    <Row className="mobile-gallery">

        <Col
            lg={4}
            md={6}
            className="mobile-gallery-col"
        >
            <div className="mobile-gallery-item">

                <GalleryImage
                    src={main_char}
                    className="mobile-gallery-img"
                    alt="Main playable character gif"
                    caption="Main playable character"
                />

                <p className="mobile-gallery-caption">
                    Main playable character
                </p>

            </div>
        </Col>


        <Col
            lg={4}
            md={6}
            className="mobile-gallery-col"
        >
            <div className="mobile-gallery-item">

                <GalleryImage
                    src={polski_kirby}
                    className="mobile-gallery-img"
                    alt="a Polish kuurby character gif"
                    caption="a Polish resemblance to a licensed character"
                />

                <p className="mobile-gallery-caption">
                    a Polish resemblance to a licensed character
                </p>

            </div>
        </Col>


        <Col
            lg={4}
            md={6}
            className="mobile-gallery-col"
        >
            <div className="mobile-gallery-item">

                <GalleryImage
                    src={holy_ghost}
                    className="mobile-gallery-img"
                    alt="the Holy Ghost character gif"
                    caption="the Holy Ghost character"
                />

                <p className="mobile-gallery-caption">
                    the Holy Ghost
                </p>

            </div>
        </Col>

    <hr className="works-divider" />

    </Row>


    {/* =========================================
        GAMEPLAY
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                gameplay
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                Gameplay combines world exploration, character interactions,
                and gambling (card battles). Players move through world locations, talk to the
                characters inhabiting them, and fight battles in order ot collect the mythic beers. 
            </p>

            <p className="title-left">
                The card battle mechanics were designed with the prototype limitations of Figma in mind.
                I was drawn to card games for their ability to be replicated in a 2D space,
                and Euchre is sacred to the Midwest. Through a game of cards, strategy, and luck,
                the player's perspective shifts to the first-person at the card table, a more tactile
                and interactive experience than the visual novel portions.
            </p>

        </Col>

    </Row>


    {/* GAMEPLAY IMAGE */}

    <Row>

        <Col>

            <GalleryImage
                src={cardgame_gif}
                className="full-row-img"
                alt="Intro to the card game gif"
                caption="Intro to the card game"
            />

            <p className="title-left">
                Intro to the card game
            </p>

        </Col>

    </Row>

    {/* =========================================
        ITERATION
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                iteration
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                This game went through a
                significant sketching and prototype iteration phase to align the Midwest emo feeling with an actual gameplay experience.
                A major part of part of the game development process was deciding how to arrange
                information, and determine visual heirarchy between gameplay states. Movements are
                determined by the device, by placing the crucial buttons in the main device areas, and the secondary
                buttons outside facillitated smooth and intuitive interactions. 
            </p>

        </Col>

    </Row>


    <Row className="masonry-row">

        <Col className="masonry-col">

            <GalleryImage
                src={card_prototype1}
                className="masonry-img"
                alt="Early test of card game"
                caption="Early test of card game"
            />

            <p className="title-right">
                Early test of card game
            </p>

        </Col>


        <Col className="masonry-col">

            <GalleryImage
                src={cards_in_hands}
                className="masonry-img"
                alt="Refined interface of card game"
                caption="Refined interface of card game"
            />

            <p className="title-left">
                Refined interface
            </p>

        </Col>

    </Row>


    <hr className="works-divider" />


    {/* =========================================
        IPAD INTERACTION
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                designing for touch
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                Designing for iPad affected my approach to interaction design.
                When the screen is the whole interace, interactions need to feel
                tacticle and immediate. The device places the player in a much
                more personal state from the game. By determining proper information placements,
                drawing attention to intended actions, and using visual allowance systems,
                players could understand what could be clicked, and how to move forward in the game.
            </p>

            <p className="title-left">
                fake
            </p>

        </Col>

    </Row>


    <Row className="masonry-row">

        <Col className="masonry-col">

            <GalleryImage
                src={savegame_menu}
                className="masonry-img"
                alt="Save game popup screenshot"
                caption="Save game popup"
            />

        </Col>

        <Col className="masonry-col">

            <GalleryImage
                src={menu_gif}
                className="masonry-img"
                alt="Menu screen interactions gif"
                caption="Menu screen interactions"
            />

        </Col>

    </Row>


    <hr className="works-divider" />


    
    {/* =========================================
        REFLECTION
    ========================================= */}

    <Row>

        <Col md="auto" style={{ marginRight: "2rem" }}>
            <h2 className="title title-left">
                reflection
            </h2>
        </Col>

        <Col>

            <p className="title-left">
                Designing and prototyping this project gave me the opportunity to
                design an experience where the interface, visual language, gameplay, and
                narrative all needed to align. Designing for iPad interface pushed me to think
                about interaction as a tactile, two-handed action, and consider how forms of touch
                affect the relationship between users and the interface.

            </p>

            <p className="title-left">
                This game was born from some Newport 100s on a porch in a Chicagoan October,
                a hole in a head, and a head in the ceiling fan.
                It targets a very niche audience. Sometimes that can be a drawback, but for a project
                I was really passionate about, and that was able to resonate with others, I feel this
                is a strength of the project. The resulting product is weird and specific, but it is formed
                from a place of understanding and participation. It is an authentic work, and it is for the
                other people out there who can get with an emo dog in a flannel gambling to win beers.
                Even those Godless Philadelphians.
            </p><a
                className="github-link"
                href="https://vimeo.com/1218469667?share=copy"
            >
                full game walkthrough video →
            </a>

            <br />

            <p className="title-right">
                Thank you, Abby.
            </p>
             <p className="title-right">
                .. and Garfield
            </p>

        </Col>

    </Row>

</Container>

    </>
  );
}

export default Beers;