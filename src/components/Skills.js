import { Card, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


/*
TODO:
- create graph visual with dev skills charted 
- look into animating the data? 

*/

export const Skills = () => {

  const skills = [
    "HTML", "CSS", "JavaScript",
            "ReactJS",
            "Node",
            "Git",
            "Postgres",
            "Express",
            "Knex",
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min:3000},
      items:5
    },
    desktop: {
      breakpoint: {max: 3000, min:1024},
      items:3
    },
    tabley: {
      breakpoint: {max: 1024, min:464},
      items:2
    },
    mobile: {
      breakpoint: {max: 464, min:0},
      items:1
    },
  }

  return (
    <>
    <div className="container skills-container">
      <Card className="bg-dark text-white p-3 mt-5">  
        <Card.Body>
          <Row>
            <Col>
            <div>
              <h2>
                Skills
              </h2>
              <p>
                Sample Text
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="skill-item">
                  <img src={require("../assets/img/meter1.svg")} alt="skill-img" />
                  <h5>Web Development</h5>
                </div>
                <div className="skill-item">
                  <img src={require("../assets/img/meter1.svg")}  alt="skill-img" />
                  <h5>Marketing Consultation</h5>
                </div>
                <div className="skill-item">
                  <img src={require("../assets/img/meter1.svg")}  alt="skill-img" />
                  <h5>Graphic Design</h5>
                </div>
                <div className="skill-item">
                  <img src={require("../assets/img/meter1.svg")}  alt="skill-img" />
                  <h5>Leadership</h5>
                </div>
              </Carousel>
            </div>

            </Col>
          </Row>
        </Card.Body>
      </Card>   
      </div>
    </>
  );
};

/*
          <Card.Text> 
            <h2>Skills</h2>
              <p>Graph or visual layout of my skills and level of expertise/mastery for each:
              </p>




              {skills.map((skill)=>{
                return <p>{skill}</p>
              })}
          </Card.Text>
*/