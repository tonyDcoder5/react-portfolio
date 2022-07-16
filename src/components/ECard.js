import { Card, Col, Container, Row } from "react-bootstrap";

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
        <Card className="bg-dark text-white p-3 mt-5">
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
                  <Card.Text>
                    ECard/Quick contact card with links to: Resume, Contact Me
                    form, Social Media LinkTree
                  </Card.Text>
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
