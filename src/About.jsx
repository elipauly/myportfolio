import './About.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//images
import about_img from "./assets/about/dolphin.png";
import li_icon from "./assets/about/li.png";
import ig_icon from "./assets/about/ig.png"; 
import mail_icon from "./assets/about/mail.png"; 


function About() {
  const onResumeClick = () => {
    const linkResume = "https://paulyweb.s3.us-east-2.amazonaws.com/Elizabeth+Pauly+Designer.pdf";
    window.open(linkResume, "_blank", "noopener,noreferrer");
  };

  const onLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com/in/elizabeth-pauly/";
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const onEmailClick = () => {
    const email = "elizabeth.s.pauly@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  const onInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/pauly.png/";
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Container className="container container-about">
      <Row gx-2>
        <Col>
            <h2 className="title title-left">hello, my friend</h2>
          </Col>
          
          <Col>
            <img src={mail_icon} alt="Email Icon" onClick={onEmailClick} className="contact-image"/>
            <img src={ig_icon} alt="Instagram Icon" onClick={onInstagramClick} className="contact-image"/>
            <img src={li_icon} alt="linkedIn Icon" onClick={onLinkedInClick} className="contact-image"/>
          
        </Col>
      </Row>
      <Row gx-2>
        <Col>
        <p className="title-left">
            elizabeth.s.pauly@gmail.com
          </p>
          <p className="title-left">
            +1 3194917151
          </p>
          <p className="title-left">I recently graduated from the University of Iowa with a Master’s in Informatics, focused in Human-Computer Interaction and graphic design. 
            I am captivated by street signs, difficult questions, and statistics. I am a pleasant coworker, and available for work in NYC & Berlin. Und ja, ich rede Deutsch. My journal is this color.</p>
        </Col>
        <Col className='resume-col'>
            <h2 onClick={onResumeClick} className="title-right resume-link">my resume.pdf</h2>
        </Col>
      </Row>
      <Row gx-2>
        <img src={about_img} alt="project visual" className="about-image"/>
      </Row>
    </Container>
  );
}

export default About