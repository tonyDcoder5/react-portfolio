import { Card, Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';

/*
TODO:
- create ECard design with QR code
- add professional head shot picture
- add link to resume/contact form/sMplatforms
*/

export const ECard = () => {
  return (
    <>
      <div className="container ecard-container">
        <Card className="bg-dark text-white p-3 mt-3">
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <div className="container resume-container">
                    <a
                      target="_blank"
                      href="https://docs.google.com/document/d/1i2HYPzJTr9496xp7_DOp_uVrn5sxxqeqnToLQ_w1GkU/edit?usp=sharing"
                    >
                      <img
                        className="resume-img"
                        src={require("../assets/img/resume-preview.png")}
                        alt="resume-preview"
                      />
                    </a>
                  </div>
                  <h3>Resume</h3>
                  <p>Click image for Google Docs preview</p>
                </Col>
                <Col>
                  <div className="contact-container">
                    <Row>
                      <div className="contact-card">
                      <Card.Text>
                      Connect with me on any of my favorite platforms below:
                      </Card.Text>
                      </div>
                    </Row>
                    <div className="container link-tree">
                    <Row>
                      <div className="p-2">
                      <a
                        href="https://www.linkedin.com/in/tonydcoder/"
                        target="_blank"
                      >
                        <img src={navIcon1} alt="linkedIn icon" />
                      </a>
                      <a
                        href="https://www.facebook.com/tonydcoder"
                        target="_blank"
                      >
                        <img src={navIcon2} alt="facebook icon" />
                      </a>
                      </div>
                      <div className="p-2">
                      <a
                        href="https://www.instagram.com/tonydcoder5/"
                        target="_blank"
                      >
                        <img src={navIcon3} alt="instagram icon" />
                      </a>
                      <a href="https://github.com/tonyDcoder5" target="_blank">
                        <img
                          src={navIcon4}
                          id="ext-gh-icon"
                          alt="github icon"
                        />
                      </a>
                      </div>
                    </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
