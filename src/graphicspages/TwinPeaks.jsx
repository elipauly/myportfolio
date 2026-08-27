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
                Twin Peaks Editorial Zine
            </h1>
        </Col>
    </Row>

    <Row className="row-home">
        <Col>
            <GalleryImage
                src={header}
                className="full-row-img white-fill"
                alt="Zine snippet, featuring the Twin Peaks bird"
                caption="Zine snippet, featuring the Twin Peaks bird"
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
                I created an editorial zine exploring the atmosphere, imagery, and narrative of David Lynch’s 
                Twin Peaks and Fire Walk With Me. I manipulated still frames into layouts to convey the eerie 
                themes and surreal visuals, which become increasingly disruptive as the pages unfold, reflecting 
                the spiraling story of Twin Peaks.
            </p>

            <p className="title-left">
                Text is from meaningful character quotes, and from the Log Lady's 
                monologued vignettes introducing each episode. Typography was a tool which balanced
                between the pages of a dusty book and horror hand lettering. By manipulating and 
                breaking typography, imagery, and layouts, the zine transforms and descends into 
                something more haunting with each page, while maintaining the fundamental cohesion 
                and atmosphere.
            </p>

            <a
                className="github-link"
                href="https://drive.google.com/file/d/1rzv1gL064aoofgBizE-1r8PM93TY98xh/view?usp=drive_link"
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
                alt="Zine pages 20 & 21"
                caption="Zine pages 20 & 21"
            />
        </Row>
</Container>

<Container className="container container-works">
            <Row className="aligned-image-row">

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single1}
                        className="aligned-image-tp"
                        alt="Zine front cover"
                        caption="Zine front cover"
                    />
                    
                </Col>

                <Col md={8} className="aligned-image-col-tp">
                
                    <GalleryImage
                        src={spread2}
                        className="aligned-image-tp"
                        alt="Zine pages 1 & 3"
                        caption="Zine pages 1 & 3"
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
                        alt="Zine back cover"
                        caption="Zine back cover"
                    />
                </Col>

                <Col md={8} className="aligned-image-col-tp">
                    <GalleryImage
                        src={spread1}
                        className="aligned-image-tp"
                        alt="Zine pages 4 & 5"
                        caption="Zine pages 4 & 5"
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
                        alt="Zine pages 12 & 13"
                        caption="Zine pages 12 & 13"
                    />
                </Col>

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single2}
                        className="aligned-image-tp"
                        alt="Zine page 15"
                        caption="Zine page 15"
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
                        alt="Zine pages 10 & 11"
                        caption="Zine pages 10 & 11"
                    />
                </Col>

                <Col md={4} className="aligned-image-col-tp">
                    <GalleryImage
                        src={single3}
                        className="aligned-image-tp"
                        alt="Zine page 16"
                        caption="Zine page 16"
                    />
                </Col>

            </Row>

        </Container>

<Container className="container container-works">
        <Row className="aligned-image-row">
            <GalleryImage
                src={spread6}
                className="aligned-image-tp"
                alt="Zine pages 18 & 19"
                caption="Zine pages 18 & 19"
            />
        </Row>
</Container>

<Container className="container container-works">
    <Row>

        <Col>
            <h2 className="title title-right">
                Meanwhile,
            </h2>

            <a
                className="link"
                href="https://drive.google.com/file/d/1rzv1gL064aoofgBizE-1r8PM93TY98xh/view?usp=drive_link"
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