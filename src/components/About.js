import { Carousel } from "react-bootstrap";
import {AboutMe} from "./AboutMe";
import {Skills} from "./Skills";
import {ECard} from "./ECard";

export const About = () => {
  return (
    <Carousel id="about-banner" fade>
      <Carousel.Item id="slide">
        <div>
          <AboutMe />
        </div>
        <Carousel.Caption>
          <h3>About slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="slide">
        <div>
          <Skills />
        </div>
        <Carousel.Caption>
          <h3>Skills slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="slide">
        <div>
          <ECard />
        </div>
        <Carousel.Caption>
          <h3>Contact slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
