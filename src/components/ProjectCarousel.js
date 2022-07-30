import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

/*
TODO:
  - adjust spacing rules and text-font-alignment-colors
  - add images of project screenshots as preview
  - make links into aesthetic icons

*/

export const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // let arr = [
  //   {
  //     id: 1,
  //     title: "WeLoveMovies WebApp",
  //     img: `../assets/img/weLoveMovies_preview.png`,
  //     desc: "short example desc",
  //     skills: ["HTML ", "CSS ", "React "],
  //     demo: "https://welovemovies-ar-front.herokuapp.com/",
  //     github: "https://github.com/tonyDcoder5/welovemovies-be",
  //   },
  //   {
  //     id: 2,
  //     title: "Decoder/Encoder Ring",
  //     img: `../assets/img/header-img.png`,
  //     desc: "short example desc",
  //     skills: ["HTML", "CSS", "React"],
  //     demo: "https://tonydcoder5.github.io/decoderRing/",
  //     github: "https://github.com/tonyDcoder5/decoderRing",
  //   },
  //   {
  //     id: 3,
  //     title: "Restaurant Reservation App",
  //     img: `../assets/img/header-img.png`,
  //     desc: "short example desc",
  //     skills: ["HTML", "CSS", "React"],
  //     demo: "#",
  //     github: "#",
  //   },
  //   {
  //     id: 4,
  //     title: "EXAMPLE PROJECT",
  //     img: `../assets/img/header-img.png`,
  //     desc: "short example desc",
  //     skills: ["HTML ", "CSS ", "React "],
  //     demo: "#",
  //     github: "https://github.com/tonyDcoder5",
  //   },
  //   {
  //     id: 5,
  //     title: "EXAMPLE PROJECT",
  //     img: `../assets/img/header-img.png`,
  //     desc: "short example desc",
  //     skills: ["HTML ", "CSS ", "React "],
  //     demo: "#",
  //     github: "https://github.com/tonyDcoder5",
  //   },
  // ];

  // const projects = arr.map((project, index)=>{
  //       return <Carousel.Caption>
  //         <h3>{project.title}</h3>
  //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //       </Carousel.Caption>
  //   })

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="project-card">
        <h3>First slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item className="project-card">
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="project-card">
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
