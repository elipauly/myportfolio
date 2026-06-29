import '../Research.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SportsBettingReddit() {
  const handlePaperClick = () => {
    const paperURL = "https://drive.google.com/file/d/1hXQVtjSCVDkdRlsXzIjyrt8lSeizbKvm/view?usp=sharing";
    window.open(paperURL, "_blank");
  };  

  return (
    <Container className="container container-about">
      <Row>
        <h2>Winning Beats Everything, Except More Winning</h2>
        <h3>Pauly, MacKinlay, & Brewer, 2026</h3>
      </Row>
      <Row>
        <Col>
          <p className='title-right'>A social computation study of the warning signs and responses to problem gambling in online sports betting communities on Reddit using BERT-LLM classification.</p>
        </Col>
        <Col className="link-col">
          <h2 onClick={handlePaperClick} className="research-link">this paper.pdf</h2>
        </Col>
      </Row>

      <Row>
        <h3 className="title-left">abstract:</h3>
        <p>
          Since the recent and massive rise of the sports betting industry, social communities have grown in online spaces like Reddit concerning the subject of sports betting. Problem gambling, characterized by persistent and escalating wagering despite negative consequences, is associated with significant financial, psychological, and social harms. What is yet to be understood is how online communities respond when their members display warning signs of these disorders. Do peers recognize distress signals and offer meaningful support? Or do the social dynamics of these communities normalize, reinforce, and amplify harmful behavior?
        </p>
      </Row>
      <Row>
        <Col>
          <p className='title-left'>
            This study investigates these questions by analyzing two prominent sports betting communities on Reddit, r/SportBook and r/SportsBetting, using a fine-tuned Bidirectional Encoder Representations from Transformers (BERT) classifier model to identify posts containing problem gambling language and qualitative analysis to further understand the complexities of these communities and their responses to problem gambling.
          </p>
        </Col>
        <Col>
          <p className="title-left">
            As the sports betting industry continues to grow, and as the online communities active in the industry expand alongside it, we argue that further understanding and addressing these dynamics with empathy becomes an increasingly urgent, and complex task for researchers, platform designers, moderators, and users.
          </p>
        </Col>
      </Row>
     
      

    </Container>
  );
}


export default SportsBettingReddit