import { Carousel } from "react-bootstrap";
import {AboutMe} from "./AboutMe";
import {Skills} from "./Skills";
import {ECard} from "./ECard";
import {useState} from "react";

export const About = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

  return (
    <Carousel id="about-banner" fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item id="slide">
        <div className="container skill skill-bx">
          <AboutMe />
        </div>
      </Carousel.Item>
      {/* <Carousel.Item id="slide">
      <div className="container">          <Skills />
        </div>
        <Carousel.Caption>
          <h3>Skills slide label</h3>
          <p>Grid of skills and level of expertise in each</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="slide">
      <div className="container">          <ECard />
        </div>
        <Carousel.Caption>
          <h3>ECard slide label</h3>
          <p>
            Includes links to resume, contact page, and linktree
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};
