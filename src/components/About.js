import { Carousel } from "react-bootstrap";
import {AboutMe} from "./AboutMe";
import {Skills} from "./Skills";
import {ECard} from "./ECard";
import {useState} from "react";

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
    <Carousel id="about-banner" fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item id="slide">
        <div id="about" className="container skill skill-bx">
          <AboutMe />
        </div>
      </Carousel.Item>
      <Carousel.Item id="slide">
      <div className="container skill skill-bx">   
      <Skills />
        </div>
      </Carousel.Item>
      <Carousel.Item id="slide">
      <div className="container skill skill-bx">       
      <ECard />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
