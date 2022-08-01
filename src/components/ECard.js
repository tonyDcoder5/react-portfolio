import { Card, Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";

/*
TODO:
- create ECard design with QR code
- add professional head shot picture
- add link to resume/contact form/sMplatforms
*/

export const ECard = () => {
  const contactLinks = [
    { platform: "Email", icon: "../assets/img/nav-icon1.svg", link: "" },
    {
      platform: "LinkedIn",
      icon: "../assets/img/nav-icon1.svg",
      link: "https://www.linkedin.com/in/tonydcoder/",
    },
    { platform: "GitHub", icon: "../assets/img/nav-icon1.svg", link: "" },
    { platform: "Facebook", icon: "../assets/img/nav-icon1.svg", link: "" },
    { platform: "Instagram", icon: "../assets/img/nav-icon1.svg", link: "" },
  ];

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
              <Col>
                <Row>
                  <div className="contact-container">
                    <h3>
                      Connect with me on any of your favorite platforms below:
                    </h3>
                  </div>
                  <div className="contact-card">
                    <ul>
                      {contactLinks.map((contact, index) => {
                        return (
                          <li key={index}>
                            {/* <span><img src={} alt={`${contact.platform} img`} /></span> */}
                            <a href={contact.link}>
                            {contact.platform}
                              </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
