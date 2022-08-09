import { Card, Col, Row } from "react-bootstrap";

export const ECard = () => {

  return (
    <>
      <div className="container ecard-container">
        <Card className="bg-dark text-white p-3 mt-3">
          <Card.Body>
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
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
