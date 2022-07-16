import { Carousel } from "react-bootstrap";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { ECard } from "./ECard";
import { useState } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

/*
  TODO:
  - fix carasoul auto scroll to be fixed and only move on user click
  - add content
  - add border rules and spacing for arrows 
*/

export const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container about about-bx">
      <Tab.Container defaultActiveKey="#aboutMe">
        <Row>
          <ListGroup>
            <ListGroup.Item action href="#aboutMe">
              About Me
            </ListGroup.Item>
            <ListGroup.Item action href="#skills">
              Skills
            </ListGroup.Item>
            <ListGroup.Item action href="#eCard">
              ECard
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="#aboutMe">
              <AboutMe />
            </Tab.Pane>
            <Tab.Pane eventKey="#skills">
              <Skills />
            </Tab.Pane>
            <Tab.Pane eventKey="#eCard">
              <ECard />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>

      {/* <Carousel
        id="about about-banner"
        fade
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item id="slide">
          <div>
            <AboutMe />
          </div>
        </Carousel.Item>
        <Carousel.Item id="slide">
          <div>
            <Skills />
          </div>
        </Carousel.Item>
        <Carousel.Item id="slide">
          <div >
            <ECard />
          </div>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};
