import '../Research.css'
import BackButton from '../components/BackButton.jsx'
import { useNavigate } from "react-router";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CommercializationMMO() {

  const handlePaperClick = () => {
    const paperURL = "https://docs.google.com/document/d/e/2PACX-1vRGm8Eb0-V0Qj5-2w3qDIWnhJUPEHKGY9GWURFlwq7aZlxm6x1eRvTUs8rApSCxHA/pub";
    window.open(paperURL, "_blank");
  };  

  return (
    <Container className="container container-about">

      <Row>
        <h2>Congrats! You're a Member! Explore more ways to play.</h2>
        <h3>2024</h3>
      </Row>
      <Row>
        <Col>
          <p className='title-right'>A pilot study conducted through participant surverys and interviews on the commercialization of children's virtual world MMO games from 2005-2015. Like Club Penguin.</p>
        </Col>
        <Col className="link-col">
          <h2 onClick={handlePaperClick} className="research-link">this paper.pdf</h2>
        </Col>
      </Row>

      <Row>
        <h3 className="title-left">abstract:</h3>
        <p>
          The virtual worlds style of children’s MMO games flourished between 2005-2015, an era where these games gained millions of players. This study seeks to understand the social experience of child players by conducting a qualitative analysis through semi-structured interviews of adults who played these games as children.
        </p>
      </Row>
      <Row>
        <Col>
          <p className='title-left'>
            Each participant completed a short survey to form basic player profiles, and shared their experience of these games in the following in-depth interview. From the analyzed results of each interview, we highlight three key findings to better understand the social implications and effects of the commercialization tactics which were incorporated into this era of children’s virtual world games.
          </p>
        </Col>
        <Col>
          <p className="title-left">
            We hope this research may support future research to understand the current conditions of how children are affected by the evolving commercialization of the current, and future landscape of video games, leading to games where all child players can engage together freely and equally.
          </p>
        </Col>
      </Row>
     
      

    </Container>
  );
}

export default CommercializationMMO