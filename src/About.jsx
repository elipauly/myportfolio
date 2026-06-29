import './About.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//images
import about_img from "./assets/images_homepage/hausblendLogo.png";
import li_icon from "./assets/images_homepage/hausblendLogo.png";  
import ig_icon from "./assets/images_homepage/hausblendLogo.png";  
import mail_icon from "./assets/images_homepage/hausblendLogo.png";  


function About() {
  const onResumeClick = () => {
    const pdfUrl = "src/assets/Resume_Pauly.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ElizabethPaulyResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com/in/elizabeth-pauly/";
    window.open(linkedInUrl, "_blank");
  };

  const onEmailClick = () => {
    const email = "elizabeth.s.pauly@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  const onInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/pauly.png/";
    window.open(instagramUrl, "_blank");
  };

  return (
    <Container className="container container-about">
      <Row gx-2>
        <Col>
            <h2 className="title title-left">about</h2>
          </Col>
          
          <Col>
            <img src={mail_icon} alt="Email Icon" onClick={onEmailClick} className="contact-image"/>
            <img src={ig_icon} alt="Instagram Icon" onClick={onInstagramClick} className="contact-image"/>
            <img src={li_icon} alt="linkedIn Icon" onClick={onLinkedInClick} className="contact-image"/>
          
        </Col>
      </Row>
      <Row gx-2>
        <Col>
          <p className="title-left">I am a recent graduate from the University of Iowa, where I earned both my Bachelor’s and Master’s in Informatics, focused with Human-Computer Interaction and graphic design.  I am captivated by street signs and difficult questions. I am a pleasant coworker, and open to work in Berlin. Und ja, ich rede Deutsch. My journal is this color.</p>
        </Col>
        <Col className='resume-col'>
            <h2 onClick={onResumeClick} className="title-right resume-link">my resume.pdf</h2>
        </Col>
      </Row>
      <Row>
        <img src={about_img} alt="project visual" className="about-image"/>
      </Row>
    </Container>
  );
}

export default About