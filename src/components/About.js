import { Carousel } from "react-bootstrap";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
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

      <Tab.Container defaultActiveKey="#aboutMe">
            <div id="about" className="container about-bx">
        <Row>
          <div className="container p-3 about-nav">
          <ListGroup>
            <ListGroup.Item action href="#aboutMe">
              About Me
            </ListGroup.Item>
            <ListGroup.Item action href="#skills">
              Skills
            </ListGroup.Item>
            <ListGroup.Item action href="#resume">
              Resume
            </ListGroup.Item>
          </ListGroup>
          </div>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="#aboutMe">
              <AboutMe />
            </Tab.Pane>
            <Tab.Pane eventKey="#skills">
              <Skills />
            </Tab.Pane>
            <Tab.Pane eventKey="#resume">
              <Resume />
            </Tab.Pane>
          </Tab.Content>
        </Row>
        </div>
      </Tab.Container>
  );
};

 