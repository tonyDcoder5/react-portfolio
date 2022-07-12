import { Carousel } from "react-bootstrap";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { ECard } from "./ECard";
import { useState } from "react";

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
    <div className="about about-bx">
      <Carousel
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
      </Carousel>
    </div>
  );
};
